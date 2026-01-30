/* --- YARDIMCI GÖRSEL FONKSİYONLAR --- */

// 1. Cüzdan Adresini Kısaltma (Örn: EQBv...test1)
function formatWallet(address) {
    if (!address) return "";
    return address.substring(0, 6) + "..." + address.slice(-4);
}

// 2. Kopyalama Fonksiyonu
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    
    // Telegram üzerinden bildirim göster
    if (window.Telegram && window.Telegram.WebApp) {
        window.Telegram.WebApp.showAlert("Adres kopyalandı!");
    } else {
        alert("Kopyalandı!");
    }
}

// 3. Buton Yükleniyor Durumu (Anti-Spam)
function setBtnLoading(btnId, isLoading, originalText = "GİRİŞ YAP") {
    const btn = document.getElementById(btnId);
    if (!btn) return;
    if (isLoading) {
        btn.disabled = true;
        btn.style.opacity = "0.6";
        btn.innerText = "İŞLENİYOR...";
    } else {
        btn.disabled = false;
        btn.style.opacity = "1";
        btn.innerText = originalText;
    }
}

// 4. Sayfa Geçiş Animasyonu (Opsiyonel)
document.addEventListener("DOMContentLoaded", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 0.4s ease";
        document.body.style.opacity = "1";
    }, 50);
});
