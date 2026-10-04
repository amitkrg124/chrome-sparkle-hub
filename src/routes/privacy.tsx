import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";
import extensionIcon from "@/assets/tatkal-extension-icon.png.asset.json";

const STORE_URL =
  "https://chromewebstore.google.com/detail/hgiefnnhpkoikmpbdbehpacopdefjnag?utm_source=item-share-cb";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | IRCTC Tatkal Autofill" },
      { name: "description", content: "Privacy policy for the IRCTC Tatkal Autofill extension." },
    ],
  }),
  component: PrivacyPolicy,
});

function InstallButton({ compact = false }: { compact?: boolean }) {
  return (
    <Button
      asChild
      variant="install"
      size={compact ? "default" : "lg"}
      className={compact ? "text-xs sm:text-sm" : "w-full sm:w-auto"}
    >
      <a
        href={STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Add IRCTC Tatkal Autofill Assistant to Chrome"
      >
        <Chrome aria-hidden="true" /> Add to Chrome <span className="hidden sm:inline">— Free</span>{" "}
        <ArrowUpRight aria-hidden="true" />
      </a>
    </Button>
  );
}

function PrivacyPolicy() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
          <Link
            to="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Tatkal Autofill home"
          >
            <img
              src={extensionIcon.url}
              alt="Tatkal Autofill train icon"
              className="h-10 w-10 rounded-md object-cover"
            />
            <span className="font-display text-[13px] font-extrabold leading-tight text-primary sm:text-base">
              Tatkal<span className="text-orange">Autofill</span>
              <span className="hidden font-sans text-[10px] font-medium text-muted-foreground sm:block sm:text-[11px]">
                for IRCTC bookings
              </span>
            </span>
          </Link>
          <nav
            className="hidden items-center gap-8 text-[13px] font-semibold text-foreground lg:flex"
            aria-label="Main navigation"
          >
            <Link className="transition-colors hover:text-orange" to="/">
              Home
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <InstallButton compact />
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
        <h1 className="font-display text-4xl font-extrabold text-primary sm:text-5xl">
          Privacy Policy
        </h1>
        <div className="mt-8 space-y-6 text-muted-foreground">
          <p>
            This privacy policy applies to the IRCTC Tatkal Autofill Assistant Chrome Extension. We
            are committed to protecting your privacy and ensuring you understand how your
            information is used.
          </p>

          <h2 className="text-2xl font-bold text-primary">Information We Collect</h2>
          <p>
            The extension collects passenger details, payment preferences, and other booking-related
            information you choose to save within the extension settings.
          </p>

          <h2 className="text-2xl font-bold text-primary">How We Store Your Information</h2>
          <p>
            All information saved in the extension is stored locally on your device using Chrome's
            local storage capabilities. We do not transmit your data to external servers or
            third-party services.
          </p>

          <h2 className="text-2xl font-bold text-primary">How We Use Your Information</h2>
          <p>
            The stored information is used exclusively to automatically fill booking forms on the
            IRCTC website to save you time.
          </p>

          <h2 className="text-2xl font-bold text-primary">Third-Party Websites</h2>
          <p>
            The extension interacts with the IRCTC website. Please refer to the official IRCTC
            privacy policy for information on how they handle your data once submitted on their
            platform.
          </p>

          <h2 className="text-2xl font-bold text-primary">Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be reflected in
            the extension's listing on the Chrome Web Store or within this page.
          </p>

          <h2 className="text-2xl font-bold text-primary">Contact Us</h2>
          <p>
            If you have any questions or concerns about this privacy policy, please contact us at{" "}
            <a href="mailto:amitkrg124@gmail.com" className="text-orange hover:underline">
              amitkrg124@gmail.com
            </a>
            .
          </p>
        </div>
      </main>

      <footer className="bg-card">
        <div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-start">
            <div className="flex items-center gap-3">
              <img src={extensionIcon.url} alt="" className="h-9 w-9 rounded-md" />
              <strong className="font-display text-sm text-primary">
                Tatkal<span className="text-orange">Autofill</span>
              </strong>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary">
              <a
                href={STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange"
              >
                Chrome Web Store
              </a>
              <Link to="/privacy" className="hover:text-orange">
                Privacy Policy
              </Link>
              <a href="mailto:amitkrg124@gmail.com" className="hover:text-orange">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-10 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">
            IRCTC Tatkal Autofill Assistant is an independent tool. It is not affiliated with,
            endorsed by or operated by IRCTC or Indian Railways. IRCTC is a trademark of Indian
            Railway Catering and Tourism Corporation.
          </div>
        </div>
      </footer>
    </div>
  );
}
