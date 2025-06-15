// // components/LayoutWrapper.tsx
// 'use client';

// import { usePathname } from "next/navigation";
// import { SidebarProvider } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/Component/SideBar/SideBar";
// import NavBar from "@/Component/NavBar/NavBar";
// import Footer from "@/Component/Footer/Footer";

// export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
  
//   // Define routes where you don't want sidebar and navbar
//   const authRoutes = ['/signin', '/signup'];
//   const isAuthRoute = authRoutes.includes(pathname);

//   if (isAuthRoute) {
//     return <main>{children}</main>;
//   }

//   return (
//     <SidebarProvider className="border border-red-600">
//       <AppSidebar />
//       <div className="w-full">
//         <NavBar />
//         <main style={{ minHeight: "calc(100vh - 110px)" }}>{children}</main>
//         <Footer />
//       </div>
//     </SidebarProvider>
//   );
// }



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