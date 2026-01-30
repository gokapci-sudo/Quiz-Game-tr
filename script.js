// --- AYARLAR VE BAĞLANTILAR ---
const SB_URL = "https://arumdxephyjteoypjaxh.supabase.co";
const SB_KEY = "sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1"; // Anon Key
const supabase = supabase.createClient(SB_URL, SB_KEY);

const tg = window.Telegram.WebApp;
const user = tg.initDataUnsafe?.user || { id: 1369398784, username: "TestUser" }; // Geliştirme için örnek ID
const ADMIN_ID = 1369398784;

// --- SAYFA YÜKLENDİĞİNDE ÇALIŞACAKLAR ---
document.addEventListener("DOMContentLoaded", async () => {
    tg.ready();
    tg.expand();

    await loadUserData();
    updateTicketCounter();
    checkQuizTime();
});

// --- KULLANICI VERİLERİNİ ÇEK ---
async function loadUserData() {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('telegram_id', user.id)
        .single();

    if (data) {
        document.getElementById('user-name').innerText = `@${data.username}`;
        document.getElementById('balance').innerText = data.balance.toFixed(2);
        
        // Cüzdan Kontrolü
        if (data.wallet_address) {
            document.getElementById('connect-wallet').classList.add('hidden');
            document.getElementById('wallet-address-container').classList.remove('hidden');
            document.getElementById('wallet-address').innerText = data.wallet_address.substring(0,6) + "..." + data.wallet_address.slice(-4);
        }

        // Çekim Butonu Kontrolü (2.00 TON sınırı)
        if (data.balance >= 2.00) {
            document.getElementById('withdraw-btn').classList.remove('hidden');
        }

        // Bilet Durumu
        const ticketDiv = document.getElementById('ticket-status');
        if (data.has_ticket) {
            ticketDiv.innerHTML = `<p style="color: #31b545; font-weight: bold;">✅ Biletiniz Hazır</p>`;
        } else {
            ticketDiv.innerHTML = `<button onclick="goToTicketPage()" class="btn-wallet" style="background: #fecb2e; color: black;">Bilet Satın Al</button>`;
        }

        // Admin Kontrolü
        if (user.id === ADMIN_ID) {
            document.getElementById('admin-btn').classList.remove('hidden');
        }
    }
}

// --- DİNAMİK BİLET SAYACI ---
async function updateTicketCounter() {
    const { count, error } = await supabase
        .from('profiles')
        .select('*', { count: 'exact', head: true })
        .eq('has_ticket', true);

    const baseCount = 1388;
    const total = baseCount + (count || 0);
    document.getElementById('counter').innerText = `1388 + ${count || 0} (${total})`;
}

// --- YARIŞMA SAATİ VE BUTON KONTROLÜ ---
function checkQuizTime() {
    const now = new Date();
    const hours = now.getHours();
    const quizHours = [10, 15, 20]; // TR Saati (Sunucu saatiyle eşleşmeli)
    
    const startBtn = document.getElementById('start-quiz');
    
    // Eğer saat bu listedeyse ve bilet varsa aktif et (Bilet kontrolü loadUserData'da yapılacak)
    if (quizHours.includes(hours)) {
        startBtn.classList.remove('disabled');
        startBtn.disabled = false;
        startBtn.innerText = "YARIŞMAYA BAŞLA (AKTİF)";
    }
}

// --- CÜZDAN KOPYALAMA ---
document.getElementById('copy-wallet').addEventListener('click', () => {
    const addr = document.getElementById('wallet-address').innerText;
    navigator.clipboard.writeText(addr);
    tg.showAlert("Cüzdan adresi kopyalandı!");
});

function goToTicketPage() {
    // Bilet alma sayfasına yönlendirme (İleride hazırlayacağız)
    window.location.href = "bilet.html";
}

document.getElementById('admin-btn').addEventListener('click', () => {
    window.location.href = "admin.html";
});
