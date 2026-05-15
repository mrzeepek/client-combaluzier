# CLAUDE.md — Client Combaluzier

## Projet
Site vitrine/test pour le client Combaluzier. Next.js + Tailwind, nav transparente, photos, hero.

## Stack
- **Framework** : Next.js (App Router)
- **Styling** : Tailwind CSS
- **Images** : next/image

## Structure
```
app/
  page.tsx          → Landing avec hero + photos
  (navigation transparente desktop/mobile)
```

## Règles
- **Langue du contenu** : français
- **Commits** : anglais, conventionnels (feat:, fix:, chore:)
- **Pas de npm** → pnpm uniquement
- **SEO** : chaque page doit avoir des métadonnées
- **Pas de commit direct sur master** → passer par une branche
- **Pas de modifications de contenu sans validation client**
- **Navigation** : header transparent sur desktop + mobile, gérer les breakpoints proprement

## ⚠️ Attention
- Pas de remote git configuré → créer un repo GitHub et ajouter le remote
- Risque de perte de travail sans backup git

## Déploiement
- Vérifier le build avant de push : `pnpm build`