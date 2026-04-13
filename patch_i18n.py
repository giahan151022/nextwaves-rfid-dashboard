import re
import json

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Define translations
i18n_dict = {
  'vi': {
    'history_instructions': '''
            ⚠️ <b style="color:var(--warning)">Lưu ý quan trọng:</b><br>
            • <b>Hardware button</b> trên thiết bị = <b>Interactive mode</b> → <b style="color:var(--danger)">KHÔNG lưu History</b><br>
            • Để có History: phải dùng <b style="color:var(--accent)">🗂️ Batch mode từ Web UI</b><br>
            <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(245,158,11,.2);">
              📋 <b>Cách dùng:</b> Tab Scanner → chọn <b>🗂️ Batch</b> → <b>START SCAN</b> (từ web) → quét xong →
              <b>STOP SCAN</b> → quay lại đây Fetch
            </div>''',
    'conn_success': '✅ Đã kết nối: ',
    'err_https': '❌ Bị chặn: Cần phục vụ qua HTTPS',
    'err_gatt': '❌ Mất kết nối GATT. Thử lại!',
    'msg_disconn': 'Đã ngắt kết nối BLE',
    'hw_batch': '🔘 HW Button: Quét Batch (có lưu History)',
    'hw_inter': '🔘 HW Button: Quét Interactive (không lưu History)',
    'hw_stop': '🔘 HW Button: Dừng quét',
    
    'nav_scanner': 'Máy quét',
    'nav_locate': 'Định vị',
    'nav_history': 'Lịch sử',
    'nav_settings': 'Cài đặt',
    'nav_debug': 'Gỡ lỗi',
    'connect_ble': 'KẾT NỐI BLE',
    'connecting': 'ĐANG KẾT NỐI...',
    'disconnect': 'NGẮT KẾT NỐI',
    'online': 'TRỰC TUYẾN',
    'offline': 'NGOẠI TUYẾN',
    
    'hw_button': 'NÚT BẤM HW',
    'std_mode': 'Tiêu chuẩn',
    'batch_mode': 'Lô',
    'start_scan': 'BẮT ĐẦU QUÉT',
    'stop_scan': 'DỪNG QUÉT',
    'clear': 'XÓA',
    'export': 'XUẤT',
    'scanning_dots': 'Đang quét...',
    
    'unique_tags': 'Số Thẻ Đơn',
    'total_reads': 'Tổng Số Đọc',
    'tags_sec': 'Thẻ/giây',
    'avg_rssi': 'RSSI Tr.bình',
    
    'th_epc': 'EPC (HEX)',
    'th_rssi': 'RSSI',
    'th_signal': 'Tín hiệu',
    'th_count': 'Số lượng',
    'th_last': 'Lần cuối',
    'th_action': 'Thao tác',
    
    'no_tags': 'Không có thẻ',
    
    'find_mode': '🎯 Chế độ Tìm - Định vị thẻ',
    'target_epc': 'EPC mục tiêu (Hex)',
    'find': '🔍 Tìm',
    'stop': '■ Dừng',
    'signal_strength': 'Cường độ tín hiệu',
    'find_status_target': 'Mục tiêu: ',
    'signal_history': '📊 Lịch sử tín hiệu',
    
    'batch_history_title': '📋 Lịch sử Lô',
    'open_batch_now': '🗂️ Mở Batch Mode ngay',
    'fetch_from_device': '📥 Tải từ thiết bị',
    'export_csv': '📤 Xuất CSV',
    'no_data': 'Không có dữ liệu',
    'history_hint': 'Hãy quét ở Batch Mode trước rồi Tải lại',
    
    'rf_power': '📶 Công suất RF',
    'tx_power': 'Công.S TX (dBm)',
    'action_get': '↓ LẤY',
    'action_set': '↑ LƯU',
    'rf_params': '🔧 Thông số RF',
    'link_profile': 'Profile Liên kết',
    'lp_std': '53 - T.chuẩn (250Kbps)',
    'lp_quick': '11 - Nhanh (640Kbps)',
    'lp_deep': '13 - Sâu (40Kbps)',
    
    'qs_title': '📊 Q / Phiên',
    'q_value': 'Giá trị Q',
    'session': 'Phiên',
    
    'dev_info': '🌡️ TT thiết bị',
    'device': 'Thiết bị',
    'temperature': 'Nhiệt độ',
    'get_info': '↓ LẤY TT',
    
    'qp_title': '📊 Tham số truy vấn',
    'interval_ms': 'Giãn cách (ms)',
    'dwell_raw': 'DWELL (RAW)',
    'append': 'Nối dòng',
    
    'debug_title': '🔧 Log giao tiếp BLE',
    'download': '📥 Tải file',
    'autoscroll': 'Tự đồng cuộn',
  },
  'en': {
    'history_instructions': '''
            ⚠️ <b style="color:var(--warning)">Important Note:</b><br>
            • <b>Hardware button</b> on device = <b>Interactive mode</b> → <b style="color:var(--danger)">DOES NOT save History</b><br>
            • To save History: you must use <b style="color:var(--accent)">🗂️ Batch mode from Web UI</b><br>
            <div style="margin-top:8px;padding-top:8px;border-top:1px solid rgba(245,158,11,.2);">
              📋 <b>Usage:</b> Scanner Tab → select <b>🗂️ Batch</b> → <b>START SCAN</b> (from web) → finish scan →
              <b>STOP SCAN</b> → return here to Fetch
            </div>''',
    'conn_success': '✅ Connected: ',
    'err_https': '❌ Blocked: Requires HTTPS',
    'err_gatt': '❌ GATT connection lost. Retry!',
    'msg_disconn': 'BLE Disconnected',
    'hw_batch': '🔘 HW Button: Batch Scan (History saved)',
    'hw_inter': '🔘 HW Button: Interactive Scan (No History)',
    'hw_stop': '🔘 HW Button: Scan Stopped',
    
    'nav_scanner': 'Scanner',
    'nav_locate': 'Locate',
    'nav_history': 'History',
    'nav_settings': 'Settings',
    'nav_debug': 'Debug',
    'connect_ble': 'CONNECT BLE',
    'connecting': 'CONNECTING...',
    'disconnect': 'DISCONNECT',
    'online': 'ONLINE',
    'offline': 'OFFLINE',
    
    'hw_button': 'HW BUTTON',
    'std_mode': 'Standard',
    'batch_mode': 'Batch',
    'start_scan': 'START SCAN',
    'stop_scan': 'STOP SCAN',
    'clear': 'CLEAR',
    'export': 'EXPORT',
    'scanning_dots': 'Scanning...',
    
    'unique_tags': 'Unique Tags',
    'total_reads': 'Total Reads',
    'tags_sec': 'Tags/sec',
    'avg_rssi': 'Avg RSSI',
    
    'th_epc': 'EPC (HEX)',
    'th_rssi': 'RSSI',
    'th_signal': 'Signal',
    'th_count': 'Count',
    'th_last': 'Last Seen',
    'th_action': 'Action',
    
    'no_tags': 'No tags detected',
    
    'find_mode': '🎯 Find Mode - Locate Tag',
    'target_epc': 'Target EPC (Hex)',
    'find': '🔍 Find',
    'stop': '■ Stop',
    'signal_strength': 'Signal Strength',
    'find_status_target': 'Target: ',
    'signal_history': '📊 Signal History',
    
    'batch_history_title': '📋 Batch Scan History',
    'open_batch_now': '🗂️ Open Batch Mode now',
    'fetch_from_device': '📥 Fetch From Device',
    'export_csv': '📤 Export CSV',
    'no_data': 'No data',
    'history_hint': 'Scan in Batch Mode first and then Fetch',
    
    'rf_power': '📶 RF Power',
    'tx_power': 'TX Power (dBm)',
    'action_get': '↓ GET',
    'action_set': '↑ SET',
    'rf_params': '🔧 RF Parameters',
    'link_profile': 'Link Profile',
    'lp_std': '53 - Standard (250Kbps)',
    'lp_quick': '11 - Quick (640Kbps)',
    'lp_deep': '13 - Deep (40Kbps)',
    
    'qs_title': '📊 Q / Session',
    'q_value': 'Q Value',
    'session': 'Session',
    
    'dev_info': '🌡️ Device Info',
    'device': 'Device',
    'temperature': 'Temperature',
    'get_info': '↓ GET INFO',
    
    'qp_title': '📊 Query Parameter',
    'interval_ms': 'Interval (ms)',
    'dwell_raw': 'DWELL (RAW COUNT)',
    'append': 'Append',
    
    'debug_title': '🔧 BLE Communication Log',
    'download': '📥 Download',
    'autoscroll': 'Auto-scroll',
  }
}

# Perform HTML replacements
# List of (pattern, repl) to add data-i18n
replacements = [
  (r'>\s*Scanner\s*</div>', '> <span data-i18n="nav_scanner">Scanner</span></div>'),
  (r'>\s*Locate\s*</div>', '> <span data-i18n="nav_locate">Locate</span></div>'),
  (r'>\s*History\s*</div>', '> <span data-i18n="nav_history">History</span></div>'),
  (r'>\s*Settings\s*</div>', '> <span data-i18n="nav_settings">Settings</span></div>'),
  (r'>\s*Debug\s*</div>', '> <span data-i18n="nav_debug">Debug</span></div>'),
  
  (r'<span id="bleBtnText">CONNECT BLE</span>', '<span id="bleBtnText" data-i18n="connect_ble">CONNECT BLE</span>'),
  (r'<span id="hwIndicatorText">HW BUTTON</span>', '<span id="hwIndicatorText" data-i18n="hw_button">HW BUTTON</span>'),
  (r'id="connChip">● OFFLINE</div>', 'id="connChip" data-i18n="offline">● OFFLINE</div>'),
  
  (r'id="modeStd"([^>]+)>📦 Standard</div>', r'id="modeStd"\1>📦 <span data-i18n="std_mode">Standard</span></div>'),
  (r'id="modeBatch"([^>]+)>🗂️ Batch</div>', r'id="modeBatch"\1>🗂️ <span data-i18n="batch_mode">Batch</span></div>'),
  
  (r'<span id="scanBtnText">START SCAN</span>', '<span id="scanBtnText" data-i18n="start_scan">START SCAN</span>'),
  (r'>🗑️ CLEAR</button>', '>🗑️ <span data-i18n="clear">CLEAR</span></button>'),
  (r'>📥 EXPORT</button>', '>📥 <span data-i18n="export">EXPORT</span></button>'),
  (r'Đang quét\.\.\.', '<span data-i18n="scanning_dots">Đang quét...</span>'),
  
  (r'>Unique Tags</div>', ' data-i18n="unique_tags">Unique Tags</div>'),
  (r'>Total Reads</div>', ' data-i18n="total_reads">Total Reads</div>'),
  (r'>Tags/sec</div>', ' data-i18n="tags_sec">Tags/sec</div>'),
  (r'>Avg RSSI</div>', ' data-i18n="avg_rssi">Avg RSSI</div>'),
  
  (r'<th>#</th>\s*<th>EPC \(HEX\)</th>', '<th data-i18n="th_count_num">#</th>\n                  <th data-i18n="th_epc">EPC (HEX)</th>'),
  (r'<th>RSSI</th>', '<th data-i18n="th_rssi">RSSI</th>'),
  (r'<th>Signal</th>', '<th data-i18n="th_signal">Signal</th>'),
  (r'<th>Count</th>', '<th data-i18n="th_count">Count</th>'),
  (r'<th>Last Seen</th>', '<th data-i18n="th_last">Last Seen</th>'),
  (r'<th>Action</th>', '<th data-i18n="th_action">Action</th>'),
  
  (r'>No tags detected</div>', ' data-i18n="no_tags">No tags detected</div>'),
  
  (r'>🎯 Find Mode \- Locate Tag</div>', ' data-i18n="find_mode">🎯 Find Mode - Locate Tag</div>'),
  (r'>Target EPC \(Hex\)</label>', ' data-i18n="target_epc">Target EPC (Hex)</label>'),
  (r'id="locateBtn"([^>]+)>🔍 Find</button>', r'id="locateBtn"\1><span data-i18n="find">🔍 Find</span></button>'),
  (r'id="stopLocateBtn"([^>]+)>■ Stop</button>', r'id="stopLocateBtn"\1><span data-i18n="stop">■ Stop</span></button>'),
  (r'>Signal Strength</div>', ' data-i18n="signal_strength">Signal Strength</div>'),
  (r'>📊 Signal History</div>', ' data-i18n="signal_history">📊 Signal History</div>'),
  
  (r'>📋 Batch Scan History</div>', ' data-i18n="batch_history_title">📋 Batch Scan History</div>'),
  (r'>\s*🗂️ Mở Batch Mode ngay\s*</button>', ' data-i18n="open_batch_now">\n              🗂️ Mở Batch Mode ngay\n            </button>'),
  (r'id="fetchBtn"([^>]+)>📥 Fetch From\s*Device</button>', r'id="fetchBtn"\1><span data-i18n="fetch_from_device">📥 Fetch From Device</span></button>'),
  (r'onclick="clearHistory\(\)">🗑️ Clear</button>', 'onclick="clearHistory()">🗑️ <span data-i18n="clear">Clear</span></button>'),
  (r'onclick="exportHistory\(\)">📤 Export CSV</button>', 'onclick="exportHistory()">📤 <span data-i18n="export_csv">Export CSV</span></button>'),
  
  (r'>📶 RF Power</div>', ' data-i18n="rf_power">📶 RF Power</div>'),
  (r'>TX Power \(dBm\)</label>', ' data-i18n="tx_power">TX Power (dBm)</label>'),
  (r'onclick="getSettings\(\'GP\'\)">↓ GET</button>', 'onclick="getSettings(\'GP\')"><span data-i18n="action_get">↓ GET</span></button>'),
  (r'id="setPowerBtn"([^>]+)>↑ SET</button>', r'id="setPowerBtn"\1><span data-i18n="action_set">↑ SET</span></button>'),
  
  (r'>🔧 RF Parameters</div>', ' data-i18n="rf_params">🔧 RF Parameters</div>'),
  (r'>Link Profile</label>', ' data-i18n="link_profile">Link Profile</label>'),
  (r'>53 - Standard \(250Kbps\)</option>', ' data-i18n="lp_std">53 - Standard (250Kbps)</option>'),
  (r'>11 - Quick \(640Kbps\)</option>', ' data-i18n="lp_quick">11 - Quick (640Kbps)</option>'),
  (r'>13 - Deep \(40Kbps\)</option>', ' data-i18n="lp_deep">13 - Deep (40Kbps)</option>'),
  (r'onclick="getSettings\(\'GRP\'\)">↓ GET</button>', 'onclick="getSettings(\'GRP\')"><span data-i18n="action_get">↓ GET</span></button>'),
  (r'id="setRFBtn"([^>]+)>↑ SET</button>', r'id="setRFBtn"\1><span data-i18n="action_set">↑ SET</span></button>'),
  
  (r'>📊 Q / Session</div>', ' data-i18n="qs_title">📊 Q / Session</div>'),
  (r'>Q Value</label>', ' data-i18n="q_value">Q Value</label>'),
  (r'>Session</label>', ' data-i18n="session">Session</label>'),
  (r'onclick="getSettings\(\'GQS\'\)">↓ GET</button>', 'onclick="getSettings(\'GQS\')"><span data-i18n="action_get">↓ GET</span></button>'),
  (r'id="setQBtn"([^>]+)>↑ SET</button>', r'id="setQBtn"\1><span data-i18n="action_set">↑ SET</span></button>'),
  
  (r'>🌡️ Device Info</div>', ' data-i18n="dev_info">🌡️ Device Info</div>'),
  (r'>Device</span>', ' data-i18n="device">Device</span>'),
  (r'>Temperature</span>', ' data-i18n="temperature">Temperature</span>'),
  (r'id="getInfoBtn"([^>]+)>↓ GET\s*INFO</button>', r'id="getInfoBtn"\1><span data-i18n="get_info">↓ GET INFO</span></button>'),
  
  (r'>📊 Query Parameter</div>', ' data-i18n="qp_title">📊 Query Parameter</div>'),
  (r'>Interval \(ms\)</label>', ' data-i18n="interval_ms">Interval (ms)</label>'),
  (r'>DWELL \(RAW COUNT\)</label>', ' data-i18n="dwell_raw">DWELL (RAW COUNT)</label>'),
  (r'>Append</label>', ' data-i18n="append">Append</label>'),
  (r'onclick="getSettings\(\'GQP\'\)">↓ GET</button>', 'onclick="getSettings(\'GQP\')"><span data-i18n="action_get">↓ GET</span></button>'),
  (r'id="setQPBtn"([^>]+)>↑ SET</button>', r'id="setQPBtn"\1><span data-i18n="action_set">↑ SET</span></button>'),
  
  (r'>🔧 BLE Communication Log</div>', ' data-i18n="debug_title">🔧 BLE Communication Log</div>'),
  (r'onclick="clearDebug\(\)">🗑️ Clear</button>', 'onclick="clearDebug()">🗑️ <span data-i18n="clear">Clear</span></button>'),
  (r'onclick="downloadLog\(\)">📥 Download</button>', 'onclick="downloadLog()">📥 <span data-i18n="download">Download</span></button>'),
  (r' Auto-scroll\s*</label>', ' <span data-i18n="autoscroll">Auto-scroll</span>\n            </label>'),
  
  # Also in JS
  (r"const tabTitles = \{ scanner: '📡 Scanner', locate: '🎯 Locate', history: '📋 History', settings: '⚙️ Settings', debug: '🔧 Debug' \};", 
   "const tabTitles = { scanner: '📡 ' + (t('nav_scanner') || 'Scanner'), locate: '🎯 ' + (t('nav_locate') || 'Locate'), history: '📋 ' + (t('nav_history') || 'History'), settings: '⚙️ ' + (t('nav_settings') || 'Settings'), debug: '🔧 ' + (t('nav_debug') || 'Debug') };"),
   
   (r"txt\.textContent = 'STOP SCAN';", "txt.textContent = t('stop_scan');"),
   (r"txt\.textContent = 'START SCAN';", "txt.textContent = t('start_scan');"),
]

for pattern, repl in replacements:
    html = re.sub(pattern, repl, html, flags=re.IGNORECASE)

# Update i18n object in HTML
i18n_str = 'const i18n = ' + json.dumps(i18n_dict, indent=6, ensure_ascii=False) + ';'

html = re.sub(r'const i18n = \{.*?\};', i18n_str, html, flags=re.DOTALL)


# Fix tab reload on language toggle
# we patch toggleLang implementation directly
patched_toggleLang = '''
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
      const dynTabTitles = { scanner: '📡 ' + t('nav_scanner'), locate: '🎯 ' + t('nav_locate'), history: '📋 ' + t('nav_history'), settings: '⚙️ ' + t('nav_settings'), debug: '🔧 ' + t('nav_debug') };
      document.querySelectorAll('.nav-item').forEach(el => {
         const tText = el.textContent;
         if (tText.includes('📡')) el.innerHTML = '<span class="nav-icon">📡</span> ' + t('nav_scanner');
         if (tText.includes('🎯')) el.innerHTML = '<span class="nav-icon">🎯</span> ' + t('nav_locate');
         if (tText.includes('📋')) el.innerHTML = '<span class="nav-icon">📋</span> ' + t('nav_history');
         if (tText.includes('⚙️')) el.innerHTML = '<span class="nav-icon">⚙️</span> ' + t('nav_settings');
         if (tText.includes('🔧')) el.innerHTML = '<span class="nav-icon">🔧</span> ' + t('nav_debug');
      });

      const activeTabId = Array.from(document.querySelectorAll('.tab-panel')).find(p => p.classList.contains('active'))?.id;
      if (activeTabId) {
        const name = activeTabId.replace('tab-', '');
        document.getElementById('topbarTitle').textContent = dynTabTitles[name] || name;
      }
    }
'''
html = re.sub(r'function toggleLang\(lang\) \{.*?\n\s*\}', patched_toggleLang, html, flags=re.DOTALL)

# Handle BLE UI connections text dynamically instead of hardcoded strings
html = html.replace(
    "txt.textContent = state === 'connected' ? 'DISCONNECT' : state === 'connecting' ? 'CONNECTING...' : 'CONNECT BLE';",
    "txt.textContent = state === 'connected' ? t('disconnect') : state === 'connecting' ? t('connecting') : t('connect_ble');"
)
html = html.replace(
    "chip.textContent = '● ' + (state === 'connected' ? 'ONLINE' : state === 'connecting' ? 'CONNECTING' : 'OFFLINE');",
    "chip.textContent = '● ' + (state === 'connected' ? t('online') : state === 'connecting' ? t('connecting') : t('offline'));"
)
html = html.replace(
    "document.getElementById('locateEpcDisplay').textContent = 'Target: ' + epc;",
    "document.getElementById('locateEpcDisplay').textContent = t('find_status_target') + epc;"
)
html = html.replace(
  "list.innerHTML = '<div style=\"color:var(--text-dim);text-align:center;padding:30px;\">' +\n            '<div style=\"font-size:32px;margin-bottom:8px;opacity:.3\">📭</div>' +\n            '<div>Không có dữ liệu</div>' +\n            '<div style=\"font-size:11px;margin-top:8px;opacity:.6\">Hãy quét ở Batch Mode trước rồi Fetch lại</div>' +\n            '</div>';",
  "list.innerHTML = '<div style=\"color:var(--text-dim);text-align:center;padding:30px;\"><div style=\"font-size:32px;margin-bottom:8px;opacity:.3\">📭</div><div>'+t('no_data')+'</div><div style=\"font-size:11px;margin-top:8px;opacity:.6\">'+t('history_hint')+'</div></div>';"
)
html = re.sub(r"function switchTab\(name\) \{.*?\ntabTitles\[name\] \|\| name;\n\s*\}", '''function switchTab(name) {
      document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      document.getElementById('tab-' + name).classList.add('active');
      document.querySelectorAll('.nav-item').forEach(n => { if (n.innerHTML.toLowerCase().includes(name.toLowerCase())) n.classList.add('active'); });
      const dynTabTitles = { scanner: '📡 ' + t('nav_scanner'), locate: '🎯 ' + t('nav_locate'), history: '📋 ' + t('nav_history'), settings: '⚙️ ' + t('nav_settings'), debug: '🔧 ' + t('nav_debug') };
      document.getElementById('topbarTitle').textContent = dynTabTitles[name] || name;
    }''', html, flags=re.DOTALL)


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(html)

print("Patch applied to index.html successfully.")
