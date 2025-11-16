import { Metadata } from "next";
import { Badge } from "@/components/ui/badge";
import { HOME } from "@/constants/home";

export const metadata: Metadata = {
  title: "Shanero — Slow Social Platform. Coming soon.",
  description:
    "Shanero is a text-first credit-based social platform that enforces mindful usage through limits and AI-gated access.",
  keywords: [
    "slow social",
    "attention",
    "credit system",
    "text first",
    "mindful platform",
    "Shanero",
  ],
  openGraph: {
    title: "Shanero — Slow Social Platform",
    description:
      "A deliberate credit-based counter to dopamine platforms. Limits, friction, and an AI gatekeeper that protects your attention.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[linear-gradient(to_bottom,black_0%,black_80%,transparent_100%)]"></div>
      
      <div className="relative">
        <section className="max-w-4xl mx-auto px-6 py-20">

          <header className="mb-32 text-center">
            <Badge className="mb-6 px-4 py-1.5 text-xs font-medium">
              {HOME.header.badge}
            </Badge>
            <h1 className="text-7xl md:text-8xl font-bold tracking-tight text-foreground mb-6">
              {HOME.header.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {HOME.header.subtitle}
            </p>
          </header>


          <div className="space-y-20">

            <section className="border-l-2 border-border pl-8 md:pl-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {HOME.sections.premise.title}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-3xl">
                {HOME.sections.premise.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>


            <section className="border-l-2 border-border pl-8 md:pl-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {HOME.sections.credits.title}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-3xl">
                {HOME.sections.credits.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>


            <section className="border-l-2 border-border pl-8 md:pl-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {HOME.sections.gatekeeper.title}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-3xl">
                {HOME.sections.gatekeeper.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>


            <section className="border-l-2 border-border pl-8 md:pl-12">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                {HOME.sections.textFirst.title}
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed text-lg max-w-3xl">
                {HOME.sections.textFirst.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          </div>


          <section className="mt-32 text-center max-w-2xl mx-auto">
            <p className="text-2xl md:text-3xl font-medium text-foreground leading-relaxed">
              {HOME.closing.statement}
            </p>
          </section>


          <footer className="mt-32 pt-12 border-t border-border text-center">
            <div className="space-y-3">
              <div className="text-2xl font-semibold text-foreground">
                {HOME.footer.title}
              </div>
              <div className="text-muted-foreground">
                {HOME.footer.description}
              </div>
              <Badge className="mt-4 px-4 py-1.5">
                {HOME.footer.badge}
              </Badge>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
