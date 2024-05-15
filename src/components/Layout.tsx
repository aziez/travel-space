import Navbar from "./Navbar";
import { ScrollArea } from "./ui/scroll-area";

function Layout({ children, className }: any) {
  return (
    <main
      className={`w-full h-full fixed overscroll-none overscroll-y-none overscroll-x-none	overflow-hidden  bg-no-repeat bg-cover ${className}`}
    >
      <Navbar />
      <ScrollArea className="h-full overflow-auto py-4 mobile:pt-0 mobile:pb-8">
        <div className="mx-8">{children}</div>
      </ScrollArea>
    </main>
  );
}

export default Layout;
