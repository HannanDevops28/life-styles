import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[--color-bg] text-[--color-fg] transition-colors duration-300">
      <Header />
      <main className="flex-1 w-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
