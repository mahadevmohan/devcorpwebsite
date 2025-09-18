"use client";

export default function PublicEnv() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
  const env = process.env.NEXT_PUBLIC_ENV;
  return (
    <div className="rounded-md border p-4 text-sm">
      <div><span className="font-semibold">Site:</span> {siteName}</div>
      <div><span className="font-semibold">Env:</span> {env}</div>
    </div>
  );
}
