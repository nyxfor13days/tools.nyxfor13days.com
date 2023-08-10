"use client";

import { Button } from "./button";

interface Props {
  link: string;
  icon: React.ReactNode;
}

export function SocialButton({ link, icon }: Props) {
  return (
    <Button
      variant="secondary"
      size="icon"
      onClick={() => window.open(link, "_blank")}
    >
      {icon}
    </Button>
  );
}
