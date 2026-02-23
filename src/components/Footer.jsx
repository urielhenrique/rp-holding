import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-white py-16 md:py-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/logo.svg"
                alt="RP Holding Logo"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold">RP HOLDING</span>
            </div>
            <p className="text-primary-300 text-sm">
              Inteligência Artificial que transforma empresas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4">Soluções</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li>
                <a
                  href="#ai-solutions"
                  className="hover:text-white transition-colors"
                >
                  Agentes de IA
                </a>
              </li>
              <li>
                <a
                  href="#ai-solutions"
                  className="hover:text-white transition-colors"
                >
                  Automações
                </a>
              </li>
              <li>
                <a
                  href="#ai-solutions"
                  className="hover:text-white transition-colors"
                >
                  Integrações
                </a>
              </li>
              <li>
                <a
                  href="#ai-solutions"
                  className="hover:text-white transition-colors"
                >
                  Análise de Dados
                </a>
              </li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-primary-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contato
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidade
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <p className="text-primary-300 text-sm mb-4">
              <a
                href="tel:+5531998343236"
                className="hover:text-white transition-colors"
              >
                +55 (31) 99834-3236
              </a>
            </p>
            <p className="text-primary-300 text-sm">
              <a
                href="mailto:contato@rpholding.com.br"
                className="hover:text-white transition-colors"
              >
                contato@rpholding.com.br
              </a>
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-300 text-sm">
              © {currentYear} RP Holding. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm text-primary-300">
              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="hover:text-white transition-colors">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
