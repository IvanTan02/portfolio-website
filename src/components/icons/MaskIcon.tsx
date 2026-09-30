// Shared renderer for single-color SVGs shown via CSS mask (so they inherit
// currentColor instead of carrying their own fixed color). Used by both social/
// hyperlink icons and generic glyphs — anywhere an icon is just a silhouette.

export function MaskIcon({ src, className = "mask-icon" }: { src: string; className?: string }) {
  return (
    <span
      className={className}
      style={{ maskImage: `url(${src})`, WebkitMaskImage: `url(${src})` }}
      aria-hidden="true"
    />
  );
}
