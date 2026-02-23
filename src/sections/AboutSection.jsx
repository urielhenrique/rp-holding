import { motion } from "framer-motion";
import Container from "../components/Container";
import { SparklesIcon } from "../components/Icon";

export default function AboutSection() {
  const values = [
    {
      title: "Inovação Contínua",
      description: "Sempre na vanguarda da tecnologia e IA",
    },
    {
      title: "Foco em Resultados",
      description: "Sua transformação digital é nossa prioridade",
    },
    {
      title: "Expertise Técnica",
      description: "Equipe especializada com anos de experiência",
    },
    {
      title: "Parceria Real",
      description: "Somos extensão da sua equipe",
    },
  ];

  return (
    <section id="about" className="section-spacing relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/20 to-transparent -z-10"></div>

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
                Sobre a <span className="gradient-text">RP Holding</span>
              </h2>
              <p className="text-lg text-surface-600 leading-relaxed mb-6">
                Somos uma holding de tecnologia especializada em transformação
                digital através de Inteligência Artificial. Desde 2020, ajudamos
                empresas a escalar o seu negócio com soluções inovadoras e
                estratégicas.
              </p>
              <p className="text-lg text-surface-600 leading-relaxed mb-8">
                Nossa missão é aplicar IA de forma inteligente e prática,
                criando agentes automatizados, processos inteligentes e sistemas
                que realmente fazem diferença no seu dia a dia.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-gradient-to-br from-primary-50/50 to-accent-50/50 border border-primary-200/50 hover:border-accent-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-bold text-surface-900 mb-2 flex items-center gap-2">
                    <SparklesIcon className="w-5 h-5 text-accent-500" />
                    {value.title}
                  </h4>
                  <p className="text-sm text-surface-600">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual */}
          <motion.div
            className="relative h-96 md:h-full min-h-96"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-600 to-accent-500 opacity-10 blur-2xl"></div>

            <div className="relative h-full flex flex-col justify-center items-center">
              <div className="relative w-64 h-64">
                {/* Orbiting elements */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary-600/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="absolute inset-8 rounded-full border border-accent-500/30"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Center Circle */}
                <div className="absolute inset-20 rounded-full bg-gradient-to-br from-primary-600 to-accent-500 shadow-2xl shadow-accent-500/50 flex items-center justify-center">
                  <span className="text-4xl">🚀</span>
                </div>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-0 left-0 w-12 h-12 rounded-lg bg-accent-500 opacity-80"
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 90, 180],
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-lg bg-primary-600 opacity-60"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -90, -180],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Stats */}
            <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
              <motion.div
                className="p-4 rounded-lg bg-white/80 backdrop-blur border border-surface-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="text-2xl font-bold gradient-text">6+</div>
                <div className="text-xs text-surface-600">Anos no Mercado</div>
              </motion.div>
              <motion.div
                className="p-4 rounded-lg bg-white/80 backdrop-blur border border-surface-200 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="text-2xl font-bold gradient-text">50+</div>
                <div className="text-xs text-surface-600">
                  Projetos Entregues
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
