# CLAUDE.md — Client Combaluzier

Site vitrine de JOY'S Personal Shopper (Claire Combaluzier, Montpellier) : accueil, services, tarifs, contact, mentions légales. Next.js 15 (App Router) + React 19 + Tailwind 3, `output: "standalone"`. Le package s'appelle `joys-personal-shopper`, le dossier local `client-combaluzier-test`, le repo GitHub `mrzeepek/client-combaluzier` (remote `origin`, branche `master`).

## Commandes

```bash
pnpm dev          # next dev -p 3005
pnpm build        # next build
pnpm type-check   # tsc --noEmit
pnpm lint         # next lint (ESLint est ignoré pendant `next build`, voir next.config.ts)
```

## Règles du projet

- Contenu en français. Ne pas modifier les textes, prix ou photos sans validation du client.
- Chaque page a des métadonnées SEO : `export const metadata` local, ou celles par défaut de `app/layout.tsx` (cas de l'accueil).
- Navigation transparente sur desktop et mobile (`components/Navigation.tsx`) : tester les deux breakpoints à chaque changement.
- `DESIGN.md` est un design system Notion pris comme référence d'inspiration, pas la charte du client. Ne pas le suivre à la lettre.

## Contact (Resend)

`app/api/contact/route.ts` envoie le formulaire via Resend avec `RESEND_API_KEY` (dans `.env.local`, ignoré par Git). L'expéditeur est encore `onboarding@resend.dev` : à remplacer par une adresse du domaine du client une fois le domaine vérifié dans Resend.

## Déploiement

Seul environnement existant : preview sur le VPS, https://preview-combaluzier.creamix.io (conteneur `joys-combaluzier-preview`, image `joys-personal-shopper:latest`, dossier `/home/data/sites/joys-combaluzier` avec son `docker-compose.yml`, derrière Traefik).

Le `Dockerfile` construit avec pnpm (`pnpm install --frozen-lockfile`, `pnpm build`) et sert `node server.js` sur le port 3000. Pas de CI, déploiement manuel (skill `/deploy-client combaluzier`, dont la table pointe vers un dossier `~/apps/client-combaluzier` qui n'existe pas ici).
