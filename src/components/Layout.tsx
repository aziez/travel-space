import Navbar from "./Navbar";
import { ScrollArea } from "./ui/scroll-area";

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  scrolled?: boolean;
}

function Layout({ children, className = "", scrolled = true }: LayoutProps) {
  return (
    <main
      className={`w-full h-full fixed overflow-hidden bg-no-repeat bg-cover ${className}`}
    >
      <Navbar />
      {scrolled ? (
        <ScrollArea className="h-full py-4 mobile:pt-0 mobile:pb-8 rounded overflow-hidden shadow-[0_2px_10px] shadow-black">
          {children}
        </ScrollArea>
      ) : (
        <>{children}</>
      )}
    </main>
  );
}

export default Layout;
