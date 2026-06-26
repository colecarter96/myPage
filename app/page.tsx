import { CopyButton } from "./components/CopyButton";
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
          <CopyButton
            text="colecartr"
            label="IG @colecartr"
            className="flex min-h-12 w-full items-center justify-center rounded-xs border border-black text-pink-400 active:bg-zinc-100"
          />
          <CopyButton
            text="colecartr"
            label="TikTok @colecartr"
            className="flex min-h-12 w-full items-center justify-center rounded-xs border border-black text-blue-400 active:bg-zinc-100"
          />
          <a
            href="https://youtu.be/2OSkl5hftiU?si=QW5kP6S1k9lLr7TB"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-12 w-full items-center justify-center rounded-xs border border-black text-red-500 active:bg-zinc-100"
          >
            YouTube
          </a>
          {emails.map(({ address, label }) => (
            <CopyEmailButton key={address} email={address} label={label} />
          ))}
        </nav>
      </div>
    </main>
  );
}
