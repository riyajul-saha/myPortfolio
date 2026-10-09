import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border overflow-x-clip">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-8">
        <span>© 2026 {profile.name}. All rights reserved.</span>
        <span className="font-semibold text-foreground">{profile.initials}</span>
      </div>
    </footer>
  );
}
