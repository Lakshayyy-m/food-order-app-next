import { SignedIn, SignedOut,  SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="">
      <h1>My name is lakshay</h1>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton />
      </SignedOut>
    </main>
  );
}
