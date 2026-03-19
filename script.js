document.addEventListener("DOMContentLoaded", () => {
    
    // --- GESTION DU CHATBOT ---
    const chatContainer = document.getElementById('chatbot-container');
    const openChatBtn = document.getElementById('open-chat');
    const closeChatBtn = document.getElementById('close-chat');
    const sendBtn = document.getElementById('send-btn');
    const chatInput = document.getElementById('chat-input');
    const messagesDiv = document.getElementById('chatbot-messages');

    // Toggle Chatbot
    openChatBtn.addEventListener('click', () => {
        chatContainer.style.display = 'flex';
        openChatBtn.style.display = 'none';
    });

    closeChatBtn.addEventListener('click', () => {
        chatContainer.style.display = 'none';
        openChatBtn.style.display = 'block';
    });

    // Base de connaissances basique (FAQ)
    const qaDatabase = [
        { keywords: ["prix", "tarif", "combien"], answer: "Nos sauts temporels commencent à partir de 50 000 Crédits Galactiques." },
        { keywords: ["danger", "sécurité", "risque"], answer: "Votre intégrité temporelle est garantie à 99.9%. Nos boucliers paradoxaux vous protègent." },
        { keywords: ["egypte", "pyramide"], answer: "L'Égypte Antique est très demandée ! Pensez à prendre des vêtements légers, il fait chaud en -2560." },
        { keywords: ["futur", "tokyo", "cyberpunk"], answer: "Pour Néo-Tokyo, un implant traducteur vous sera fourni avant le départ." }
    ];

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('msg', sender);
        msgDiv.textContent = text;
        messagesDiv.appendChild(msgDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function processUserMessage() {
        const userText = chatInput.value.trim().toLowerCase();
        if (!userText) return;

        addMessage(userText, 'user');
        chatInput.value = '';

        // Simuler un délai de réflexion de l'IA
        setTimeout(() => {
            let foundAnswer = "Je ne suis pas sûr de comprendre. Pouvez-vous reformuler ou parler à un agent humain dans le présent ?";
            
            for (let qa of qaDatabase) {
                if (qa.keywords.some(kw => userText.includes(kw))) {
                    foundAnswer = qa.answer;
                    break;
                }
            }
            addMessage(foundAnswer, 'bot');
        }, 800);
    }

    sendBtn.addEventListener('click', processUserMessage);
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') processUserMessage();
    });

    // --- GESTION DU FORMULAIRE DE RÉSERVATION ---
    const bookingForm = document.getElementById('booking-form');
    
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        const destination = document.getElementById('destination').options[document.getElementById('destination').selectedIndex].text;
        const date = document.getElementById('date').value;

        // Validation simple
        if (destination && date) {
            alert(`✅ Séquence d'amorçage validée !\nDestination : ${destination}\nDate de départ : ${date}\nPréparez-vous pour le saut.`);
            bookingForm.reset();
        } else {
            alert("❌ Erreur critique : Veuillez remplir tous les champs du portail.");
        }
    });
});