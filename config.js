// GITHUB ÜZERİNDEN TÜM UYGULAMAYI BURADAN YÖNETEBİLİRSİN
const APP_CONFIG = {
    // --- SPONSOR AYARLARI ---
    sponsors: [
        {
            name: "Ana Sponsor",
            link: "https://t.me/KanalLinkiniz1",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iPt1ZPGpwtVwY5fvpN_X3hqThRsBvJIAFA&s"
        },
        {
            name: "Yarışma Sponsoru",
            link: "https://t.me/KanalLinkiniz2",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2iPt1ZPGpwtVwY5fvpN_X3hqThRsBvJIAFA&s"
        }
    ],

    // --- VİDEO GÖREVİ AYARLARI ---
    videoTasks: [
        { url: "https://www.youtube.com/watch?v=VIDEO1", password: "A1" },
        { url: "https://www.youtube.com/watch?v=VIDEO2", password: "B2" },
        { url: "https://www.youtube.com/watch?v=VIDEO3", password: "C3" }
    ],

    // --- YARIŞMA ZAMANI (Türkiye Saati) ---
    matchTime: {
        hour: 13,
        minute: 0,
        durationMinutes: 5 // Yarışma butonu 5 dakika boyunca aktif kalır
    },

    // --- SORU HAVUZU ---
    // İstediğin kadar soru ekleyebilirsin, sistem içinden rastgele 10 tane seçer.
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
