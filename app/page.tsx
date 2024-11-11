import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-slate-50">
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-primary">AI Content Generator</h1>
        <p className="text-slate-600 max-w-md mx-auto">
          Create high-quality content instantly using our advanced AI tools. Perfect for blogs, social media, and more.
        </p>
        <div>
          <Link href="/dashboard">
            <Button>Get Started</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
