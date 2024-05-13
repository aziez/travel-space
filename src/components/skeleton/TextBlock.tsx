import { Skeleton } from "@/components/ui/skeleton";

export function TextBlock() {
  return (
    <div className="space-y-3 p-4 w-[100%] block  ">
      {/* Heading Skeleton */}
      <Skeleton className="h-6 w-[60%]" /> {/* Represents a main heading */}
      {/* Subheading Skeleton */}
      <Skeleton className="h-5 w-[40%]" /> {/* Represents a subheading */}
      {/* Description Lines Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" /> {/* Line 1 of description */}
        <Skeleton className="h-4 w-[80%]" /> {/* Line 2 of description */}
        <Skeleton className="h-4 w-[90%]" /> {/* Line 3 of description */}
      </div>
    </div>
  );
}
