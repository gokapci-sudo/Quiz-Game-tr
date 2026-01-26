const APP_CONFIG = {
    // --- DUYURU AYARLARI ---
    announcement: "Türkiye Genel Kültür maratonu başladı! Her gün saat 13:00'da en hızlı olan kazanır. 🇹🇷",
    
    // --- ÖDÜL HAVUZU GÖSTERGESİ ---
    prizes: { first: "0.50 TON", second: "0.30 TON", third: "0.20 TON" },

    // --- SPONSOR AYARLARI ---
    sponsors: [
        { name: "Sponsor 1", text: "", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK3VxxlZPLvinQYGcmarXPkykgwqDrl55cPwzGZAP_XA&s=10" },
        { name: "Sponsor 2", text: "", img: "https://egirisim.com/wp-content/uploads/2025/11/n11-yeni-logo-1068x580.jpg" },
        { name: "Sponsor 3", text: "Sponsor alındığında burada görünecektir.", img: "" },
        { name: "Sponsor 4", text: "Sponsor alındığında burada görünecektir.", img: "" }
    ],

    // --- VİDEO GÖREVLERİ VE ŞİFRELER ---
    videoTasks: [
        { url: "https://www.youtube.com/watch?v=video1", password: "TX" },
        { url: "https://www.youtube.com/watch?v=video2", password: "K9" },
        { url: "https://www.youtube.com/watch?v=video3", password: "M4" }
    ],

    // --- YARIŞMA ZAMANI ---
    matchTime: { hour: 13, minute: 0, durationMinutes: 5 },

    // --- 10 ADET TÜRKİYE GENEL KÜLTÜR SORUSU ---
    questions: [
        { question: "Türkiye'nin yüzölçümü en büyük ili hangisidir?", options: ["Ankara", "İstanbul", "Konya", "Erzurum"], correct_option: 2 },
        { question: "İstiklal Marşı'mızın şairi kimdir?", options: ["Ziya Gökalp", "Mehmet Akif Ersoy", "Namık Kemal", "Reşat Nuri"], correct_option: 1 },
        { question: "Türkiye'nin en yüksek dağı hangisidir?", options: ["Erciyes", "Nemrut", "Ağrı Dağı", "Süphan"], correct_option: 2 },
        { question: "Hangi ilimiz 'Ege'nin İncisi' olarak bilinir?", options: ["Aydın", "Muğla", "İzmir", "Manisa"], correct_option: 2 },
        { question: "Cumhuriyet kaç yılında ilan edilmiştir?", options: ["1920", "1923", "1919", "1924"], correct_option: 1 },
        { question: "Mimar Sinan'ın 'Ustalık Eserim' dediği cami hangisidir?", options: ["Süleymaniye", "Selimiye", "Sultanahmet", "Fatih"], correct_option: 1 },
        { question: "Türkiye'nin en uzun akarsuyu hangisidir?", options: ["Fırat", "Dicle", "Kızılırmak", "Sakarya"], correct_option: 2 },
        { question: "Aspendos Antik Tiyatrosu hangi ilimizdedir?", options: ["Antalya", "Muğla", "İzmir", "Denizli"], correct_option: 0 },
        { question: "Türk parasında resmi bulunan tek kadın yazar kimdir?", options: ["Halide Edip", "Fatma Aliye", "Afife Jale", "Sabiha Gökçen"], correct_option: 1 },
        { question: "Türkiye'nin ilk kadın pilotu kimdir?", options: ["Sabiha Gökçen", "Türkan Saylan", "Leyla Gencer", "Afife Jale"], correct_option: 0 }
    ]
};
