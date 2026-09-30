// Renders a company/school logo. SVG files live under public/assets/icons/{dir}/,
// named after the `logo` field on the matching content entry (profile.ts, education.ts).

export function EntityLogo({
  dir,
  logo,
  name,
}: {
  dir: "experience" | "education";
  logo: string;
  name: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element -- small static SVG icon, next/image's fixed-size optimization pipeline is unnecessary overhead here
    <img src={`/assets/icons/${dir}/${logo}.svg`} alt={`${name} logo`} />
  );
}
