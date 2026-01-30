const SB_URL = "https://arumdxephyjteoypjaxh.supabase.co";
const SB_KEY = "sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1";
const supabaseClient = supabase.createClient(SB_URL, SB_KEY);
const tg = window.Telegram.WebApp;
const MY_ID = 1369398784;

// Global değişken (Kopyalama işlemi için)
let fullWalletAddress = "";

async function initDashboard() {
    tg.ready();
    const user = tg.initDataUnsafe?.user || { id: MY_ID, username: "Admin" };

    const { data, error } = await supabaseClient
        .from('profiles')
        .select('*')
        .eq('telegram_id', user.id)
        .single();
    
    if (data) {
        // 1. Kullanıcı Adı ve Admin Kontrolü
        document.getElementById('display-username').innerText = `@${data.username}`;
        if (user.id === MY_ID || data.is_admin) {
            document.getElementById('admin-badge')?.classList.remove('hidden');
            document.getElementById('admin-panel-btn')?.classList.remove('hidden');
        }

        // 2. Bakiye ve Çekim Butonu Kontrolü (2.00 TON Sınırı)
        const balance = parseFloat(data.balance || 0);
        document.getElementById('user-balance').innerText = balance.toFixed(2);
        
        const withdrawBtn = document.getElementById('withdraw-btn');
        if (balance >= 2.00) {
            withdrawBtn.classList.remove('hidden');
            withdrawBtn.disabled = false;
            withdrawBtn.style.opacity = "1";
        } else {
            withdrawBtn.classList.add('hidden');
        }

        // 3. Cüzdan Kontrolü ve Görüntüleme
        const connectBtn = document.getElementById('connect-wallet-btn');
        const activeWalletDiv = document.getElementById('active-wallet');
        const walletLabel = document.getElementById('wallet-addr-short');

        if (data.wallet_address && data.wallet_address.trim() !== "") {
            fullWalletAddress = data.wallet_address;
            connectBtn.classList.add('hidden');
            activeWalletDiv.classList.remove('hidden');
            // Cüzdanı kısaltarak göster (Örn: UQCp...3eR1)
            walletLabel.innerText = data.wallet_address.substring(0, 6) + "..." + data.wallet_address.slice(-4);
        } else {
            connectBtn.classList.remove('hidden');
            activeWalletDiv.classList.add('hidden');
        }

        // 4. Bilet ve Yarışma Kontrolü
        const ticketArea = document.getElementById('ticket-info-area');
        if (data.has_ticket) {
            ticketArea.innerHTML = `<div class="ticket-status-ok">✅ Biletiniz Hazır</div>`;
            updateQuizButton(true);
        } else {
            ticketArea.innerHTML = `<button onclick="window.location.href='bilet.html'" class="btn-buy-ticket">🎫 Bilet Al</button>`;
        }
    }
}

// Cüzdan Bağlama Fonksiyonu
async function connectWallet() {
    const addr = prompt("Lütfen TON Cüzdan Adresinizi Girin:");
    if (addr && addr.length > 10) {
        const user = tg.initDataUnsafe?.user || { id: MY_ID };
        const { error } = await supabaseClient
            .from('profiles')
            .update({ wallet_address: addr })
            .eq('telegram_id', user.id);
        
        if (!error) {
            tg.showAlert("Cüzdan başarıyla kaydedildi!");
            location.reload(); // Bilgileri güncellemek için sayfayı yenile
        } else {
            tg.showAlert("Hata oluştu: " + error.message);
        }
    } else if (addr) {
        tg.showAlert("Geçersiz cüzdan adresi!");
    }
}

// Cüzdan Kopyalama
function copyWallet() {
    if (fullWalletAddress) {
        navigator.clipboard.writeText(fullWalletAddress);
        tg.showAlert("Cüzdan adresi kopyalandı!");
    }
}

// Çekim Talebi Gönderilmesi
async function requestWithdraw() {
    const user = tg.initDataUnsafe?.user || { id: MY_ID };
    
    // Güncel bakiyeyi tekrar kontrol et
    const { data } = await supabaseClient.from('profiles').select('*').eq('telegram_id', user.id).single();
    
    if (data && data.balance >= 2.00 && data.wallet_address) {
        const { error } = await supabaseClient.from('withdrawals').insert([{
            telegram_id: user.id,
            wallet_address: data.wallet_address,
            amount: data.balance,
            status: 'pending'
        }]);

        if (!error) {
            tg.showAlert("Çekim talebiniz ( " + data.balance + " TON) alındı. Admin onayından sonra cüzdanınıza gönderilecektir.");
        } else {
            tg.showAlert("Hata: Talebiniz iletilemedi.");
        }
    } else {
        tg.showAlert("Çekim için en az 2.00 TON ve kayıtlı bir cüzdan gereklidir.");
    }
}

function updateQuizButton(hasTicket) {
    const hours = new Date().getHours();
    const quizHours = [10, 15, 20];
    const btn = document.getElementById('start-quiz-btn');
    if (quizHours.includes(hours) && hasTicket) {
        btn.classList.remove('disabled');
        btn.disabled = false;
        btn.innerText = "YARIŞMAYA BAŞLA";
    }
}

initDashboard();
