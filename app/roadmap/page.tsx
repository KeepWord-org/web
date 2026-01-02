import ContentPageLayout from "@/components/layouts/content-page";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "@/components/ui/item";
import {
  BuildingIcon,
  UsersIcon,
  CodeIcon,
  BookOpenIcon,
  XIcon,
} from "lucide-react";

export default async function RoadmapPage() {
  const roadmapItems = [
    {
      title: "Q1",
      description: "Set up the foundation, write draft rules, reach out to potential partners",
      icon: <BuildingIcon className="size-5 stroke-1" />,
    },
    {
      title: "Q2",
      description: "First test with a school or team, figure out how to measure if it works",
      icon: <UsersIcon className="size-5 stroke-1" />,
    },
    {
      title: "Q3",
      description: "Test with 2–3 more groups, improve the rules, build simple tools if needed",
      icon: <CodeIcon className="size-5 stroke-1" />,
    },
    {
      title: "Q4",
      description: "Share what we learned, create a toolkit others can use, plan for 2027",
      icon: <BookOpenIcon className="size-5 stroke-1" />,
    },
  ];

  const outOfScopeItems = [
    {
      title: "Feeds, likes, going viral",
      description: "No ways to keep people scrolling or trying to go viral",
      icon: <XIcon className="size-5 stroke-1" />,
    },
    {
      title: "Making money from attention",
      description: "No business models based on getting people's attention or collecting their data",
      icon: <XIcon className="size-5 stroke-1" />,
    },
    {
      title: "Influencer marketing",
      description: "No growth marketing or systems that rank people by how visible they are",
      icon: <XIcon className="size-5 stroke-1" />,
    },
  ];

  return (
    <ContentPageLayout>
      <div className="flex flex-col gap-8">
        <h1 className="text-center text-3xl font-semibold sm:text-5xl">
          Roadmap
        </h1>
        <div className="flex flex-col gap-12 max-w-[640px] mx-auto">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
            {roadmapItems.map((item, index) => (
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
          
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold text-foreground sm:text-2xl text-center">
              Out of scope
            </h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4">
              {outOfScopeItems.map((item, index) => (
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
          </div>
        </div>
      </div>
    </ContentPageLayout>
  );
}

