import { motion } from "framer-motion";
import Container from "../components/Container";
import Button from "../components/Button";
import { ArrowRightIcon } from "../components/Icon";

export default function CTASection() {
  return (
    <section id="cta" className="section-spacing relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-accent-500/20 to-transparent rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-primary-600/20 to-transparent rounded-full blur-3xl -z-10"></div>
      </div>

      <Container>
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl font-bold text-surface-900 mb-6">
            Pronto para levar sua empresa para o{" "}
            <span className="gradient-text">próximo nível</span>?
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-surface-600 mb-10 max-w-3xl mx-auto">
            Fale com nossos especialistas em IA e descubra como podemos
            transformar seu negócio. Agendar uma conversa é rápido e sem
            compromisso.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                // Link para whatsapp ou formulário
                window.location.href =
                  "https://wa.me/5531998343236?text=Olá!%20Gostaria%20de%20conversar%20sobre%20as%20soluções%20de%20IA%20da%20RP%20Holding.";
              }}
            >
              Solicitar Diagnóstico Estratégico
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => {
                window.location.href = "tel:+5531998343236";
              }}
            >
              Ligar Agora
            </Button>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="flex flex-col md:flex-row gap-8 justify-center items-center text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent-500/20 flex items-center justify-center">
                <span className="text-xl">📱</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-surface-500">WhatsApp & Telefone</p>
                <p className="text-lg font-semibold text-surface-900">
                  <a
                    href="tel:+5531998343236"
                    className="hover:text-accent-500 transition-colors"
                  >
                    +55 (31) 99834-3236
                  </a>
                </p>
              </div>
            </div>

            <div className="hidden md:block w-px h-12 bg-surface-200"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-600/20 flex items-center justify-center">
                <span className="text-xl">✉️</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-surface-500">Email</p>
                <p className="text-lg font-semibold text-surface-900">
                  <a
                    href="mailto:contato@rpholding.com.br"
                    className="hover:text-accent-500 transition-colors"
                  >
                    contato@rpholding.com.br
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Trust Message */}
          <motion.p
            className="mt-12 text-sm text-surface-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            ⏰ Tempo de resposta: em torno de 2 horas | 🔒 Seus dados são 100%
            confidenciais
          </motion.p>
        </motion.div>
      </Container>
    </section>
  );
}
