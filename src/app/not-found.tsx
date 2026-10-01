import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-dvh max-w-[1180px] items-center justify-center max-[780px]:flex-col">
      <div className="px-6 py-10 text-center">
        <p className="mb-2 font-mono text-[0.72rem] uppercase tracking-[0.08em] text-steel">404</p>
        <h1 className="mb-4 text-balance font-fraunces text-[clamp(1.5rem,3vw,1.9rem)] font-semibold">
          Page not found
        </h1>
        <Link
          className="inline-block rounded-lg border border-ink bg-ink px-[18px] py-2.5 font-mono text-[0.83rem] text-paper transition-all hover:border-signal hover:bg-signal"
          href="/"
        >
          Back home
        </Link>
      </div>
    </div>
  );
}
