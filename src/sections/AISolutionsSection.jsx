import { motion } from "framer-motion";
import Container from "../components/Container";
import SectionTitle from "../components/SectionTitle";
import {
  RobotIcon,
  AnalyticsIcon,
  IntegrateIcon,
  CloudIcon,
} from "../components/Icon";

export default function AISolutionsSection() {
  const solutions = [
    {
      icon: RobotIcon,
      title: "Atendimento Automatizado Inteligente",
      description:
        "Chatbots e assistentes virtuais com IA que entendem contexto e resolvem problemas reais.",
    },
    {
      icon: AnalyticsIcon,
      title: "Análise de Dados com IA",
      description:
        "Insights automáticos e previsões precisas a partir dos seus dados.",
    },
    {
      icon: CloudIcon,
      title: "Agentes Internos de Produtividade",
      description:
        "Automação de processos repetitivos para sua equipe trabalhar no que importa.",
    },
    {
      icon: IntegrateIcon,
      title: "IA Integrada ao Seu Sistema",
      description:
        "Conectamos IA aos seus sistemas existentes sem interrupções.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section
      id="ai-solutions"
      className="section-spacing relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent -z-10"></div>

      <Container>
        <SectionTitle>Agentes de IA sob medida para seu negócio</SectionTitle>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 rounded-2xl border border-surface-200 bg-white hover:border-accent-500/50 card-hover"
                variants={itemVariants}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-accent-500/30 transition-all duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold text-surface-900 mb-3">
                  {solution.title}
                </h3>

                <p className="text-surface-600 leading-relaxed">
                  {solution.description}
                </p>

                <div className="mt-6 pt-6 border-t border-surface-100 flex items-center text-accent-500 font-semibold">
                  <span>Saiba mais</span>
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 12h14"
                    />
                  </svg>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
