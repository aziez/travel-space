import Link from "next/link";

const HomeButton = ({ url }) => {
  return (
    <div className="outline  rounded-full hover:outline-[40px] hover:transition-all outline-tf-white ">
      <button className="relative flex items-center justify-center p-5 text-center text-black bg-white rounded-full shadow-xl w-36 h-36">
        <Link
          href={url}
          className="text-black"
          style={{ textDecoration: "none" }}
        >
          <h3
            style={{ fontFamily: "Bellefair", textDecoration: "none" }}
            className="text-base"
          >
            EXPLORE
          </h3>
        </Link>
      </button>
    </div>
  );
};
export default HomeButton;
