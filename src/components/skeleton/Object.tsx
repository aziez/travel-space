import { Skeleton } from "@/components/ui/skeleton";

export function Skeleton3DObject({ size = "150px" }) {
  return (
    <div className="relative w-full flex justify-center items-center">
      {/* Background Circle to simulate a 3D object's base */}
      <div
        className="absolute rounded-full bg-gray-200 opacity-50"
        style={{ width: size, height: size }}
      />

      {/* Central skeleton element to suggest a 3D object */}
      <Skeleton
        className="relative rounded-full bg-gray-300"
        style={{ width: size, height: size, animation: "pulse 1.5s infinite" }}
      />

      <svg
        className="absolute"
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
      >
        <circle cx="50" cy="50" r="40" fill="url(#grad)" />
        <defs>
          <radialGradient id="grad" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="gray" stopOpacity="0.3" />
            <stop offset="100%" stopColor="gray" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
