export function Footer() {
  return (
    <footer className="border-t border-[var(--glass-border)] glass-card">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Michael Wheeler. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
