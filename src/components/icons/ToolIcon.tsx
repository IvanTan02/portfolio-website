import { Tool } from "@/content/tools";
import Tooltip from "@/components/ui/Tooltip";

// Renders a tool's logo. If `icon` is a { light, dark } pair, both are rendered
// and CSS shows only the one matching the active theme (see .tool-icon-light/dark
// in globals.css) — no JS needed, works with SSR and the theme toggle alike.
export default function ToolIcon({ tool }: { tool: Tool }) {
  const isPair = typeof tool.icon !== "string";

  return (
    <Tooltip label={tool.name}>
      <span className="relative inline-flex items-center justify-center">
        {isPair ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG icon, next/image's fixed-size optimization pipeline is unnecessary overhead here */}
            <img
              className="tool-icon-light"
              src={(tool.icon as { light: string; dark: string }).light}
              alt={tool.name}
            />
            {/* eslint-disable-next-line @next/next/no-img-element -- small static SVG icon, next/image's fixed-size optimization pipeline is unnecessary overhead here */}
            <img
              className="tool-icon-dark"
              src={(tool.icon as { light: string; dark: string }).dark}
              alt={tool.name}
            />
          </>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- small static SVG icon, next/image's fixed-size optimization pipeline is unnecessary overhead here
          <img src={tool.icon as string} alt={tool.name} />
        )}
      </span>
    </Tooltip>
  );
}
