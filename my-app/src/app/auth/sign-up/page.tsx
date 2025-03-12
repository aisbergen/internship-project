

import { useAuth, SignUp } from "@clerk/nextjs"; // ✅ Import `SignUp`
import { useRouter } from "next/navigation";

export default function SignUpPage() {


  return <SignUp />;
}
