import Navbar from "./Navbar";

function Layout({ children, className }: any) {
  return (
    <main
      className={`w-full h-full absolute overflow-hidden  bg-no-repeat bg-cover ${className}`}
    >
      <Navbar />
      <div className="relative h-full">{children}</div>
    </main>
  );
}

export default Layout;
