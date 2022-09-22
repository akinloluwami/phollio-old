import { SiGoogle, SiApple, SiGithub, SiTwitter } from "react-icons/si";
import { withApple, withGitHub, withGoogle, withTwitter } from "./actions";

const strategies = [
  {
    platform: "Google",
    icon: <SiGoogle />,
    action: withGoogle,
  },
  {
    platform: "GitHub",
    icon: <SiGithub />,
    action: withGitHub,
  },
  {
    platform: "Twitter",
    icon: <SiTwitter />,
    action: withTwitter,
  },
  {
    platform: "Apple",
    icon: <SiApple />,
    action: withApple,
  },
];

export default strategies;
