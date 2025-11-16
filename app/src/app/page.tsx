import { PATHS } from "@/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="font-stretch-120% text-4xl">Shanero is a slow social platform.</h1>
      <h2 className="font-light text-lg">We value reflection over reaction.</h2>
      <Link href={PATHS.app.auth.signup} className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 font-stretch-200%">I&apos;m in</Link>
    </div>
  );
}
