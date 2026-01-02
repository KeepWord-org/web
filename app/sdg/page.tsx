import ContentPageLayout from "@/components/layouts/content-page";

export default async function SDGPage() {
  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          SDG Alignment
        </h1>
        <div className="flex flex-col gap-8 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord mainly helps with:
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              SDG 16 — Peace, Justice and Strong Institutions
            </h2>
            <p className="text-md text-muted-foreground font-medium sm:text-xl">
              by helping build trust and responsibility in small groups—where real groups and institutions start.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
              Also helps with:
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-md text-muted-foreground font-medium sm:text-xl">
              <li>
                <strong className="text-foreground">SDG 4 — Quality Education</strong> (helping people be responsible online, work together, be good citizens)
              </li>
              <li>
                <strong className="text-foreground">SDG 3 — Well-being</strong> (less social pressure and less being overwhelmed by attention-seeking online)
              </li>
            </ul>
          </div>

          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord focuses on fixing how systems work, not blaming individual people.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

