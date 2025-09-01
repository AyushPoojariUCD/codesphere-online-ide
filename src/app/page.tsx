// app/page.tsx (Home page)
import { SignedIn, SignedOut, SignInButton, SignUpButton, SignOutButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
    <div className="flex flex-col items-center justify-center flex-1 gap-4">
      <h1 className="text-4xl font-bold">Welcome to Code Sphere</h1>
    </div>
    </>
  );
}
