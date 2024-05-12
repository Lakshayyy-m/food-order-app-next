import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-light-1">
      <SignIn path="/sign-in" />
    </main>
  );
};

export default SignInPage;
