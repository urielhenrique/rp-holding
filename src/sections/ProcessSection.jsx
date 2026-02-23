import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import { CheckIcon } from "../components/Icon";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico Estratégico",
      description:
        "Entendemos sua empresa, desafios e oportunidades. Identificamos onde IA pode gerar maior impacto.",
      highlights: [
        "Análise de processos",
        "Identificação de oportunidades",
        "ROI estimado",
      ],
    },
    {
      number: "02",
      title: "Arquitetura e Implementação",
      description:
        "Desenvolvemos a solução sob medida, integrando com seus sistemas. Foco em qualidade e segurança.",
      highlights: [
        "Design system",
        "Desenvolvimento robusto",
        "Integração seamless",
      ],
    },
    {
      number: "03",
      title: "Escala com Inteligência",
      description:
        "Otimizamos continuamente com dados reais. Sua solução cresce e se aprimora com o tempo.",
      highlights: [
        "Monitoramento 24/7",
        "Otimizações contínuas",
        "Suporte especializado",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="process" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent-50/20 via-transparent to-primary-50/20 -z-10"></div>

      <Container>
        <SectionTitle>Como trabalhamos</SectionTitle>

        <motion.div
          className="space-y-12 md:space-y-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={itemVariants}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute -bottom-16 left-8 w-0.5 h-16 bg-gradient-to-b from-accent-500 to-primary-600"></div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                {/* Number */}
                <div className="md:col-span-2">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-3xl font-bold text-white shadow-lg shadow-accent-500/30">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-surface-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-lg text-surface-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Highlights */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {step.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full bg-accent-500 flex items-center justify-center flex-shrink-0">
                          <CheckIcon className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-surface-700 font-medium">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
