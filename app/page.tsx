import Image from "next/image";
import {Button} from "@/components/ui/button";
export default function Home() {
  return (
    <div className="justify-center flex min-h-screen items-center">
      <Button className="w-50 h-50 text-4xl"> Hello</Button>
    </div>
  );
}
