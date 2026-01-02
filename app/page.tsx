import { getSiteConfig } from "@/lib/site-config";
import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Footer from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/illustration";
import Navbar from "@/components/sections/navbar/default";
import { LayoutLines } from "@/components/ui/layout-lines";

/**
 * Page composition: Only renders sections that exist in config
 * This enforces mission constraints - sections not in config cannot be rendered
 */
export default async function Home() {
  const config = await getSiteConfig();
  
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <LayoutLines />
      <Navbar {...config.sections.navbar} />
      <Hero {...config.sections.hero} />
      
      {/* Text sections - optional, only if defined */}
      {config.sections.text && (
        <section className="px-4 py-12">
          <div className="max-w-container mx-auto">
            {config.sections.text.title && (
              <h2 className="text-2xl font-semibold mb-4">{config.sections.text.title}</h2>
            )}
            {typeof config.sections.text.content === 'string' ? (
              <div className="prose">{config.sections.text.content}</div>
            ) : (
              config.sections.text.content
            )}
          </div>
        </section>
      )}
      
      {/* Content sections - only render if defined in config */}
      {config.sections.faq && (
        <FAQ {...config.sections.faq} />
      )}
      
      {/* CTA - only for local domain (keepword.nl, max 1) */}
      {config.sections.cta && (
        <CTA {...config.sections.cta} />
      )}
      
      <Footer {...config.sections.footer} />
      
      {/* 
        EXPLICITLY FORBIDDEN (mission constraints):
        These sections exist in components/sections/ but are NOT allowed:
        
        ❌ Pricing - commercieel, verboden
        ❌ Stats - engagement metrics, verboden
        ❌ Logos - "trusted by" social proof, verboden
        ❌ Testimonials - social proof, verboden
        ❌ Social-proof - verboden
        ❌ Items - te product-achtig, verboden
        ❌ Bento-grid - te marketing-achtig, verboden
        ❌ Carousel - engagement pattern, verboden
        ❌ Feature - can be added if needed, but not by default
        ❌ Tabs - can be added if needed, but not by default
        ❌ Gallery - can be added if needed, but not by default
      */}
    </main>
  );
}
