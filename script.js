const SB_URL = "https://arumdxephyjteoypjaxh.supabase.co";
const SB_KEY = "sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1";
const supabaseClient = supabase.createClient(SB_URL, SB_KEY);
const tg = window.Telegram.WebApp;
const MY_ID = 1369398784;

async function initDashboard() {
    tg.ready();
    const user = tg.initDataUnsafe?.user || { id: MY_ID, username: "Admin" };

    const { data } = await supabaseClient.from('profiles').select('*').eq('telegram_id', user.id).single();
    
    if (data) {
        document.getElementById('display-username').innerText = `@${data.username}`;
        
        // Admin Kontrolü
        if (user.id === MY_ID || data.is_admin) {
            document.getElementById('admin-badge').classList.remove('hidden');
            document.getElementById('admin-panel-btn').classList.remove('hidden');
        }

        document.getElementById('user-balance').innerText = data.balance.toFixed(2);
        if (data.balance >= 2.00) document.getElementById('withdraw-btn').classList.remove('hidden');

        if (data.wallet_address) {
            document.getElementById('connect-wallet-btn').classList.add('hidden');
            document.getElementById('active-wallet').classList.remove('hidden');
            document.getElementById('wallet-addr-short').innerText = data.wallet_address.substring(0, 6) + "...";
        }

        const ticketArea = document.getElementById('ticket-info-area');
        if (data.has_ticket) {
            ticketArea.innerHTML = `<div class="ticket-status-ok">✅ Biletiniz Hazır</div>`;
            const hours = new Date().getHours();
            if ([10, 15, 20].includes(hours)) {
                const btn = document.getElementById('start-quiz-btn');
                btn.classList.remove('disabled'); btn.disabled = false;
                btn.onclick = () => window.location.href = 'quiz.html';
            }
        } else {
            ticketArea.innerHTML = `<button onclick="window.location.href='bilet.html'" class="btn-buy-ticket">🎫 Bilet Al</button>`;
        }
    }
}
initDashboard();

// Cüzdan Bağlama Fonksiyonu
async function connectWallet() {
    const addr = prompt("TON Cüzdan Adresinizi Girin:");
    if (addr) {
        const user = tg.initDataUnsafe?.user || { id: MY_ID };
        await supabaseClient.from('profiles').update({ wallet_address: addr }).eq('telegram_id', user.id);
        location.reload();
    }
}
