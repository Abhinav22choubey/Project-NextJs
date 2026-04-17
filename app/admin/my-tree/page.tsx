import { Button } from "@/components/ui/button";
import { Brush, ShareIcon } from "lucide-react";


const page = () => {
  return (
    <section className="flex flex-col gap-6 px-4 py-6">
      <div className="flex flex-row items-center justify-between w-full">
        <div className="flex flex-row justify-center items-center gap-3">
          
          <Button
            variant="outline"
            size="default"
            className="gap-2 bg-transparent"
          >
            <Brush size={16} />
            Design
          </Button>

          <Button
            variant="default"
            size="default"
            className="gap-2 "
          >
            <ShareIcon size={16} />
            Share
          </Button>

        </div>
      </div>
    </section>
  );
};

export default page;