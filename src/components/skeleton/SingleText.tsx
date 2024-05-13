import { Skeleton } from "@/components/ui/skeleton";

export function SingleText() {
  return (
    <div className="space-y-3 p-4 ">
      <Skeleton className=" h-10 w-[60%]" />
    </div>
  );
}
