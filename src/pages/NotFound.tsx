import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      {/* Decorative background (theme-safe) */}
      <div className="pointer-events-none absolute inset-0">
        {/* soft spotlight */}
        <div className="absolute left-1/2 top-[-10rem] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
        {/* subtle grid */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,hsl(var(--foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground))_1px,transparent_1px)] [background-size:64px_64px]" />
      </div>

      <section className="relative mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 py-16">
        <div className="w-full rounded-2xl border border-border bg-card/60 p-8 shadow-sm backdrop-blur sm:p-12">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">
              You hit a dead end:{" "}
              <span className="font-medium text-foreground">
                {location.pathname}
              </span>
            </span>
          </div>

          {/* Big 404 */}
          <div className="flex items-end gap-4">
            <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl">
              404
            </h1>
            <div className="mb-2 h-10 w-10 animate-bounce rounded-xl border border-border bg-muted grid place-items-center">
              <span className="text-primary text-lg">↗</span>
            </div>
          </div>

          <p className="mt-4 text-lg text-muted-foreground">
            Oops — that page doesn’t exist. It may have been moved, renamed, or
            never created.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary/40"
            >
              Back to Home
            </Link>

            <button
              type="button"
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center rounded-xl border border-border bg-background px-5 py-2.5 text-sm font-semibold transition hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary/30"
            >
              Go Back
            </button>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 text-sm font-semibold text-primary underline-offset-4 transition hover:underline"
            >
              Contact Me
            </Link>
          </div>

          {/* Helpful links */}
          <div className="mt-10 border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              Try one of these instead:
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { label: "Projects", to: "/projects" },
                { label: "About", to: "/about" },
                { label: "Blog", to: "/blog" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-full border border-border bg-muted px-4 py-2 text-sm text-foreground transition hover:bg-muted/70 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-8 text-xs text-muted-foreground">
            Tip: If you typed the URL manually, double-check the spelling.
          </p>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
