import Image from "next/image";
import { Container } from "react-bootstrap";

const TechContent = () => {
  return (
    <Container className="w-full min-h-full">
      <Image
        src={"/assets/technology/background-technology-desktop.jpg"}
        alt="bg-technology"
        width={10000}
        height={10000}
        className="absolute inset-0 hidden object-cover w-full h-full object-start -z-10 md:block"
      />
      <Image
        src={"/assets/technology/background-technology-tablet.jpg"}
        alt="bg-technology"
        width={10000}
        height={10000}
        className="absolute inset-0 hidden object-cover w-full h-full object-start -z-10 md:block lg:hidden"
      />
      <Image
        src={"/assets/technology/background-technology-mobile.jpg"}
        alt="bg-technology"
        width={10000}
        height={10000}
        className="absolute inset-0 block object-cover w-full h-full md:hidden object-start -z-10 "
      />
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col w-full md:flex-row lg:flex-row">
          <div className="items-end flex-1 p-4 text-white md:text-left lg:text-left ">
            <h3 className="text-base font-extralight">
              SO YOU WANT TO TRAVEL TO
            </h3>
            <h1 className="font-serif text-8xl">SPACE</h1>
            <p className=" mt-8 text-sm">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          {/* Second Column */}
          <div className="py-24 flex-1 flex justify-center items-center space-x-8">
            Kontent Dua
          </div>
        </div>
      </div>
    </Container>
  );
};
export default TechContent;
