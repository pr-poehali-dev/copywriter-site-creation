import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/7a3a0d6d-0ebb-467e-b4e9-d48ac502b6e8/files/7edba955-6e20-47eb-a2e9-aa05a061efd9.jpg";
const NEON_IMAGE = "https://cdn.poehali.dev/projects/7a3a0d6d-0ebb-467e-b4e9-d48ac502b6e8/files/c8068172-313b-4a77-af55-7bbf86dcdac1.jpg";
const PROFILE_IMAGE = "https://cdn.poehali.dev/projects/7a3a0d6d-0ebb-467e-b4e9-d48ac502b6e8/files/e3b3074f-0785-472f-9d28-b3e6539d7376.jpg";

const categories = ["Все", "SMM", "Email", "Лендинги", "Статьи", "Реклама"];

const works = [
  {
    id: 1,
    category: "Лендинги",
    title: "Лендинг для фитнес-клуба",
    desc: "Конверсия выросла на 34% за первый месяц после запуска.",
    tag: "Лендинги",
    color: "#FF3D6B",
    symbol: "✦",
    year: "2024",
  },
  {
    id: 2,
    category: "SMM",
    title: "Контент-стратегия для бренда одежды",
    desc: "12 постов в месяц, рост подписчиков ×3 за квартал.",
    tag: "SMM",
    color: "#FFD600",
    symbol: "◈",
    year: "2024",
  },
  {
    id: 3,
    category: "Email",
    title: "Email-серия для онлайн-школы",
    desc: "Open rate 38%, CR на покупку курса — 11%.",
    tag: "Email",
    color: "#00E5FF",
    symbol: "⬡",
    year: "2023",
  },
  {
    id: 4,
    category: "Статьи",
    title: "Экспертные статьи для медиа",
    desc: "SEO-тексты, 15 публикаций, топ-3 Google по 7 запросам.",
    tag: "Статьи",
    color: "#B388FF",
    symbol: "◉",
    year: "2023",
  },
  {
    id: 5,
    category: "Реклама",
    title: "Тексты для таргетированной рекламы",
    desc: "CTR 4.2%, CPL снижен в 2.1 раза по сравнению с предыдущим агентством.",
    tag: "Реклама",
    color: "#FF6D00",
    symbol: "★",
    year: "2024",
  },
  {
    id: 6,
    category: "SMM",
    title: "Ведение Telegram-канала IT-компании",
    desc: "Рост с 0 до 4 800 подписчиков за 6 месяцев органически.",
    tag: "SMM",
    color: "#FFD600",
    symbol: "◈",
    year: "2024",
  },
];

const skills = [
  { label: "Лендинги", val: 95 },
  { label: "Email-копирайтинг", val: 88 },
  { label: "SMM-тексты", val: 92 },
  { label: "SEO-статьи", val: 80 },
  { label: "Реклама", val: 85 },
];

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("Все");
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filtered = activeCategory === "Все" ? works : works.filter(w => w.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white overflow-x-hidden" style={{ fontFamily: "'Golos Text', sans-serif" }}>

      {/* Noise overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px",
        }}
      />

      {/* Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-[#0D0D0D]/90 backdrop-blur-md border-b border-white/5" : ""}`}
      >
        <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <span style={{ fontFamily: "'Cormorant', serif" }} className="text-2xl font-light tracking-[0.2em] uppercase">
            <span className="text-[#FF3D6B]">О</span>лег Горохов
          </span>
          <a
            href="#contact"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="text-xs tracking-[0.25em] uppercase border border-[#FF3D6B] text-[#FF3D6B] px-5 py-2 hover:bg-[#FF3D6B] hover:text-white transition-all duration-300"
          >
            Связаться
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(0.18) saturate(1.2)",
          }}
        />
        <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#FF3D6B]/40 to-transparent" />
        <div className="absolute right-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/5 to-transparent hidden lg:block" />

        {/* Profile photo in hero */}
        <div
          className={`absolute bottom-0 right-8 lg:right-[8%] z-10 transition-all duration-1000 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
          style={{ width: "clamp(180px, 22vw, 320px)" }}
        >
          <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#FF3D6B]" />
          <div className="absolute -top-3 -right-3 w-6 h-6 border-t-2 border-r-2 border-[#FF3D6B]" />
          <img
            src={PROFILE_IMAGE}
            alt="Олег Горохов"
            className="w-full object-cover object-top"
            style={{ aspectRatio: "3/4", maxHeight: "70vh" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
          <div className="absolute bottom-4 left-0 right-0 text-center">
            <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-[#FFD600] text-xs tracking-[0.3em] uppercase border border-[#FFD600]/30 px-3 py-1 bg-[#0D0D0D]/60 backdrop-blur-sm">Копирайтер</span>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20">
          <div className={`flex items-center gap-4 mb-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="h-px w-12 bg-[#FF3D6B]" />
            <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-[#FF3D6B] text-xs tracking-[0.4em] uppercase">Портфолио</span>
          </div>

          <h1
            className={`font-light leading-[0.9] transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(4rem, 12vw, 9rem)" }}
          >
            Тексты,
            <br />
            <em className="italic text-[#FF3D6B]">которые</em>
            <br />
            продают
          </h1>

          <p className={`mt-10 max-w-lg text-white/50 text-lg leading-relaxed transition-all duration-1000 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            5 лет в копирайтинге. Лендинги, email, SMM, статьи — создаю тексты, которые читают до конца и действуют.
          </p>

          <div className={`mt-14 flex flex-wrap gap-10 transition-all duration-1000 delay-600 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            {[
              { num: "120+", label: "проектов" },
              { num: "5 лет", label: "опыта" },
              { num: "34%", label: "средний рост конверсии" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{ fontFamily: "'Cormorant', serif" }} className="text-4xl font-light text-[#FFD600]">{s.num}</div>
                <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white/40 text-xs tracking-[0.2em] uppercase mt-1">{s.label}</div>
              </div>
            ))}
          </div>

          <div className={`mt-12 flex flex-wrap gap-4 transition-all duration-1000 delay-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a
              href="#works"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="group flex items-center gap-3 bg-[#FF3D6B] text-white text-sm tracking-[0.2em] uppercase px-8 py-4 hover:bg-[#e02d5b] transition-all duration-300"
            >
              Смотреть работы
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              style={{ fontFamily: "'Oswald', sans-serif" }}
              className="flex items-center gap-3 border border-white/20 text-white/70 text-sm tracking-[0.2em] uppercase px-8 py-4 hover:border-white/50 hover:text-white transition-all duration-300"
            >
              Написать
            </a>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-white animate-pulse" />
          <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        </div>
      </section>

      {/* Works */}
      <section id="works" className="relative z-10 py-24 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-[#FF3D6B] text-xs tracking-[0.4em] uppercase">Работы</span>
            <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-5xl lg:text-7xl font-light mt-2">
              Избранные<br /><em className="italic">проекты</em>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{ fontFamily: "'Oswald', sans-serif" }}
                className={`text-xs tracking-[0.2em] uppercase px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#FF3D6B] border-[#FF3D6B] text-white"
                    : "border-white/20 text-white/50 hover:border-white/50 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {filtered.map((work, i) => (
            <div
              key={work.id}
              className="group relative bg-[#0D0D0D] p-8 overflow-hidden cursor-pointer hover:bg-[#131313] transition-all duration-500"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div
                className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(135deg, ${work.color}30, transparent)` }}
              />

              <div className="flex items-start justify-between mb-8">
                <span
                  className="text-5xl font-light transition-transform duration-500 group-hover:scale-110 inline-block"
                  style={{ color: work.color, fontFamily: "'Cormorant', serif" }}
                >
                  {work.symbol}
                </span>
                <div className="text-right">
                  <span
                    style={{ fontFamily: "'Oswald', sans-serif", color: work.color, borderColor: `${work.color}50` }}
                    className="text-[10px] tracking-[0.3em] uppercase border px-2 py-1"
                  >
                    {work.tag}
                  </span>
                  <div style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white/20 text-xs mt-2">{work.year}</div>
                </div>
              </div>

              <h3 style={{ fontFamily: "'Cormorant', serif" }} className="text-2xl font-light leading-tight mb-4 group-hover:text-white/90 transition-colors">
                {work.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed group-hover:text-white/60 transition-colors">
                {work.desc}
              </p>

              <div
                className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-700"
                style={{ backgroundColor: work.color }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* About / Skills */}
      <section className="relative z-10 py-24 overflow-hidden">
        <div
          className="absolute right-0 top-0 w-1/2 h-full opacity-10"
          style={{
            backgroundImage: `url(${NEON_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(2) hue-rotate(20deg)",
          }}
        />
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            {/* Photo */}
            <div className="relative">
              <div className="absolute -inset-2 border border-[#FF3D6B]/20" />
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t-2 border-l-2 border-[#FF3D6B]" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b-2 border-r-2 border-[#FF3D6B]" />
              <img
                src={PROFILE_IMAGE}
                alt="Олег Горохов"
                className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                style={{ aspectRatio: "3/4" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
            </div>
            <div className="lg:col-span-2">
              <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-[#FF3D6B] text-xs tracking-[0.4em] uppercase">Обо мне</span>
              <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-5xl lg:text-6xl font-light mt-2 mb-8">
                Слова — это<br /><em className="italic text-[#FFD600]">мой инструмент</em>
              </h2>
              <p className="text-white/50 text-base leading-relaxed mb-6">
                Меня зовут Олег Горохов. Я копирайтер с опытом в B2B и B2C-сегментах. Работал с брендами из e-commerce, EdTech, финтеха и fashion.
              </p>
              <p className="text-white/40 text-base leading-relaxed">
                Верю в то, что хороший текст — это не украшение, а инструмент. Каждое слово должно работать на результат.
              </p>

              <div className="mt-10 flex gap-6">
                {[
                  { icon: "Mail", label: "og.goroh@gmail.com", href: "mailto:og.goroh@gmail.com" },
                  { icon: "Phone", label: "+7 951 567-56-95", href: "tel:+79515675695" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-[#FF3D6B] transition-colors"
                  >
                    <Icon name={c.icon} size={14} />
                    {c.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-white/30 text-xs tracking-[0.4em] uppercase">Навыки</span>
              {skills.map((s, i) => (
                <div key={s.label} className="group">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-white/60 group-hover:text-white transition-colors">{s.label}</span>
                    <span style={{ fontFamily: "'Cormorant', serif" }} className="text-lg text-[#FFD600]">{s.val}%</span>
                  </div>
                  <div className="h-px bg-white/10 relative overflow-hidden">
                    <div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#FF3D6B] to-[#FFD600] transition-all duration-1000"
                      style={{ width: `${s.val}%`, transitionDelay: `${i * 100}ms` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="relative z-10 py-6 border-y border-white/5 overflow-hidden my-8">
        <div
          className="flex gap-12 whitespace-nowrap"
          style={{ animation: "marquee 20s linear infinite" }}
        >
          {Array(3).fill(["Лендинги", "SMM", "Email", "Статьи", "Реклама", "Сторителлинг", "UX-тексты"]).flat().map((t, i) => (
            <span key={i} style={{ fontFamily: "'Cormorant', serif" }} className="text-3xl italic text-white/10 flex items-center gap-12">
              {t} <span className="text-[#FF3D6B] not-italic text-xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Contact */}
      <section id="contact" className="relative z-10 py-32 max-w-6xl mx-auto px-6 text-center">
        <span style={{ fontFamily: "'Oswald', sans-serif" }} className="text-[#FF3D6B] text-xs tracking-[0.4em] uppercase">Контакты</span>
        <h2 style={{ fontFamily: "'Cormorant', serif" }} className="text-5xl lg:text-8xl font-light mt-4 mb-8">
          Есть проект?<br /><em className="italic text-[#FF3D6B]">Давайте</em> поговорим
        </h2>
        <p className="text-white/40 max-w-md mx-auto mb-12 text-base leading-relaxed">
          Расскажите о задаче — обсудим, как тексты могут помочь вашему бизнесу.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="mailto:og.goroh@gmail.com"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="flex items-center gap-3 bg-[#FF3D6B] text-white text-sm tracking-[0.2em] uppercase px-10 py-4 hover:bg-[#e02d5b] transition-all duration-300"
          >
            <Icon name="Mail" size={16} />
            Написать письмо
          </a>
          <a
            href="https://max.ru/og.goroh"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: "'Oswald', sans-serif" }}
            className="flex items-center gap-3 border border-white/20 text-white/70 text-sm tracking-[0.2em] uppercase px-10 py-4 hover:border-white/50 hover:text-white transition-all duration-300"
          >
            <Icon name="MessageCircle" size={16} />
            Написать в Макс
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 py-8 max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <span style={{ fontFamily: "'Cormorant', serif" }} className="text-xl font-light tracking-[0.2em] uppercase text-white/30">
            <span className="text-[#FF3D6B]">О</span>лег Горохов
          </span>
          <span className="text-white/20 text-xs">© 2024 — Копирайтер</span>
        </div>
      </footer>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}