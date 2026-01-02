"use client";

import Link from "next/link";
import * as React from "react";
import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../../ui/navigation-menu";

interface NavbarLink {
  text: string;
  href: string;
}

interface KeepWordNavigationProps {
  logo?: ReactNode;
  name?: string;
  homeUrl?: string;
  links?: NavbarLink[];
}

export default function KeepWordNavigation({
  logo,
  name = "KeepWord",
  homeUrl = "/",
  links = [],
}: KeepWordNavigationProps) {
  // Split links into groups for the dropdown
  const foundationLinks = links.filter(
    (link) =>
      link.href.includes("/mission") ||
      link.href.includes("/vision") ||
      link.href.includes("/problem") ||
      link.href.includes("/approach")
  );
  
  const governanceLinks = links.filter(
    (link) =>
      link.href.includes("/governance") ||
      link.href.includes("/sdg") ||
      link.href.includes("/roadmap")
  );

  const ListItem = ({
    className,
    title,
    children,
    href,
    ...props
  }: React.ComponentProps<"a"> & { title: string; href?: string }) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <Link
            href={href || "#"}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
              className
            )}
            {...props}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
            {children && (
              <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                {children}
              </p>
            )}
          </Link>
        </NavigationMenuLink>
      </li>
    );
  };

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Foundation</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <Link
                    className="from-muted/30 to-muted/10 flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                    href={homeUrl}
                  >
                    {logo}
                    <div className="mt-4 mb-2 text-lg font-medium">{name}</div>
                    <p className="text-muted-foreground text-sm leading-tight">
                      A non-profit foundation exploring alternatives to social media systems.
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              {foundationLinks.map((link, i) => (
                <ListItem key={i} href={link.href} title={link.text}>
                  {link.href === "/mission" && "Our mission and purpose"}
                  {link.href === "/vision" && "Our vision for the future"}
                  {link.href === "/problem" && "The problem we're addressing"}
                  {link.href === "/approach" && "How we work and what we do"}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Governance</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {governanceLinks.map((link, i) => (
                <ListItem key={i} href={link.href} title={link.text}>
                  {link.href === "/governance" && "How we operate and make decisions"}
                  {link.href === "/sdg" && "UN Sustainable Development Goals alignment"}
                  {link.href === "/roadmap" && "Planned work and timeline"}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
