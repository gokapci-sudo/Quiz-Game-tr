const APP_CONFIG = {
    matchTimes: ["10:00", "14:00", "20:00"],
    entryWindow: 3, // Yarışma kapısı 3 dk açık
    resultWindow: 4 // 4. dakikada sonuçlar kesinleşir
};

// Ortak Zaman Kontrolü
function getRaceStatus() {
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    
    let active = false;
    let next = APP_CONFIG.matchTimes[0];

    for (let time of APP_CONFIG.matchTimes) {
        const [h, m] = time.split(':').map(Number);
        const raceDate = new Date();
        raceDate.setHours(h, m, 0);
        const diff = (now - raceDate) / 60000;

        if (diff >= 0 && diff < APP_CONFIG.entryWindow) active = true;
        if (time > currentTime) { next = time; break; }
    }
    return { active, next };
}
