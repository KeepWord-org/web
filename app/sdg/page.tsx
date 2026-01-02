import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  ShieldIcon,
  GraduationCapIcon,
  HeartIcon,
} from "lucide-react";

export default async function SDGPage() {
  const primarySDG = {
    title: "SDG 16 — Peace, Justice and Strong Institutions",
    description: "by helping build trust and responsibility in small groups—where real groups and institutions start.",
    icon: <ShieldIcon className="size-5 stroke-1" />,
  };

  const secondarySDGs = [
    {
      title: "SDG 4 — Quality Education",
      description: "helping people be responsible online, work together, be good citizens",
      icon: <GraduationCapIcon className="size-5 stroke-1" />,
    },
    {
      title: "SDG 3 — Well-being",
      description: "less social pressure and less being overwhelmed by attention-seeking online",
      icon: <HeartIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          SDG Alignment
        </h1>
        <div className="flex flex-col gap-12 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord mainly helps with:
          </p>

          <div className="flex flex-col gap-4">
            <Item>
              <ItemTitle className="flex items-center gap-2">
                <ItemIcon>{primarySDG.icon}</ItemIcon>
                {primarySDG.title}
              </ItemTitle>
              <ItemDescription>{primarySDG.description}</ItemDescription>
            </Item>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl text-center">
              Also helps with:
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {secondarySDGs.map((sdg, index) => (
                <Item key={index}>
                  <ItemTitle className="flex items-center gap-2">
                    <ItemIcon>{sdg.icon}</ItemIcon>
                    {sdg.title}
                  </ItemTitle>
                  <ItemDescription>{sdg.description}</ItemDescription>
                </Item>
              ))}
            </div>
          </div>

          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord focuses on fixing how systems work, not blaming individual people.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

