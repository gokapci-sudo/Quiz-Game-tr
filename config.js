
// GITHUB ÜZERİNDEN SADECE BURAYI GÜNCELLEYECEKSİN
const APP_CONFIG = {
    // Video Şifreleri (Sırasıyla 1, 2 ve 3. video)
    videoPasswords: ["A1", "B2", "C3"],

    // Yarışma Başlama Saati (Türkiye Saati)
    matchTime: {
        hour: 13,
        minute: 0,
        durationMinutes: 3 // Yarışma kaç dakika açık kalsın?
    },

    // Soru Havuzu
    questions: [
        { 
            question: "TON blockchain birimi nedir?", 
            options: ["ETH", "TON", "SOL", "BTC"], 
            correct_option: 1 
        },
        { 
            question: "Hangisi bir kripto cüzdanıdır?", 
            options: ["Tonkeeper", "Spotify", "Netflix", "Instagram"], 
            correct_option: 0 
        },
        { 
            question: "Telegram kurucusu kimdir?", 
            options: ["Elon Musk", "Pavel Durov", "Bill Gates", "Satoshi"], 
            correct_option: 1 
        },
        { 
            question: "1 TON yaklaşık kaç dolardır?", 
            options: ["1$", "5$", "100$", "500$"], 
            correct_option: 1 
        },
        { 
            question: "Hangi ağ daha hızlıdır?", 
            options: ["Bitcoin", "Ethereum", "TON", "Doge"], 
            correct_option: 2 
        }
    ]
};
