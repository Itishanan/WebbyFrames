import Footer from "../components/footer";
import NavBar from "../components/navbar";

export default function RootLayout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
