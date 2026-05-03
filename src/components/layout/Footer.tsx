export function Footer() {
  return (
    <footer className="border-t border-slate-800 py-8 text-center">
      <p className="text-sm text-slate-500">
        © {new Date().getFullYear()} Mohammad W. &nbsp;·&nbsp; Built with{' '}
        <span className="text-accent">React</span> &amp; Tailwind CSS
      </p>
    </footer>
  );
}
