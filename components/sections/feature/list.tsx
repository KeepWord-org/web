import { ReactNode } from "react";
import {
  FileCheckIcon,
  UsersIcon,
  EyeIcon,
  MinusIcon,
} from "lucide-react";

import { Section } from "../../ui/section";
import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import type { FeatureConfig } from "@/config/sites/types";

interface FeatureListProps extends FeatureConfig {
  className?: string;
}

/**
 * Icon mapping for features based on title
 * Icons are defined here instead of config to avoid JSX in TypeScript config files
 */
const getFeatureIcon = (featureTitle: string): ReactNode => {
  const iconMap: Record<string, ReactNode> = {
    // New simplified titles
    'Keep promises, not posts': <FileCheckIcon className="size-5 stroke-1" />,
    'Small groups work better': <UsersIcon className="size-5 stroke-1" />,
    'Show what happens, help fix problems': <EyeIcon className="size-5 stroke-1" />,
    'No likes, no tricks': <MinusIcon className="size-5 stroke-1" />,
    // Legacy titles (backward compatibility)
    'Commitment over content': <FileCheckIcon className="size-5 stroke-1" />,
    'Human-scale by design': <UsersIcon className="size-5 stroke-1" />,
    'Consequence without punishment': <EyeIcon className="size-5 stroke-1" />,
    'No attention economy': <MinusIcon className="size-5 stroke-1" />,
  };
  
  return iconMap[featureTitle] || null;
};

/**
 * Feature List Component
 * Uses Item components for consistent styling (same as Items section)
 * Documentary/institutional styling - no glow, no badges
 */
export default function FeatureList({
  title,
  description,
  features = [],
  className,
}: FeatureListProps) {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <Section className={className}>
      <div className="max-w-container mx-auto flex flex-col items-center gap-6 sm:gap-20">
        {/* Header */}
        {(title || description) && (
          <div className="flex flex-col items-center gap-4 text-center sm:gap-6">
            {title && (
              <h2 className="max-w-[560px] text-center text-3xl leading-tight font-semibold sm:text-5xl sm:leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-md text-muted-foreground max-w-[600px] font-medium text-balance sm:text-xl">
                {description}
              </p>
            )}
          </div>
        )}

        {/* Items Grid - using Item components for consistent styling */}
        {features && features.length > 0 && (
          <div className="grid auto-rows-fr grid-cols-2 gap-0 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4 w-full">
            {features.map((feature, index) => {
              const icon = feature.icon || getFeatureIcon(feature.title);
              return (
                <Item key={index}>
                  <ItemTitle className="flex items-center gap-2">
                    <ItemIcon>{icon}</ItemIcon>
                    {feature.title}
                  </ItemTitle>
                  <ItemDescription>{feature.description}</ItemDescription>
                </Item>
              );
            })}
          </div>
        )}
      </div>
    </Section>
  );
}

