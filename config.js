<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">
    <title>Quiz Arena V3.1</title>
    
    <script src='//libtl.com/sdk.js' data-zone='10527452' data-sdk='show_10527452'></script>
    <script src="https://telegram.org/js/telegram-web-app.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
    <script src="https://unpkg.com/@tonconnect/ui@latest/dist/tonconnect-ui.min.js"></script>
    <script src="config.js"></script>

    <style>
        :root { --primary: #38bdf8; --bg: #0f172a; --card: #1e293b; --text: #f8fafc; --gold: #fbbf24; --yt: #ff0000; --success: #10b981; --error: #ef4444; }
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        body { margin:0; background: var(--bg); color: var(--text); font-family: -apple-system, sans-serif; text-align:center; min-height: 100vh; overflow-x: hidden; padding-top: env(safe-area-inset-top); }
        .screen { display:none; padding: 20px; flex-direction: column; align-items: center; width: 100%; height: 100vh; overflow-y: auto; position: fixed; top:0; left:0; right: 0; }
        .screen.active { display:flex; }
        .card { background:var(--card); padding:15px; border-radius:15px; margin:10px 0; border:1px solid #334155; width: 100%; max-width: 450px; }
        .btn { display:block; width: 100%; max-width: 450px; padding:16px; border-radius:12px; border:none; font-weight:bold; cursor:pointer; margin-bottom:10px; font-size: 1rem; color: #fff; text-decoration: none; }
        .btn-blue { background:var(--primary); color:#000; }
        .btn-gold { background: var(--gold); color: #000; }
        .btn-yt { background: var(--yt); color: #fff; }
        .btn-option { background: #fff; color: #000; margin-bottom: 12px; text-align: left; padding: 14px; width:100%; }
        .countdown-timer { font-size: 1.5rem; font-weight: bold; color: var(--gold); margin: 5px 0; font-family: monospace; }
        .sponsor-box { background: #1e293b; height: 80px; border-radius: 12px; margin-bottom: 10px; border: 1px dashed #475569; display: flex; align-items: center; justify-content: center; width: 100%; max-width: 450px; overflow: hidden; }
        .prize-table { background: rgba(56, 189, 248, 0.1); border: 1px solid var(--primary); border-radius: 12px; padding: 10px; width: 100%; max-width: 450px; margin-bottom: 10px; }
        #ton-connect-btn { display: flex; justify-content: center; width: 100%; margin: 10px 0; }
    </style>
</head>
<body>

    <div id="sponsor-screen" class="screen active">
        <h2 style="color: var(--gold);">ARENA SPONSORLARI</h2>
        <div id="sponsor-list" style="width:100%; display: flex; flex-direction: column; align-items: center;"></div>
        <button class="btn btn-blue" onclick="handleEntry()">GİRİŞ YAP 🚀</button>
    </div>

    <div id="main-screen" class="screen">
        <div class="card">
            <h2 id="u-name">@Oyuncu</h2>
            <div id="ton-connect-btn"></div>
            <div style="font-size: 2rem; color: var(--gold); font-weight: 800;"><span id="u-balance">0.00</span> TON</div>
            <button id="withdraw-btn" class="btn btn-gold" disabled onclick="requestWithdraw()">KAZANÇ TALEP ET</button>
        </div>

        <div id="action-area" style="width:100%; display:flex; flex-direction:column; align-items:center;"></div>

        <div class="prize-table">
            <div style="font-weight: bold; color: var(--gold); margin-bottom: 5px;">🏆 ÖDÜLLER</div>
            <div style="display:flex; justify-content:space-around; font-size:0.8rem;">
                <span>🥇: <b id="p1">...</b></span> <span>🥈: <b id="p2">...</b></span> <span>🥉: <b id="p3">...</b></span>
            </div>
        </div>

        <button class="btn" style="background:#475569" onclick="fetchLeaderboard()">🏆 SIRALAMA</button>
        <button class="btn" style="background:#334155" onclick="showAnnouncements()">📢 DUYURULAR</button>
        <button id="admin-gate" class="btn" style="background:var(--gold); color:#000; display:none;" onclick="showScreen('admin-screen'); loadAdminData();">🛡️ ADMİN</button>
    </div>

    <div id="announcement-screen" class="screen">
        <h2>📢 DUYURULAR</h2>
        <div class="card" id="ann-content" style="text-align: left;"></div>
        <button class="btn btn-blue" onclick="showScreen('main-screen')">GERİ</button>
    </div>

    <div id="task-screen" class="screen">
        <h2>BİLET AL</h2>
        <div class="card">
            <button class="btn btn-blue" onclick="buyTicketWithTON()">0.1 TON İLE AL</button>
            <button id="ad-btn" class="btn btn-yt" style="background:var(--success)" onclick="watchAd()">🎬 REKLAM İZLE (0/4)</button>
        </div>
        <button class="btn" style="background:#475569" onclick="showScreen('main-screen')">İPTAL</button>
    </div>

    <div id="quiz-screen" class="screen">
        <div id="quiz-timer" style="font-size:2.5rem; color:var(--gold); font-weight:800;">15</div>
        <div class="card"><h3 id="question-text">...</h3></div>
        <div id="options-container" style="width:100%"></div>
    </div>

    <div id="leader-screen" class="screen">
        <h2>🏆 SIRALAMA</h2>
        <div id="leader-list" style="width:100%"></div>
        <button class="btn btn-blue" onclick="showScreen('main-screen')">GERİ</button>
    </div>

    <div id="admin-screen" class="screen">
        <h2>🛡️ ADMİN</h2>
        <div id="adm-withdrawals" style="width:100%"></div>
        <button class="btn" style="background:#475569" onclick="showScreen('main-screen')">KAPAT</button>
    </div>

    <script>
        const SB_URL = 'https://arumdxephyjteoypjaxh.supabase.co';
        const SB_KEY = 'sb_publishable_qEEOLIXhKlkLM_poqDDkhw_OkNS_yo1';
        const _supabase = window.supabase.createClient(SB_URL, SB_KEY);
        const tg = window.Telegram.WebApp;
        const MY_ID = 1369398784;

        let userId = tg.initDataUnsafe?.user?.id || 123456, user = null, adCount = 0;

        const tonConnectUI = new TON_CONNECT_UI.TonConnectUI({
            manifestUrl: 'https://gokapci-sudo.github.io/Quiz-Game-tr/tonconnect-manifest.json',
            buttonRootId: 'ton-connect-btn'
        });

        async function init() {
            tg.ready(); tg.expand();
            
            // Sponsorları ve Ödülleri Yükle
            if (window.APP_CONFIG) {
                document.getElementById('sponsor-list').innerHTML = APP_CONFIG.sponsors.map(s => `<div class="sponsor-box">${s.text}</div>`).join("");
                document.getElementById('p1').innerText = APP_CONFIG.prizes.p1;
                document.getElementById('p2').innerText = APP_CONFIG.prizes.p2;
                document.getElementById('p3').innerText = APP_CONFIG.prizes.p3;
            }

            // Kullanıcı Verisi
            const { data } = await _supabase.from('users').select('*').eq('telegram_id', userId).maybeSingle();
            user = data || (await _supabase.from('users').insert([{ telegram_id: userId, username: tg.initDataUnsafe?.user?.username || "Oyuncu", balance:0 }]).select().single()).data;

            if (userId === MY_ID) document.getElementById('admin-gate').style.display = 'block';
            
            setInterval(renderLogic, 1000);
        }

        function getTRTime() { return new Date(new Date().toLocaleString("en-US", {timeZone: "Europe/Istanbul"})); }

        function renderLogic() {
            if(!user) return;
            document.getElementById('u-name').innerText = "@" + user.username;
            document.getElementById('u-balance').innerText = user.balance.toFixed(2);
            document.getElementById('withdraw-btn').disabled = user.balance < 2.0;

            const now = getTRTime();
            const { hour, minute, durationMinutes } = APP_CONFIG.matchTime;
            const isMatchTime = (now.getHours() === hour && now.getMinutes() >= minute && now.getMinutes() < minute + durationMinutes);
            
            const actionArea = document.getElementById('action-area');
            if (isMatchTime) {
                actionArea.innerHTML = user.has_ticket ? `<button class="btn btn-blue" onclick="startQuiz()">🚀 YARIŞMAYI BAŞLAT</button>` : `<button class="btn btn-yt" onclick="showScreen('task-screen')">🎫 BİLET AL</button>`;
            } else {
                actionArea.innerHTML = `<div class="card">Yarışma saati: ${hour}:${minute.toString().padStart(2,'0')}</div>`;
            }
        }

        async function fetchLeaderboard() {
            const today = getTRTime().toISOString().split('T')[0];
            const { data } = await _supabase.from('daily_scores').select('*').eq('play_date', today).order('score', {ascending: false});
            document.getElementById('leader-list').innerHTML = data?.length ? data.map((r, i) => `<div class="card" style="display:flex; justify-content:space-between;"><span>#${i+1} @${r.username}</span> <b>${r.score} P</b></div>`).join("") : "Katılım yok.";
            showScreen('leader-screen');
        }

        function showAnnouncements() {
            document.getElementById('ann-content').innerText = APP_CONFIG.announcement;
            showScreen('announcement-screen');
        }

        function showScreen(id) {
            document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
            document.getElementById(id).classList.add('active');
        }

        function handleEntry() { showScreen('main-screen'); }

        window.onload = init;
    </script>
</body>
</html>
