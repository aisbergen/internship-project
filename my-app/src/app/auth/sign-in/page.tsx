import { useAuth, SignIn } from "@clerk/nextjs"; // ✅ Import `SignIn`
import { useRouter } from "next/navigation";

export default function SignInPage() {


  return <SignIn />;
}
