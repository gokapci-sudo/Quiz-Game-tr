const APP_CONFIG = {
    // REKLAM AYARLARI
    ads: {
        zoneId: '10527453', // Rewarded Popup ID
        requiredToTicket: 5  // Bilet için gereken izleme sayısı
    },
    
    // YARIŞMA ZAMANLARI (Türkiye Saati)
    matchTimes: [10, 14, 20], 
    matchDurationMinutes: 3, // Yarışma süresi (Dakika)

    // SPONSORLAR (Giriş ekranında görünür)
    sponsors: [
        { text: "🚀 TON Türkiye Resmi Topluluğu" },
        { text: "💎 Arena Premium Sponsoru" },
        { text: "🎬 5 Reklam İzle, Yarışmaya Katıl!" }
    ],

    // ÖDÜLLER (Bilgi amaçlı görünür)
    prizes: {
        p1: "5.0 TON",
        p2: "2.5 TON",
        p3: "1.0 TON"
    }
};
