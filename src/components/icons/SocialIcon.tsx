// Icon-only social links for the sidebar. SVG source files live in
// public/assets/icons/hyperlinks/ — add a new key here to support another platform.

import { MaskIcon } from "@/components/icons/MaskIcon";

const ICON_DIR = "/assets/icons/hyperlinks";

export const SOCIAL_ICON_KEYS = ["github", "linkedin", "instagram", "email"] as const;

export type SocialIconKey = (typeof SOCIAL_ICON_KEYS)[number];

export function SocialIcon({ iconKey }: { iconKey: SocialIconKey }) {
  return <MaskIcon src={`${ICON_DIR}/${iconKey}.svg`} className="social-icon" />;
}
