import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";

export default function TechnologySection() {
  const technologies = [
    { name: "React", description: "Interfaces dinâmicas e responsivas" },
    { name: "Node.js", description: "Backend escalável e performático" },
    { name: "APIs REST", description: "Integração robusta entre sistemas" },
    { name: "Integrações", description: "Conectando seus dados" },
    { name: "Cloud", description: "Infraestrutura global confiável" },
    { name: "IA/ML", description: "Machine Learning em produção" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="technology"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 via-transparent to-accent-50/20 -z-10"></div>

      <Container>
        <SectionTitle>Stack tecnológico moderno</SectionTitle>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-xl border border-surface-200 bg-white/50 backdrop-blur hover:border-accent-500/50 hover:bg-white transition-all duration-300 text-center"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              <h4 className="font-bold text-surface-900 mb-2 text-lg">
                {tech.name}
              </h4>
              <p className="text-xs md:text-sm text-surface-500">
                {tech.description}
              </p>
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-primary-600 to-accent-500 rounded-full group-hover:w-full transition-all duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Description */}
        <motion.div
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary-900/90 to-primary-800/90 backdrop-blur border border-primary-700/50 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Infraestrutura pronta para escala
          </h3>
          <p className="text-lg text-primary-100 leading-relaxed">
            Utilizamos as tecnologias mais modernas para garantir performance,
            segurança e escalabilidade. Sua solução de IA foi construída para
            crescer com seu negócio.
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
