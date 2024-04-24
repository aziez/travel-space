import Navbar from "./Navbar";

function Layout({ children, className }: any) {
  return (
    <main
      className={`w-full h-full absolute bg-no-repeat bg-cover ${className}`}
    >
      {children}
    </main>
  );
}

export default Layout;
