import { CopyEmailButton } from "./components/CopyEmailButton";

const emails = [
  { address: "colescarter@gmail.com", label: "Personal Email" },
  { address: "the.twobrothers.studios@gmail.com", label: "Bryce and I's Email" },
];

export default function Home() {
  return (
    <main className="flex min-h-dvh flex-col items-center px-5 py-12 sm:px-6 sm:py-16">
      <div className="flex w-full max-w-sm flex-col items-center gap-10">
        <header className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-black">
            Cole Carter
          </h1>
          <p className="text-base text-zinc-600">Alchemist</p>
        </header>

        <nav className="flex w-full flex-col gap-3 pt-30" aria-label="Links">
          <a
            href="https://instagram.com/colecartr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full active:bg-zinc-100 items-center justify-center rounded-xs border border-black text-pink-400"
          >
            Instagram
          </a>
          <a
            href="https://www.tiktok.com/@colecartr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full items-center justify-center rounded-xs border border-black text-blue-400"
          >
            TikTok
          </a>
          {emails.map(({ address, label }) => (
            <CopyEmailButton key={address} email={address} label={label} />
          ))}
        </nav>
      </div>
    </main>
  );
}
