"use client";

import { useState, type FormEvent } from "react";

type Lang = "sl" | "en";

const translations = {
  sl: {
    navAbout: "O nas",
    navCapabilities: "Področja",
    navPartners: "Partnerji",
    navClients: "Reference",
    navContact: "Kontakt",
    ctaInquiry: "Povpraševanje",

    badge: "Tehnologija, izkušnje in zanesljivo partnerstvo",
    company: "BURGUS d.o.o.",
    heroTitle1: "Tehnologija, izkušnje in zanesljivo partnerstvo",
    heroTitle2: "za zahtevne projekte.",
    heroText:
      "Napredne tehnološke in varnostne rešitve, razvite v sodelovanju z vodilnimi mednarodnimi partnerji. Aaronia je tehnološko podjetje, specializirano za napredne sisteme za zaznavanje, spremljanje in onesposobitev brezpilotnih letalnikov. Droptec pa nudi sistem za kinetično nevtralizacijo brezpilotnih sistemov. Njihove rešitve omogočajo učinkovito omejevanje ali onemogočanje delovanja dronov ter dopolnjujejo celovite sisteme za protidronsko zaščito.",
    ctaExplore: "Razišči področja",
    ctaDownload: "Prenesi predstavitev",

    overviewEyebrow: "Pregled podjetja",
    overviewTitle: "BURGUS Profile",
    statExperience: "Izkušnje",
    statFounded: "Ustanovljeno",
    statField: "Področje",
    statReach: "Doseg",
    statReachValue: "Mednarodno",
    statYearsValue: "30+ let",
    direction: "Usmeritev",
    directionTitle: "Zanesljivost, natančnost, sodelovanje",
    directionText:
      "Predstavitev je zasnovana v čistem, sodobnem in umirjenem slogu za poslovno komuniciranje z zahtevnimi partnerji in naročniki.",

    aboutEyebrow: "O podjetju",
    aboutTitle: "Izkušnje, znanje in dolgoročno sodelovanje.",
    aboutProfile: "Profil",
    aboutProfileText:
      "BURGUS d.o.o. je slovensko podjetje s sedežem v Kamniku pod Krimom. Podjetje temelji na dolgoletnem strokovnem znanju, poznavanju trga in sodelovanju z domačimi ter tujimi partnerji na področju specializirane opreme in tehnoloških rešitev.",
    aboutApproach: "Pristop",
    aboutApproachText:
      "BURGUS d.o.o. zagotavlja napredne tehnološke in varnostne rešitve za zahtevne uporabnike. V sodelovanju z vodilnimi mednarodnimi proizvajalci omogočamo dostop do specializirane opreme ter sodobnih sistemov, vključno z rešitvami za protidronsko zaščito, zaznavanje in nevtralizacijo brezpilotnih sistemov. Naš pristop temelji na strokovnosti, zanesljivosti in razumevanju specifičnih potreb naročnikov v Sloveniji in tujini.",

    capabilitiesEyebrow: "Področja",
    capabilitiesTitle: "Strukturiran pregled ključnih področij",
    capabilitiesText:
      "Vsebina je razdeljena v jasne vsebinske sklope, ki omogočajo hiter pregled dejavnosti, kompetenc in sodelovanj.",

    capability1Title: "Obrambni program",
    capability1Text:
      "Dobava specializirane opreme, sistemov in podpornih rešitev za vojaške, policijske in druge institucionalne uporabnike.",
    capability2Title: "Counter-UAS sistemi",
    capability2Text:
      "Sodelujemo z uveljavljenimi mednarodnimi podjetji, ki razvijajo napredne tehnološke rešitve na področju varnosti, nadzora in zaščite pred brezpilotnimi sistemi. Našim naročnikom omogočamo dostop do preverjenih tehnologij ter strokovno podporo pri njihovi uvedbi.",
    capability3Title: "Termalne in nadzorne rešitve",
    capability3Text:
      "Termalne naprave, nadzorni sistemi ter oprema za opazovanje, varovanje in zaščito kritične infrastrukture.",
    capability4Title: "Mednarodni projekti",
    capability4Text:
      "Strokovna podpora pri sodelovanju z vodilnimi mednarodnimi proizvajalci ter pri načrtovanju in izvedbi zahtevnih tehnoloških projektov.",

    partnersEyebrow: "Partnerji",
    partnersTitle: "Mednarodno sodelovanje",
    partnersText:
      "Izbor partnerjev predstavlja usmerjenost v kakovost, tehnološko naprednost in dolgoročno sodelovanje. Aaronia je tehnološko podjetje, specializirano za napredne sisteme za zaznavanje in spremljanje brezpilotnih letalnikov. Njihove rešitve omogočajo zanesljivo odkrivanje, analizo in nadzor dronskih aktivnosti ter predstavljajo pomemben element sodobnih sistemov za protidronsko zaščito. Droptec razvija napredne tehnologije za nevtralizacijo brezpilotnih sistemov in zaščito zračnega prostora. Njihove rešitve omogočajo učinkovito omejevanje ali onemogočanje delovanja dronov ter dopolnjujejo celovite sisteme za protidronsko zaščito.",

    clientsEyebrow: "Reference",
    clientsTitle: "Zaupanje ključnih sistemov in institucij",

    contactEyebrow: "Kontakt",
    contactTitle: "Pripravljenost za sodelovanje",
    phone: "Telefon",
    email: "E-pošta",
    website: "Spletna stran",
    namePlaceholder: "Ime",
    emailPlaceholder: "E-pošta",
    messagePlaceholder: "Sporočilo",
    send: "Pošlji sporočilo",
    sending: "Pošiljanje...",
    success: "Sporočilo je bilo uspešno poslano.",
    error: "Prišlo je do napake pri pošiljanju.",
    spamError: "Oddaja obrazca ni uspela. Poskusite znova.",
    menu: "Meni",

    footer:
      "Corporate website concept for presentation and partnership communication.",
    rights: "Vse pravice pridržane.",
    country: "Slovenija",
  },

  en: {
    navAbout: "About",
    navCapabilities: "Capabilities",
    navPartners: "Partners",
    navClients: "References",
    navContact: "Contact",
    ctaInquiry: "Inquiry",

    badge: "Technology, experience and reliable cooperation",
    company: "BURGUS d.o.o.",
    heroTitle1: "Technology and experience",
    heroTitle2: "for demanding projects.",
    heroText:
      "BURGUS d.o.o. combines Advanced technological and security solutions developed in collaboration with leading international partners. Aaronia is a technology company specializing in advanced systems for detecting, monitoring and disabling drones. Droptec offers a system for kinetic neutralization of drones. Their solutions enable effective limitation or disabling of drone operations and complement comprehensive anti-drone protection systems.",
    ctaExplore: "Explore capabilities",
    ctaDownload: "Download presentation",

    overviewEyebrow: "Company overview",
    overviewTitle: "BURGUS Profile",
    statExperience: "Experience",
    statFounded: "Founded",
    statField: "Field",
    statReach: "Reach",
    statReachValue: "International",
    statYearsValue: "30+ years",
    direction: "Direction",
    directionTitle: "Reliability, precision, cooperation",
    directionText:
      "The presentation is designed in a clean, modern and balanced style for business communication with demanding partners and clients.",

    aboutEyebrow: "About",
    aboutTitle: "Experience, expertise and long-term cooperation.",
    aboutProfile: "Profile",
    aboutProfileText:
      "BURGUS d.o.o. is a Slovenian company based in Kamniku pod Krimom. The company is built on long-standing professional expertise, market knowledge and cooperation with domestic and international partners in the field of specialised equipment and technology solutions.",
    aboutApproach: "Approach",
    aboutApproachText:
      "The company focuses on thoughtful selection of solutions, reliable execution and long-term cooperation with clients, manufacturers and other expert partners in Slovenia and abroad.",

    capabilitiesEyebrow: "Capabilities",
    capabilitiesTitle: "Structured overview of key areas",
    capabilitiesText:
      "The content is divided into clear sections that allow a quick overview of activities, competencies and cooperation.",

    capability1Title: "Defence programme",
    capability1Text:
      "Supply of specialised equipment, systems and support solutions for military, police and other institutional users.",
    capability2Title: "Counter-UAS systems",
    capability2Text:
      "Solutions for detection, analysis and response to unmanned system threats in various operational environments.",
    capability3Title: "Thermal and surveillance solutions",
    capability3Text:
      "Thermal devices, surveillance systems and equipment for observation, protection and safeguarding of critical infrastructure.",
    capability4Title: "International projects",
    capability4Text:
      "Support in cooperation with foreign manufacturers, institutional clients and complex technology projects.",

    partnersEyebrow: "Partners",
    partnersTitle: "International cooperation",
    partnersText:
      "The selection of partners reflects a focus on quality, technological advancement and long-term cooperation.",

    clientsEyebrow: "References",
    clientsTitle: "Trusted by key systems and institutions",

    contactEyebrow: "Contact",
    contactTitle: "Ready for cooperation",
    phone: "Phone",
    email: "Email",
    website: "Website",
    namePlaceholder: "Name",
    emailPlaceholder: "Email",
    messagePlaceholder: "Message",
    send: "Send message",
    sending: "Sending...",
    success: "Your message has been sent successfully.",
    error: "There was an error sending your message.",
    spamError: "Form submission failed. Please try again.",
    menu: "Menu",

    footer:
      "Corporate website concept for presentation and partnership communication.",
    rights: "All rights reserved.",
    country: "Slovenia",
  },
} as const;

export default function BurgusWebsite() {
  const [lang, setLang] = useState<Lang>("sl");
  const [menuOpen, setMenuOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // anti-spam
  const [websiteField, setWebsiteField] = useState("");
  const [formStartedAt, setFormStartedAt] = useState<number>(() => Date.now());

  const t = translations[lang];

  const partners = [
    { name: "Aaronia", logo: "/partners/aaronia.png", url: "https://aaronia.com" },
    { name: "ActInBlack", logo: "/partners/actinblack.png", url: "https://actinblack.com" },
    { name: "Saes", logo: "/partners/saes.png", url: "https://electronica-submarina.com/en/" },
    { name: "Edi-USA", logo: "/partners/edi-usa.png", url: "https://execdefense.com/" },
    { name: "Droptec", logo: "/partners/droptec.png", url: "https://droptec.ch" },
  ];

  const capabilities = [
    { title: t.capability1Title, text: t.capability1Text },
    { title: t.capability2Title, text: t.capability2Text },
    { title: t.capability3Title, text: t.capability3Text },
    { title: t.capability4Title, text: t.capability4Text },
  ];

  const clients = [
    "Ministry of the Interior of Slovenia",
    "Ministry of Defense of Slovenia",
    "Civil Defence of Slovenia",
    "Nuclear Power Plant Krško",
    "Ministry of Defence of Croatia",
  ];

  const closeMenu = () => setMenuOpen(false);

const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setStatus("");
  setIsSubmitting(true);

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
        websiteField,
        formStartedAt,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus(t.success);
      setName("");
      setEmail("");
      setMessage("");
      setWebsiteField("");
      setFormStartedAt(Date.now());
    } else {
      setStatus(data?.error || t.error);
    }
  } catch {
    setStatus(t.error);
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#f7f0e6] text-slate-900">
      <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top_right,rgba(255,153,51,0.14),transparent_28%),linear-gradient(180deg,rgba(255,149,0,0.03),rgba(255,149,0,0.01))]" />

      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/burgus-shield.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px",
          opacity: 0.18,
          transform: "rotate(-8deg) scale(1.2)",
        }}
      />

      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundImage: "url('/burgus-shield.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "120px",
          backgroundPosition: "60px 60px",
          opacity: 0.08,
          transform: "rotate(-8deg) scale(1.2)",
        }}
      />

      <div className="pointer-events-none fixed inset-0 -z-10 bg-white/20" />

      <header className="sticky top-0 z-40 border-b border-black/10 bg-[#f7f0e6]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4"
       <a href="/counter-drone-solutions">Področja</a>
        >
          <a href="#top" className="flex items-center gap-3" onClick={closeMenu}>
            <img src="/burgus-logo-960.png" alt="BURGUS logo" className="h-20 w-auto" />
            <div>
              <p className="text-2xl font-bold tracking-[0.25em] text-[#cf6f12]">
                BURGUS
              </p>
              <p className="text-[11px] uppercase tracking-[0.38em] text-[#cf6f12]">
                WE MEET YOUR NEEDS
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <a href="#about" className="transition hover:text-[#cf6f12]">
              {t.navAbout}
            </a>
            <a href="#capabilities" className="transition hover:text-[#cf6f12]">
              {t.navCapabilities}
            </a>
            <a href="#partners" className="transition hover:text-[#cf6f12]">
              {t.navPartners}
            </a>
            <a href="#clients" className="transition hover:text-[#cf6f12]">
              {t.navClients}
            </a>
            <a href="#contact" className="transition hover:text-[#cf6f12]">
              {t.navContact}
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <div className="rounded-full border border-black/10 bg-white/70 p-1">
              <button
                type="button"
                onClick={() => setLang("sl")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  lang === "sl" ? "bg-[#cf6f12] text-white" : "text-[#cf6f12]"
                }`}
              >
                SL
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                  lang === "en" ? "bg-[#cf6f12] text-white" : "text-[#cf6f12]"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="#contact"
              className="rounded-full border border-[#cf6f12] px-5 py-2 text-sm font-semibold text-[#cf6f12] transition hover:bg-[#cf6f12] hover:text-white"
            >
              {t.ctaInquiry}
            </a>
          </div>

          <button
            type="button"
            aria-label={t.menu}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 md:hidden"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-[#cf6f12] transition ${
                  menuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#cf6f12] transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-5 bg-[#cf6f12] transition ${
                  menuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-black/10 bg-[#f7f0e6]/95 px-6 py-5 md:hidden">
            <div className="mx-auto flex max-w-7xl flex-col gap-4">
              <a href="#about" onClick={closeMenu} className="text-sm font-medium hover:text-[#cf6f12]">
                {t.navAbout}
              </a>
              <a
                href="#capabilities"
                onClick={closeMenu}
                className="text-sm font-medium hover:text-[#cf6f12]"
              >
                {t.navCapabilities}
              </a>
              <a href="#partners" onClick={closeMenu} className="text-sm font-medium hover:text-[#cf6f12]">
                {t.navPartners}
              </a>
              <a href="#clients" onClick={closeMenu} className="text-sm font-medium hover:text-[#cf6f12]">
                {t.navClients}
              </a>
              <a href="#contact" onClick={closeMenu} className="text-sm font-medium hover:text-[#cf6f12]">
                {t.navContact}
              </a>

              <div className="mt-2 flex items-center gap-3">
                <div className="rounded-full border border-black/10 bg-white/70 p-1">
                  <button
                    type="button"
                    onClick={() => setLang("sl")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      lang === "sl" ? "bg-[#cf6f12] text-white" : "text-[#cf6f12]"
                    }`}
                  >
                    SL
                  </button>
                  <button
                    type="button"
                    onClick={() => setLang("en")}
                    className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                      lang === "en" ? "bg-[#cf6f12] text-white" : "text-[#cf6f12]"
                    }`}
                  >
                    EN
                  </button>
                </div>

                <a
                  href="#contact"
                  onClick={closeMenu}
                  className="rounded-full border border-[#cf6f12] px-4 py-2 text-sm font-semibold text-[#cf6f12]"
                >
                  {t.ctaInquiry}
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      <section
        id="top"
        className="relative isolate border-b border-black/10 bg-[radial-gradient(circle_at_top_right,rgba(255,153,51,0.18),transparent_26%),linear-gradient(135deg,#faf5ee_0%,#f1e4ce_55%,#f7f0e6_100%)]"
      >
        <div
  className="absolute inset-0 opacity-5"
  style={{
    backgroundImage: "url('/burgus-shield.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "80px"
  }}
></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:44px_44px] opacity-30" />
        <div className="absolute -right-24 top-16 h-80 w-80 rounded-full bg-[#ff9e3d]/20 blur-3xl" />
        <div className="absolute left-[-5rem] top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-white/70 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.08fr_0.92fr] md:py-32">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-3 rounded-full border border-black/10 bg-white/75 px-4 py-2 text-sm text-slate-700 shadow-sm backdrop-blur">
              <img src="/burgus-shield.png" alt="BURGUS shield" className="h-10 w-auto" />
              <span>{t.badge}</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#cf6f12]">
              {t.company}
            </p>

            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[1.03] tracking-tight md:text-7xl">
              {t.heroTitle1}
              <br />
              {t.heroTitle2}
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
              {t.heroText}
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#capabilities"
                className="rounded-full bg-[#cf6f12] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#cf6f12]/20 transition hover:-translate-y-[1px] hover:bg-[#b85f0b]"
              >
                {t.ctaExplore}
              </a>

              <a
                href="/burgus-company-presentation.pdf"
                className="rounded-full border border-black/15 bg-white/80 px-7 py-3.5 font-semibold text-slate-800 backdrop-blur transition hover:border-[#cf6f12] hover:text-[#cf6f12]"
              >
                {t.ctaDownload}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#ff9e3d]/20 to-white/40 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-black/10 bg-slate-950 text-white shadow-2xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,158,61,0.35),transparent_28%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-20" />

              <div className="relative p-8 md:p-10">
                <div className="border-b border-white/10 pb-8">
                  <div className="grid items-center gap-6 text-center md:grid-cols-[1fr_auto_1fr] md:text-left">
                    <div className="flex flex-col justify-center">
                      <p className="text-xs uppercase tracking-[0.28em] text-white/55">
                        {t.overviewEyebrow}
                      </p>
                      <p className="mt-3 text-3xl font-semibold leading-tight">
                        {t.overviewTitle}
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <img
                        src="/burgus-logo-960.png"
                        alt="BURGUS logo"
                        className="h-20 w-auto"
                      />
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <p className="text-xl font-semibold uppercase tracking-[0.18em] text-[#cf6f12]">
                        WE MEET YOUR
                        <br />
                        NEEDS
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    [t.statExperience, t.statYearsValue],
                    [t.statFounded, "2022"],
                    [t.statField, "Defence & Security"],
                    [t.statReach, t.statReachValue],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
                    >
                      <p className="text-xs uppercase tracking-[0.25em] text-white/50">{label}</p>
                      <p className="mt-3 text-2xl font-semibold">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-[#ffb05f]/30 bg-[#ffb05f]/10 p-5">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#ffd3a0]">
                    {t.direction}
                  </p>
                  <p className="mt-3 text-lg font-semibold">{t.directionTitle}</p>
                  <p className="mt-2 text-sm leading-7 text-white/70">{t.directionText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-black/10 bg-white/60 py-24 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cf6f12]">
              {t.aboutEyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight">{t.aboutTitle}</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] border border-black/10 bg-[#faf4ea] p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#cf6f12]">
                {t.aboutProfile}
              </p>
              <p className="mt-5 leading-8 text-slate-600">{t.aboutProfileText}</p>
            </div>

            <div className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#cf6f12]">
                {t.aboutApproach}
              </p>
              <p className="mt-5 leading-8 text-slate-600">{t.aboutApproachText}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-b border-black/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cf6f12]">
                {t.capabilitiesEyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">{t.capabilitiesTitle}</h2>
            </div>

            <p className="max-w-2xl text-slate-600">{t.capabilitiesText}</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {capabilities.map((item, index) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-black/10 bg-white/90 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#cf6f12]/10 text-sm font-bold text-[#cf6f12]">
                  0{index + 1}
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{item.text}</p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-[#cf6f12]/40 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="partners" className="overflow-hidden border-b border-black/10 bg-white/65 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cf6f12]">
            {t.partnersEyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight">{t.partnersTitle}</h2>
          <p className="mt-4 max-w-2xl text-slate-600">{t.partnersText}</p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {partners.map((partner) => (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-28 items-center justify-center rounded-[1.75rem] border border-black/10 bg-white px-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="clients" className="border-b border-black/10 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#cf6f12]">
                {t.clientsEyebrow}
              </p>
              <h2 className="mt-4 text-4xl font-bold tracking-tight">{t.clientsTitle}</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {clients.map((client) => (
                <div
                  key={client}
                  className="rounded-[1.5rem] border border-black/10 bg-white/90 p-5 shadow-sm"
                >
                  <p className="font-medium leading-7 text-slate-700">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-sm">
              <div className="flex items-center gap-4">
                <img src="/burgus-logo-960.png" alt="BURGUS logo" className="h-24 w-auto" />
                <p className="text-sm font-semibold tracking-[0.35em] text-[#cf6f12]">
                  WE MEET YOUR NEEDS
                </p>
              </div>

              <p className="mt-8 text-sm font-semibold uppercase tracking-[0.3em] text-[#cf6f12]">
                {t.contactEyebrow}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight">{t.contactTitle}</h2>

              <div className="mt-8 space-y-3 text-slate-600">
                <p>
                  <strong>BURGUS d.o.o.</strong>
                </p>
                <p>Kamnik pod Krimom 120</p>
                <p>1352 Preserje</p>
                <p>{t.country}</p>
                <p>
                  {t.phone}: +386 41 690 559
                </p>
                <p>
                  {t.email}: info@burgus.si
                </p>
                <p>
                  {t.website}: www.burgus.si
                </p>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-black/10 bg-white/90 p-8 shadow-sm"
              autoComplete="off"
            >
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website-field">Website</label>
                <input
                  id="website-field"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={websiteField}
                  onChange={(e) => setWebsiteField(e.target.value)}
                />
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <input
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="rounded-2xl border border-black/10 bg-[#fcfaf6] px-5 py-4 outline-none transition focus:border-[#cf6f12]"
                  placeholder={t.namePlaceholder}
                  required
                />
                <input
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="rounded-2xl border border-black/10 bg-[#fcfaf6] px-5 py-4 outline-none transition focus:border-[#cf6f12]"
                  placeholder={t.emailPlaceholder}
                  required
                />
              </div>

              <textarea
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-5 w-full rounded-2xl border border-black/10 bg-[#fcfaf6] px-5 py-4 outline-none transition focus:border-[#cf6f12]"
                placeholder={t.messagePlaceholder}
                required
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-5 rounded-full bg-[#cf6f12] px-7 py-3.5 font-semibold text-white transition hover:bg-[#b85f0b] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? t.sending : t.send}
              </button>

              {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-black/10 bg-white/60 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © 2026 BURGUS d.o.o. {t.rights}
          </p>
          <p>{t.footer}</p>
        </div>
      </footer>
    </div>
  );
}
