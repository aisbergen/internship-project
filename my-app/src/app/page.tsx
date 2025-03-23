import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";


export default function Page() {
  return (
    <h1>Welcome to My App, sign in</h1>
  );
}
