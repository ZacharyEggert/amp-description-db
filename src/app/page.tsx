import AmpFormShell from "./_components/AmpForm";
import { Suspense } from "react";
// import { api } from "~/trpc/server";

export default async function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div>Loading...</div>}>
        <AmpFormShell />
      </Suspense>
    </main>
  );
}
