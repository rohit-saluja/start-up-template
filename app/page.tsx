import Header from "./components/header";
import Hero from "./components/hero";
import Features from "./components/features";
import Pricing from "./components/pricing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      <Header />
      <main className="pt-20">
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
