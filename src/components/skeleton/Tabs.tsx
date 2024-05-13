import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonTabs() {
  return (
    <div className="space-y-3 p-4 w-[100%] block ">
      {/* Skeleton for the tab headers */}
      <div className="flex space-x-4 mb-4">
        <Skeleton className="h-8 w-24 rounded-lg" /> {/* Tab 1 */}
        <Skeleton className="h-8 w-24 rounded-lg" /> {/* Tab 2 */}
        <Skeleton className="h-8 w-24 rounded-lg" /> {/* Tab 3 */}
      </div>

      {/* Skeleton for the tab content */}
      <div className="space-y-4">
        <Skeleton className="h-6 w-3/4 rounded-lg" /> {/* Title or heading */}
        <Skeleton className="h-6 w-1/2 rounded-lg" />{" "}
        {/* Subtitle or other text */}
        <Skeleton className="h-48 w-full rounded-lg" />{" "}
        {/* Large content area */}
        <Skeleton className="h-6 w-2/3 rounded-lg" /> {/* Additional text */}
      </div>
    </div>
  );
}
