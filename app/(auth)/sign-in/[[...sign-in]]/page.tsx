import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen w-full h-full flex justify-center items-center">
      <SignIn />
    </div>
  );
}
