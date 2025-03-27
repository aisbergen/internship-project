import { SignInButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

const user = await currentUser()
const username = user?.username

export default function Page() {
  return (
    <h1 className="welcome-msg">Welcome to My App, {username}</h1>
  );
}
