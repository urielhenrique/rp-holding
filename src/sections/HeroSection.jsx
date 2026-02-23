import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/Icon";

export default function HeroSection() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-primary-600/20 to-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-accent-500/10 to-primary-600/10 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hero-title mb-6"
          >
            Inteligência Artificial que transforma{" "}
            <span className="gradient-text">empresas</span>.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-surface-600 mb-8 md:mb-12"
          >
            Criamos agentes de IA, automações inteligentes e aplicações sob
            medida para impulsionar crescimento real.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => scrollToSection("cta")}
            >
              Falar com especialista
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollToSection("ai-solutions")}
            >
              Explorar soluções
            </Button>
          </motion.div>

          {/* Trust Indicator */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-sm text-surface-500"
          >
            Soluções de IA em produção desde 2020 | Especializados em
            transformação digital
          </motion.p>
        </div>

        {/* Decorative Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 -z-10"
        >
          <div className="relative w-full h-full">
            <div className="absolute inset-0 rounded-full border border-accent-500/20 animate-pulse"></div>
            <div
              className="absolute inset-6 rounded-full border border-primary-600/20 animate-pulse"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute inset-12 rounded-full border border-accent-500/10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
