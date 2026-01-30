const APP_CONFIG = {
    // Yarışma Saatleri (Türkiye Saati)
    matchTime: {
        hours: [10, 13, 15], // 10:00, 13:00 ve 15:00
        durationMinutes: 3,  // Yarışma kaç dakika açık kalacak?
    },
    
    // Uygulama Duyuruları
    announcement: "📢 Yeni Bakiye Sistemi Aktif! \n\nArtık yarışmalarda kazandığınız TON'lar bakiyenize eklenir. 2.00 TON limitine ulaştığınızda ödeme talebi oluşturabilirsiniz. Başarılar Arena Savaşçısı!",
    
    // Sponsorlar (Giriş ekranında görünecekler)
    sponsors: [
        { text: "🚀 TON Arena Official", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_k3M3tt2EgqZA4aDiUH4GkwAfxLNCMzFpP6E4w61dw&s=10" },
        { text: "💎 Premium Sponsor", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe_k3M3tt2EgqZA4aDiUH4GkwAfxLNCMzFpP6E4w61dw&s=10" }
    ],

    // Ödül Havuzu Gösterimi (Manuel bilgi amaçlı)
    prizes: {
        p1: "2.50 TON",
        p2: "1.50 TON",
        p3: "1.00 TON"
    }
};
