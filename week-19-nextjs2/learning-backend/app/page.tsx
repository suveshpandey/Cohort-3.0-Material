import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center flex-col items-center text-3xl gap-y-4">
      <p>Authentication System</p>
      <div className="flex gap-x-3 text-xl">
        <Link href="/signin" className="bg-slate-500 py-3 px-8 rounded-full">Signin</Link>
        <Link href="/signup" className="bg-slate-500 py-3 px-8 rounded-full">Signup</Link>
      </div>
    </div>
  );
}