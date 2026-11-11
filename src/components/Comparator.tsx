import React, { useState } from 'react';
import {
  Compass,
  Hammer,
  Users,
  CheckCircle,
  ExternalLink,
  Layers,
} from 'lucide-react';
import { COMPARATOR_SCENARIOS } from '../data/comparatorData';

export const Comparator: React.FC = () => {
  const [selectedScenarioId, setSelectedScenarioId] = useState<(typeof COMPARATOR_SCENARIOS)[number]['id']>('centro');

  const currentScenario =
    COMPARATOR_SCENARIOS.find((s) => s.id === selectedScenarioId) || COMPARATOR_SCENARIOS[0];

  return (
    <section id="comparador" className="py-16 bg-[#FAF8F3] border-b border-[#191716]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Encabezado */}
        <div>
          <div className="space-y-2 max-w-2xl">
            <span className="font-mono-tech text-xs tracking-wider uppercase text-[#FF5900] font-bold">
              03 · CIVIL Y ARQUITECTURA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#191716] tracking-tight">
              Dos profesiones, muchos sectores
            </h2>
            <p className="text-sm sm:text-base text-[#191716]/75">
              Explora cómo trabaja cada profesión en una comunidad, una industria o un puerto. Elige un caso para ver qué puede resolver cada equipo por su cuenta y qué conviene decidir en conjunto.
            </p>
          </div>

        </div>

        <div role="group" aria-label="Elige un caso por sector" className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
          {COMPARATOR_SCENARIOS.map(scenario => (
            <button type="button" key={scenario.id} onClick={() => setSelectedScenarioId(scenario.id)}
              aria-pressed={selectedScenarioId === scenario.id}
              className="grid min-h-[70px] content-center gap-1 rounded-lg border border-[#CFBAA9] bg-white px-2.5 py-2 text-left text-xs font-bold leading-tight text-[#191716] transition-colors hover:bg-[#F7E8D8] aria-pressed:border-[#302118] aria-pressed:bg-[#302118] aria-pressed:text-white">
              <span className="font-mono-tech text-[10px] uppercase">{scenario.sector}</span>
              <span className="text-sm">{scenario.name}</span>
            </button>
          ))}
        </div>

        {/* Resumen del Proyecto */}
        <div className="p-4 rounded-xl bg-white border border-[#191716]/10 flex items-start gap-3">
          <Layers className="w-5 h-5 text-[#FF5900] shrink-0 mt-0.5" />
          <div aria-live="polite" className="text-xs sm:text-sm text-[#191716]/80">
            <strong className="text-[#191716]">{currentScenario.name}.</strong> {currentScenario.context}
          </div>
        </div>

        {/* Dos Columnas de Igual Peso */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Columna 1: Ingeniería Civil */}
          <div className="bg-[#A83A08] text-white rounded-2xl border-2 border-[#84310D] p-6 sm:p-8 space-y-6 shadow-xs relative">
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/35">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-white/15 text-white">
                  <Hammer className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono-tech text-[10px] uppercase font-bold text-white">
                    Física, Mecánica y Viabilidad
                  </span>
                  <h3 className="text-xl font-black text-white">Ingeniería Civil</h3>
                </div>
              </div>
              <span className="text-xs font-bold bg-black/15 px-2.5 py-1 rounded-md text-white border border-white/35">
                Seguridad física
              </span>
            </div>

            {/* Pregunta rectora */}
            <div className="p-4 rounded-xl bg-black/15 border border-white/35 space-y-1">
              <span className="text-[11px] font-mono-tech uppercase font-bold text-white">
                Pregunta rectora
              </span>
              <p className="text-sm font-semibold text-white leading-snug">
                {currentScenario.civil.roleQuestion}
              </p>
            </div>

            {/* Decisiones clave */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-tech uppercase font-bold text-white">
                Decisiones técnicas clave
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-white">
                {currentScenario.civil.keyDecisions.map((dec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-white font-bold mt-0.5">•</span>
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entregables */}
            <div className="space-y-3 pt-4 border-t border-white/35">
              <h4 className="text-xs font-mono-tech uppercase font-bold text-white">
                Ejemplos de entregables
              </h4>
              <ul className="space-y-1.5 text-xs text-white">
                {currentScenario.civil.deliverables.map((ent, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-white shrink-0" />
                    <span>{ent}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-white/35 bg-black/15 p-3 text-sm">
              <h4 className="font-bold">Por su cuenta</h4>
              <p className="mt-1">{currentScenario.civil.independent}</p>
            </div>
          </div>

          {/* Columna 2: Arquitectura */}
          <div className="bg-white rounded-2xl border border-[#191716]/15 p-6 sm:p-8 space-y-6 shadow-xs relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#191716]/10">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#6B3F23]/10 text-[#6B3F23]">
                  <Compass className="w-6 h-6" />
                </div>
                <div>
                  <span className="font-mono-tech text-[10px] uppercase font-bold text-[#6B3F23]">
                    Espacio, Función y Habitabilidad
                  </span>
                  <h3 className="text-xl font-black text-[#191716]">Arquitectura</h3>
                </div>
              </div>
              <span className="text-xs font-bold bg-[#FAF8F3] px-2.5 py-1 rounded-md text-[#191716]/70 border border-[#191716]/10">
                Experiencia humana
              </span>
            </div>

            {/* Pregunta rectora */}
            <div className="p-4 rounded-xl bg-[#FAF8F3] border border-[#191716]/10 space-y-1">
              <span className="text-[11px] font-mono-tech uppercase font-bold text-[#6B3F23]">
                Pregunta rectora
              </span>
              <p className="text-sm font-semibold text-[#191716] leading-snug">
                {currentScenario.architecture.roleQuestion}
              </p>
            </div>

            {/* Decisiones clave */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono-tech uppercase font-bold text-[#191716]/70">
                Decisiones de diseño y programa
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-[#191716]/80">
                {currentScenario.architecture.keyDecisions.map((dec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#6B3F23] font-bold mt-0.5">•</span>
                    <span>{dec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Entregables */}
            <div className="space-y-3 pt-4 border-t border-[#191716]/10">
              <h4 className="text-xs font-mono-tech uppercase font-bold text-[#191716]/70">
                Ejemplos de entregables
              </h4>
              <ul className="space-y-1.5 text-xs text-[#191716]/75">
                {currentScenario.architecture.deliverables.map((ent, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{ent}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-[#D3BFAF] bg-[#FAF8F3] p-3 text-sm">
              <h4 className="font-bold">Por su cuenta</h4>
              <p className="mt-1">{currentScenario.architecture.independent}</p>
            </div>
          </div>
        </div>

        {/* Banda Central Destacada: "Lo que resuelven en equipo" */}
        <div className="rounded-2xl bg-[#191716] text-[#FAF8F3] p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FF5900] text-[#191716]">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold tracking-tight">
                Lo que resuelven en equipo
              </h3>
            </div>
            <div className="text-xs text-[#FAF8F3]/60 italic">
              Colaboración interdisciplinaria continua
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <div className="lg:col-span-7 space-y-3">
              <span className="font-mono-tech text-xs uppercase font-bold text-[#FF5900]">
                Decisión compartida
              </span>
              <p className="text-xs sm:text-sm text-[#FAF8F3]/85 leading-relaxed bg-white/5 p-4 rounded-xl border border-white/10">
                {currentScenario.teamwork.tradeOff}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <span className="font-mono-tech text-xs uppercase font-bold text-[#FF5900]">
                Puntos de encuentro indispensables:
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-[#FAF8F3]/80">
                {currentScenario.teamwork.sharedFocus.map((focus, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#FF5900] font-bold">✓</span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#FAF8F3]/70">
            <p>
              Casos ilustrativos. El alcance de cada profesión depende del proyecto, la especialidad y las responsabilidades del equipo.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://mexico.anahuac.mx/licenciaturas/ingenieria-civil"
                target="_blank"
                rel="noreferrer"
                className="text-[#FF5900] hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Plan Civil Anáhuac</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://mexico.anahuac.mx/licenciaturas/arquitectura"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline font-semibold inline-flex items-center gap-1"
              >
                <span>Plan Arquitectura Anáhuac</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
