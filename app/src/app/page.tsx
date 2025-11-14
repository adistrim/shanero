import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <h1 className="font-stretch-120% text-4xl">Shanero is a slow social platform.</h1>
      <h2 className="font-light text-lg">We value reflection over reaction.</h2>
      <Button className="font-stretch-200%">I&apos;m in</Button>
    </div>
  );
}
