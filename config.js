const APP_CONFIG = {
    announcement: "Yeni yarışma bugün saat 13:00'da! Ödülleri kaçırmayın. 🚀",
    
    // Ödül Havuzu Göstergesi
    prizes: { first: "0.50 TON", second: "0.30 TON", third: "0.20 TON" },

    sponsors: [
        { name: "Sponsor 1", text: "Sponsor alındığında burada görünecektir." },
        { name: "Sponsor 2", text: "Sponsor alındığında burada görünecektir." }
    ],
    videoTasks: [
        { url: "https://www.youtube.com/watch?v=1", password: "A1" },
        { url: "https://www.youtube.com/watch?v=2", password: "B2" },
        { url: "https://www.youtube.com/watch?v=3", password: "C3" }
    ],
    matchTime: { hour: 13, minute: 0, durationMinutes: 5 },
    questions: [
        { question: "TON blockchain birimi nedir?", options: ["ETH", "TON", "SOL", "BTC"], correct_option: 1 },
        { question: "Telegram kurucusu kimdir?", options: ["Elon Musk", "Pavel Durov", "Bill Gates", "Satoshi"], correct_option: 1 }
    ]
};
