# Portfolio Vincent GÉNIN – Data Analyst

## 🚀 Déploiement rapide

### Option 1 : GitHub Pages (gratuit)

```bash
# Cloner et se positionner
git clone https://github.com/vinzgnn/Vincent-GENIN-Portfolio.git
cd Vincent-GENIN-Portfolio

# Ajouter ton contenu (copier les fichiers de cv-en-ligne/)
cp -r /chemin/vers/cv-en-ligne/* .

# Commiter et pousser
git add .
git commit -m "Add portfolio with CV and skills pages"
git push origin main
```

### Activer GitHub Pages
1. Aller sur : https://github.com/vinzgnn/Vincent-GENIN-Portfolio/settings/pages
2. Source : **Deploy from a branch**
3. Branch : **main**
4. Folder : **/root**
5. Cliquer **Save**

Ton site sera visible : https://vinzgnn.github.io/Vincent-GENIN-Portfolio/

---

### Option 2 : Netlify (plus pro, domaine personnalisé)

1. Aller sur https://app.netlify.com/drop
2. Glisser-déposer le dossier `cv-en-ligne`
3. Connecter GitHub → choisir `Vincent-GENIN-Portfolio`
4. Site publié automatiquement avec une URL aléatoire

Pour un domaine personnalisé :
- Acheter `vincent-genin.fr` chez OVH/GoDaddy/etc.
- Dans Netlify : Domain settings → Add custom domain

---

### Option 3 : Vercel (très rapide)

1. Aller sur https://vercel.com
2. New Project → Import Git Repository
3. Choisir `vinzgnn/Vincent-GENIN-Portfolio`
4. Déployé automatiquement

---

## 📁 Structure du site

```
cv-en-ligne/
├── index.html           # Accueil langue
├── fr/
│   ├── cv.html          # CV français
│   ├── competences.html # Dossier compétences
│   └── contact.html      # Contact
├── en/
│   ├── cv.html          # CV anglais
│   ├── skills.html       # Skills portfolio
│   └── contact.html      # Contact
└── assets/
    ├── styles.css        # Styles modernes + mode sombre
    ├── site.js          # Animations + thème
    ├── icons.js          # Icônes (optionnel)
    └── profile.jpg       # Photo de profil
```

---

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Mode sombre avec toggle
- ✅ Animations subtiles
- ✅ Photo de profil
- ✅ Icônes contact
- ✅ Bouton “Retour en haut”
- ✅ Filtres par compétence
- ✅ Cartes projets interactives
- ✅ Multi-langues FR/EN
- ✅ Print-friendly (ATS)
- ✅ SEO optimisé

---

## 🛠️ Personnalisation

Pour modifier les projets :
- Éditer `fr/competences.html` et `en/skills.html`
- Ajouter tes captures dans `assets/`
- Modifier les tags et descriptions

Pour modifier le CV :
- Éditer `fr/cv.html` et `en/cv.html`
- Ajouter ton PDF dans `assets/cv-fr.pdf` et `assets/cv-en.pdf`

---

## 📞 Support

Si besoin d’aide pour le déploiement ou modifications :
- GitHub : https://github.com/vinzgnn
- Email : genin.vincent78@gmail.com
