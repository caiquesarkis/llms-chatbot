import { Heading, Select } from "@radix-ui/themes";
import { useTheme } from "next-themes";
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
          This is the template for Nextjs with Radix UI
        </Heading>
        <Heading size="4">Set up with next-theme</Heading>
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
      </div>
    </>
  );
}