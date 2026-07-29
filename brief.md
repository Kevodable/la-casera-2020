# Brief sito web — Associazione La Casera 2020

**Versione:** 1.0
**Data:** 13 luglio 2026
**Referente:** Kevin
**Fornitore identità visiva:** Nolita (grafiche social, video promo, materiali ADV)

---

## 1. Perimetro

Sito **istituzionale dell'associazione La Casera 2020** con una **sezione eventi** al suo interno.

Non è il sito dell'evento *Casera Italiana*: è il sito dell'associazione, di cui *Casera Italiana* è il primo evento in evidenza. Questa distinzione è la scelta strutturale più importante del progetto e va difesa in fase di design: se il sito diventa "la landing di un party", tra tre mesi è morto.

**Ciclo di vita del sito**
- **Modalità evento** (settimane prima → giorno dell'evento): l'evento in corso occupa la home, CTA pre-iscrizione in primo piano.
- **Modalità istituzionale** (resto dell'anno): l'associazione occupa la home, gli eventi passati diventano galleria e prova sociale, la CTA passa a "Diventa socio" / "Diventa sponsor".

Il tema deve permettere questo switch **senza rifare il sito** — vedi §6 (Funzionalità F0).

---

## 2. Obiettivi

### Obiettivo primario
**Far conoscere l'associazione** — chi siamo, cosa facciamo, perché esistiamo. Chi arriva dal volantino, dal QR o dal profilo Instagram deve capire in 10 secondi che dietro l'evento c'è un'organizzazione seria e continuativa, non un gruppo improvvisato.

### Obiettivi secondari (in ordine)
1. **Acquisire soci / tesserati** — convertire simpatizzanti e partecipanti agli eventi in soci.
2. **Attrarre sponsor e partner** — dare agli sponsor una vetrina reale e una ragione per pagare (visibilità, numeri, credibilità).
3. **Raccogliere pre-iscrizioni** agli eventi — funzione operativa: stimare le presenze per dimensionare cucina, staff, sicurezza. Non è l'obiettivo del sito, è uno strumento del sito.

### Metriche di successo (a 6 mesi)
| Obiettivo | Metrica | Target indicativo |
|---|---|---|
| Far conoscere | Visitatori unici / tempo medio su "Chi siamo" | — da definire con baseline |
| Soci | Richieste di tesseramento dal sito | — |
| Sponsor | Contatti sponsor qualificati ricevuti | — |
| Pre-iscrizioni | N. pre-iscritti vs. presenze reali (accuratezza stima) | scarto < 25% |

> **Da compilare da Kevin:** target numerici realistici. Senza numeri il sito non è misurabile.

---

## 3. Pubblico

Quattro pubblici, con bisogni diversi. Il sito deve servirli tutti senza confonderli.

### A. Il partecipante / simpatizzante *(volume più alto)*
Giovani e famiglie del trevigiano, comunità locale. Arriva da Instagram, WhatsApp, passaparola, volantino, QR.
**Vuole sapere:** quando, dove, quanto costa, cosa si mangia, si può portare i bambini, come ci arrivo, dove parcheggio.
**Domanda a cui il sito deve rispondere in 5 secondi:** *"Vale la pena venirci?"*
**Device:** mobile, quasi sempre. Spesso su rete lenta, spesso in movimento.

### B. Il socio potenziale
Ha già partecipato a un evento, conosce qualcuno dell'associazione, si è divertito.
**Vuole sapere:** cosa fa l'associazione tutto l'anno, cosa comporta essere socio (costi, impegno, benefici), come ci si iscrive.
**Domanda:** *"Cosa ci guadagno e cosa mi costa?"*

### C. Lo sponsor / partner commerciale
Attività locale, azienda del territorio, fornitore.
**Vuole sapere:** quante persone raggiungete, che visibilità ottengo, quanto costa, chi sono gli altri sponsor.
**Domanda:** *"Questi sono seri? Ci sono i numeri?"*
**Nota:** è l'unico pubblico che vuole **dati**, non atmosfera. Ha bisogno di una sezione dedicata con numeri concreti (edizioni, presenze, reach social) e un contatto diretto.

### D. Istituzioni / stampa locale *(bassa frequenza, alto impatto)*
Comune, Pro Loco, giornali locali.
**Vuole:** dati ufficiali dell'associazione, logo scaricabile, contatto referente, comunicati.
**Basta:** un footer curato + una pagina "Contatti e stampa".

---

## 4. Struttura e sezioni

Architettura: **home istituzionale + pagine di approfondimento**. Non one-page — un one-page non regge quattro pubblici.

### Home
| # | Sezione | Contenuto | CTA |
|---|---|---|---|
| 1 | **Hero** | Identità dell'associazione + evento in evidenza (in modalità evento) | *Pre-iscriviti* (evento) / *Scopri chi siamo* |
| 2 | **Chi siamo (sintesi)** | 3 righe + 3 numeri chiave (anno di fondazione, n. eventi, n. soci) | *Leggi la nostra storia* |
| 3 | **Prossimo evento** | Card evento: nome, data, luogo, cosa succede | *Pre-iscriviti* |
| 4 | **Cosa facciamo** | 3-4 card: eventi, comunità, territorio, volontariato | — |
| 5 | **Galleria** | Carosello foto/video edizioni passate — la prova sociale più forte che avete | *Vedi tutte le foto* |
| 6 | **Diventa socio** | Blocco a contrasto, benefici in bullet | *Voglio iscrivermi* |
| 7 | **Sponsor** | Loghi partner + invito a diventare sponsor | *Diventa sponsor* |
| 8 | **Dove siamo / Contatti** | Mappa, indirizzo, social | — |
| 9 | **Footer** | Dati associazione, CF/P.IVA, privacy, cookie, credits | — |

### Pagine interne
- **/associazione** — Storia, missione, statuto (PDF), direttivo, valori.
- **/eventi** — Elenco eventi: prossimi + archivio. Ogni evento ha la sua pagina.
- **/eventi/casera-italiana** — Pagina evento completa (vedi struttura sotto).
- **/soci** — Come diventare socio: quota, benefici, form di richiesta.
- **/sponsor** — Perché sponsorizzare: numeri, pacchetti, form contatto.
- **/galleria** — Foto e video per edizione.
- **/news** — Comunicazioni, aggiornamenti (anche pochi post, ma vivi).
- **/contatti** — Contatti, mappa, area stampa (logo, comunicati).
- **/privacy** e **/cookie** — Obbligatorie (vedi §7).

### Struttura pagina evento (template riutilizzabile)
1. Hero evento — nome, data, luogo, CTA pre-iscrizione
2. Cos'è — cosa succede, il format
3. Programma / timeline della serata
4. Line-up e attrazioni
5. Cucina e mercatino
6. Come arrivare — mappa, parcheggi, mezzi
7. FAQ — ingresso, bambini, cani, pagamenti, maltempo
8. Pre-iscrizione (form)
9. Sponsor dell'evento

> **Il template evento va costruito una volta e riusato.** Il secondo evento non deve costare come il primo.

#### Dati evento in evidenza — *Casera Italiana*
- **Data:** sabato 10 ottobre 2026
- **Orari:** apertura cancelli 15:00 → fino a notte
- **Luogo:** Area Primo Maggio, Via Masarè 14a, 31012 Cappella Maggiore (TV)
- **Format:** party itinerante con show di 4 ore (2 DJ di prima fascia, gruppo di animazione con ballerine, VJ con led-wall, fotografo, content creator, ragazze immagine, gadget a tema) + band live **Absolut 5** come main event + cucina aperta tutta la sera + mercatino

---

## 5. Tono di voce e stile

### Tono di voce
Festoso, informale, diretto, **caldo ma non chiassoso**. Parla come una persona del posto che ti invita, non come un'agenzia di eventi.

**Regole:**
- Dare del "tu", sempre.
- Frasi corte. Un'idea per frase.
- Zero gergo associativo ("l'Associazione si propone di promuovere attività ricreative volte a...") → morte del sito.
- Concretezza: nomi, date, cifre, luoghi. Non "un'esperienza indimenticabile", ma "quattro ore di show e la cucina aperta fino a notte".
- **Registro variabile per pubblico**: festoso sulle pagine evento, sobrio e credibile sulla pagina sponsor.

### Esempi di copy

**Hero — sì**
> **La Casera 2020**
> Facciamo succedere le cose a Cappella Maggiore.
> Il 10 ottobre torna Casera Italiana.

**Hero — no**
> ~~Benvenuti nel sito ufficiale dell'Associazione La Casera 2020, un punto di riferimento per il territorio.~~
> *(Non dice niente. "Benvenuti nel sito ufficiale" è spazio sprecato.)*

**Chi siamo — sì**
> Siamo un gruppo di volontari di Cappella Maggiore. Organizziamo feste, sagre e serate che riempiono la piazza. Dal 2020 a oggi: 12 eventi, oltre 5.000 persone, zero sponsor scontenti.

**Chi siamo — no**
> ~~L'associazione si prefigge lo scopo di promuovere attività di carattere ricreativo, culturale e aggregativo sul territorio comunale.~~
> *(È lo statuto. Lo statuto va in PDF, non in home.)*

**Diventa socio — sì**
> **Vieni dentro.**
> 20€ l'anno. Entri gratis agli eventi, decidi cosa organizziamo, e trovi un gruppo che si diverte a lavorare.
> [ Voglio iscrivermi ]

**Sponsor — sì** *(registro diverso: qui servono numeri, non entusiasmo)*
> **Il tuo marchio davanti a 2.000 persone.**
> Casera Italiana porta migliaia di persone in un solo giorno, con copertura social prima, durante e dopo l'evento. Tre pacchetti di visibilità, dal logo sul palco al brand integrato nello show.
> [ Chiedi il listino ]

**Microcopy form — sì**
> Campo: *Quante persone porti con te?*
> Sotto: "Serve solo a farci un'idea. Nessun impegno, nessun biglietto."

**Microcopy form — no**
> ~~"I dati saranno trattati ai sensi del Regolamento UE 2016/679..."~~ *(in evidenza — spaventa. La privacy va linkata, non urlata.)*

**FAQ — sì**
> **Posso portare i bambini?** Sì, l'area è tranquilla fino alle 20. Dopo si alza il volume.
> **Se piove?** Si fa lo stesso, l'area è coperta. Se dovesse saltare, lo scriviamo qui e sui social.

### Stile visivo
**Vincolo primario:** l'identità grafica di *Casera Italiana* è in produzione da **Nolita**. Il sito **deve dialogare con quella identità, non inventarne una parallela**.

**Ma attenzione:** l'identità Nolita è dell'**evento**, non dell'**associazione**. Servono quindi due livelli:

- **Livello associazione (permanente):** palette e tipografia sobrie e riconoscibili, costruite intorno al logo La Casera 2020. Deve reggere anche tra tre anni, con altri eventi.
- **Livello evento (temporaneo):** le pagine evento adottano il key visual Nolita — palette, font display, elementi grafici del format.

Il sito è il contenitore stabile; l'evento è lo skin.

**Direzione visiva (in attesa dei materiali Nolita)**
- **Palette:** base neutra calda per l'istituzionale + accenti vivaci per l'evento. Proporre 2-3 palette compatibili con l'estetica "festa italiana".
- **Tipografia:** display espressivo per i titoli, sans-serif molto leggibile per il corpo (il pubblico include over 50 su mobile).
- **Fotografia:** foto reali delle edizioni passate, sempre. Zero stock photo. Facce, cibo, palco, folla — meglio una foto vera sgranata che una perfetta e finta.
- **Elementi:** forme dinamiche, spazio ampio per foto e video, integrazione del logo La Casera 2020 e del lettering Casera Italiana.

> **Azione richiesta:** chiedere a Nolita key visual, palette, font e asset grafici **prima** del design definitivo. In fase di mockup si procede con la direzione qui sopra e ci si allinea all'arrivo dei materiali.

---

## 6. Funzionalità

### Must have

**F0 — Gestione contenuti (CMS)**
Kevin (o un socio) deve poter aggiornare eventi, foto, news e sponsor **senza toccare il codice**. Se ogni modifica passa da uno sviluppatore, il sito si fossilizza al primo evento. Requisito non negoziabile.
Include lo **switch home evento/istituzionale** come impostazione, non come intervento di sviluppo.

**F1 — Form pre-iscrizione**
- Campi: nome, cognome, email, telefono, **numero di persone**, evento di riferimento, consenso privacy, opt-in newsletter (separato).
- Anti-spam (honeypot o captcha leggero — no captcha invasivi).
- Email di conferma automatica al partecipante.
- **Export CSV/Excel** dei pre-iscritti — serve per dimensionare cucina e staff.
- Contatore pre-iscritti visibile in backend (opzionale in front: "già 340 persone hanno confermato" — potente prova sociale).

**F2 — Form contatti differenziati**
Tre form, tre destinazioni diverse: *contatto generico*, *richiesta tesseramento*, *richiesta sponsor*. Un form generico unico mescola tutto e fa perdere gli sponsor.

**F3 — Galleria foto e video**
- Organizzata per evento/edizione.
- Video: embed YouTube/Instagram (non hosting diretto — pesa e costa).
- **Lazy loading + compressione automatica**: la galleria è il posto dove i siti di associazioni muoiono in termini di performance.

**F4 — Calendario eventi + news**
- Elenco eventi: prossimi / passati, con archivio.
- Ogni evento è un contenuto strutturato (data, luogo, descrizione, immagine, stato).
- News: sezione semplice, anche pochi post ma aggiornati.

**F5 — Sezione sponsor**
- Griglia loghi con link, ordinabile per livello (oro/argento/bronzo o simili).
- Pagina "Diventa sponsor" con numeri, pacchetti e form dedicato.

**F6 — Mappa e come arrivare**
Mappa integrata (Google Maps embed o alternativa leggera), indirizzo, indicazioni parcheggio, link "Apri in Maps" — su mobile è il click più usato il giorno dell'evento.

**F7 — Social feed / link social**
Link social ben visibili. Feed Instagram embeddato **solo se non degrada le performance** — altrimenti una griglia statica di foto aggiornata dal CMS ottiene lo stesso effetto a costo zero.

### Nice to have (fase 2)
- Newsletter (integrazione Mailchimp/Brevo) alimentata dall'opt-in del form
- Tesseramento online con pagamento
- Area riservata soci
- Countdown all'evento in hero
- Condivisione WhatsApp con testo precompilato (canale n.1 del passaparola locale)
- QR code evento generato dal CMS per volantini e materiali

### Fuori scope (v1)
- Vendita biglietti / ticketing
- E-commerce gadget
- Multilingua

---

## 7. Requisiti tecnici e legali

**Tecnici**
- **Mobile-first.** Oltre l'80% del traffico sarà da smartphone. Il design si progetta sul mobile e si adatta al desktop, non il contrario.
- **Performance:** obiettivo Lighthouse > 85 su mobile. Immagini in WebP, lazy loading, niente librerie inutili.
- **SEO locale:** title/description per pagina, dati strutturati `Event` e `Organization` (schema.org), Google Business Profile collegato. Chi cerca "eventi Cappella Maggiore ottobre" deve trovarvi.
- **Open Graph:** ogni pagina evento deve avere anteprima corretta quando condivisa su WhatsApp e Instagram. È il canale principale — se l'anteprima è rotta, il passaparola perde metà della forza.
- **Hosting:** dominio dedicato, HTTPS, backup automatici.
- **Analytics:** tracciamento base + evento "pre-iscrizione completata" come conversione.

**Legali (obbligatori)**
- Privacy policy e cookie policy conformi GDPR
- Cookie banner con consenso granulare
- Registro/base giuridica per i dati raccolti dai form
- Dati identificativi dell'associazione nel footer (denominazione, sede, codice fiscale)

---

## 8. Decisioni aperte — da chiudere prima del design

| # | Domanda | Chi risponde |
|---|---|---|
| 1 | Anno di fondazione, n. soci, n. eventi fatti, presenze medie — **servono numeri reali** per home e pagina sponsor | Kevin |
| 2 | Quota associativa e benefici concreti del socio | Kevin / direttivo |
| 3 | Pacchetti sponsor: quanti livelli, cosa includono, prezzi | Kevin / direttivo |
| 4 | Chi aggiorna il sito dopo il lancio? (determina la scelta del CMS) | Kevin |
| 5 | Esiste archivio foto/video delle edizioni passate? In che stato? | Kevin |
| 6 | Dominio: già registrato? Quale? | Kevin |
| 7 | Key visual, palette, font del format Casera Italiana | **Nolita** |
| 8 | Budget e deadline (l'evento è il 10 ottobre → il sito deve essere online **entro fine agosto** per reggere la campagna) | Kevin |

---

## 9. Timeline suggerita

| Fase | Attività | Scadenza indicativa |
|---|---|---|
| 1 | Chiusura decisioni aperte + materiali Nolita | fine luglio |
| 2 | Wireframe e struttura contenuti | inizio agosto |
| 3 | Design UI (istituzionale + skin evento) | metà agosto |
| 4 | Sviluppo + CMS | fine agosto |
| 5 | Contenuti, test, go-live | **inizio settembre** |
| 6 | Campagna di pre-iscrizione | settembre → 10 ottobre |

> Il sito deve essere online **almeno 5-6 settimane prima dell'evento**. Un sito pubblicato a settembre inoltrato non ha tempo di raccogliere pre-iscrizioni utili a dimensionare la serata.
