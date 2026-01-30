const APP_CONFIG = {
    // REKLAM AYARLARI
    ads: {
        zoneId: '10527453', 
        requiredToTicket: 5  // Bilet için 5 reklam
    },
    
    // YARIŞMA ZAMANLARI (Türkiye Saati: 10:00, 14:00, 20:00)
    matchTimes: [10, 14, 20], 
    matchDurationMinutes: 3, // Yarışma kapısı 3 dakika açık kalır

    // SPONSORLAR
    sponsors: [
        { text: "🚀 TON Türkiye Resmi Kanalı" },
        { text: "💎 Arena Elmas Sponsoru" },
        { text: "🎬 5 Reklam İzle, Yarışmaya Katıl!" }
    ],

    // ÖDÜLLER
    prizes: {
        p1: "5.0 TON",
        p2: "2.5 TON",
        p3: "1.0 TON"
    }
};
