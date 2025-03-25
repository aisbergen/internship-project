import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { createUser } from '@/actions/userActions';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;
  if (!SIGNING_SECRET) {
    throw new Error('Missing SIGNING_SECRET in .env');
  }

  // Get headers
  const headerPayload = await headers()
  const svix_id = headerPayload.get('svix-id')
  const svix_timestamp = headerPayload.get('svix-timestamp')
  const svix_signature = headerPayload.get('svix-signature')
  
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Missing Svix headers', { status: 400 });
  }

  const payload = await req.text(); // ✅ must use raw body
  const wh = new Webhook(SIGNING_SECRET);

  let evt: WebhookEvent;
  try {
    evt = wh.verify(payload, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('❌ Webhook signature verification failed:', err);
    return new Response('Invalid signature', { status: 400 });
  }

  const eventType = evt.type;

  if (eventType === 'user.created') {
    const user = evt.data;

    const email = user.email_addresses?.[0]?.email_address;
    const fullname = `${user.first_name ?? ''} ${user.last_name ?? ''}`.trim();

    if (!email || !user.id) {
      return new Response('Invalid user payload', { status: 400 });
    }

    try {
      await createUser({
        clerkId: user.id,
        email,
        fullname,
        type: 'user',
        stripeId: '', // 🔁 Set this later with Stripe integration
      });

      return NextResponse.json({ message: '✅ User synced to DB' }, { status: 201 });
    } catch (err) {
      console.error('❌ Failed to save user:', err);
      return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
  }

  return NextResponse.json({ message: 'No handler for this event' }, { status: 200 });
}
