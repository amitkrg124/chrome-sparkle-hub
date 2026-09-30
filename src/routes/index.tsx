import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronDown, Chrome, Clock3, CreditCard, FileText, LockKeyhole, MapPin, Menu, MousePointer2, ShieldCheck, Sparkles, Ticket, TrainFront, Users, Wallet, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import extensionIcon from "@/assets/tatkal-extension-icon.png.asset.json";
import journeyImage from "@/assets/extension-journey.png.asset.json";
import passengersImage from "@/assets/extension-passengers.png.asset.json";
import settingsImage from "@/assets/extension-settings.png.asset.json";

const STORE_URL = "https://chromewebstore.google.com/detail/hgiefnnhpkoikmpbdbehpacopdefjnag?utm_source=item-share-cb";
const TITLE = "IRCTC Tatkal Autofill — Book Tatkal Tickets Faster | Free Chrome Extension";
const DESCRIPTION = "Fill IRCTC booking forms in under 5 seconds. Save passenger details, select payment preferences and skip insurance with a free Chrome extension for faster Tatkal booking.";

const faqs = [
  { q: "How can I book Tatkal tickets faster on IRCTC?", a: "Prepare before the booking window opens. Save your passenger details and preferences in the extension, then use Autofill on the IRCTC booking form. It fills supported fields in under 5 seconds, so you can focus on checking your details, completing any CAPTCHA and finishing payment. Ticket availability and confirmation still depend on IRCTC." },
  { q: "Does the extension solve CAPTCHA automatically?", a: "No. This extension fills form fields only. You must solve any CAPTCHA yourself and complete the booking on IRCTC." },
  { q: "What time does Tatkal booking open?", a: "Tatkal booking generally opens at 10:00 AM IST for AC classes and 11:00 AM IST for non-AC classes, one day before the train's departure from its originating station. Check IRCTC for current rules and availability." },
  { q: "Can I save details for multiple passengers?", a: "Yes. Save named profiles for family, friends or work trips, with details for up to six passengers per profile. Choose the profile you need before filling the form." },
  { q: "Which payment options can it select?", a: "You can save a preference for BHIM/UPI, cards and net banking, or IRCTC E-Wallet. The extension selects supported options on the passenger and payment pages; you remain responsible for reviewing and completing payment." },
  { q: "Does it work on the IRCTC Next Generation website?", a: "The extension is designed for IRCTC's Next Generation booking website. Since IRCTC can change its pages, always review the filled details before submitting." },
  { q: "Where are my passenger details stored?", a: "According to the extension's product information, saved passenger details and preferences are stored locally in Chrome on your device. Optional encryption is available in its settings. Check the Chrome Web Store listing for current privacy details before saving sensitive information." },
  { q: "Will it guarantee a confirmed Tatkal ticket?", a: "No. Autofill saves typing time, but it cannot reserve a seat, bypass a queue or guarantee a confirmed ticket. Availability, connection speed and payment completion all still matter." },
  { q: "Can it fill my IRCTC login?", a: "Yes, it can fill saved login details on the IRCTC login page. It does not solve CAPTCHA or sign in for you. Consider whether you want to store login details on a shared computer." },
  { q: "Can I use it on my phone?", a: "The extension is for desktop Google Chrome on Windows, macOS and Linux. Chrome on Android does not support desktop extensions." },
  { q: "Is this an official IRCTC extension?", a: "No. IRCTC Tatkal Autofill Assistant is an independent tool and is not affiliated with, endorsed by or operated by IRCTC or Indian Railways." },
  { q: "Is the extension free?", a: "Yes. The extension is listed as free, with no subscription required for its autofill features. Install it from the Chrome Web Store." },
];

const features = [
  { icon: Zap, title: "One-click form autofill", text: "Fill names, ages, gender, berth preferences and mobile number in under 5 seconds.", tag: "Less typing, more time" },
  { icon: Users, title: "Passenger profiles", text: "Keep separate groups for family, friends and work. Select the right profile before you book.", tag: "Up to 6 passengers" },
  { icon: CreditCard, title: "Payment preference", text: "Choose UPI, cards or IRCTC E-Wallet in advance, then review the selected option at checkout.", tag: "Ready for checkout" },
  { icon: LockKeyhole, title: "Login autofill", text: "Fill saved IRCTC login details on your own device. CAPTCHA remains yours to solve.", tag: "One less form" },
  { icon: ShieldCheck, title: "Insurance preference", text: "Set your travel insurance choice ahead of time instead of hunting for it in a hurry.", tag: "Your choice, saved" },
  { icon: MapPin, title: "Boarding station", text: "Set a boarding station different from your origin and let the extension select it.", tag: "Fewer dropdowns" },
  { icon: TrainFront, title: "Preferred coach", text: "Save a coach preference such as D1, S5 or B3 to fill it when available.", tag: "Made personal" },
  { icon: FileText, title: "GST details", text: "Save your GST number, company name and address for business travel bookings.", tag: "For work trips" },
  { icon: MousePointer2, title: "Autofill on page load", text: "Enable automatic filling when supported IRCTC pages load, or keep one-click control.", tag: "Choose your flow" },
  { icon: ArrowRight, title: "Review-page continue", text: "Move ahead on supported review pages when no CAPTCHA needs your attention.", tag: "Keep moving" },
  { icon: LockKeyhole, title: "Local-first storage", text: "Your saved information stays in Chrome's local storage, with optional encryption in settings.", tag: "On your device" },
];

const shots = [
  { image: journeyImage.url, label: "Journey details", alt: "IRCTC Tatkal Autofill Assistant journey details popup beside the IRCTC train booking website" },
  { image: passengersImage.url, label: "Passenger & payment", alt: "Extension passenger details and payment preferences displayed on the IRCTC booking website" },
  { image: settingsImage.url, label: "Preferences", alt: "Extension preferences for automatic form filling and saved IRCTC login details" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "irctc autofill extension, irctc tatkal autofill, tatkal booking extension, irctc passenger details autofill, chrome extension for irctc booking" },
      { property: "og:title", content: "IRCTC Tatkal Autofill — Book Tatkal Tickets Faster" },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IRCTC Tatkal Autofill — Book Tatkal Tickets Faster" },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "SoftwareApplication", name: "IRCTC Tatkal Autofill Assistant", operatingSystem: "Google Chrome on desktop", applicationCategory: "BrowserApplication", offers: { "@type": "Offer", price: "0", priceCurrency: "INR" }, description: DESCRIPTION, url: STORE_URL, downloadUrl: STORE_URL }) },
      { type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) },
    ],
  }),
  component: Index,
});

function InstallButton({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return <Button asChild variant={light ? "hero" : "install"} size={compact ? "default" : "lg"} className={compact ? "text-xs sm:text-sm" : "w-full sm:w-auto"}>
    <a href={STORE_URL} target="_blank" rel="noopener noreferrer" aria-label="Add IRCTC Tatkal Autofill Assistant to Chrome from the Chrome Web Store">
      <Chrome aria-hidden="true" /> Add to Chrome <span className="hidden sm:inline">— Free</span> <ArrowUpRight aria-hidden="true" />
    </a>
  </Button>;
}

function Index() {
  const [activeShot, setActiveShot] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return <div className="min-h-screen overflow-x-hidden">
    <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-12">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Tatkal Autofill home">
          <img src={extensionIcon.url} alt="Tatkal Autofill train icon" className="h-10 w-10 rounded-md object-cover" />
          <span className="font-display text-[13px] font-extrabold leading-tight text-primary sm:text-base">Tatkal<span className="text-orange">Autofill</span><span className="hidden font-sans text-[10px] font-medium text-muted-foreground sm:block sm:text-[11px]">for IRCTC bookings</span></span>
        </a>
        <nav className="hidden items-center gap-8 text-[13px] font-semibold text-foreground lg:flex" aria-label="Main navigation">
          <a className="transition-colors hover:text-orange" href="#features">Features</a>
          <a className="transition-colors hover:text-orange" href="#how-it-works">How it works</a>
          <a className="transition-colors hover:text-orange" href="#demo">Screenshots</a>
          <a className="transition-colors hover:text-orange" href="#faq">FAQ</a>
        </nav>
        <div className="flex items-center gap-2"><InstallButton compact /><Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button></div>
      </div>
      {menuOpen && <nav className="grid gap-0 border-t border-border bg-card px-5 py-2 text-sm font-semibold lg:hidden" aria-label="Mobile navigation">{[["Features", "#features"], ["How it works", "#how-it-works"], ["Screenshots", "#demo"], ["FAQ", "#faq"]].map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)} className="py-3">{label}</a>)}</nav>}
    </header>

    <main id="top">
      <section className="hero-scene relative isolate flex min-h-[620px] items-center overflow-hidden text-navy-foreground sm:min-h-[660px]" style={{ "--hero-image": `url(${journeyImage.url})` } as React.CSSProperties}>
        <div className="hero-gridline pointer-events-none absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:px-12">
          <div className="max-w-[670px]">
            <div className="mb-7 inline-flex items-center gap-2 border border-line-light bg-navy/60 px-3 py-2 text-[11px] font-bold uppercase tracking-[.13em] text-navy-foreground sm:text-xs"><span className="h-2 w-2 rounded-full bg-orange" /> Independent Chrome extension · Free to use</div>
            <h1 className="font-display text-[clamp(2.65rem,5vw,4.85rem)] font-extrabold leading-[1.09] text-navy-foreground">Book Tatkal tickets <span className="text-orange">before the rush</span> catches up.</h1>
            <p className="mt-6 max-w-[570px] text-base leading-8 text-navy-foreground/85 sm:text-lg">While others type passenger details one by one, your IRCTC form is already filled. This free Chrome extension completes supported booking fields in under 5 seconds.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"><InstallButton light /><Button asChild variant="heroOutline" size="lg" className="w-full sm:w-auto"><a href="#demo">See it in action <ArrowRight aria-hidden="true" /></a></Button></div>
            <p className="mt-4 text-xs text-navy-foreground/70">For desktop Chrome · No sign-up · You solve the CAPTCHA</p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card" aria-label="At a glance"><div className="mx-auto grid max-w-7xl grid-cols-2 gap-0 px-5 sm:px-8 lg:grid-cols-4 lg:px-12">
        {[["3,000+", "active users"], ["< 5 sec", "form autofill"], ["Local", "saved data on your device"], ["Free", "no subscription"]].map(([value, label]) => <div key={label} className="border-r border-border py-6 pl-3 last:border-r-0 sm:pl-6 lg:py-7"><strong className="block font-display text-2xl font-extrabold text-primary sm:text-3xl">{value}</strong><span className="mt-1 block text-xs font-medium text-muted-foreground sm:text-sm">{label}</span></div>)}
      </div></section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20 lg:px-12 lg:py-28">
        <div><p className="section-kicker">The 10 AM scramble</p><h2 className="section-heading mt-4 text-3xl text-primary sm:text-4xl">Tatkal moves fast.<br />Typing doesn't.</h2><div className="orange-rule mt-6" /><p className="mt-6 max-w-lg leading-8 text-muted-foreground">The booking window opens and every second feels important. Names, ages, berth choices, contact details, insurance, payment — there is a lot to get right before you can complete a booking.</p></div>
        <div className="grid gap-4 sm:grid-cols-2"><div className="border border-border bg-card p-7"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-muted text-muted-foreground"><Clock3 size={22} /></span><h3 className="mt-6 font-display text-xl font-bold">The old way</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">Re-enter the same details, navigate dropdowns and race to the payment page.</p><p className="mt-6 text-sm font-bold text-muted-foreground">One field at a time</p></div><div className="border border-primary bg-navy p-7 text-navy-foreground"><span className="flex h-11 w-11 items-center justify-center rounded-md bg-orange text-orange-foreground"><Zap size={22} /></span><h3 className="mt-6 font-display text-xl font-bold">A head start</h3><p className="mt-3 text-sm leading-7 text-navy-foreground/80">Save your details once. Autofill the supported fields, then review and continue.</p><p className="mt-6 flex items-center gap-2 text-sm font-bold text-orange"><Check size={17} /> Ready in under 5 seconds</p></div></div>
      </section>

      <section id="demo" className="bg-tint py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="section-kicker">The real extension</p><h2 className="section-heading mt-4 max-w-2xl text-3xl text-primary sm:text-4xl">See what you're adding to Chrome.</h2><p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">Actual screenshots of the Tatkal Autofill Assistant on the IRCTC website.</p></div><span className="flex shrink-0 items-center gap-2 text-xs font-semibold text-muted-foreground"><ShieldCheck size={16} className="text-teal" /> Forms only. No CAPTCHA bypass.</span></div>
        <div className="photo-frame mt-10 overflow-hidden border border-border bg-card"><div className="flex items-center gap-2 border-b border-border bg-card px-4 py-3"><span className="h-2 w-2 rounded-full bg-orange/60" /><span className="h-2 w-2 rounded-full bg-muted-foreground/30" /><span className="h-2 w-2 rounded-full bg-muted-foreground/30" /><span className="ml-3 text-[11px] font-semibold text-muted-foreground">IRCTC booking with Tatkal Autofill Assistant</span></div><img src={shots[activeShot]?.image ?? journeyImage.url} alt={shots[activeShot]?.alt ?? "IRCTC Tatkal Autofill Assistant journey details"} loading="lazy" className="block aspect-[1535/717] w-full object-cover object-left-top" /></div>
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Screenshot selection">{shots.map((shot, i) => <Button key={shot.label} variant={activeShot === i ? "tabActive" : "tab"} size="sm" aria-pressed={activeShot === i} onClick={() => setActiveShot(i)}><span className="font-bold">0{i + 1}</span> {shot.label}</Button>)}</div>
      </div></section>

      <section id="features" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><p className="section-kicker">Everything in one extension</p><div className="mt-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><h2 className="section-heading max-w-2xl text-3xl text-primary sm:text-4xl">All the little details,<br />already taken care of.</h2><p className="max-w-xs text-sm leading-7 text-muted-foreground">From passenger names to your preferred payment option. No subscription, no extra steps.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{features.map(({ icon: Icon, title, text, tag }) => <article key={title} className="group flex min-h-[222px] flex-col border border-border bg-card p-6 transition-colors hover:border-primary/45"><span className="feature-icon"><Icon size={22} strokeWidth={1.8} aria-hidden="true" /></span><h3 className="mt-5 font-display text-[17px] font-bold text-primary">{title}</h3><p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">{text}</p><span className="mt-5 text-xs font-bold text-orange">{tag} <span aria-hidden="true">↗</span></span></article>)}</div></section>

      <section id="how-it-works" className="bg-navy py-20 text-navy-foreground lg:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="section-kicker">Simple from the start</p><h2 className="section-heading mt-4 text-3xl sm:text-4xl">Three steps. Then you're ready.</h2><div className="mt-12 grid gap-9 md:grid-cols-3 md:gap-12">{[["01", "Add the extension", "Install Tatkal Autofill Assistant from the Chrome Web Store. No account needed."], ["02", "Save details once", "Add passengers and booking preferences to a profile in the extension."], ["03", "Open IRCTC & autofill", "Choose your profile, fill the form, review it and solve any CAPTCHA yourself."]].map(([num, title, text]) => <div key={num} className="border-t border-line-light pt-6"><span className="font-display text-4xl font-extrabold text-orange">{num}</span><h3 className="mt-7 font-display text-xl font-bold">{title}</h3><p className="mt-3 max-w-sm text-sm leading-7 text-navy-foreground/75">{text}</p></div>)}</div><div className="mt-12"><InstallButton light /></div></div></section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="section-kicker">A clearer way to book</p><h2 className="section-heading mt-4 text-3xl text-primary sm:text-4xl">Manual entry vs. autofill.</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">The extension takes care of repetitive form fields so you can spend your attention on checking the booking, CAPTCHA and payment.</p></div><div className="overflow-x-auto border border-border bg-card"><table className="w-full min-w-[450px] text-left text-sm"><thead className="bg-navy text-navy-foreground"><tr><th scope="col" className="px-5 py-4 font-semibold">Booking task</th><th scope="col" className="px-5 py-4 font-semibold">By hand</th><th scope="col" className="px-5 py-4 font-semibold text-orange">With extension</th></tr></thead><tbody>{[["Passenger details", "Type each field", "Fill saved profile"], ["Payment choice", "Select while booking", "Select saved choice"], ["Boarding station", "Find in dropdown", "Fill saved station"], ["GST details", "Type each field", "Fill saved details"], ["CAPTCHA", "Solve yourself", "Solve yourself"]].map(([task, manual, assisted]) => <tr key={task} className="border-t border-border"><th scope="row" className="px-5 py-4 font-semibold text-foreground">{task}</th><td className="px-5 py-4 text-muted-foreground">{manual}</td><td className="px-5 py-4 font-semibold text-primary">{assisted}</td></tr>)}</tbody></table></div></div></section>

      <section className="bg-tint py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12"><p className="section-kicker">Made for your journey</p><h2 className="section-heading mt-4 text-3xl text-primary sm:text-4xl">However you travel, be ready.</h2><div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[Ticket, "Festival trips", "Keep family details ready before the holiday booking rush."], [TrainFront, "Frequent travel", "Stop entering the same information again and again."], [Wallet, "Business travel", "Save GST details and preferences for your next work trip."], [Users, "Group bookings", "Fill details for multiple passengers from a single profile."]].map(([Icon, title, text]) => { const TravelIcon = Icon as typeof Ticket; return <article key={title as string} className="border border-border bg-card p-6"><TravelIcon size={23} className="text-orange" /><h3 className="mt-5 font-display text-lg font-bold text-primary">{title as string}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text as string}</p></article>; })}</div></div></section>

      <section id="privacy" className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20 lg:px-12 lg:py-28"><div><p className="section-kicker">Confidence matters</p><h2 className="section-heading mt-4 text-3xl text-primary sm:text-4xl">Fast doesn't mean skipping the important parts.</h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">You stay in control of your booking from the first field to the final payment.</p></div><div className="divide-y divide-border border-y border-border">{[[ShieldCheck, "No CAPTCHA bypass", "You solve any CAPTCHA yourself. This tool helps fill forms; it doesn't bypass booking checks."], [LockKeyhole, "Stored on your device", "Saved details use Chrome's local storage. Optional encryption is available in extension settings."], [Check, "Review before you submit", "Check passenger information, availability and payment details before completing your booking."]].map(([Icon, title, text]) => { const TrustIcon = Icon as typeof ShieldCheck; return <div key={title as string} className="flex gap-5 py-6"><span className="feature-icon shrink-0"><TrustIcon size={21} /></span><div><h3 className="font-display text-lg font-bold text-primary">{title as string}</h3><p className="mt-2 text-sm leading-7 text-muted-foreground">{text as string}</p></div></div>; })}</div></section>

      <section id="faq" className="bg-card py-20 lg:py-24"><div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[.7fr_1.3fr] lg:gap-20 lg:px-12"><div><p className="section-kicker">Good to know</p><h2 className="section-heading mt-4 text-3xl text-primary sm:text-4xl">Questions, answered.</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">Everything you need to know before adding Tatkal Autofill Assistant.</p><a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-orange" href="mailto:amitkrg124@gmail.com">Still have a question? Contact us <ArrowUpRight size={16} /></a></div><div className="divide-y divide-border border-y border-border">{faqs.map(({ q, a }) => <details key={q} className="group py-1"><summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-4 font-display text-[15px] font-bold text-primary marker:hidden [&::-webkit-details-marker]:hidden"><span>{q}</span><ChevronDown size={19} className="mt-0.5 shrink-0 transition-transform group-open:rotate-180" /></summary><p className="max-w-2xl pb-5 pr-8 text-sm leading-7 text-muted-foreground">{a}</p></details>)}</div></div></section>

      <section className="bg-navy py-20 text-navy-foreground lg:py-24"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 lg:flex-row lg:items-center lg:px-12"><div><p className="section-kicker">Your next booking starts here</p><h2 className="section-heading mt-4 max-w-xl text-3xl sm:text-4xl">Get the form out of the way.</h2><p className="mt-4 max-w-xl text-sm leading-7 text-navy-foreground/75">Join 3,000+ travelers using a faster way to fill IRCTC forms. Free to use on desktop Chrome.</p></div><div className="flex flex-col items-start gap-3"><InstallButton light /><span className="text-xs text-navy-foreground/65">Windows · macOS · Linux</span></div></div></section>
    </main>

    <footer className="bg-card"><div className="mx-auto max-w-7xl px-5 py-11 sm:px-8 lg:px-12"><div className="flex flex-col justify-between gap-7 sm:flex-row sm:items-start"><div className="flex items-center gap-3"><img src={extensionIcon.url} alt="" className="h-9 w-9 rounded-md" /><strong className="font-display text-sm text-primary">Tatkal<span className="text-orange">Autofill</span></strong></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-primary"><a href={STORE_URL} target="_blank" rel="noopener noreferrer" className="hover:text-orange">Chrome Web Store</a><a href="#privacy" className="hover:text-orange">Privacy & safety</a><a href="mailto:amitkrg124@gmail.com" className="hover:text-orange">Contact</a></div></div><div className="mt-10 border-t border-border pt-5 text-xs leading-6 text-muted-foreground">IRCTC Tatkal Autofill Assistant is an independent tool. It is not affiliated with, endorsed by or operated by IRCTC or Indian Railways. IRCTC is a trademark of Indian Railway Catering and Tourism Corporation.</div></div></footer>
  </div>;
}