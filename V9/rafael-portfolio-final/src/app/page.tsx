import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Section } from "@/components/section";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Projects } from "@/components/projects";
import { Experience } from "@/components/experience";
import { Certifications, Education } from "@/components/certs-edu";
import { Recommendations } from "@/components/recommendations";
import { ContentSection } from "@/components/content";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { FloatingActions } from "@/components/floating-actions";
import { TechDock } from "@/components/tech-dock";

export default function Page() {
  return (
    <main>
      <Navbar />
      <div aria-hidden="true" className="h-[72px]" />
      <Hero />

      <Section id="servicos" eyebrow="O que eu faço" title="Serviços">
        <Services />
      </Section>

      <Section id="stack" eyebrow="Stack" title="AWS & Tecnologias">
        <Stack />
      </Section>

      <Section id="projetos" eyebrow="Na prática" title="Projetos & Cases">
        <Projects />
      </Section>

      <Section id="experiencia" eyebrow="Trajetória" title="Experiência">
        <Experience />
      </Section>

      <Section id="certificacoes" eyebrow="Credenciais" title="Certificações & Cursos">
        <Certifications />
      </Section>

      <Section id="formacao" eyebrow="Base" title="Formação acadêmica">
        <Education />
      </Section>

      <Section id="recomendacoes" eyebrow="Prova social" title="Recomendações">
        <Recommendations />
      </Section>

      <Section id="conteudo" eyebrow="Mídia" title="Conteúdo">
        <ContentSection />
      </Section>

      <Section id="contato" eyebrow="Contato" title="Fale comigo">
        <Contact />
      </Section>

      <Footer />
      <TechDock />
      <FloatingActions />
    </main>
  );
}
