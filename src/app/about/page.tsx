import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-2xl font-semibold text-primary">About Me</h1>
      <p className="mt-2 text-secondary">Full about page coming soon.</p>
      <Link
        href="/"
        className="mt-8 text-sm font-medium text-accent transition-colors hover:text-primary"
      >
        Back to home
      </Link>
    </main>
  );
}
