import { Skeleton3DObject } from "@/components/skeleton/Object";
import { SkeletonTabs } from "@/components/skeleton/Tabs";

function DestinationPage() {
  return (
    <div className=" h-screen flex  flex-col justify-center items-center  mt-10 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row  ">
      <div className="basis-1/2 text-white flex flex-col   items-start justify-start md:text-start lg:text-start xl:text-start 2xl:text-start m-4">
        <div className="container my-11">
          <h2 className="text-2xl font-subheading">
            <b>01</b> Pick Your Destination
          </h2>

          <div className="font-span mt-4 text-wrap text-lg">
            <Skeleton3DObject size="500px" />
          </div>
        </div>
      </div>

      <div className="basis-1/2  h-full w-full flex items-center justify-center ">
        <SkeletonTabs />
      </div>
    </div>
  );
}

export default DestinationPage;
