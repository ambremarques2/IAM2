# ⏳ TimeTravel Agency - Webapp Interactive

> **Explorez le Temps. Vivez l'Histoire. Découvrez le Futur.**
>
> Webapp pour une agence de voyage temporel fictive, créée en intégrant des outils d'Intelligence Artificielle Générative.

---

## 🚀 À propos du projet

TimeTravel Agency est une plateforme interactive permettant aux utilisateurs de découvrir des destinations temporelles immersives. Le projet intègre un agent conversationnel intelligent pour guider les "voyageurs" et leur proposer des recommandations personnalisées basées sur leurs envies.

Ce projet a été réalisé dans le cadre d'un cursus pédagogique (M1/M2 Digital & IA) pour explorer l'intégration et la collaboration avec les IA génératives dans le développement web.

## 🛠️ Stack Technique

- **Frontend** : HTML5, Vanilla JavaScript
- **Styling** : CSS natif (Assisté par Gemini)
- **Animations** : CSS/JS (Effets de survol sur les destinations)
- **Intelligence Artificielle** : API Mistral AI (Intégration du modèle Mistral pour le chatbot)
- **Hébergement & Déploiement** : GitHub Pages

## ✨ Features Implémentées

- 🌍 **Landing page interactive** avec animations de fond et interface stylisée.
- 🖼️ **Galerie temporelle** : Présentation immersive de 3 destinations distinctes (Égypte, Renaissance, Néo-Tokyo) avec animations au hover.
- 💬 **Agent Temporel (Chatbot IA)** : Un assistant conversationnel (T-800) connecté à l'API Mistral, capable de comprendre le contexte et de répondre dynamiquement aux questions.
- 🎯 **Recommandations interactives** : L'IA oriente l'utilisateur selon l'époque choisie via un prompt système personnalisé.

## 🤖 Transparence IA (Outils Utilisés)

Ce projet a été conçu en synergie avec plusieurs IA génératives :
- **Génération de Code & Architecture** : Gemini (Google)
- **Moteur du Chatbot** : Mistral AI (via appels API directs en JavaScript)
- **Visuels & Assets** : Images générées / sélectionnées via l'assistance de Gemini.

## 💻 Instructions d'Installation

Si vous souhaitez faire tourner le projet en local avec toutes ses fonctionnalités (notamment le chatbot IA), suivez ces étapes :

1. **Cloner le dépôt**
   ```bash
   git clone [https://github.com/votre-nom-utilisateur/timetravel-agency.git](https://github.com/votre-nom-utilisateur/timetravel-agency.git)
   cd timetravel-agency
   ```

2. **🔑 Configuration de l'API (Étape cruciale)**
   Pour que le chatbot fonctionne, vous devez lui fournir une clé API Mistral.
   - Ouvrez le fichier `script.js` dans votre éditeur de code.
   - Repérez la ligne suivante (vers le début de la section Chatbot) : 
     `const MISTRAL_API_KEY = "VOTRE_CLE_API_MISTRAL_ICI";`
   - Remplacez la valeur par votre propre clé API Mistral.
   
   > ⚠️ **AVERTISSEMENT DE SÉCURITÉ** : Ce projet est statique (HTML/JS). Si vous déployez ce code tel quel sur GitHub Pages ou tout autre hébergeur public, votre clé API sera visible par tout le monde. **Ne commitez jamais votre clé API réelle sur un dépôt GitHub public.** Utilisez-la uniquement pour vos tests locaux, ou mettez en place un backend pour sécuriser l'appel à l'API en production.

3. **Lancer le projet**
   - Double-cliquez simplement sur le fichier `index.html` pour l'ouvrir dans votre navigateur web.
   - Enjoy !
