import React from 'react';
import { ExternalLink } from 'lucide-react';

export const CIVIL_PROGRAM = 'https://mexico.anahuac.mx/licenciaturas/ingenieria-civil';
const FACULTY = 'https://www.anahuac.mx/mexico/EscuelasyFacultades/ingenieria/';
const SOCIAL_CHANNELS = [
  { name: 'Anáhuac México · Campus Norte', links: [
    { label: 'Facebook', url: 'https://www.facebook.com/UniversidadAnahuac/' },
    { label: 'Instagram', url: 'https://www.instagram.com/uanahuacnorte/' },
    { label: 'Sitio oficial', url: 'https://www.anahuac.mx/mexico/' },
  ] },
  { name: 'Facultad de Ingeniería', links: [
    { label: 'LinkedIn', url: 'https://mx.linkedin.com/company/facultadingenieriaanahuac' },
    { label: 'Sitio oficial', url: FACULTY },
  ] },
  { name: 'Ingeniería Civil', links: [
    { label: 'Sitio de Campus Norte', url: CIVIL_PROGRAM },
    { label: 'Sitio de la Red Anáhuac', url: 'https://www.anahuac.mx/ingenieria-civil' },
  ] },
] as const;

export function InstitutionalBrand() {
  return (
    <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
      <img src="/assets/aistudio/LOGO_ANAHUAC_b64d5445.png" alt="Escudo oficial de la Universidad Anáhuac"
        className="h-10 w-auto shrink-0 object-contain sm:h-12" />
      <div className="min-w-0">
        <p className="text-[11px] leading-tight font-extrabold tracking-tight text-[#191716] uppercase sm:text-sm">Universidad Anáhuac México</p>
        <p className="font-mono-tech mt-0.5 text-[9px] leading-tight font-bold tracking-wide text-[#A53700] uppercase sm:text-[10px]">Campus Norte · Ingeniería Civil</p>
        <p className="mt-0.5 text-[10px] leading-tight font-semibold text-[#573925] sm:text-[11px]">Coordinador de la carrera: Mtro. Joseph Guevara</p>
      </div>
    </div>
  );
}

export function InstitutionalChannels({ dark = false }: { dark?: boolean }) {
  const linkClass = 'inline-flex min-h-[44px] items-center gap-1.5 rounded-md border px-2.5 py-1.5 text-xs font-bold transition-colors ' +
    (dark ? 'border-[#77665B] text-[#FAF8F3] hover:bg-[#3E3029]' : 'border-[#B99B82] bg-white text-[#63351E] hover:bg-[#FFE2CD]');
  return (
    <nav aria-label="Canales de Anáhuac, Facultad de Ingeniería e Ingeniería Civil">
      <div className="grid gap-4 sm:grid-cols-3">
        {SOCIAL_CHANNELS.map(channel => (
          <div key={channel.name}>
            <p className="mb-2 text-sm font-extrabold">{channel.name}</p>
            <ul className="flex flex-wrap gap-1.5">
              {channel.links.map(({ label, url }) => (
                <li key={label}>
                  <a href={url} aria-label={`${label} de ${channel.name}`} target="_blank" rel="noreferrer" className={linkClass}>
                    {label} <ExternalLink size={12} aria-hidden="true" />
                  </a>
                </li>
              ))}
              {channel.name.startsWith('Anáhuac México') && (
                <li><a href="https://linktr.ee/anahuac" target="_blank" rel="noreferrer" className={linkClass}>
                  TikTok · Red Anáhuac <ExternalLink size={12} aria-hidden="true" />
                </a></li>
              )}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}

export const Footer: React.FC = () => (
  <footer>
    <div className="border-t border-[#D9C8BA] bg-white">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <InstitutionalBrand />
      </div>
    </div>
    <div className="bg-[#191716] text-[#FAF8F3]">
      <div className="mx-auto max-w-7xl space-y-7 px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-[1.25fr_1fr_1fr]">
          <div>
            <h2 className="font-mono-tech text-xs font-bold tracking-wider text-[#FF9C65] uppercase">Construye el futuro</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#FAF8F3]/75">
              Orientación vocacional para 5.º de bachillerato y 6.º de Área 1. Explora la Ingeniería Civil en ciudades, comunidades rurales, instalaciones industriales y costas.
            </p>
          </div>
          <div>
            <h2 className="font-mono-tech text-xs font-bold tracking-wider text-[#FF9C65] uppercase">Portales institucionales</h2>
            <ul className="mt-2 space-y-2 text-sm text-[#FAF8F3]/85">
              <li><a href={CIVIL_PROGRAM} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">Ingeniería Civil en Campus Norte <ExternalLink size={13} aria-hidden="true" /></a></li>
              <li><a href="https://mexico.anahuac.mx/licenciaturas/arquitectura" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:underline">Licenciatura en Arquitectura <ExternalLink size={13} aria-hidden="true" /></a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-mono-tech text-xs font-bold tracking-wider text-[#FF9C65] uppercase">Privacidad y ética</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#FAF8F3]/75">Explora el atlas sin registrarte. Las solicitudes se completan desde el sitio institucional.</p>
            <a href="#privacidad" className="mt-2 inline-flex min-h-[44px] items-center text-sm font-bold text-[#FFB08B] underline underline-offset-4">Privacidad y datos</a>
          </div>
        </div>
        <div className="border-t border-white/20 pt-5">
          <h2 className="font-mono-tech mb-4 text-xs font-bold tracking-wider text-[#FF9C65] uppercase">Redes y sitios oficiales</h2>
          <InstitutionalChannels dark />
        </div>
        <p className="border-t border-white/20 pt-4 text-xs text-[#FAF8F3]/65">Prototipo de orientación vocacional. Territorios y casos ilustrativos. © 2026 Universidad Anáhuac México · Campus Norte.</p>
      </div>
    </div>
  </footer>
);
