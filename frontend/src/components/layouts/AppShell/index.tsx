import Navbar from "../Navbar";
import Footer from "../Footer";

const AppShell = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
        <Navbar/>
            {children}
        <Footer/>
    </main>
  );
}

export default AppShell;