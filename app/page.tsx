export default function Home() {
  return (
    <main className="flex min-h-full flex-col items-center px-6 py-16">
      <div className="flex w-full max-w-md flex-col items-center gap-8">
        {/* Profile section — add your name, bio, and avatar here */}
        <header className="flex flex-col items-center gap-3 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Your Name</h1>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            A short bio goes here
          </p>
        </header>

        {/* Links — add your link buttons here */}
        <nav className="flex w-full flex-col gap-3" aria-label="Links">
          {/* Example link:
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full rounded-full border border-zinc-200 px-6 py-3 text-center text-sm font-medium transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900"
          >
            My Website
          </a>
          */}
        </nav>
      </div>
    </main>
  );
}
