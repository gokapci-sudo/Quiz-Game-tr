const APP_CONFIG = {
    // --- DUYURU AYARLARI ---
    announcement: "Yeni sponsorlarımızla ödül havuzu büyüyor! Her gün saat 13:00'da buradayız. 🚀",
    
    // --- ÖDÜL HAVUZU GÖSTERGESİ ---
    prizes: { first: "0.50 TON", second: "0.30 TON", third: "0.20 TON" },

    // --- SPONSOR AYARLARI ---
    sponsors: [
        { name: "Sponsor 1", text: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3VxxlZPLvinQYGcmarXPkykgwqDrl55cPwzGZAP_XA&s=10", link: "#" },
        { name: "Sponsor 2", text: "", img: "https://egirisim.com/wp-content/uploads/2025/11/n11-yeni-logo-1068x580.jpg", link: "#" },
        { name: "Sponsor 3", text: "Sponsor alındığında burada görünecektir.", img: "", link: "#" },
        { name: "Sponsor 4", text: "Sponsor alındığında burada görünecektir.", img: "", link: "#" }
    ],

    // --- VİDEO GÖREVLERİ VE YENİ ŞİFRELER ---
    videoTasks: [
        { url: "https://www.youtube.com/watch?v=video1", password: "TX" },
        { url: "https://www.youtube.com/watch?v=video2", password: "K9" },
        { url: "https://www.youtube.com/watch?v=video3", password: "M4" }
    ],

    // --- YARIŞMA ZAMANI ---
    matchTime: { hour: 13, minute: 0, durationMinutes: 5 },

    // --- 10 ADET YENİ SORU ---
    questions: [
        { question: "TON ağının resmi cüzdan uygulaması hangisidir?", options: ["Metamask", "Tonkeeper", "Phantom", "Trust"], correct_option: 1 },
        { question: "Bitcoin'in maksimum arzı ne kadardır?", options: ["21 Milyon", "100 Milyon", "Sınırsız", "10 Milyon"], correct_option: 0 },
        { question: "Ethereum hangi konsensüs mekanizmasına geçiş yapmıştır?", options: ["Proof of Work", "Proof of History", "Proof of Stake", "Proof of Burn"], correct_option: 2 },
        { question: "Blokzincirinde 'HODL' terimi ne anlama gelir?", options: ["Hızlı Satmak", "Varlığı Tutmak", "Madencilik Yapmak", "Transfer Etmek"], correct_option: 1 },
        { question: "Stablecoin (Sabit coin) olan hangisidir?", options: ["Solana", "USDT", "Avalanche", "Doge"], correct_option: 1 },
        { question: "İlk NFT projesi olarak kabul edilen hangisidir?", options: ["CryptoPunks", "Bored Ape", "Azuki", "Moonbirds"], correct_option: 0 },
        { question: "Binance borsasının kendi yerel tokeni hangisidir?", options: ["BUSD", "BNB", "BTC", "SOL"], correct_option: 1 },
        { question: "Kripto dünyasında 'FOMO' ne demektir?", options: ["Fırsatı Kaçırma Korkusu", "Para Kaybetme Korkusu", "Hızlı Zengin Olma", "Yeni Çıkan Coin"], correct_option: 0 },
        { question: "Soğuk cüzdan (Cold Wallet) özelliği nedir?", options: ["İnternete bağlı olmaması", "Çok hızlı olması", "Ücretsiz olması", "Telefonda yüklü olması"], correct_option: 0 },
        { question: "TON projesi ilk olarak kim tarafından geliştirilmeye başlandı?", options: ["Vitalik Buterin", "Telegram Ekibi", "Elon Musk", "Facebook"], correct_option: 1 }
    ]
};
