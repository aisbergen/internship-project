"use client";

import { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SignIn } from "@clerk/nextjs";

export default function HomePage() {
  const { isSignedIn, isLoaded } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      router.replace("/auth-redirect"); // Redirect to protected page
    }
  }, [isSignedIn, isLoaded, router]);

  if (!isLoaded) return <p>Loading...</p>; // Avoid flickering before Clerk loads

  return <SignIn afterSignInUrl="/auth-redirect" />; // Show SignIn if not signed in
}