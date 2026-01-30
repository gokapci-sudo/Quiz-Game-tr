const SB_URL = "https://arumdxephyjteoypjaxh.supabase.co";
const SB_KEY = "sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1";
const supabaseClient = supabase.createClient(SB_URL, SB_KEY);

const APP_CONFIG = {
    matchTimes: ["10:00", "14:00", "20:00"],
    entryWindow: 3, // Yarışma 3 dk sürer
    adminID: 1369398784
};

// Yarışma Durumunu Kontrol Eden Fonksiyon
function getRaceStatus() {
    const now = new Date();
    const currentStr = now.getHours().toString().padStart(2, '0') + ":" + now.getMinutes().toString().padStart(2, '0');
    let active = false;
    let nextMatch = APP_CONFIG.matchTimes[0];

    for (let time of APP_CONFIG.matchTimes) {
        const [h, m] = time.split(':').map(Number);
        const raceDate = new Date();
        raceDate.setHours(h, m, 0);
        const diff = (now - raceDate) / 60000;

        if (diff >= 0 && diff < APP_CONFIG.entryWindow) active = true;
        if (time > currentStr) { nextMatch = time; break; }
    }
    return { active, nextMatch };
}
