import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonImage({
  aspectRatio = "1/1",
  width = "100%",
  height = "auto",
}) {
  const aspectRatioClasses: any = {
    "1/1": "aspect-square",
    "16/9": "aspect-w-16 aspect-h-9",
    "4/3": "aspect-w-4 aspect-h-3",
  };

  return (
    <div
      className={`w-[${width}] h-[${height}] ${aspectRatioClasses[aspectRatio]}`}
    >
      <Skeleton className="w-full h-full rounded-lg" />
    </div>
  );
}
