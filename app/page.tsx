import { getSiteConfig } from "@/lib/site-config";
import CTA from "@/components/sections/cta/default";
import FAQ from "@/components/sections/faq/default";
import Footer from "@/components/sections/footer/default";
import Hero from "@/components/sections/hero/illustration";
import Navbar from "@/components/sections/navbar/default";
import FeatureList from "@/components/sections/feature/list";
import { LayoutLines } from "@/components/ui/layout-lines";
import { Section } from "@/components/ui/section";

/**
 * Page composition: Only renders sections that exist in config
 * This enforces mission constraints - sections not in config cannot be rendered
 */
export default async function Home() {
  const config = await getSiteConfig();
  
  return (
    <main className="bg-background text-foreground min-h-screen w-full">
      <Navbar {...config.sections.navbar} />
      <Hero {...config.sections.hero} />
      
      {/* Text blocks (plural) - render array of text sections */}
      {config.sections.textBlocks && config.sections.textBlocks.length > 0 && (
        <>
          {config.sections.textBlocks.map((textBlock, index) => (
            <Section key={index}>
              <div className="max-w-container mx-auto flex flex-col items-center gap-6">
                {textBlock.title && (
                  <h2 className="text-center text-3xl font-semibold sm:text-5xl">
                    {textBlock.title}
                  </h2>
                )}
                {typeof textBlock.content === 'string' ? (
                  <p className="text-md text-muted-foreground max-w-[640px] font-medium text-balance text-center sm:text-xl">
                    {textBlock.content}
                  </p>
                ) : (
                  <div className="max-w-[640px] text-center">
                    {textBlock.content}
                  </div>
                )}
              </div>
            </Section>
          ))}
        </>
      )}
      
      {/* Text (singular) - backward compatibility */}
      {!config.sections.textBlocks && config.sections.text && (
        <Section>
          <div className="max-w-container mx-auto flex flex-col items-center gap-6">
            {config.sections.text.title && (
              <h2 className="text-center text-3xl font-semibold sm:text-5xl">
                {config.sections.text.title}
              </h2>
            )}
            {typeof config.sections.text.content === 'string' ? (
              <p className="text-md text-muted-foreground max-w-[640px] font-medium text-balance text-center sm:text-xl">
                {config.sections.text.content}
              </p>
            ) : (
              <div className="max-w-[640px] text-center">
                {config.sections.text.content}
              </div>
            )}
          </div>
        </Section>
      )}
      
      {/* Features (plural) - render array of feature sections */}
      {config.sections.features && config.sections.features.length > 0 && (
        <>
          {config.sections.features.map((featureConfig, index) => (
            <FeatureList key={index} {...featureConfig} />
          ))}
        </>
      )}
      
      {/* Feature (singular) - backward compatibility */}
      {!config.sections.features && config.sections.feature && (
        <FeatureList {...config.sections.feature} />
      )}
      
      {/* FAQ */}
      {config.sections.faq && (
        <FAQ {...config.sections.faq} />
      )}
      
      {/* Gallery */}
      {config.sections.gallery && (
        // Gallery component will be imported when needed
        null
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
        ❌ Tabs - can be added if needed, but not by default
      */}
    </main>
  );
}
