# Portfolio de Tadjuidje Kenmeugne Melkior

Portfolio statique (HTML, CSS, JavaScript) de Melkior_Tech : applications Android, développement web, backend PHP et cybersécurité.

## Mise à jour du 18 novembre 2026

- **Nouveaux projets** : Mercure Share et Mercure VPN, présentés en tête de la section « Projets » avec un nouveau filtre « Applications Android ».
  - *Mercure Share* : application Android (Kotlin) qui partage la connexion VPN du téléphone avec un PC, un iPhone, une TV ou une console via Wi-Fi Direct et un proxy HTTP. Android 8 et plus.
  - *Mercure VPN* : application VPN Android (Kotlin) basée sur WireGuard. Le fichier APK s’appelle « Mercury VPN ».
  - Le bouton « Obtenir l’application » ouvre WhatsApp avec un message prérempli : les APK ne sont pas hébergés sur le site.
- **Nouvelle compétence** : « Applications Android » (Kotlin, Android, Coroutines, WireGuard, Wi-Fi Direct) et tag VPN dans « Systèmes & sécurité ».
- **Nouveau design** aux couleurs de Melkior_Tech (bleu nuit, cyan, violet) : thème sombre par défaut (ou selon le réglage de l’appareil), thème clair disponible, polices Space Grotesk / Inter / JetBrains Mono, apparition douce au défilement.
- **Corrections** : la carte MediFlow était en dehors de la grille des projets, et une balise `</div>` en trop cassait la mise en page des sections « À propos » et « Contact ».

- **Finitions** : boutons pleine largeur et statistiques allégées sur mobile, page 404 personnalisée (`404.html`), `robots.txt` et `sitemap.xml` pour Google, icône iPhone (`apple-touch-icon.png`), balises de partage (aperçu du lien sur WhatsApp, Facebook, LinkedIn) et fiche « Person » pour les moteurs de recherche dans `index.html`.

Site en ligne : https://portfolio-melkior.vercel.app

Les interfaces dans les cartes de projets sont des illustrations, pas des captures des applications.

## Fichiers

- `index.html` : contenu du portfolio.
- `style.css` : design responsive, thèmes clair et sombre.
- `script.js` : thème mémorisé, menu mobile, filtres, détails des projets, apparition au défilement et préparation d’un message WhatsApp.
- `Moi.jpg` : photo originale, sans retouche.
- `favicon.svg` : icône du site.
- `vercel.json` : configuration d’un site statique sur Vercel.
- `.nojekyll` : fichier pour GitHub Pages.

## Ouvrir sur ton ordinateur

Ouvre `index.html` dans un navigateur. Aucune installation ni compilation n’est nécessaire. Les polices, les liens vers GitHub, les projets et WhatsApp nécessitent une connexion Internet.

## Vercel

Le site ne demande aucune commande de build : framework **Other**, dossier de sortie `.`.

Pour mettre à jour le dépôt GitHub `Portfolio` (si Vercel y est connecté) : **Add file → Upload files**, dépose les fichiers de ce dossier à la racine du dépôt, puis **Commit changes**. Vercel redéploie automatiquement.

## Personnalisation et contacts

- Texte, photo, projets et liens : `index.html`.
- Couleurs, dimensions, espacement : `style.css` (variables en haut du fichier).
- Description détaillée des projets : l’objet `projects` dans `script.js`.
- Si tu changes de numéro WhatsApp, remplace `237652804382` dans `index.html` **et** `script.js`.
- Le formulaire prépare un message WhatsApp ; le visiteur choisit ensuite de l’envoyer. Il ne stocke pas les messages et n’envoie aucun e-mail.
