const APP_CONFIG = {
    // YARIŞMA ZAMANI (Türkiye Saati ile)
    matchTime: {
        hour: 21,           // Yarışma saat kaçta? (Örn: 21)
        minute: 0,          // Dakika kaçta? (Örn: 00)
        durationMinutes: 15 // Yarışma kaç dakika boyunca "Giriş Yapılabilir" kalsın?
    },

    // REKLAM VE GİRİŞ AYARLARI
    settings: {
        requiredAds: 4,      // Bilet için kaç reklam izlenmeli?
        ticketPriceTON: 0.1  // Parayla bilet almak isteyenler için fiyat
    },

    // SPONSORLAR (Giriş ekranında alt alta görünür)
    sponsors: [
        { id: 1, text: "🚀 TON Türkiye Topluluğu" },
        { id: 2, text: "💎 Arena Elmas Sponsoru" },
        { id: 3, text: "📺 YouTube Kanalımıza Abone Ol" }
    ],

    // DUYURULAR (📢 Duyurular butonuna basınca görünür)
    announcement: "Hoş Geldiniz! \n\n1. Her gün saat 21:00'de büyük yarışma başlar.\n2. Kazançlarınızı çekmek için cüzdanınızı bağlamayı unutmayın.\n3. Minimum çekim tutarı 2.0 TON'dur.",

    // GÜNLÜK ÖDÜLLER (Ekranda bilgi amaçlı görünür)
    prizes: {
        p1: "5.0 TON",
        p2: "2.5 TON",
        p3: "1.0 TON"
    },

    // SORU HAVUZU (Yarışma başladığında buradan 10 tanesi rastgele seçilir)
    questions: [
        {
            question: "TON hangi blockchain ağının para birimidir?",
            options: ["Ethereum", "The Open Network", "Solana", "Bitcoin"],
            correct_option: 1
        },
        {
            question: "Türkiye'nin başkenti neresidir?",
            options: ["İstanbul", "İzmir", "Ankara", "Antalya"],
            correct_option: 2
        },
        {
            question: "Telegram'ın kurucusu kimdir?",
            options: ["Mark Zuckerberg", "Pavel Durov", "Elon Musk", "Bill Gates"],
            correct_option: 1
        },
        {
            question: "Hangi elementin simgesi 'O'dur?",
            options: ["Altın", "Demir", "Oksijen", "Helyum"],
            correct_option: 2
        }
    ]
};
