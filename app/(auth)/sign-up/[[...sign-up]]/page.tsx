import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center bg-light-1">
      <SignUp path="/sign-up" />
    </main>
  );
};

export default SignUpPage;
