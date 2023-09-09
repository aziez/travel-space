import { Container } from "react-bootstrap";
import CrewTabs from "./CrewTabs";
import Image from "next/image";

const CrewContent = () => {
  return (
    <Container className="w-full min-h-screen">
      <Image
        src={"/assets/destination/background-destination-desktop.jpg"}
        alt="bg-home"
        width={10000}
        height={10000}
        className="absolute inset-0 hidden object-cover w-full h-full object-start -z-10 md:block"
      />
      <Image
        src={"/assets/destination/background-destination-tablet.jpg"}
        alt="bg-home"
        width={10000}
        height={10000}
        className="absolute inset-0 hidden object-cover w-full h-full object-start -z-10 md:block lg:hidden"
      />
      <Image
        src={"/assets/destination/background-destination-mobile.jpg"}
        alt="bg-home"
        width={10000}
        height={10000}
        className="absolute inset-0 block object-cover w-full h-full md:hidden object-start -z-10 "
      />
      <div className="flex items-start mt-5">
        <h3 className="mx-4 text-sm text-gray-400 sm:text-2xl"> 02 </h3>
        <h3 className="text-sm text-white sm:text-2xl">MEET YOUR CREW</h3>
      </div>
      <CrewTabs />
    </Container>
  );
};
export default CrewContent;
