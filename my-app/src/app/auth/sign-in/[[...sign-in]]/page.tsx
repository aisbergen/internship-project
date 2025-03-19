import { useAuth, SignIn } from "@clerk/nextjs"; 
import { useRouter } from "next/navigation";

export default function SignInPage() {
  return <SignIn />;
}
