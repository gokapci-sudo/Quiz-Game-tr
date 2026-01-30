const SB_URL = "https://arumdxephyjteoypjaxh.supabase.co";
const SB_KEY = "sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1";
const supabaseClient = supabase.createClient(SB_URL, SB_KEY);
const tg = window.Telegram.WebApp;
const MY_ID = 1369398784;
let fullWallet = "";

async function initDashboard() {
    tg.ready();
    const user = tg.initDataUnsafe?.user || { id: MY_ID, username: "Admin" };
    const { data } = await supabaseClient.from('profiles').select('*').eq('telegram_id', user.id).single();
    
    if (data) {
        document.getElementById('display-username').innerText = `@${data.username}`;
        if (user.id === MY_ID || data.is_admin) {
            document.getElementById('admin-badge').classList.remove('hidden');
            document.getElementById('admin-panel-btn').classList.remove('hidden');
        }

        const bal = parseFloat(data.balance || 0);
        document.getElementById('user-balance').innerText = bal.toFixed(2);
        if (bal >= 2.00) document.getElementById('withdraw-btn').classList.remove('hidden');

        if (data.wallet_address) {
            fullWallet = data.wallet_address;
            document.getElementById('connect-wallet-btn').classList.add('hidden');
            document.getElementById('active-wallet').classList.remove('hidden');
            document.getElementById('wallet-addr-short').innerText = fullWallet.substring(0,6) + "..." + fullWallet.slice(-4);
        }

        const ticketArea = document.getElementById('ticket-info-area');
        if (data.has_ticket) {
            ticketArea.innerHTML = `<div style="color:var(--green); font-weight:bold; border:1px solid var(--green); padding:10px; border-radius:10px;">✅ Biletiniz Hazır</div>`;
        } else {
            ticketArea.innerHTML = `<button onclick="location.href='bilet.html'" class="btn-sub" style="background:var(--yellow); color:black;">🎫 Bilet Al</button>`;
        }
    }
}

function openTelegramWallet() {
    tg.openTelegramLink("https://t.me/wallet");
    setTimeout(async () => {
        const addr = prompt("Lütfen kopyaladığınız cüzdan adresini buraya yapıştırın:");
        if (addr && addr.length > 20) {
            const user = tg.initDataUnsafe?.user || { id: MY_ID };
            await supabaseClient.from('profiles').update({ wallet_address: addr }).eq('telegram_id', user.id);
            location.reload();
        }
    }, 1000);
}

function copyWallet() {
    if (fullWallet) {
        navigator.clipboard.writeText(fullWallet);
        tg.showAlert("Adres Kopyalandı!");
    }
}

async function requestWithdraw() {
    const user = tg.initDataUnsafe?.user || { id: MY_ID };
    const { data } = await supabaseClient.from('profiles').select('*').eq('telegram_id', user.id).single();
    if (data.balance >= 2.00 && data.wallet_address) {
        await supabaseClient.from('withdrawals').insert([{ telegram_id: user.id, wallet_address: data.wallet_address, amount: data.balance }]);
        tg.showAlert("Çekim talebi admin paneline iletildi!");
    }
}
initDashboard();
