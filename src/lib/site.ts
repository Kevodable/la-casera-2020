import { getCollection, type CollectionEntry } from 'astro:content';
import site from '../data/site.json';

export type Evento = CollectionEntry<'eventi'>;

/* ---------------------------------------------------------------
   Date, in italiano
   --------------------------------------------------------------- */

const fmtLunga = new Intl.DateTimeFormat('it-IT', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Rome',
});

const fmtMedia = new Intl.DateTimeFormat('it-IT', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'Europe/Rome',
});

const fmtBreve = new Intl.DateTimeFormat('it-IT', {
  day: '2-digit',
  month: 'short',
  year: 'numeric',
  timeZone: 'Europe/Rome',
});

export const dataLunga = (d: Date) => fmtLunga.format(d);
export const dataMedia = (d: Date) => fmtMedia.format(d);
export const dataBreve = (d: Date) => fmtBreve.format(d);

/** Formato ISO 8601 richiesto da schema.org e dall'attributo datetime. */
export const dataIso = (d: Date) => d.toISOString().slice(0, 10);

/* ---------------------------------------------------------------
   Mappe
   --------------------------------------------------------------- */

export const mapsEmbedUrl = (query: string) =>
  `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;

export const mapsDirUrl = (query: string, mode: 'driving' | 'bicycling' | 'transit' | 'walking') =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}&travelmode=${mode}`;

/* ---------------------------------------------------------------
   Eventi
   --------------------------------------------------------------- */

/** Un evento resta "in corso" per tutto il suo giorno. */
export function isPassato(evento: Evento, now = new Date()): boolean {
  const fine = new Date(evento.data.data);
  fine.setHours(23, 59, 59, 999);
  return fine.getTime() < now.getTime();
}

/** Tutti gli eventi, dal piu' recente al piu' vecchio. */
export async function getEventi(): Promise<Evento[]> {
  const eventi = await getCollection('eventi');
  return eventi.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

export async function getEventiFuturi(): Promise<Evento[]> {
  const eventi = await getEventi();
  return eventi.filter((e) => !isPassato(e)).reverse();
}

export async function getEventiPassati(): Promise<Evento[]> {
  const eventi = await getEventi();
  return eventi.filter((e) => isPassato(e));
}

/** L'evento che occupa la home in modalita' evento: il prossimo non annullato. */
export async function getProssimoEvento(): Promise<Evento | undefined> {
  const futuri = await getEventiFuturi();
  return futuri.find((e) => !e.data.annullato);
}

/* ---------------------------------------------------------------
   Modalita' della home (brief §1 e §6, F0)
   --------------------------------------------------------------- */

export type ModalitaHome = 'evento' | 'istituzionale';

/**
 * "auto" e' il default: la home passa in modalita' evento quando c'e' un evento
 * futuro e torna istituzionale il giorno dopo, senza che nessuno debba ricordarsene.
 * Le due modalita' esplicite servono per forzare la scelta dal CMS.
 */
export async function getModalitaHome(): Promise<{ modalita: ModalitaHome; evento?: Evento }> {
  const evento = await getProssimoEvento();
  const impostazione = (site.modalitaHome ?? 'auto') as 'auto' | ModalitaHome;

  if (impostazione === 'istituzionale') return { modalita: 'istituzionale', evento };
  if (impostazione === 'evento' && evento) return { modalita: 'evento', evento };
  if (impostazione === 'auto' && evento) return { modalita: 'evento', evento };
  return { modalita: 'istituzionale', evento };
}

/* ---------------------------------------------------------------
   Sponsor
   --------------------------------------------------------------- */

const PESO_LIVELLO = { oro: 0, argento: 1, bronzo: 2, partner: 3 } as const;

export async function getSponsor() {
  const sponsor = await getCollection('sponsor', ({ data }) => data.attivo);
  return sponsor.sort(
    (a, b) =>
      PESO_LIVELLO[a.data.livello] - PESO_LIVELLO[b.data.livello] ||
      a.data.ordine - b.data.ordine ||
      a.data.nome.localeCompare(b.data.nome, 'it')
  );
}

/* ---------------------------------------------------------------
   News
   --------------------------------------------------------------- */

export async function getNews() {
  const news = await getCollection('news', ({ data }) => !data.bozza);
  return news.sort((a, b) => b.data.data.getTime() - a.data.data.getTime());
}

/* ---------------------------------------------------------------
   Utility
   --------------------------------------------------------------- */

/** Scarta i valori non compilati: meglio nascondere un numero che inventarlo. */
export const compilati = <T extends { valore?: string }>(voci: T[]) =>
  voci.filter((v) => (v.valore ?? '').trim().length > 0);

export const instagramUrl = (handle: string) =>
  `https://instagram.com/${handle.replace(/^@/, '')}`;

/**
 * Link "mailto:" per i form del sito: niente backend, quindi il CTA apre il
 * client email dell'utente con oggetto/corpo precompilati. Da sostituire con
 * un vero servizio di form (es. Netlify Forms, Formspree) quando ce n'e' uno.
 */
export const mailtoUrl = (email: string, subject: string, body?: string) => {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${email}?${params.toString()}`;
};

/**
 * Aggiunge il `base` configurato in astro.config.mjs a un percorso assoluto.
 * Serve per i link scritti a mano (nav, CTA, favicon...): astro:assets e il
 * routing di Astro gestiscono gia' da soli il base, questi no.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
export const withBase = (path: string) => `${BASE}${path}`;

export { site };
