import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pb-20 md:pb-0">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;