import { motion } from "framer-motion";
import Container from "../components/Container";

export default function ImpactSection() {
  const metrics = [
    {
      value: "+40%",
      label: "Aumento de Produtividade",
      icon: "📈",
    },
    {
      value: "-60%",
      label: "Redução de Tarefas Manuais",
      icon: "⚡",
    },
    {
      value: "100%",
      label: "Soluções Personalizadas",
      icon: "🎯",
    },
  ];

  const CounterComponent = ({ value }) => {
    const numericValue = parseInt(value.replace(/\D/g, ""));

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold gradient-text"
        >
          {value}
        </motion.span>
      </motion.div>
    );
  };

  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600/5 via-accent-500/5 to-primary-600/5 -z-10"></div>

      <Container>
        {/* Main Message */}
        <motion.div
          className="text-center mb-20 md:mb-28"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-surface-900 mb-4">
            Empresas que usam IA{" "}
            <span className="gradient-text">crescem mais rápido</span>.
          </h2>
          <p className="text-lg md:text-xl text-surface-600 max-w-2xl mx-auto">
            Números reais de clientes que transformaram seu negócio com nossas
            soluções.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center p-8 md:p-12 rounded-2xl border border-surface-200 bg-white/60 backdrop-blur hover:border-accent-500/50 hover:bg-white transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="text-5xl md:text-6xl mb-4">{metric.icon}</div>
              <CounterComponent value={metric.value} />
              <p className="text-lg text-surface-600 mt-4 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action Message */}
        <motion.div
          className="mt-20 md:mt-28 text-center p-8 md:p-12 rounded-2xl bg-gradient-to-r from-primary-900 via-primary-800 to-accent-900 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Esses números podem ser seus também
          </h3>
          <p className="text-primary-100 text-lg max-w-2xl mx-auto">
            Fale com um especialista e descubra como IA pode transformar sua
            empresa.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
