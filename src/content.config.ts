import { defineCollection, reference, z } from 'astro:content';
import { glob } from 'astro/loaders';

/*
  Modello dei contenuti.

  Tutto cio' che sta qui e' modificabile dal pannello /admin senza toccare il codice
  (brief §6, F0). Le immagini vivono in src/assets/uploads: cosi' Astro le converte
  in WebP e genera lo srcset da solo (brief §7, performance).
*/

const luogo = z.object({
  nome: z.string(),
  indirizzo: z.string(),
  citta: z.string(),
  provincia: z.string().default('TV'),
  /** Query usata per la mappa e per i link "apri in Maps". */
  mapsQuery: z.string(),
  noteParcheggio: z.string().optional(),
});

const eventi = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/eventi' }),
  schema: ({ image }) =>
    z.object({
      titolo: z.string(),
      sottotitolo: z.string().optional(),
      /** Riga breve usata nelle card e nei meta tag. */
      descrizione: z.string(),
      data: z.coerce.date(),
      orari: z.string(),
      /** Skin grafica applicata alla pagina evento. Vedi src/styles/tokens.css. */
      skin: z.enum(['sagra', 'notte', 'estate']).default('sagra'),
      annullato: z.boolean().default(false),
      ingressoGratuito: z.boolean().default(true),
      luogo,
      copertina: image().optional(),
      copertinaAlt: z.string().default(''),
      /** Parole che scorrono nel nastro sotto l'hero. */
      marquee: z.array(z.string()).default([]),
      programma: z
        .array(
          z.object({
            ora: z.string(),
            evento: z.string(),
            nota: z.string().optional(),
            rilievo: z.enum(['basso', 'medio', 'alto']).default('basso'),
          })
        )
        .default([]),
      highlights: z
        .array(
          z.object({
            icona: z.string(),
            titolo: z.string(),
            testo: z.string(),
          })
        )
        .default([]),
      lineup: z
        .array(
          z.object({
            nome: z.string(),
            ruolo: z.string(),
            orario: z.string().optional(),
            foto: image().optional(),
          })
        )
        .default([]),
      cucina: z
        .object({
          titolo: z.string().default('Cucina e mercatino'),
          testo: z.string(),
        })
        .optional(),
      preiscrizione: z
        .object({
          attiva: z.boolean().default(true),
          titolo: z.string().default('Prenota il tuo posto'),
          testo: z.string().default('Ci serve solo per capire quanti saremo. Niente biglietti, niente costi.'),
          /** Prova sociale in front: "gia N persone hanno confermato". */
          contatoreVisibile: z.boolean().default(false),
          contatore: z.number().optional(),
        })
        .default({
          attiva: true,
          titolo: 'Prenota il tuo posto',
          testo: 'Ci serve solo per capire quanti saremo. Niente biglietti, niente costi.',
          contatoreVisibile: false,
        }),
      faq: z
        .array(
          z.object({
            domanda: z.string(),
            risposta: z.string(),
          })
        )
        .default([]),
      /** Sponsor specifici dell'evento; se vuoto mostra quelli dell'associazione. */
      sponsor: z.array(reference('sponsor')).default([]),
      galleria: reference('galleria').optional(),
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: ({ image }) =>
    z.object({
      titolo: z.string(),
      data: z.coerce.date(),
      estratto: z.string(),
      copertina: image().optional(),
      copertinaAlt: z.string().default(''),
      bozza: z.boolean().default(false),
    }),
});

const galleria = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/galleria' }),
  schema: ({ image }) =>
    z.object({
      titolo: z.string(),
      anno: z.number(),
      data: z.coerce.date().optional(),
      descrizione: z.string().optional(),
      copertina: image(),
      copertinaAlt: z.string().default(''),
      foto: z
        .array(
          z.object({
            src: image(),
            alt: z.string().default(''),
          })
        )
        .default([]),
      /** Solo embed: ospitare i video costa e pesa (brief §6, F3). */
      video: z
        .array(
          z.object({
            titolo: z.string(),
            url: z.string().url(),
          })
        )
        .default([]),
    }),
});

const sponsor = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sponsor' }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      logo: image(),
      url: z.string().url().optional(),
      livello: z.enum(['oro', 'argento', 'bronzo', 'partner']).default('bronzo'),
      ordine: z.number().default(100),
      attivo: z.boolean().default(true),
    }),
});

const direttivo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/direttivo' }),
  schema: ({ image }) =>
    z.object({
      nome: z.string(),
      ruolo: z.string(),
      foto: image().optional(),
      ordine: z.number().default(100),
    }),
});

export const collections = { eventi, news, galleria, sponsor, direttivo };
