# La Casera 2020 — sito web

Sito istituzionale dell'Associazione di volontariato La Casera 2020 (Cappella Maggiore, TV). Costruito con [Astro](https://astro.build), output statico.

Il brief di progetto è in [`brief.md`](./brief.md) — è la fonte di verità per contenuti, tono e funzionalità (F0, F3, ecc. citate nei commenti del codice si riferiscono ai paragrafi del brief).

## Sviluppo

```sh
npm install
npm run dev       # http://localhost:4321
```

| Comando           | Azione                                          |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installa le dipendenze                           |
| `npm run dev`     | Avvia il server di sviluppo locale                |
| `npm run build`   | Compila il sito statico in `./dist/`              |
| `npm run preview` | Serve `./dist/` localmente per un ultimo check    |
| `npm run astro check` | Type-check di componenti e content collections |

## Struttura

```
/
├── public/                 asset statici (favicon, apple-touch-icon, ecc.)
├── src/
│   ├── assets/             immagini processate da Astro (logo, upload)
│   ├── components/         Header, Footer, BaseHead (SEO), CookieBanner
│   ├── content/            content collections (eventi, news, galleria, sponsor, direttivo)
│   ├── content.config.ts   schema Zod delle collection
│   ├── data/                testi/dati home, associazione, associati, sponsor, contatti (JSON)
│   ├── layouts/Base.astro  layout condiviso: head, header, footer, cookie banner
│   ├── lib/site.ts         helper (date, mappe, modalità home, sponsor/eventi ordinati)
│   ├── styles/             tokens.css (design token) + global.css
│   └── pages/               una pagina per rotta
└── astro.config.mjs
```

### Design tokens e skin evento

`src/styles/tokens.css` definisce due livelli di colore (brief §5): la palette permanente dell'associazione (`:root`) e skin temporanee per evento (`[data-skin="sagra|notte|estate"]`), applicate passando `skin` al layout `Base`. Non toccare i colori nelle singole pagine: si passa sempre dai token.

### Home dinamica (evento / istituzionale)

La home (`src/pages/index.astro`) sceglie da sola la modalità (brief §1, §6 F0) tramite `getModalitaHome()` in `src/lib/site.ts`: mostra l'evento futuro più vicino se c'è, altrimenti la modalità istituzionale. Si forza da `src/data/site.json` (`modalitaHome: "evento" | "istituzionale" | "auto"`).

## Stato

- **Fatto:** Home (entrambe le modalità), `/associazione`, `/eventi` (indice + dettaglio dinamico da content collection), `/associati`, `/sponsor`, `/contatti` (con mappa a consenso, brief §7), `/galleria`.
- **Da fare:** `/news`, `/privacy`, `/cookie` — i link di navigazione verso queste tre rotte per ora non risolvono (404). I form di contatto (associati, sponsor, contatti) sono CTA `mailto:` — nessun backend collegato: da sostituire con un vero servizio (Netlify Forms, Formspree...) quando ce n'è uno.
- **Terminologia:** chi entra in associazione è un **associato**, non un "socio" — nessun potere decisionale/di voto, solo vantaggi (sconti sugli eventi, inviti prioritari). Non usare "socio" da nessuna parte nei contenuti.
- Le collection `galleria`, `sponsor`, `news`, `direttivo` sono vuote (nessun file in `src/content/*`): le relative sezioni di home/pagine si nascondono automaticamente finché non vengono aggiunti contenuti.

## Deploy

Il sito è statico: `npm run build` produce `./dist/`, da caricare sullo spazio di hosting scelto. Nessuna configurazione server-side richiesta. Prima del primo deploy in produzione, aggiornare `SITE_URL` in `src/config.js` con il dominio definitivo (alimenta canonical, Open Graph e sitemap).

### Anteprima su GitHub Pages

Il push su `main` builda e pubblica automaticamente su GitHub Pages (`.github/workflows/deploy.yml`) all'indirizzo https://kevodable.github.io/la-casera-2020/. Astro usa un `base` diverso in questo caso (`GITHUB_PAGES=true` in `astro.config.mjs`) per far funzionare i link nel sottopercorso — in produzione, con dominio proprio, questa variabile non va impostata.
