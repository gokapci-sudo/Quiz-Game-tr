const SB_URL = "https://arumdxephyjteoypjaxh.supabase.co";
const SB_KEY = "sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1";
const supabase = supabase.createClient(SB_URL, SB_KEY);

const tg = window.Telegram.WebApp;
const MY_ID = 1369398784; // Senin ID'n

async function initDashboard() {
    tg.ready();
    const user = tg.initDataUnsafe?.user || { id: MY_ID, username: "AdminTest" };

    // 1. Kullanıcı Verilerini Çek
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('telegram_id', user.id)
        .single();

    if (data) {
        // Kullanıcı Adı ve Admin Rozeti
        document.getElementById('display-username').innerText = `@${data.username}`;
        if (user.id === MY_ID || data.is_admin) {
            document.getElementById('admin-badge').classList.remove('hidden');
            document.getElementById('admin-panel-btn').classList.remove('hidden');
        }

        // Bakiye ve Çekim Kontrolü
        document.getElementById('user-balance').innerText = data.balance.toFixed(2);
        if (data.balance >= 2.00) {
            document.getElementById('withdraw-btn').classList.remove('hidden');
        }

        // Cüzdan Kontrolü
        if (data.wallet_address) {
            document.getElementById('connect-wallet-btn').classList.add('hidden');
            document.getElementById('active-wallet').classList.remove('hidden');
            document.getElementById('wallet-addr-short').innerText = 
                data.wallet_address.substring(0, 6) + "..." + data.wallet_address.slice(-4);
        }

        // Bilet Durumu
        const ticketArea = document.getElementById('ticket-info-area');
        if (data.has_ticket) {
            ticketArea.innerHTML = `<div class="ticket-status-ok">✅ Biletiniz Hazır</div>`;
            checkQuizTime(true);
        } else {
            ticketArea.innerHTML = `<button onclick="window.location.href='bilet.html'" class="btn-buy-ticket">🎫 Bilet Al</button>`;
        }
    }
}

function checkQuizTime(hasTicket) {
    const hours = new Date().getHours();
    const quizHours = [10, 15, 20];
    const btn = document.getElementById('start-quiz-btn');

    if (quizHours.includes(hours) && hasTicket) {
        btn.classList.remove('disabled');
        btn.disabled = false;
        btn.innerText = "YARIŞMAYA BAŞLA";
        btn.onclick = () => window.location.href = 'quiz.html';
    } else {
        btn.innerText = hasTicket ? "YARIŞMA SAATİNİ BEKLE" : "YARIŞMAK İÇİN BİLET ALIN";
    }
}

function copyWallet() {
    // Gerçek veri tabanından tam adresi çekip kopyalayabiliriz
    tg.showAlert("Cüzdan adresi kopyalandı!");
}

async function requestWithdraw() {
    tg.showConfirm("2.00 TON çekim talebi gönderilsin mi?", (ok) => {
        if (ok) tg.showAlert("Talebiniz alındı, admin onayından sonra bakiyeniz sıfırlanacaktır.");
    });
}

initDashboard();
