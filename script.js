document.addEventListener("DOMContentLoaded", () => {
    
    // --- GESTION DU CHATBOT IA (MISTRAL API) ---
    const chatContainer = document.getElementById('chatbot-container');
    const openChatBtn = document.getElementById('open-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const messagesDiv = document.getElementById('chatbot-messages');

    // ⚠️ À remplacer par votre vraie clé API pour les tests locaux
    // Ne jamais publier ce fichier tel quel sur un dépôt public (GitHub) !
    const MISTRAL_API_KEY = "VOTRE_CLE_API_MISTRAL_ICI";
    const API_URL = "https://api.mistral.ai/v1/chat/completions";

    // Initialisation de l'historique avec le contexte (Prompt Système)
    let conversationHistory = [
        { 
            role: "system", 
            content: "Tu es le T-800, l'agent conversationnel de TimeTravel Agency, une agence de voyage temporel fictive. Ton ton est professionnel, légèrement futuriste, et courtois. Tu aides les clients à choisir entre trois époques : l'Égypte Antique (-2560), la Renaissance Italienne (1504) et Néo-Tokyo (2150). Fais des réponses courtes et immersives." 
        }
    ];

    // Toggle Chatbot
    openChatBtn.addEventListener('click', () => {
        chatContainer.style.display = 'flex';
        openChatBtn.style.display = 'none';
    });

    closeChatBtn.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        openChatBtn.style.display = 'block';
    });

    // Fonction pour ajouter un message dans l'interface
    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', sender);
        msgDiv.textContent = text;
        messagesDiv.appendChild(msgDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
        return msgDiv; // Retourne l'élément pour pouvoir le modifier (ex: mode chargement)
    }

    // Fonction d'appel à l'API IA
    async function processUserMessage() {
        const userText = chatInput.value.trim();
        if (!userText) return;

        // Afficher la question de l'utilisateur
        addMessage(userText, 'user');
        chatInput.value = '';

        // Ajouter la question à l'historique
        conversationHistory.push({ role: "user", content: userText });

        // Afficher un message d'attente
        const loadingMsg = addMessage("Transmission au continuum espace-temps...", 'bot');

        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${MISTRAL_API_KEY}`
                },
                body: JSON.stringify({
                    model: "mistral-small-latest",
                    messages: conversationHistory,
                    temperature: 0.7
                })
            });

            if (!response.ok) throw new Error("Erreur réseau");

            const data = await response.json();
            const botReply = data.choices[0].message.content;

            // Mettre à jour l'interface avec la vraie réponse
            loadingMsg.textContent = botReply;

            // Sauvegarder la réponse dans l'historique
            conversationHistory.push({ role: "assistant", content: botReply });

        } catch (error) {
            console.error("Erreur API:", error);
            loadingMsg.textContent = "Erreur de connexion temporelle. Le signal avec le serveur est rompu.";
            // Retirer le dernier message utilisateur de l'historique en cas d'erreur
            conversationHistory.pop(); 
        }
    }

    sendBtn.addEventListener('click', processUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processUserMessage();
    });

    // --- GESTION DU FORMULAIRE DE RÉSERVATION ---
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const destination = document.getElementById('destination').options[document.getElementById('destination').selectedIndex].text;
        const date = document.getElementById('date').value;

        if (destination && date) {
            alert(`✅ Séquence d'amorçage validée !\nDestination : ${destination}\nDate de départ : ${date}\nPréparez-vous pour le saut.`);
            bookingForm.reset();
        } else {
            alert("❌ Erreur critique : Veuillez remplir tous les champs du portail.");
        }
    });
});
