import { Code } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Code className="h-6 w-6 text-accent" />
            <span className="text-lg font-semibold">Vale Tech Talks</span>
          </div>

          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Vale Tech Talks. Feito com{" "}
            <span className="text-accent">&hearts;</span> pela comunidade.
          </p>
        </div>
      </div>
    </footer>
  );
}
