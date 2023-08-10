import { FaGithub } from "react-icons/fa";
import { GITHUB_DEV_URL } from "@/lib/constants";
import { SocialButton } from "./ui/social-button";

export function Header() {
  return (
    <header className="h-14 flex items-center justify-between gap-1 border-b-2 border-border">
      <h1 className="uppercase text-sm font-medium">Nyxfor13days - Tools</h1>
      <SocialButton link={GITHUB_DEV_URL} icon={<FaGithub />} />
    </header>
  );
}
