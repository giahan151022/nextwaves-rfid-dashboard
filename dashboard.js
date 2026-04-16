
    // ═══════════════════════════════════════════════════════════
    // TRANSLATIONS (i18n)
    // ═══════════════════════════════════════════════════════════
    const i18n = {
      "vi": {
        "history_instructions": `
            ⚠️ <b style=\"color:var(--warning)\">Lưu ý quan trọng:</b><br>
            • <b>Hardware button</b> trên thiết bị = <b>Interactive mode</b> → <b style=\"color:var(--danger)\">KHÔNG lưu History</b><br>
            • Để có History: phải dùng <b style=\"color:var(--accent)\">🗂️ Batch mode từ Web UI</b><br>
            <div style=\"margin-top:8px;padding-top:8px;border-top:1px solid rgba(245,158,11,.2);\">
              📋 <b>Cách dùng:</b> Tab Scanner → chọn <b>🗂️ Batch</b> → <b>START SCAN</b> (từ web) → quét xong →
              <b>STOP SCAN</b> → quay lại đây Fetch
            </div>`,
        "conn_success": "✅ Đã kết nối: ",
        "err_https": "❌ Bị chặn: Cần phục vụ qua HTTPS",
        "err_gatt": "❌ Mất kết nối GATT. Thử lại!",
        "msg_disconn": "Đã ngắt kết nối BLE",
        "hw_batch": "🔘 HW Button: Quét Batch (có lưu History)",
        "hw_inter": "🔘 HW Button: Quét Interactive (không lưu History)",
        "hw_stop": "🔘 HW Button: Dừng quét",
        "nav_scanner": "Máy quét",
        "nav_locate": "Định vị",
        "nav_history": "Lịch sử",
        "nav_settings": "Cài đặt",
        "nav_debug": "Gỡ lỗi",
        "connect_ble": "KẾT NỐI BLE",
        "connecting": "ĐANG KẾT NỐI...",
        "disconnect": "NGẮT KẾT NỐI",
        "online": "TRỰC TUYẾN",
        "offline": "NGOẠI TUYẾN",
        "hw_button": "NÚT BẤM HW",
        "std_mode": "Tiêu chuẩn",
        "batch_mode": "Lô",
        "start_scan": "BẮT ĐẦU QUÉT",
        "stop_scan": "DỪNG QUÉT",
        "clear": "XÓA",
        "export": "XUẤT",
        "scanning_dots": "Đang quét...",
        "unique_tags": "Số Thẻ Đơn",
        "total_reads": "Tổng Số Đọc",
        "tags_sec": "Thẻ/giây",
        "avg_rssi": "RSSI Tr.bình",
        "th_epc": "EPC (HEX)",
        "th_rssi": "RSSI",
        "th_signal": "Tín hiệu",
        "th_count": "Số lượng",
        "th_last": "Lần cuối",
        "th_action": "Thao tác",
        "no_tags": "Không có thẻ",
        "find_mode": "🎯 Chế độ Tìm - Định vị thẻ",
        "target_epc": "EPC mục tiêu (Hex)",
        "find": "🔍 Tìm",
        "stop": "■ Dừng",
        "signal_strength": "Cường độ tín hiệu",
        "find_status_target": "Mục tiêu: ",
        "signal_history": "📊 Lịch sử tín hiệu",
        "batch_history_title": "📋 Lịch sử Lô",
        "open_batch_now": "🗂️ Mở Batch Mode ngay",
        "fetch_from_device": "📥 Tải từ thiết bị",
        "export_csv": "📤 Xuất CSV",
        "no_data": "Không có dữ liệu",
        "history_hint": "Hãy quét ở Batch Mode trước rồi Tải lại",
        "rf_power": "📶 Công suất RF",
        "tx_power": "Công.S TX (dBm)",
        "action_get": "↓ LẤY",
        "action_set": "↑ LƯU",
        "rf_params": "🔧 Thông số RF",
        "link_profile": "Profile Liên kết",
        "lp_std": "53 - T.chuẩn (250Kbps)",
        "lp_quick": "11 - Nhanh (640Kbps)",
        "lp_deep": "13 - Sâu (40Kbps)",
        "qs_title": "📊 Q / Phiên",
        "q_value": "Giá trị Q",
        "session": "Phiên",
        "dev_info": "🌡️ TT thiết bị",
        "device": "Thiết bị",
        "temperature": "Nhiệt độ",
        "get_info": "↓ LẤY TT",
        "qp_title": "📊 Tham số truy vấn",
        "interval_ms": "Giãn cách (ms)",
        "dwell_raw": "DWELL (RAW)",
        "append": "Nối dòng",
        "debug_title": "🔧 Log giao tiếp BLE",
        "download": "📥 Tải file",
        "autoscroll": "Tự đồng cuộn",
        "search_placeholder": "Tìm kiếm EPC (Hex)...",
        "no_tags_search": "Không tìm thấy thẻ khớp"
      },
      "en": {
        "history_instructions": `
            ⚠️ <b style=\"color:var(--warning)\">Important Note:</b><br>
            • <b>Hardware button</b> on device = <b>Interactive mode</b> → <b style=\"color:var(--danger)\">DOES NOT save History</b><br>
            • To save History: you must use <b style=\"color:var(--accent)\">🗂️ Batch mode from Web UI</b><br>
            <div style=\"margin-top:8px;padding-top:8px;border-top:1px solid rgba(245,158,11,.2);\">
              📋 <b>Usage:</b> Scanner Tab → select <b>🗂️ Batch</b> → <b>START SCAN</b> (from web) → finish scan →
              <b>STOP SCAN</b> → return here to Fetch
            </div>`,
        "conn_success": "✅ Connected: ",
        "err_https": "❌ Blocked: Requires HTTPS",
        "err_gatt": "❌ GATT connection lost. Retry!",
        "msg_disconn": "BLE Disconnected",
        "hw_batch": "🔘 HW Button: Batch Scan (History saved)",
        "hw_inter": "🔘 HW Button: Interactive Scan (No History)",
        "hw_stop": "🔘 HW Button: Scan Stopped",
        "nav_scanner": "Scanner",
        "nav_locate": "Locate",
        "nav_history": "History",
        "nav_settings": "Settings",
        "nav_debug": "Debug",
        "connect_ble": "CONNECT BLE",
        "connecting": "CONNECTING...",
        "disconnect": "DISCONNECT",
        "online": "ONLINE",
        "offline": "OFFLINE",
        "hw_button": "HW BUTTON",
        "std_mode": "Standard",
        "batch_mode": "Batch",
        "start_scan": "START SCAN",
        "stop_scan": "STOP SCAN",
        "clear": "CLEAR",
        "export": "EXPORT",
        "scanning_dots": "Scanning...",
        "unique_tags": "Unique Tags",
        "total_reads": "Total Reads",
        "tags_sec": "Tags/sec",
        "avg_rssi": "Avg RSSI",
        "th_epc": "EPC (HEX)",
        "th_rssi": "RSSI",
        "th_signal": "Signal",
        "th_count": "Count",
        "th_last": "Last Seen",
        "th_action": "Action",
        "no_tags": "No tags detected",
        "find_mode": "🎯 Find Mode - Locate Tag",
        "target_epc": "Target EPC (Hex)",
        "find": "🔍 Find",
        "stop": "■ Stop",
        "signal_strength": "Signal Strength",
        "find_status_target": "Target: ",
        "signal_history": "📊 Signal History",
        "batch_history_title": "📋 Batch Scan History",
        "open_batch_now": "🗂️ Open Batch Mode now",
        "fetch_from_device": "📥 Fetch From Device",
        "export_csv": "📤 Export CSV",
        "no_data": "No data",
        "history_hint": "Scan in Batch Mode first and then Fetch",
        "rf_power": "📶 RF Power",
        "tx_power": "TX Power (dBm)",
        "action_get": "↓ GET",
        "action_set": "↑ SET",
        "rf_params": "🔧 RF Parameters",
        "link_profile": "Link Profile",
        "lp_std": "53 - Standard (250Kbps)",
        "lp_quick": "11 - Quick (640Kbps)",
        "lp_deep": "13 - Deep (40Kbps)",
        "qs_title": "📊 Q / Session",
        "q_value": "Q Value",
        "session": "Session",
        "dev_info": "🌡️ Device Info",
        "device": "Device",
        "temperature": "Temperature",
        "get_info": "↓ GET INFO",
        "qp_title": "📊 Query Parameter",
        "interval_ms": "Interval (ms)",
        "dwell_raw": "DWELL (RAW COUNT)",
        "append": "Append",
        "debug_title": "🔧 BLE Communication Log",
        "download": "📥 Download",
        "autoscroll": "Auto-scroll",
        "search_placeholder": "Search EPC (Hex)...",
        "no_tags_search": "No tags match the search"
      }
    };

    let currentLang = localStorage.getItem('lang') || 'vi';

    function t(key) {
      return i18n[currentLang][key] || key;
    }


    function toggleLang(lang) {
      currentLang = lang;
      localStorage.setItem('lang', currentLang);
      document.querySelectorAll('[data-i18n]').forEach(el => {
        el.innerHTML = t(el.getAttribute('data-i18n'));
      });
      document.querySelectorAll('span[data-i18n]').forEach(el => {
        el.innerHTML = t(el.getAttribute('data-i18n'));
      });
      // Update dynamic elements
      // Reassign BLE UI if needed
      if (typeof setBLEUI === 'function') {
        if (isConnected) setBLEUI('connected');
        else setBLEUI('disconnected');
      }

      // Reassign Tab Titles
      const dynTabTitles = { scanner: '📡 ' + t('nav_scanner'), locate: '🎯 ' + t('nav_locate'), history: '📋 ' + t('nav_history'), settings: '⚙️ ' + t('nav_settings') };
      document.querySelectorAll('.nav-item').forEach(el => {
        const tText = el.textContent;
        if (tText.includes('📡')) el.innerHTML = '<span class="nav-icon">📡</span> ' + t('nav_scanner');
        if (tText.includes('🎯')) el.innerHTML = '<span class="nav-icon">🎯</span> ' + t('nav_locate');
        if (tText.includes('📋')) el.innerHTML = '<span class="nav-icon">📋</span> ' + t('nav_history');
        if (tText.includes('⚙️')) el.innerHTML = '<span class="nav-icon">⚙️</span> ' + t('nav_settings');
      });

      const activeTabId = Array.from(document.querySelectorAll('.tab-panel')).find(p => p.classList.contains('active'))?.id;
      if (activeTabId) {
        const name = activeTabId.replace('tab-', '');
        document.getElementById('topbarTitle').textContent = dynTabTitles[name] || name;
      }
      // Update placeholders
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
      });
      // Re-render table to update language of empty state
      if (typeof renderTagTable === 'function') renderTagTable();
    }

    // ═══════════════════════════════════════════════════════════
    // BLE CONFIGURATION
    // ═══════════════════════════════════════════════════════════
    const BLE_CONFIG = {
      name: 'Nextwaves-Carrier',
      // UUID 16-bit dạng số — Web Bluetooth API tự mở rộng sang 128-bit
      // Firmware: GATTS_SERVICE_UUID = 0x00FF
      serviceUUID: 0x00ff,   // 0x00FF → 000000ff-0000-1000-8000-00805f9b34fb
      cmdCharUUID: 0xff01,   // 0xFF01 → 0000ff01-0000-1000-8000-00805f9b34fb
      fileCtrlUUID: 0xff02,   // 0xFF02
      fileDataUUID: 0xff03,   // 0xFF03
    };

    // ═══════════════════════════════════════════════════════════
    // STATE
    // ═══════════════════════════════════════════════════════════
    let bleDevice = null, bleServer = null, cmdChar = null, fileCtrlChar = null, fileDataChar = null;
    let isConnected = false;
    let isScanning = false;
    let isBatchMode = false;
    let currentMode = 'std'; // std | batch
    let tags = new Map(); // epc → {epc, rssi, count, lastSeen}
    let totalReads = 0;
    let scanStartTime = null;
    let rateInterval = null;
    let locating = false;
    let renderTaskPending = false;
    const RENDER_INTERVAL = 200; // ms
    let lastRenderTime = 0;
    let msgBuffer = ''; // Bộ đệm hội tụ các mảnh tin nhắn BLE

    function requestUIRender() {
      if (renderTaskPending) return;
      const now = performance.now();
      const elapsed = now - lastRenderTime;

      if (elapsed >= RENDER_INTERVAL) {
        renderTaskPending = true;
        requestAnimationFrame(() => {
          try {
            renderTagTable();
            updateStats();
          } finally {
            lastRenderTime = performance.now();
            renderTaskPending = false;
          }
        });
      } else {
        renderTaskPending = true;
        setTimeout(() => {
          requestAnimationFrame(() => {
            try {
              renderTagTable();
              updateStats();
            } finally {
              lastRenderTime = performance.now();
              renderTaskPending = false;
            }
          });
        }, RENDER_INTERVAL - elapsed);
      }
    }

    // ═══════════════════════════════════════════════════════════
    // TAB NAVIGATION
    // ═══════════════════════════════════════════════════════════
    const tabTitles = { scanner: '📡 ' + (t('nav_scanner') || 'Scanner'), locate: '🎯 ' + (t('nav_locate') || 'Locate'), history: '📋 ' + (t('nav_history') || 'History'), settings: '⚙️ ' + (t('nav_settings') || 'Settings') };
    function switchTab(name) {
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.getElementById('tab-' + name).classList.add('active');
      document.querySelectorAll('.nav-item').forEach(n => { if (n.textContent.trim().toLowerCase().includes(name.charAt(0).toUpperCase() + name.slice(1).toLowerCase())) n.classList.add('active'); });
      // fix nav active because of emoji
      const navItems = document.querySelectorAll('.nav-item');
      navItems.forEach(n => {
        const t = n.textContent.toLowerCase();
        if (t.includes(name)) { n.classList.add('active'); }
      });
      document.getElementById('topbarTitle').textContent = tabTitles[name] || name;
    }

    // ═══════════════════════════════════════════════════════════
    // BLE CONNECTION
    // ═══════════════════════════════════════════════════════════
    async function toggleBLE() {
      closeSidebar();
      if (isConnected) { await disconnectBLE(); }
      else { await connectBLE(); }
    }

    async function connectBLE() {
      if (!navigator.bluetooth) {
        showBLEGuide();
        logDebug('FAIL: navigator.bluetooth is undefined — ' + getBLEEnv(), 'err');
        return;
      }
      try {
        setBLEUI('connecting');
        logDebug(`Đang tìm thiết bị: "${BLE_CONFIG.name}"...`, 'info');

        bleDevice = await navigator.bluetooth.requestDevice({
          filters: [
            { namePrefix: 'Nextwaves' },
            { namePrefix: 'NRH-10' }
          ],
          optionalServices: [
            BLE_CONFIG.serviceUUID,   // 0x00FF — service chính
            BLE_CONFIG.cmdCharUUID,   // 0xFF01 — CMD control
            BLE_CONFIG.fileCtrlUUID,  // 0xFF02 — File control
            BLE_CONFIG.fileDataUUID,  // 0xFF03 — File data
          ]
        });
        logDebug(`Tìm thấy thiết bị: ${bleDevice.name}`, 'info');

        bleDevice.addEventListener('gattserverdisconnected', onDisconnected);

        logDebug('Đang kết nối GATT...', 'info');
        bleServer = await bleDevice.gatt.connect();
        logDebug('GATT connected ✓', 'info');

        logDebug(`Lấy service: 0x${BLE_CONFIG.serviceUUID.toString(16).toUpperCase()}...`, 'info');
        const service = await bleServer.getPrimaryService(BLE_CONFIG.serviceUUID);
        logDebug('Service found ✓', 'info');

        logDebug(`Lấy CMD characteristic: 0x${BLE_CONFIG.cmdCharUUID.toString(16).toUpperCase()}...`, 'info');
        cmdChar = await service.getCharacteristic(BLE_CONFIG.cmdCharUUID);
        logDebug('CMD Char found ✓', 'info');

        // File Control characteristic (0xFF02) — trigger send_file
        try {
          fileCtrlChar = await service.getCharacteristic(BLE_CONFIG.fileCtrlUUID);
          logDebug('File Control Char found ✓', 'info');
        } catch (e) {
          logDebug('File Control Char không tìm thấy (bỏ qua): ' + (e?.message || 'unknown'), 'info');
        }

        // File Data characteristic (optional)
        try {
          fileDataChar = await service.getCharacteristic(BLE_CONFIG.fileDataUUID);
          await fileDataChar.startNotifications();
          fileDataChar.addEventListener('characteristicvaluechanged', onFileData);
          logDebug('File Data Char found ✓', 'info');
        } catch (e) {
          logDebug('File Data Char không tìm thấy (bỏ qua): ' + (e?.message || e?.toString?.() || 'unknown'), 'info');
        }

        await cmdChar.startNotifications();
        cmdChar.addEventListener('characteristicvaluechanged', onCmdNotification);
        logDebug('Notifications enabled ✓', 'info');

        setBLEUI('connected');
        showToast(t('conn_success') + bleDevice.name, 'success');
        document.getElementById('deviceName').textContent = bleDevice.name;
        setControlsEnabled(true);
        logDebug(`Chars: CMD=${!!cmdChar} FileCtrl=${!!fileCtrlChar} FileData=${!!fileDataChar}`, 'info');

        // Auto-fetch device info
        setTimeout(() => sendCmd({ cmd: 'DI' }), 600);
        //setTimeout(() => sendCmd({cmd:'GB'}), 1200);

      } catch (e) {
        setBLEUI('disconnected');

        // Bluefy/WebKit đôi khi throw object rỗng hoặc string thay vì Error
        const eName = e?.name || (typeof e === 'string' ? 'StringError' : 'UnknownError');
        const eMsg = e?.message || (typeof e === 'string' ? e : null)
          || e?.toString?.() || '';
        const isBluefyCancel = !eName || eName === 'UnknownError' || eMsg === '' || eMsg === 'undefined' || eMsg === '[object Object]';

        // Log đầy đủ để debug
        try { logDebug(`❌ RAW error: ${JSON.stringify(e)}`, 'err'); } catch (_) { }
        logDebug(`❌ Lỗi kết nối [${eName}]: ${eMsg || '(no message)'}`, 'err');

        if (isBluefyCancel
          || eName === 'NotFoundError'
          || eMsg.includes('cancel') || eMsg.includes('chosen')
          || eMsg.includes('User cancelled') || eMsg.includes('no device')) {
          // Người dùng đóng dialog hoặc không chọn thiết bị → im lặng
        } else if (eName === 'SecurityError' || eMsg.includes('secure') || eMsg.includes('https')) {
          showToast(t('err_https'), 'error');
        } else if (eName === 'NetworkError') {
          showToast(t('err_gatt'), 'error');
        } else if (eName === 'NotSupportedError') {
          showBLEGuide();
        } else {
          showToast('❌ ' + (eMsg || eName || t('err_gatt')), 'error');
        }
      }
    }

    async function disconnectBLE() {
      if (isScanning) await doStopScan();
      if (bleDevice?.gatt?.connected) bleDevice.gatt.disconnect();
      onDisconnected();
    }

    function onDisconnected() {
      isConnected = false; isScanning = false;
      cmdChar = null; fileCtrlChar = null; fileDataChar = null;
      msgBuffer = ''; // Dọn dẹp bộ đệm khi ngắt kết nối
      setBLEUI('disconnected');
      setControlsEnabled(false);
      setScanUI(false);
      setHWIndicator(false);
      logDebug('Disconnected', 'info');
      showToast('🔌 ' + t('msg_disconn'), 'error');
    }

    // ═══════════════════════════════════════════════════════════
    // SEND COMMAND
    // ═══════════════════════════════════════════════════════════
    async function sendCmd(obj) {
      if (!cmdChar) return;
      const str = JSON.stringify(obj);
      const enc = new TextEncoder().encode(str);
      try {
        await cmdChar.writeValue(enc);
        logDebug('TX: ' + str, 'tx');
      } catch (e) { logDebug('TX Error: ' + (e?.message || e?.toString?.() || 'unknown'), 'err'); }
    }

    // ═══════════════════════════════════════════════════════════
    // NOTIFICATION HANDLER ← THE KEY FIX IS HERE
    // ═══════════════════════════════════════════════════════════
    function onCmdNotification(event) {
      const chunk = new TextDecoder('utf-8').decode(event.target.value);
      msgBuffer += chunk;

      // Giới hạn kích thước bộ đệm để tránh "ngộ độc" dữ liệu và quá tải bộ nhớ
      const MAX_BUFFER = 16384; // 16KB
      if (msgBuffer.length > MAX_BUFFER) {
        logDebug(`⚠️ Buffer overflow (${msgBuffer.length} bytes). Discarding garbage.`, 'err');
        const lastBrace = msgBuffer.lastIndexOf('{');
        if (lastBrace !== -1) msgBuffer = msgBuffer.substring(lastBrace);
        else msgBuffer = '';
      }

      // Kỹ thuật Brace Counting: Bóc tách từng đối tượng JSON hoàn chỉnh { ... }
      while (msgBuffer.length > 0) {
        let start = msgBuffer.indexOf('{');
        if (start === -1) {
          // Nếu không tìm thấy dấu mở ngoặc nào, xóa sạch bộ đệm rác
          msgBuffer = '';
          break;
        }

        // Loại bỏ mọi dữ liệu rác trước dấu { đầu tiên
        if (start > 0) {
          msgBuffer = msgBuffer.substring(start);
        }

        let depth = 0;
        let end = -1;
        let foundBrace = false;

        for (let i = 0; i < msgBuffer.length; i++) {
          if (msgBuffer[i] === '{') {
            depth++;
            foundBrace = true;
          } else if (msgBuffer[i] === '}') {
            depth--;
            foundBrace = true;
          }

          if (foundBrace && depth === 0) {
            end = i;
            break;
          }
        }

        if (end !== -1) {
          // Đã tìm thấy một đối tượng JSON hoàn chỉnh
          const jsonStr = msgBuffer.substring(0, end + 1);
          msgBuffer = msgBuffer.substring(end + 1);
          
          try {
            processRawJSON(jsonStr.trim());
          } catch (err) {
            logDebug(`❌ Logic Error: ${err.message}`, 'err');
            // Nếu có lỗi logic nghiêm trọng, reset buffer để đảm bảo không bị kẹt
            msgBuffer = ''; 
          }
        } else {
          // Chưa đủ dữ liệu cho một thực thể JSON, đợi mảnh tiếp theo
          break;
        }
      }
    }

    function processRawJSON(raw) {
      if (!raw) return false;
      try {
        const data = JSON.parse(raw);
        if (data.cmd !== 'live_tags') logDebug('RX: ' + raw, 'rx');
        handleData(data);
        return true;
      } catch (e) {
        // Nếu parse lỗi, có thể do chưa nhận đủ (fragmented)
        // Chỉ log lỗi nếu chuỗi trông có vẻ đã kết thúc (có dấu })
        if (raw.endsWith('}')) {
          logDebug('RX Parse Error: ' + raw.substring(0, 50) + '...', 'err');
        }
        return false;
      }
    }

    function handleData(data) {

        switch (data.cmd) {

          // Hardware button pressed → Start scan (mode tùy firmware gửi)
          case 'S':
            if (data.status === 'ok') {
              if (webCmdPending === 'start') {
                // Reply cho lệnh S do web gửi → confirm OK, bỏ qua HW indicator
                webCmdPending = null;
                logDebug('✓ Web START confirmed', 'info');
              } else if (!isScanning) {
                // S đến không phải do web → hardware button
                const isBatch = data.mode === 'batch';
                currentMode = isBatch ? 'batch' : 'std';
                document.getElementById('modeStd').classList.toggle('active', !isBatch);
                document.getElementById('modeBatch').classList.toggle('active', isBatch);
                setHWIndicator(true, isBatch ? 'HW ▶ BATCH' : 'HW ▶ START');
                setIsScanning(true);
                if (isBatch) {
                  logDebug('🔘 Hardware button → START BATCH MODE', 'info');
                  showToast(t('hw_batch'), 'hw');
                } else {
                  logDebug('🔘 Hardware button → START Interactive mode', 'info');
                  showToast(t('hw_inter'), 'hw');
                }
              }
            }
            break;

          // Hardware button stop → Stop scan
          case 'X':
            if (data.status === 'ok') {
              if (webCmdPending === 'stop') {
                // Reply cho lệnh X do web gửi → bình thường
                webCmdPending = null;
                logDebug('✓ Web STOP confirmed', 'info');
              } else if (isScanning) {
                // X đến không phải do web → hardware button
                logDebug('🔘 Hardware button → STOP SCAN', 'info');
                setHWIndicator(false);
                setIsScanning(false);
                showToast(t('hw_stop'), 'hw');
              }
            }
            break;

          case 'live_tags':
            if (isScanning && data.tags && Array.isArray(data.tags)) {
              processLiveTags(data.tags);
            }
            break;

          case 'F':
            handleLocateResult(data);
            break;

          case 'DI':
            if (data.val) document.getElementById('infoDevice').textContent = data.val;
            break;

          case 'GT':
            if (data.status === 'err') {
              document.getElementById('infoTemp').textContent = currentLang === 'en' ? 'Error!' : 'Lỗi!';
            } else if (data.val !== undefined) {
              document.getElementById('infoTemp').textContent = data.val + '°C';
            }
            break;

          /*case 'GB':
            const batt = data.voltage ? `${data.voltage}V (${data.state})` : data.state || '-';
            document.getElementById('infoBattery').textContent = batt;
            break;*/

          case 'GP':
            if (data.val !== undefined) {
              document.getElementById('powerSlider').value = data.val;
              document.getElementById('powerVal').textContent = data.val + 'dBm';
            }
            break;

          case 'GRP':
            if (data.val) {
              const parts = data.val.toString().split(',');
              // speed,qv,session,target
            }
            break;

          case 'GQS':
            if (data.val) {
              const [qv, sess] = data.val.toString().split(',');
              if (qv) document.getElementById('qValue').value = parseInt(qv);
              if (sess) document.getElementById('session').value = parseInt(sess);
            }
            break;

          case 'GQP':
            if (data.val) {
              const [interval, dwell, append] = data.val.toString().split(',');
              if (interval) document.getElementById('interval').value = parseInt(interval);
              if (dwell) document.getElementById('dwell').value = parseInt(dwell);
              if (append) document.getElementById('append').value = parseInt(append);
            }
            break;

          case 'GLP':
            if (data.val !== undefined) document.getElementById('linkProfile').value = data.val;
            break;
        }
    }

    // ═══════════════════════════════════════════════════════════
    // SCAN CONTROL
    // ═══════════════════════════════════════════════════════════
    function setMode(mode) {
      currentMode = mode;
      document.getElementById('modeStd').classList.toggle('active', mode === 'std');
      document.getElementById('modeBatch').classList.toggle('active', mode === 'batch');
    }

    async function toggleScan() {
      if (isScanning) { await doStopScan(); }
      else { await doStartScan(); }
    }

    let webCmdPending = null; // track lệnh web đang chờ reply

    async function doStartScan() {
      const mode = currentMode;
      const cmd = mode === 'batch' ? { cmd: 'SB' } : { cmd: 'S' };
      webCmdPending = 'start';

      // Set scanning state BEFORE sending command to catch early notifications
      setIsScanning(true);

      try {
        await sendCmd(cmd);
      } catch (e) {
        // In case of immediate BLE write failure, revert state
        setIsScanning(false);
        webCmdPending = null;
        showToast('TX Error: ' + (e?.message || 'failed'), 'error');
      }
    }

    async function doStopScan() {
      const cmd = currentMode === 'batch' ? { cmd: 'XB' } : { cmd: 'X' };
      webCmdPending = 'stop';
      await sendCmd(cmd);
      setIsScanning(false);
    }

    // Set scanning state (called from both UI and hardware button)
    function setIsScanning(val) {
      isScanning = val;
      setScanUI(val);
      if (val) {
        msgBuffer = ''; // Dọn sạch bộ đệm khi bắt đầu nhịp quét mới
        scanStartTime = Date.now();
        startRateTimer();
      } else {
        stopRateTimer();
      }
    }

    function setScanUI(scanning) {
      const btn = document.getElementById('scanBtn');
      const txt = document.getElementById('scanBtnText');
      const ind = document.getElementById('scanningIndicator');
      if (scanning) {
        btn.className = 'btn btn-stop';
        txt.textContent = t('stop_scan');
        btn.querySelector('span:first-child').textContent = '■';
        ind.style.display = 'flex';
      } else {
        btn.className = 'btn btn-primary';
        txt.textContent = t('start_scan');
        btn.querySelector('span:first-child').textContent = '▶';
        ind.style.display = 'none';
      }
    }

    // ═══════════════════════════════════════════════════════════
    // TAG PROCESSING
    // ═══════════════════════════════════════════════════════════
    function processLiveTags(tagList) {
      const now = new Date();
      tagList.forEach(t => {
        const epc = t.epc || t.e;
        // ZK E710: firmware gửi RSSI là số âm đúng (ví dụ -68, -70)
        // Nếu gửi số dương (bug unsigned), tự đổi về âm
        let rssiRaw = t.rssi !== undefined ? t.rssi : (t.r || 0);
        const rssi = Math.abs(rssiRaw);
        if (!epc) return;
        totalReads++;
        if (tags.has(epc)) {
          const existing = tags.get(epc);
          existing.rssi = rssi;
          existing.count++;
          existing.lastSeen = now;
        } else {
          tags.set(epc, { epc, rssi, count: 1, lastSeen: now });
        }
      });
      requestUIRender();
    }

    // ═══════════════════════════════════════════════════════════
    // ZK E710 RSSI HELPERS — dùng thống nhất toàn bộ dashboard
    // RSSI sau convert luôn là số âm: -68 dBm, -70 dBm...
    // Signal %: -68 → 32%, -50 → 50%, -30 → 70% (rssi + 100)
    // Ngưỡng màu UHF RFID ZK E710:
    // > -70 dBm  = Tốt (xanh)   — gần anten
    // > -85 dBm  = Trung (vàng)  — khoảng cách vừa
    // <= -85 dBm = Yếu (đỏ)     — xa anten
    function rssiToPct(rssi) {
      if (rssi <= 0) return 0;
      return Math.min(100, Math.round(rssi));
    }
    function rssiToColor(rssi) {
      return rssi >= 60 ? 'var(--success)' : rssi >= 35 ? 'var(--warning)' : 'var(--danger)';
    }
    function rssiToClass(rssi) {
      return rssi >= 60 ? 'rssi-good' : rssi >= 35 ? 'rssi-mid' : 'rssi-bad';
    }

    function renderTagTable() {
      const tbody = document.getElementById('tagTableBody');
      const searchQuery = document.getElementById('tagSearchInput').value.trim().toUpperCase();

      // 1. Lấy danh sách thẻ và lọc theo tìm kiếm
      let filteredTags = [...tags.values()];

      if (searchQuery) {
        filteredTags = filteredTags.filter(t => t.epc.toUpperCase().includes(searchQuery));
      }

      // 2. Kiểm tra nếu không có dữ liệu
      if (filteredTags.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7">
          <div class="empty-state">
            <div class="empty-icon">${searchQuery ? '❓' : '📭'}</div>
            <div>${searchQuery ? t('no_tags_search') : t('no_tags')}</div>
          </div>
        </td></tr>`;
        return;
      }

      // 3. Sắp xếp theo thời gian mới nhất
      const sorted = filteredTags.sort((a, b) => b.lastSeen - a.lastSeen);

      // 4. Hiển thị bảng
      tbody.innerHTML = sorted.map((t, i) => {
        const rssi = t.rssi;
        const pct = rssiToPct(rssi);
        const rssiClass = rssiToClass(rssi);
        const barColor = rssiToColor(rssi);
        const timeStr = t.lastSeen.toLocaleTimeString();

        // Highlight kết quả tìm kiếm trong chuỗi EPC (tùy chọn)
        let displayEpc = t.epc;
        if (searchQuery) {
          const reg = new RegExp(`(${searchQuery})`, 'gi');
          displayEpc = t.epc.replace(reg, '<mark style="background:rgba(0,212,255,0.4);color:white;">$1</mark>');
        }

        return `<tr>
          <td style="color:var(--text-dim)">${i + 1}</td>
          <td class="epc-cell">${displayEpc}</td>
          <td class="rssi-cell ${rssiClass}">${rssi} dBm</td>
          <td>
            <div class="rssi-bar-wrap">
              <div class="rssi-bar"><div class="rssi-bar-fill" style="width:${pct}%;background:${barColor}"></div></div>
              <span style="font-size:11px;color:var(--text-dim)">${pct}%</span>
            </div>
          </td>
          <td><span class="count-badge">${t.count}</span></td>
          <td style="color:var(--text-dim);font-size:12px;">${timeStr}</td>
          <td>
            <button class="btn btn-outline btn-sm" onclick="locateTag('${t.epc}')" style="padding:3px 8px;font-size:11px;">🎯</button>
          </td>
        </tr>`;
      }).join('');
    }

    function updateStats() {
      document.getElementById('statUnique').textContent = tags.size;
      document.getElementById('statTotal').textContent = totalReads;
      if (tags.size > 0) {
        const avgRssi = Math.round([...tags.values()].reduce((s, t) => s + t.rssi, 0) / tags.size);
        document.getElementById('statRSSI').textContent = avgRssi;
      }
    }

    function startRateTimer() {
      let lastTotal = totalReads;
      rateInterval = setInterval(() => {
        const delta = totalReads - lastTotal;
        document.getElementById('statRate').textContent = delta;
        lastTotal = totalReads;
      }, 1000);
    }

    function stopRateTimer() {
      clearInterval(rateInterval);
      document.getElementById('statRate').textContent = '0';
    }

    function clearTags() {
      tags.clear(); totalReads = 0;
      renderTagTable(); updateStats();
      document.getElementById('statRSSI').textContent = '-';
    }

    function exportCSV() {
      if (tags.size === 0) { showToast('No tags to export', 'error'); return; }
      const rows = [['#', 'EPC', 'RSSI', 'Count', 'Last Seen']];
      [...tags.values()].forEach((t, i) => rows.push([i + 1, t.epc, t.rssi, t.count, t.lastSeen.toISOString()]));
      const csv = rows.map(r => r.join(',')).join('\n');
      downloadFile('tags_' + new Date().toISOString().slice(0, 19).replace(/:/g, '-') + '.csv', csv, 'text/csv');
    }

    // ═══════════════════════════════════════════════════════════
    // LOCATE
    // ═══════════════════════════════════════════════════════════
    function locateTag(epc) {
      document.getElementById('locateEpc').value = epc;
      switchTab('locate');
    }

    async function startLocate() {
      const epc = document.getElementById('locateEpc').value.trim();
      if (!epc) { showToast(t('find'), 'error'); return; }
      locating = true;
      document.getElementById('locateEpcDisplay').textContent = t('find_status_target') + epc;
      document.getElementById('locateBtn').disabled = true;
      document.getElementById('stopLocateBtn').disabled = false;
      await sendCmd({ cmd: 'F', val: epc });
      logDebug('Locate started: ' + epc, 'info');
    }

    async function stopLocate() {
      locating = false;
      await sendCmd({ cmd: 'X' });
      document.getElementById('locateBtn').disabled = false;
      document.getElementById('stopLocateBtn').disabled = true;
      updateSignal(0);
      showToast(t('stop') + ' locate', 'info');
    }

    function handleLocateResult(data) {
      if (!locating) return;
      const rssi = data.rssi; // E710: số dương (66,69,72) hoặc -100 (timeout)
      updateSignal(rssi);
      const log = document.getElementById('locateLog');
      const entry = document.createElement('div');
      entry.className = 'locate-log-entry';
      const pct = rssiToPct(rssi);
      const col = rssiToColor(rssi);
      entry.innerHTML = `<span style="color:var(--text-dim)">${new Date().toLocaleTimeString()}</span> RSSI: <span style="color:${col}">${rssi}</span> [${pct}%]`;
      log.insertBefore(entry, log.firstChild);
      if (log.children.length > 50) log.removeChild(log.lastChild);
    }

    function updateSignal(rssi) {
      const circle = document.getElementById('signalCircle');
      const pctEl = document.getElementById('signalPct');
      const rssiEl = document.getElementById('locateRssi');
      const pct = rssiToPct(rssi);
      const color = rssiToColor(rssi);
      circle.style.setProperty('--pct', pct + '%');
      pctEl.textContent = pct + '%';
      rssiEl.textContent = (rssi === 0 ? '---' : rssi + ' raw');
      rssiEl.style.color = color;
      pctEl.style.color = color;
    }

    // ═══════════════════════════════════════════════════════════
    // HISTORY / FILE TRANSFER
    // ═══════════════════════════════════════════════════════════
    let fileBuffer = [];
    function onFileData(event) {
      const buf = event.target.value;
      const seq = (buf.getUint8(0) << 8) | buf.getUint8(1);
      if (seq === 0xFFFF) {
        fileBuffer = [];
        logDebug('File transfer START', 'info');
        document.getElementById('historyStatus').textContent = currentLang === 'vi' ? '📥 Đang nhận...' : '📥 Receiving...';
      } else if (seq === 0xFFFE) {
        const blob = new Blob(fileBuffer, { type: 'application/json' });
        blob.text().then(text => {
          logDebug('📄 File RAW (' + text.length + ' bytes): ' + text.substring(0, 300), 'info');
          renderHistory(text);
        });
        document.getElementById('historyStatus').textContent = currentLang === 'vi' ? '✅ Nhận xong' : '✅ Transfer complete';
      } else {
        const chunk = buf.buffer.slice(2);
        fileBuffer.push(chunk);
      }
    }

    async function fetchHistory() {
      if (!isConnected) {
        showToast('❌ ' + t('connect_ble'), 'error');
        document.getElementById('historyStatus').textContent = '⚠️ ' + (currentLang === 'vi' ? 'Chưa kết nối thiết bị.' : 'Device not connected.');
        return;
      }
      if (!fileCtrlChar) {
        showToast('❌ File Control char not found!', 'error');
        document.getElementById('historyStatus').textContent = '❌ File Control char (0xFF02) ' + (currentLang === 'vi' ? 'không khả dụng.' : 'not available.');
        return;
      }
      fileBuffer = [];
      document.getElementById('historyList').innerHTML = '';
      document.getElementById('historyStatus').textContent = '⏳ ' + (currentLang === 'vi' ? 'Đang yêu cầu...' : 'Requesting...');
      logDebug('Sending send_file → 0xFF02...', 'info');

      const timeout = setTimeout(() => {
        if (document.getElementById('historyStatus').textContent.includes('Requesting') || document.getElementById('historyStatus').textContent.includes('yêu cầu')) {
          document.getElementById('historyStatus').textContent = '⚠️ ' + (currentLang === 'vi' ? 'Không nhận được phản hồi từ thiết bị.' : 'No response from device.');
          showToast('⏱️ ' + (currentLang === 'vi' ? 'Timeout: thiết bị không phản hồi' : 'Timeout: device not responding'), 'error');
        }
      }, 10000);

      try {
        // Firmware kiểm tra strstr(cmd, "send_file") trên characteristic 0xFF02
        const enc = new TextEncoder().encode('send_file');
        await fileCtrlChar.writeValue(enc);
        logDebug('TX (FileCtrl 0xFF02): send_file', 'tx');
      } catch (e) {
        clearTimeout(timeout);
        const msg = e?.message || e?.toString?.() || 'unknown';
        document.getElementById('historyStatus').textContent = '❌ ' + msg;
        showToast('❌ ' + (currentLang === 'vi' ? 'Lỗi gửi lệnh: ' : 'Command error: ') + msg, 'error');
        logDebug('File Control write error: ' + msg, 'err');
      }
    }

    function renderHistory(json) {
      try {
        logDebug('History JSON (' + json.length + ' bytes): ' + json.substring(0, 200), 'info');
        const data = JSON.parse(json);
        const list = document.getElementById('historyList');

        // Firmware lưu key "epcs" (không phải "tags")
        const tagList = data.epcs || data.tags || data.epc_list || [];

        if (tagList.length === 0) {
          list.innerHTML = '<div style="color:var(--text-dim);text-align:center;padding:30px;"><div style="font-size:32px;margin-bottom:8px;opacity:.3">📭</div><div>' + t('no_data') + '</div><div style="font-size:11px;margin-top:8px;opacity:.6">' + t('history_hint') + '</div></div>';
          return;
        }

        list.innerHTML = tagList.map((item, i) => {
          // Support both string EPC and object {epc, rssi}
          const epc = typeof item === 'string' ? item : (item.epc || item.e || JSON.stringify(item));
          const rssi = typeof item === 'object' ? (item.rssi || item.r || '') : '';
          return `
        <div class="history-tag">
          <span style="color:var(--text-dim);font-size:12px;">${i + 1}</span>
          <span class="history-epc">${epc}</span>
          ${rssi ? `<span style="font-size:11px;color:var(--text-dim)">${rssi} dBm</span>` : ''}
          <button class="btn btn-outline btn-sm" onclick="locateTag('${epc}')" style="padding:3px 8px;font-size:11px;">🎯 Find</button>
        </div>`;
        }).join('');
        document.getElementById('historyStatus').textContent = `✅ ${tagList.length} ` + (currentLang === 'vi' ? 'thẻ đã tải' : 'tags loaded');
      } catch (e) {
        logDebug('History parse error: ' + e.message + ' | raw: ' + json.substring(0, 300), 'err');
        document.getElementById('historyList').innerHTML =
          '<div style="color:var(--danger);padding:10px;font-size:12px;">⚠️ Parse error: ' + e.message +
          '<br><span style="color:var(--text-dim);font-family:monospace;font-size:11px;">' + json.substring(0, 200) + '</span></div>';
      }
    }

    function clearHistory() { document.getElementById('historyList').innerHTML = ''; document.getElementById('historyStatus').textContent = ''; }
    function exportHistory() { showToast('Export not implemented', 'info'); }

    // ═══════════════════════════════════════════════════════════
    // SETTINGS
    // ═══════════════════════════════════════════════════════════
    async function getSettings(cmd) { await sendCmd({ cmd }); }
    async function setPower() { await sendCmd({ cmd: 'SP', val: parseInt(document.getElementById('powerSlider').value) }); }
    async function setRFParams() { await sendCmd({ cmd: 'SLP', val: parseInt(document.getElementById('linkProfile').value) }); }
    async function setQSession() {
      const q = document.getElementById('qValue').value;
      const s = document.getElementById('session').value;
      await sendCmd({ cmd: 'SQS', val: q + ',' + s });
    }
    async function setQueryParameter() {
      const i = document.getElementById('interval').value;
      const d = document.getElementById('dwell').value;
      const a = document.getElementById('append').value;
      await sendCmd({ cmd: 'SQP', val: i + ',' + d + ',' + a });
    }
    //async function setBuzzer(state) { await sendCmd({cmd:'BZ', val: state}); }
    async function getDeviceInfo() {
      await sendCmd({ cmd: 'DI' });
      await sendCmd({ cmd: 'GT' });
      //await sendCmd({cmd:'GB'});
    }

    // ═══════════════════════════════════════════════════════════
    // UI HELPERS
    // ═══════════════════════════════════════════════════════════
    function setBLEUI(state) {
      const btn = document.getElementById('bleBtn');
      const dot = document.getElementById('statusDot');
      const txt = document.getElementById('bleBtnText');
      const chip = document.getElementById('connChip');
      btn.className = 'ble-btn ' + state;
      dot.className = 'status-dot' + (state === 'connecting' ? ' pulse' : '');
      isConnected = state === 'connected';
      txt.textContent = state === 'connected' ? t('disconnect') : state === 'connecting' ? t('connecting') : t('connect_ble');
      chip.className = 'chip ' + (state === 'connected' ? 'chip-green' : state === 'connecting' ? 'chip-orange' : 'chip-red');
      chip.textContent = '● ' + (state === 'connected' ? t('online') : state === 'connecting' ? t('connecting') : t('offline'));
    }

    function setControlsEnabled(en) {
      ['scanBtn', 'setPowerBtn', 'setRFBtn', 'setQBtn', 'setQPBtn', 'getInfoBtn', 'fetchBtn', 'locateBtn'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.disabled = !en;
      });
    }

    function setHWIndicator(active, txt) {
      const el = document.getElementById('hwIndicator');
      el.className = 'hw-btn-indicator' + (active ? ' active' : '');
      document.getElementById('hwIndicatorText').textContent = txt || 'HW BUTTON';
      if (active) setTimeout(() => setHWIndicator(false), 3000);
    }

    // ═══════════════════════════════════════════════════════════
    // DEBUG LOG
    // ═══════════════════════════════════════════════════════════
    let debugLines = [];
    function logDebug(msg, type = 'info') {
      const now = new Date().toLocaleTimeString();
      const line = { msg, type, time: now };
      debugLines.push(line);
      if (debugLines.length > 500) debugLines.shift();
      const log = document.getElementById('debugLog');
      const div = document.createElement('div');
      div.className = 'log-entry log-' + type;
      div.innerHTML = `<span class="log-time">[${now}]</span>${msg}`;
      log.appendChild(div);
      if (document.getElementById('autoScrollLog')?.checked) log.scrollTop = log.scrollHeight;
    }

    function clearDebug() {
      document.getElementById('debugLog').innerHTML = '';
      debugLines = [];
    }

    function downloadLog() {
      const txt = debugLines.map(l => `[${l.time}] [${l.type.toUpperCase()}] ${l.msg}`).join('\n');
      downloadFile('ble_log_' + Date.now() + '.txt', txt, 'text/plain');
    }

    // ═══════════════════════════════════════════════════════════
    // TOAST NOTIFICATIONS
    // ═══════════════════════════════════════════════════════════
    function showToast(msg, type = 'info', duration = 3000) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      const colors = { success: '#164b30|var(--success)', error: '#3b0d0c|var(--danger)', info: '#0d2341|var(--accent)', hw: '#0d2a1a|var(--accent2)' };
      const [bg, color] = (colors[type] || colors.info).split('|');
      toast.style.cssText = `background:${bg};border:1px solid ${color};color:${color};padding:12px 16px;border-radius:10px;font-size:13px;font-weight:500;animation:slideIn .3s ease;max-width:300px;display:flex;align-items:center;gap:8px;`;
      toast.textContent = msg;
      container.appendChild(toast);
      setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(110%)'; toast.style.transition = 'all .3s'; setTimeout(() => toast.remove(), 300); }, duration);
    }

    // ═══════════════════════════════════════════════════════════
    // UTILS
    // ═══════════════════════════════════════════════════════════
    function downloadFile(name, content, type) {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([content], { type }));
      a.download = name; a.click();
    }

    // ═══════════════════════════════════════════════════════════
    // BLE ENVIRONMENT DETECTION & GUIDE
    // ═══════════════════════════════════════════════════════════
    function getBLEEnv() {
      const ua = navigator.userAgent;
      const isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
      const isAndroid = /Android/.test(ua);
      const isEdge = /Edg\//.test(ua);
      const isChrome = /Chrome\//.test(ua) && !isEdge;
      const isSafari = /Safari\//.test(ua) && !isChrome && !isEdge;
      const isFirefox = /Firefox\//.test(ua);
      if (isIOS) return 'ios';                          // iOS bất kể browser nào
      if (isAndroid && (isChrome || isEdge)) return 'android-chrome';
      if (isAndroid) return 'android-other';
      if (isChrome || isEdge) return 'desktop-chrome';
      if (isSafari) return 'desktop-safari';
      if (isFirefox) return 'desktop-firefox';
      return 'unknown';
    }

    function showBLEGuide() {
      const env = getBLEEnv();
      const guides = {
        'ios': {
          icon: '🍎',
          title: 'iOS chưa hỗ trợ Web Bluetooth',
          msg: 'Safari và Chrome trên iPhone/iPad chưa hỗ trợ Web Bluetooth.',
          steps: [
            '📲 Dùng app <b>WebBLE</b> hoặc <b>Bluefy</b> từ App Store — đây là browser hỗ trợ BLE trên iOS',
            '🔗 Mở lại link này bên trong app đó',
            '💡 Hoặc dùng PC/laptop với Chrome để kết nối'
          ],
          apps: [
            { name: 'Bluefy', url: 'https://apps.apple.com/app/bluefy-web-ble-browser/id1492822055' },
            { name: 'WebBLE', url: 'https://apps.apple.com/app/webble/id1193531073' }
          ]
        },
        'android-chrome': {
          icon: '🤖',
          title: 'Cần bật Web Bluetooth trên Android',
          msg: 'Chrome Android hỗ trợ Web Bluetooth nhưng cần bật flag thực nghiệm.',
          steps: [
            '1️⃣ Mở Chrome, vào địa chỉ: <code>chrome://flags</code>',
            '2️⃣ Tìm kiếm: <b>bluetooth</b>',
            '3️⃣ Bật <b>"Experimental Web Platform features"</b> → chọn <b>Enabled</b>',
            '4️⃣ Bấm <b>Relaunch</b> khởi động lại Chrome',
            '5️⃣ Quay lại trang này và thử kết nối'
          ],
          apps: []
        },
        'android-other': {
          icon: '🤖',
          title: 'Cần dùng Chrome trên Android',
          msg: 'Browser hiện tại không hỗ trợ Web Bluetooth.',
          steps: [
            '📥 Cài <b>Google Chrome</b> từ Play Store',
            '🔗 Mở link này trong Chrome',
            '⚙️ Vào <code>chrome://flags</code> → bật <b>"Experimental Web Platform features"</b>'
          ],
          apps: [
            { name: 'Chrome (Play Store)', url: 'https://play.google.com/store/apps/details?id=com.android.chrome' }
          ]
        },
        'desktop-safari': {
          icon: '🖥️',
          title: 'Safari không hỗ trợ Web Bluetooth',
          msg: 'Safari chưa triển khai Web Bluetooth API.',
          steps: [
            '🌐 Dùng <b>Google Chrome</b> hoặc <b>Microsoft Edge</b> trên Mac/PC',
            '🔗 Mở lại link này trong Chrome hoặc Edge'
          ],
          apps: []
        },
        'desktop-firefox': {
          icon: '🦊',
          title: 'Firefox không hỗ trợ Web Bluetooth',
          msg: 'Firefox chưa hỗ trợ Web Bluetooth API.',
          steps: [
            '🌐 Dùng <b>Google Chrome</b> hoặc <b>Microsoft Edge</b>',
            '🔗 Mở lại link này trong Chrome hoặc Edge'
          ],
          apps: []
        },
        'unknown': {
          icon: '❓',
          title: 'Browser không hỗ trợ Web Bluetooth',
          msg: 'Web Bluetooth yêu cầu Chrome/Edge (PC) hoặc Chrome Android (flag bật).',
          steps: [
            '🖥️ PC/Mac: dùng <b>Google Chrome</b> hoặc <b>Edge</b>',
            '📱 Android: dùng <b>Chrome</b> + bật flag trong <code>chrome://flags</code>',
            '🍎 iOS: dùng app <b>Bluefy</b> hoặc <b>WebBLE</b>'
          ],
          apps: []
        }
      };
      const g = guides[env] || guides['unknown'];
      const appsHtml = g.apps.length ? `<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:8px;">` +
        g.apps.map(a => `<a href="${a.url}" target="_blank" style="padding:7px 14px;border-radius:8px;background:rgba(0,212,255,.15);color:var(--accent);border:1px solid rgba(0,212,255,.3);font-size:12px;font-weight:600;text-decoration:none;">📲 ${a.name}</a>`).join('') +
        `</div>` : '';
      const stepsHtml = g.steps.map(s => `<li style="margin-bottom:8px;line-height:1.6;">${s}</li>`).join('');

      const modal = document.createElement('div');
      modal.id = 'bleGuideModal';
      modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(4px);';
      modal.innerHTML = `
    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;max-width:440px;width:100%;padding:24px;position:relative;box-shadow:0 20px 60px rgba(0,0,0,.5);">
      <button onclick="document.getElementById('bleGuideModal').remove()" style="position:absolute;top:12px;right:12px;background:rgba(255,255,255,.08);border:none;color:var(--text-dim);width:28px;height:28px;border-radius:6px;cursor:pointer;font-size:16px;display:flex;align-items:center;justify-content:center;">✕</button>
      <div style="font-size:32px;margin-bottom:8px;">${g.icon}</div>
      <div style="font-size:15px;font-weight:700;color:var(--text);margin-bottom:6px;">${g.title}</div>
      <div style="font-size:13px;color:var(--text-dim);margin-bottom:16px;">${g.msg}</div>
      <ol style="padding-left:16px;margin:0;font-size:13px;color:var(--text-mid);">${stepsHtml}</ol>
      ${appsHtml}
      <div style="margin-top:16px;padding-top:14px;border-top:1px solid var(--border);font-size:11px;color:var(--text-dim);">
        🔒 Web Bluetooth yêu cầu HTTPS hoặc localhost. Trang phải được phục vụ qua HTTPS.
      </div>
    </div>`;
      document.body.appendChild(modal);
      modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
    }

    // ═══════════════════════════════════════════════════════════
    // MOBILE SIDEBAR
    // ═══════════════════════════════════════════════════════════
    function toggleSidebar() {
      const sidebar = document.getElementById('sidebar');
      const overlay = document.getElementById('sidebarOverlay');
      const isOpen = sidebar.classList.contains('open');
      if (isOpen) { closeSidebar(); } else {
        sidebar.classList.add('open');
        overlay.classList.add('show');
        document.getElementById('hamburger').textContent = '✕';
      }
    }
    function closeSidebar() {
      document.getElementById('sidebar').classList.remove('open');
      document.getElementById('sidebarOverlay').classList.remove('show');
      document.getElementById('hamburger').textContent = '☰';
    }

    // ═══════════════════════════════════════════════════════════
    // INIT
    // ═══════════════════════════════════════════════════════════
    document.getElementById('langSelect').value = currentLang;
    toggleLang(currentLang);
    logDebug('Nextwaves RFID Dashboard v2.0 ready', 'info');
    logDebug('Chờ kết nối BLE... (Chrome required)', 'info');
    logDebug('ENV: ' + getBLEEnv() + ' | BT: ' + (navigator.bluetooth ? 'available ✓' : 'MISSING ✗') + ' | ' + navigator.userAgent.substring(0, 100), 'info');
