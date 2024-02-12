"use client";

import Welcome from "@/components/Welcome";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <Theme>
        <Welcome />
      </Theme>
    </ThemeProvider>
  )
};