import { Separator } from "@radix-ui/react-dropdown-menu";
import { Button, Heading, Select } from "@radix-ui/themes";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="w-full h-screen flex gap-4 flex-col justify-center items-center">
        <Heading as="h1" size="9" className="mb-8">
          AI Portal
        </Heading>
        <Heading size="4">Next chatbot experience</Heading>
        <Select.Root value={theme} onValueChange={setTheme}>
          <Select.Trigger placeholder="Pick a Theme" />
          <Select.Content>
            <Select.Group>
              <Select.Item value="system">System</Select.Item>
              <Select.Item value="dark">Dark</Select.Item>
              <Select.Item value="light">Light</Select.Item>
            </Select.Group>
          </Select.Content>
        </Select.Root>

        <Button variant="ghost">
          <Link href="/chat">{"Let's Go!"}</Link>
        </Button>
      </div>
    </>
  );
}