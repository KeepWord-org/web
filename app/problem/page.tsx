import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  MessageSquareIcon,
  TrendingDownIcon,
  AlertCircleIcon,
  UsersIcon,
} from "lucide-react";

export default async function ProblemPage() {
  const problemItems = [
    {
      title: "Talking becomes about looking good",
      description: "People say things to get attention and reactions, not because they mean it",
      icon: <MessageSquareIcon className="size-5 stroke-1" />,
    },
    {
      title: "Promises don't cost anything",
      description: "People make promises easily because nothing happens if they don't keep them",
      icon: <TrendingDownIcon className="size-5 stroke-1" />,
    },
    {
      title: "Being responsible becomes just an opinion",
      description: "Instead of doing what you said, it's about how things look to others",
      icon: <AlertCircleIcon className="size-5 stroke-1" />,
    },
    {
      title: "Trust breaks down in small groups",
      description: "This is where real groups start—when small groups lose trust, everything falls apart",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Problem Statement
        </h1>
        <div className="flex flex-col gap-8 max-w-[640px] mx-auto">
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            Social media is built to keep people scrolling and reacting. Getting reactions is not the same as saying something meaningful.
          </p>
          
          <p className="text-md text-foreground font-medium sm:text-xl text-center">
            When getting attention and reactions is what gets rewarded:
          </p>
          
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            {problemItems.map((item, index) => (
              <Item key={index}>
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                {item.description && (
                  <ItemDescription>{item.description}</ItemDescription>
                )}
              </Item>
            ))}
          </div>
          
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            This isn't about being against technology. It's a design problem: when tools reward certain behaviors, people behave that way.
          </p>
          <p className="text-md text-muted-foreground font-medium text-balance sm:text-xl">
            KeepWord exists to explore tools that help words mean something again, without building another system that just wants your attention.
          </p>
        </div>
      </div>
    </ContentPageLayout>
  );
}

