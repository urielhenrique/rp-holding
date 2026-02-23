import { useEffect } from "react";

/**
 * SEO Component
 * Gerencia estrutura de dados JSON-LD
 */
export default function SEO({
  title = "RP Holding - Inteligência Artificial que Transforma Empresas",
  description = "Criamos agentes de IA, automações inteligentes e aplicações sob medida para impulsionar crescimento real.",
}) {
  useEffect(() => {
    // Atualizar título
    document.title = title;

    // Atualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Scroll para o topo
    window.scrollTo(0, 0);
  }, [title, description]);

  return (
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "RP Holding",
        description:
          "Holding de tecnologia especializada em Inteligência Artificial",
        url: "https://rp-holding.com",
        sameAs: [
          "https://linkedin.com/company/rp-holding",
          "https://github.com/rp-holding",
        ],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "Sales",
          telephone: "+55-31-99834-3236",
          email: "contato@rpholding.com.br",
          areaServed: "BR",
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: "BR",
        },
      })}
    </script>
  );
}
