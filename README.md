# Reviews Maps Pro - Site Web

Un site web moderne et interactif pour la vente de reviews Google Maps, développé avec React et Tailwind CSS.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec Tailwind CSS
- **Navigation fluide** avec React Router
- **SEO optimisé** avec des balises meta et structure sémantique
- **Pages complètes** : Accueil, Tarifs, Blog, À propos, Contact
- **Animations et interactions** pour une expérience utilisateur optimale
- **Schéma de couleurs professionnel** : Bleu (#1976D2), Orange (#FB8C00)

## 📁 Structure du projet

```
src/
├── components/
│   ├── Navbar.js          # Barre de navigation fixe
│   ├── Footer.js          # Pied de page avec liens
│   └── SEOHead.js         # Composant pour l'optimisation SEO
├── pages/
│   ├── Home.js            # Page d'accueil avec hero section
│   ├── Pricing.js         # Page tarifs avec 3 packs
│   ├── Blog.js            # Page blog avec articles
│   ├── About.js           # Page à propos avec équipe
│   └── Contact.js         # Page contact avec formulaire
├── App.js                 # Composant principal avec routing
├── index.js               # Point d'entrée de l'application
└── index.css              # Styles Tailwind CSS
```

## 🛠️ Installation et utilisation

### Prérequis
- Node.js (version 14 ou supérieure)
- npm ou yarn

### Installation

1. **Cloner le projet**
   ```bash
   git clone <url-du-repo>
   cd reviews-maps-website
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   ```

3. **Lancer le serveur de développement**
   ```bash
   npm start
   ```

4. **Ouvrir dans le navigateur**
   ```
   http://localhost:3000
   ```

### Build de production

```bash
npm run build
```

## 🎨 Design et couleurs

Le site utilise un schéma de couleurs professionnel :

- **Bleu principal** : #1976D2 (navigation, boutons secondaires)
- **Bleu foncé** : #0D47A1 (titres, texte important)
- **Orange** : #FB8C00 (boutons CTA, accents)
- **Blanc** : #FFFFFF (arrière-plan principal)
- **Gris clair** : #F5F5F5 (sections secondaires)
- **Gris foncé** : #212121 (texte standard)

## 📱 Responsive Design

Le site est entièrement responsive et s'adapte à tous les écrans :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## 🔍 SEO

Chaque page est optimisée pour le référencement :
- Balises `<title>` et `<meta description>` uniques
- Structure sémantique avec H1, H2, H3
- Données structurées JSON-LD
- Images avec attributs alt
- URLs canoniques

## 📄 Pages disponibles

### 🏠 Accueil (`/`)
- Hero section avec CTA
- Présentation du service
- Statistiques et témoignages
- Fonctionnalités clés

### 💰 Tarifs (`/pricing`)
- 3 packs de reviews (Starter, Business, Enterprise)
- Tableau comparatif
- FAQ intégrées
- Boutons de commande

### 📝 Blog (`/blog`)
- Liste d'articles avec filtres
- Article en vedette
- Système de catégories
- Newsletter

### ℹ️ À propos (`/about`)
- Mission et vision
- Équipe et valeurs
- Timeline de l'entreprise
- Statistiques

### 📞 Contact (`/contact`)
- Formulaire de contact complet
- Informations de contact
- Carte interactive
- FAQ

## 🚀 Déploiement

Le site peut être déployé sur n'importe quelle plateforme supportant React :

- **Vercel** : `vercel --prod`
- **Netlify** : `npm run build && netlify deploy --prod --dir=build`
- **Heroku** : Ajouter un `package.json` avec script de build

## 📦 Dépendances principales

- **React** : Framework JavaScript
- **React Router** : Navigation entre pages
- **Tailwind CSS** : Framework CSS
- **React Helmet Async** : Gestion des balises meta

## 🔧 Personnalisation

### Modifier les couleurs
Éditez le fichier `tailwind.config.js` pour personnaliser le schéma de couleurs.

### Ajouter des pages
1. Créer un nouveau composant dans `src/pages/`
2. Ajouter la route dans `src/App.js`
3. Mettre à jour la navigation dans `src/components/Navbar.js`

### Modifier le contenu
Chaque page contient des données statiques que vous pouvez facilement modifier dans les composants correspondants.

## 📞 Support

Pour toute question ou problème, contactez-nous :
- Email : abdelilahourti@gmail.com
- Téléphone : +212770539777

---

**Reviews Maps Pro** - Boostez votre réputation Google Maps 🚀
