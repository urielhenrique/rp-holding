import { useState } from "react";
import Container from "./Container";
import Button from "./Button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-surface-200/50">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img
              src="/logo.svg"
              alt="RP Holding Logo"
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <span className="text-lg md:text-xl font-bold text-surface-900 hidden sm:inline">
              RP HOLDING
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("ai-solutions")}
              className="text-surface-600 hover:text-surface-900 transition-colors font-medium"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-surface-600 hover:text-surface-900 transition-colors font-medium"
            >
              Tecnologia
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-surface-600 hover:text-surface-900 transition-colors font-medium"
            >
              Como Trabalhamos
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-surface-600 hover:text-surface-900 transition-colors font-medium"
            >
              Sobre
            </button>
          </nav>

          {/* CTA Mobile and Desktop */}
          <div className="flex items-center gap-4">
            <Button
              variant="primary"
              size="md"
              className="hidden md:flex"
              onClick={() => scrollToSection("cta")}
            >
              Conversar
            </Button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            >
              <div
                className={`w-6 h-0.5 bg-surface-900 transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-surface-900 transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}
              ></div>
              <div
                className={`w-6 h-0.5 bg-surface-900 transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("ai-solutions")}
              className="text-left text-surface-600 hover:text-surface-900 py-2 px-4 rounded-lg hover:bg-surface-100"
            >
              Soluções
            </button>
            <button
              onClick={() => scrollToSection("technology")}
              className="text-left text-surface-600 hover:text-surface-900 py-2 px-4 rounded-lg hover:bg-surface-100"
            >
              Tecnologia
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-left text-surface-600 hover:text-surface-900 py-2 px-4 rounded-lg hover:bg-surface-100"
            >
              Como Trabalhamos
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-surface-600 hover:text-surface-900 py-2 px-4 rounded-lg hover:bg-surface-100"
            >
              Sobre
            </button>
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => scrollToSection("cta")}
            >
              Conversar
            </Button>
          </nav>
        )}
      </Container>
    </header>
  );
}
