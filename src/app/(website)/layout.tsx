import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/Component/SideBar/SideBar";
import NavBar from "@/Component/NavBar/NavBar";
import Footer from "@/Component/Footer/Footer";

export default function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <div className="w-full">
        <NavBar />
        <main style={{ minHeight: "calc(100vh - 110px)" }}>{children}</main>
        <Footer />
      </div>
    </SidebarProvider>
  );
}