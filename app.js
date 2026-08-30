// EMS Volunteer Tracker Application Logic

// Default Roster from uploaded documents (Chiayi County EMS Shuisang Division)
const defaultMembers = [
    { id: "1", title: "分隊長", name: "林碧雲", emtLevel: "EMT-2", emtExpiry: "2026-12-09", certNo: "T2112021", org: "嘉義縣消防局", joinDate: "2017-05-15", birthDate: "1977-12-19" },
    { id: "2", title: "副分隊長", name: "江金璨", emtLevel: "EMT-2", emtExpiry: "2026-05-25", certNo: "T210705", org: "嘉義縣消防局", joinDate: "2001-06-14", birthDate: "1966-10-08" },
    { id: "3", title: "副分隊長", name: "柯秀雲", emtLevel: "EMT-2", emtExpiry: "2026-08-30", certNo: "T299012", org: "嘉義縣消防局", joinDate: "2001-06-14", birthDate: "1971-06-10" },
    { id: "4", title: "幹事", name: "陳鳳玟", emtLevel: "EMT-2", emtExpiry: "2026-05-25", certNo: "T210706", org: "嘉義縣消防局", joinDate: "2018-01-29", birthDate: "1976-09-19" },
    { id: "5", title: "助理幹事", name: "黃筱君", emtLevel: "EMT-2", emtExpiry: "2026-10-07", certNo: "", org: "嘉義縣消防局", joinDate: "2019-05-23", birthDate: "1983-10-31" },
    { id: "6", title: "小隊長", name: "胡凱智", emtLevel: "EMT-2", emtExpiry: "2026-02-01", certNo: "T299010", org: "嘉義縣消防局", joinDate: "2008-11-27", birthDate: "1978-12-21" },
    { id: "7", title: "小隊長", name: "陳冠宇", emtLevel: "EMT-1", emtExpiry: "2026-12-09", certNo: "", org: "台灣生命之翼協會", joinDate: "2021-07-16", birthDate: "1991-07-21" },
    { id: "8", title: "小隊長", name: "関仲伯", emtLevel: "EMT-1", emtExpiry: "2026-07-29", certNo: "", org: "", joinDate: "2023-01-16", birthDate: "1967-01-02" },
    { id: "9", title: "隊員", name: "柯慧娟", emtLevel: "EMT-2", emtExpiry: "2026-05-25", certNo: "T210706", org: "嘉義縣消防局", joinDate: "2004-07-15", birthDate: "1978-09-15" },
    { id: "10", title: "隊員", name: "韋燕", emtLevel: "EMT-1", emtExpiry: "2026-08-15", certNo: "T110616", org: "嘉義縣消防局", joinDate: "2017-11-15", birthDate: "1983-12-12" },
    { id: "11", title: "隊員", name: "郭晏岑", emtLevel: "EMT-1", emtExpiry: "2027-12-31", certNo: "T110629", org: "嘉義縣消防局", joinDate: "2018-01-29", birthDate: "1968-07-10" },
    { id: "12", title: "隊員", name: "陳玟璇", emtLevel: "EMT-1", emtExpiry: "2026-12-09", certNo: "", org: "嘉義縣衛生局", joinDate: "2018-08-21", birthDate: "1988-02-14" },
    { id: "13", title: "隊員", name: "王信玄", emtLevel: "EMT-1", emtExpiry: "2029-10-20", certNo: "", org: "衛勤訓練中心", joinDate: "2018-10-02", birthDate: "1980-08-08" },
    { id: "14", title: "隊員", name: "林佳欣", emtLevel: "EMT-1", emtExpiry: "2026-12-09", certNo: "衛部醫字第1070007121號", org: "台灣災難醫療隊發展協會", joinDate: "2022-08-15", birthDate: "1986-07-15" },
    { id: "15", title: "隊員", name: "吳驊鏞", emtLevel: "EMT-1", emtExpiry: "2026-12-09", certNo: "", org: "嘉義縣消防局", joinDate: "2023-01-16", birthDate: "1980-09-15" },
    { id: "16", title: "隊員", name: "関筱柔", emtLevel: "EMT-1", emtExpiry: "2026-03-26", certNo: "", org: "嘉義縣消防局", joinDate: "2023-05-03", birthDate: "1995-05-10" },
    { id: "17", title: "隊員", name: "陳美蘭", emtLevel: "EMT-1", emtExpiry: "2026-03-26", certNo: "", org: "嘉義縣消防局", joinDate: "2023-05-03", birthDate: "1972-07-25" },
    { id: "18", title: "隊員", name: "呂慧瑜", emtLevel: "EMT-1", emtExpiry: "2026-03-26", certNo: "", org: "嘉義縣消防局", joinDate: "2023-05-03", birthDate: "1989-04-17" },
    { id: "19", title: "隊員", name: "柯建榮", emtLevel: "EMT-1", emtExpiry: "2026-10-24", certNo: "", org: "內政部消防署", joinDate: "2023-12-12", birthDate: "2001-04-08" },
    { id: "20", title: "隊員", name: "曾文薇", emtLevel: "EMT-1", emtExpiry: "2027-03-30", certNo: "", org: "台灣生命之翼協會", joinDate: "2024-06-14", birthDate: "1986-04-04" },
    { id: "21", title: "隊員", name: "呂承翰", emtLevel: "EMT-1", emtExpiry: "2027-07-16", certNo: "", org: "國軍高雄總醫院", joinDate: "2024-08-22", birthDate: "2001-10-27" },
    { id: "22", title: "隊員", name: "陳睦晏", emtLevel: "EMT-1", emtExpiry: "2027-08-17", certNo: "", org: "", joinDate: "2024-10-09", birthDate: "1978-05-30" },
    { id: "23", title: "隊員", name: "彭煒竣", emtLevel: "EMT-1", emtExpiry: "2027-10-01", certNo: "", org: "", joinDate: "2025-03-10", birthDate: "2005-11-11" },
    { id: "24", title: "隊員", name: "曾俊億", emtLevel: "EMT-2", emtExpiry: "2026-12-09", certNo: "T2112027", org: "", joinDate: "2022-04-06", birthDate: "1974-09-08" },
    { id: "25", title: "隊員", name: "林竹怡", emtLevel: "EMT-1", emtExpiry: "2028-11-02", certNo: "", org: "", joinDate: "2025-08-07", birthDate: "1982-09-18" },
    { id: "26", title: "隊員", name: "黃翊瑄", emtLevel: "EMT-1", emtExpiry: "2028-11-02", certNo: "", org: "", joinDate: "2025-08-07", birthDate: "2007-02-28" },
    { id: "27", title: "隊員", name: "蘇美嘉", emtLevel: "EMT-1", emtExpiry: "2027-12-01", certNo: "", org: "", joinDate: "2025-08-18", birthDate: "" },
    { id: "28", title: "隊員", name: "蘇郁翔", emtLevel: "EMT-1", emtExpiry: "2028-08-30", certNo: "", org: "", joinDate: "2026-01-29", birthDate: "" },
    { id: "29", title: "隊員", name: "古金紫", emtLevel: "EMT-1", emtExpiry: "2027-07-15", certNo: "", org: "", joinDate: "2026-07-01", birthDate: "" },
    { id: "30", title: "隊員", name: "凃羿汝", emtLevel: "EMT-1", emtExpiry: "2027-09-30", certNo: "", org: "", joinDate: "2026-07-01", birthDate: "" },
    { id: "31", title: "隊員", name: "侯凱文", emtLevel: "EMT-1", emtExpiry: "2028-12-25", certNo: "", org: "", joinDate: "2026-07-01", birthDate: "" }
];

// Initialize Data State
let state = {
    members: [],
    trainings: [],
    dispatches: []
};

// Load data from localStorage
function loadData() {
    const localMembers = localStorage.getItem('ems_members');
    const localTrainings = localStorage.getItem('ems_trainings');
    const localDispatches = localStorage.getItem('ems_dispatches');

    if (localMembers) {
        state.members = JSON.parse(localMembers);
        // Automatically upgrade/downgrade if database does not have 31 members or is missing joinDate
        if (!Array.isArray(state.members) || state.members.length !== 31 || !state.members[0] || !state.members[0].hasOwnProperty('joinDate')) {
            state.members = [...defaultMembers];
            saveMembers();
        } else {
            // Migration to fix spelling of 関仲伯, 関筱柔, and 凃羿汝
            let dataUpdated = false;
            state.members.forEach(m => {
                if (m.name === "關仲伯") {
                    m.name = "関仲伯";
                    dataUpdated = true;
                }
                if (m.name === "關筱柔") {
                    m.name = "関筱柔";
                    dataUpdated = true;
                }
                if (m.name === "涂羿汝") {
                    m.name = "凃羿汝";
                    dataUpdated = true;
                }
            });

            // Migration to sync birthDate from default roster if missing
            state.members.forEach(m => {
                const dm = defaultMembers.find(d => d.name === m.name);
                if (dm) {
                    if (!m.hasOwnProperty('birthDate') || m.birthDate === undefined) {
                        m.birthDate = dm.birthDate || "";
                        dataUpdated = true;
                    }
                } else {
                    if (!m.hasOwnProperty('birthDate')) {
                        m.birthDate = "";
                        dataUpdated = true;
                    }
                }

                // Privacy Cleanup: delete idCard and phone properties from database if present
                if (m.hasOwnProperty('idCard')) {
                    delete m.idCard;
                    dataUpdated = true;
                }
                if (m.hasOwnProperty('phone')) {
                    delete m.phone;
                    dataUpdated = true;
                }
            });

            if (dataUpdated) {
                saveMembers();
            }
        }
    } else {
        state.members = [...defaultMembers];
        saveMembers();
    }

    state.trainings = localTrainings ? JSON.parse(localTrainings) : [];
    state.dispatches = localDispatches ? JSON.parse(localDispatches) : [];
}

// Save helpers
function saveMembers() {
    localStorage.setItem('ems_members', JSON.stringify(state.members));
}
function saveTrainings() {
    localStorage.setItem('ems_trainings', JSON.stringify(state.trainings));
}
function saveDispatches() {
    localStorage.setItem('ems_dispatches', JSON.stringify(state.dispatches));
}

// Date helpers
function getMinguoYear(dateStr) {
    if (!dateStr) return '';
    const year = new Date(dateStr).getFullYear();
    return year - 1911;
}

function getMinguoDateStr(dateStr) {
    if (!dateStr) return '';
    const dateObj = new Date(dateStr);
    const my = dateObj.getFullYear() - 1911;
    const m = dateObj.getMonth() + 1;
    const d = dateObj.getDate();
    return `${my}年${m}月${d}日`;
}

// Convert Minguo year to standard CE year
function minguoToCEYear(minguoYear) {
    return parseInt(minguoYear) + 1911;
}

// Get days in a month
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

// Calculate seniority dynamically from joinDateStr to current date
function getSeniorityDetails(joinDateStr) {
    if (!joinDateStr) return { text: '-', decimal: '0.00' };
    const joinDate = new Date(joinDateStr);
    const targetDate = new Date(); // Current date: 2026-08-30

    let years = targetDate.getFullYear() - joinDate.getFullYear();
    let months = targetDate.getMonth() - joinDate.getMonth();
    let days = targetDate.getDate() - joinDate.getDate();

    if (days < 0) {
        months -= 1;
        const prevMonth = new Date(targetDate.getFullYear(), targetDate.getMonth(), 0);
        days += prevMonth.getDate();
    }
    if (months < 0) {
        years -= 1;
        months += 12;
    }

    let decimal = years + Math.ceil((months / 12) * 100) / 100;
    
    let text = "";
    if (years > 0) text += `${years}年`;
    if (months > 0 || years === 0) text += `${months}個月`;
    if (text === "") text = "0個月";

    return { text, decimal: decimal.toFixed(2) };
}

// Render Members List
function renderMembers() {
    const tableBody = document.getElementById('membersTableBody');
    if (!tableBody) return;
    tableBody.innerHTML = '';

    // EMT expiration warning limit (3 months / 90 days)
    const today = new Date();
    const alertLimit = 90 * 24 * 60 * 60 * 1000;

    state.members.forEach((m, idx) => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 border-b border-gray-200 text-sm whitespace-nowrap";

        const expiryDate = m.emtExpiry ? new Date(m.emtExpiry) : null;
        let expiryDisplay = m.emtExpiry || '未填寫';
        let expiryClass = '';

        if (expiryDate) {
            const timeDiff = expiryDate.getTime() - today.getTime();
            if (timeDiff < 0) {
                expiryDisplay += ' (已過期)';
                expiryClass = 'text-red-600 font-bold bg-red-100 px-2 py-0.5 rounded';
            } else if (timeDiff < alertLimit) {
                expiryDisplay += ' (即將到期)';
                expiryClass = 'text-yellow-600 font-semibold bg-yellow-100 px-2 py-0.5 rounded';
            }
        }

        const seniorityInfo = getSeniorityDetails(m.joinDate);

        tr.innerHTML = `
            <td class="px-6 py-4">
                <div class="text-xs text-gray-500 font-medium">${m.title}</div>
                <div class="text-sm font-semibold text-gray-900 mt-0.5">${m.name}</div>
            </td>
            <td class="px-6 py-4">
                <div><span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">${m.emtLevel}</span></div>
                <div class="text-xs text-gray-500 font-mono mt-1">${m.certNo || '-'}</div>
            </td>
            <td class="px-6 py-4"><span class="${expiryClass}">${expiryDisplay}</span></td>
            <td class="px-6 py-4 text-gray-600">${m.org || '-'}</td>
            <td class="px-6 py-4 text-gray-800" title="小數年資: ${seniorityInfo.decimal}">
                <div class="font-mono text-gray-750">${m.joinDate || '-'}</div>
                <div class="text-xs text-gray-500 font-medium mt-0.5">${seniorityInfo.text}</div>
            </td>
            <td class="px-6 py-4 text-right">
                <button onclick="queryEmtMohw('${m.id}')" class="text-emerald-600 hover:text-emerald-700 mr-3 font-semibold">衛福部查詢</button>
                <button onclick="editMember('${m.id}')" class="text-indigo-600 hover:text-indigo-900 mr-3">編輯</button>
                <button onclick="deleteMember('${m.id}')" class="text-red-600 hover:text-red-900">刪除</button>
            </td>
        `;
        tableBody.appendChild(tr);
    });

    // Populate members in selections across training and dispatches forms
    populateMemberCheckboxes();
}

function populateMemberCheckboxes() {
    const trAttendees = document.getElementById('trainingAttendeesList');
    const dispAttendees = document.getElementById('dispatchAttendeesList');

    if (trAttendees) {
        trAttendees.innerHTML = '';
        state.members.forEach(m => {
            const label = document.createElement('label');
            label.className = "inline-flex items-center bg-gray-100 rounded-md px-3 py-1.5 text-sm m-1 cursor-pointer hover:bg-gray-200 transition-colors";
            label.innerHTML = `
                <input type="checkbox" name="trAttendee" value="${m.id}" class="rounded text-red-600 focus:ring-red-500 mr-2">
                <span>${m.title} - ${m.name}</span>
            `;
            trAttendees.appendChild(label);
        });
    }

    if (dispAttendees) {
        dispAttendees.innerHTML = '';
        state.members.forEach(m => {
            const label = document.createElement('label');
            label.className = "inline-flex items-center bg-gray-100 rounded-md px-3 py-1.5 text-sm m-1 cursor-pointer hover:bg-gray-200 transition-colors";
            label.innerHTML = `
                <input type="checkbox" name="dispAttendee" value="${m.id}" class="rounded text-red-600 focus:ring-red-500 mr-2">
                <span>${m.title} - ${m.name}</span>
            `;
            dispAttendees.appendChild(label);
        });
    }
}

// Edit Member
window.editMember = function(id) {
    const m = state.members.find(item => item.id === id);
    if (!m) return;

    document.getElementById('memberId').value = m.id;
    document.getElementById('memberTitle').value = m.title;
    document.getElementById('memberName').value = m.name;
    document.getElementById('memberBirthDate').value = m.birthDate || '';
    document.getElementById('memberEmtLevel').value = m.emtLevel;
    document.getElementById('memberEmtExpiry').value = m.emtExpiry || '';
    document.getElementById('memberCertNo').value = m.certNo || '';
    document.getElementById('memberOrg').value = m.org || '';
    document.getElementById('memberJoinDate').value = m.joinDate || '';

    // Show form
    document.getElementById('memberFormTitle').innerText = "編輯隊員資料";
    document.getElementById('memberFormContainer').classList.remove('hidden');
};

// Query EMT MOHW Portal Helper with Bookmarklet Assistant
window.queryEmtMohw = function(id) {
    const m = state.members.find(item => item.id === id);
    if (!m) return;

    if (!m.birthDate) {
        alert("此隊員尚未設定出生日期！請先點擊「編輯」填寫出生日期。");
        return;
    }

    const birthParts = m.birthDate.split('-');
    let rocYear = "";
    let formattedRoc = "-";
    if (birthParts.length === 3) {
        const year = parseInt(birthParts[0]);
        rocYear = String(year - 1911);
        const paddedRocYear = rocYear.padStart(3, '0');
        formattedRoc = `${paddedRocYear}${birthParts[1]}${birthParts[2]}`;
    }

    const modalId = 'emtQueryHelperModal';
    let modal = document.getElementById(modalId);
    if (!modal) {
        modal = document.createElement('div');
        modal.id = modalId;
        modal.className = "fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50 p-4";
        document.body.appendChild(modal);
    }

    const bookmarkletCode = `javascript:(async function(){try{const text=await navigator.clipboard.readText();const birthDate=text.trim();const inputs=Array.from(document.querySelectorAll('input'));let birthInput=inputs.find(i=>{const id=(i.id||'').toLowerCase();const name=(i.name||'').toLowerCase();const placeholder=(i.placeholder||'');return i.type==='date'||id.includes('birth')||name.includes('birth')||placeholder.includes('出生')||placeholder.includes('生日')});if(!birthInput){inputs.forEach(i=>{const combined=((i.parentElement?.textContent||'')+' '+(i.parentElement?.parentElement?.textContent||''));if(combined.includes('出生日期')||combined.includes('生日'))birthInput=i})}if(!birthInput)birthInput=inputs.find(i=>i.type==='date'||i.id?.toLowerCase().includes('date')||i.name?.toLowerCase().includes('date'));if(birthInput){birthInput.value=birthDate;birthInput.dispatchEvent(new Event('input',{bubbles:true}));birthInput.dispatchEvent(new Event('change',{bubbles:true}))}else{alert('找不到出生日期輸入框！')}}catch(e){alert('自動填寫生日失敗，請手動複製貼上！錯誤：'+e.message)}})();`;

    modal.innerHTML = `
        <div class="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-lg sm:w-full p-6 text-left">
            <div class="flex justify-between items-center border-b pb-3 mb-4">
                <h3 class="text-lg font-bold text-gray-900">🔍 衛福部 EMT 效期查詢助手</h3>
                <button onclick="document.getElementById('${modalId}').remove()" class="text-gray-400 hover:text-gray-600 text-xl font-bold">&times;</button>
            </div>
            <div class="space-y-4">
                <div class="bg-blue-50 border-l-4 border-blue-400 p-3 rounded">
                    <p class="text-sm text-blue-700 font-medium">
                        查詢隊員：<span class="text-blue-900 font-bold">${m.name}</span>
                    </p>
                    <p class="text-xs text-blue-600 mt-1">
                        系統已完全移除身分證與電話，以確保隱私。此小助手僅複製「出生日期」，請手動輸入身分證字號並利用書籤填寫生日！
                    </p>
                </div>
                
                <div class="border-2 border-dashed border-gray-300 p-4 rounded-md text-center bg-gray-50">
                    <span class="block text-xs font-semibold text-gray-500 mb-2">第一步：新增「一鍵填寫」書籤（只需拖曳一次）</span>
                    <a href="${bookmarkletCode}" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-650 hover:bg-blue-750 shadow-sm cursor-move font-bold" title="請將此按鈕拖曳至您的書籤列">
                        🖱️ 拖曳我到書籤列
                    </a>
                    <p class="text-xs text-gray-400 mt-2">
                        ※ 請用滑鼠拖曳此按鈕至瀏覽器最上方的「書籤列」（可按 Ctrl+Shift+B 顯示書籤列）。
                    </p>
                </div>

                <div class="bg-gray-50 p-4 rounded-md border border-gray-200">
                    <span class="block text-xs font-semibold text-gray-500 mb-2">第二步：複製生日並前往衛福部網站</span>
                    <button onclick="copyQueryDataAndOpen('${m.birthDate}')" class="w-full inline-flex justify-center items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-750 shadow-sm transition-colors font-bold">
                        📋 複製生日並開啟衛福部系統
                    </button>
                    <p class="text-xs text-gray-400 mt-2 text-center">
                        ※ 開啟後，請在官方頁面手動輸入身分證，然後點擊剛才加入的書籤，即可自動填入生日！
                    </p>
                </div>
                
                <div class="text-xs text-gray-500 border-t pt-3 space-y-1">
                    <p class="font-semibold text-gray-700">📋 手動複製備用區：</p>
                    <div class="flex justify-between items-center bg-white p-2 border rounded">
                        <span>生日(西元)：<span class="font-mono text-gray-800 font-bold">${m.birthDate || '（未填寫）'}</span></span>
                        <button onclick="copyToClipboard('${m.birthDate}', 'manualBirthBtn')" id="manualBirthBtn" class="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded border">複製</button>
                    </div>
                    <div class="flex justify-between items-center bg-white p-2 border rounded mt-1">
                        <span>生日(民國)：<span class="font-mono text-gray-800 font-bold">${formattedRoc}</span></span>
                        <button onclick="copyToClipboard('${formattedRoc}', 'manualBirthRocBtn')" id="manualBirthRocBtn" class="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded border">複製</button>
                    </div>
                </div>
            </div>
            
            <div class="mt-6 flex justify-end gap-2 border-t pt-4">
                <button onclick="document.getElementById('${modalId}').remove()" class="inline-flex justify-center px-4 py-2.5 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    關閉
                </button>
            </div>
        </div>
    `;
    
    window.copyQueryDataAndOpen = function(birthDate) {
        navigator.clipboard.writeText(birthDate).then(() => {
            window.open("https://ems.mohw.gov.tw/", "_blank");
            document.getElementById(modalId).remove();
        }).catch(err => {
            alert("複製失敗，請使用下方的「手動複製備用區」！" + err);
        });
    };

    if (!window.copyToClipboard) {
        window.copyToClipboard = function(text, btnId) {
            if (!text) {
                alert("內容為空，無法複製！請先點擊編輯補齊資料。");
                return;
            }
            navigator.clipboard.writeText(text).then(() => {
                const btn = document.getElementById(btnId);
                if (btn) {
                    const originalText = btn.innerText;
                    btn.innerText = "已複製！";
                    btn.classList.add("bg-green-100", "text-green-800");
                    setTimeout(() => {
                        btn.innerText = originalText;
                        btn.classList.remove("bg-green-100", "text-green-800");
                    }, 1500);
                }
            }).catch(err => {
                alert("複製失敗，請手動選取複製！" + err);
            });
        };
    }
};

// Delete Member
window.deleteMember = function(id) {
    if (confirm("您確定要刪除這位隊員嗎？此操作無法還原。")) {
        state.members = state.members.filter(item => item.id !== id);
        saveMembers();
        renderMembers();
        renderDashboard();
    }
};

// Render Trainings List
function renderTrainings() {
    const listBody = document.getElementById('trainingsListBody');
    if (!listBody) return;
    listBody.innerHTML = '';

    state.trainings.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(t => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 border-b border-gray-200 text-sm";
        
        // Get names of attendees
        const attendeeNames = t.attendees.map(aid => {
            const m = state.members.find(mem => mem.id === aid);
            return m ? m.name : '未知';
        }).join(', ');

        tr.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900">${getMinguoDateStr(t.date)}</td>
            <td class="px-6 py-4">${t.startTime} - ${t.endTime}</td>
            <td class="px-6 py-4">${t.dutyItem}</td>
            <td class="px-6 py-4">${t.location}</td>
            <td class="px-6 py-4 text-center font-semibold text-gray-800">${t.attendees.length} 人</td>
            <td class="px-6 py-4 max-w-xs truncate" title="${attendeeNames}">${attendeeNames}</td>
            <td class="px-6 py-4 text-right">
                <button onclick="editTraining('${t.id}')" class="text-indigo-600 hover:text-indigo-900 mr-3">編輯</button>
                <button onclick="deleteTraining('${t.id}')" class="text-red-600 hover:text-red-900">刪除</button>
            </td>
        `;
        listBody.appendChild(tr);
    });
}

// Edit Training
window.editTraining = function(id) {
    const t = state.trainings.find(item => item.id === id);
    if (!t) return;

    document.getElementById('trainingId').value = t.id;
    document.getElementById('trainingDate').value = t.date;
    document.getElementById('trainingStartTime').value = t.startTime;
    document.getElementById('trainingEndTime').value = t.endTime;
    document.getElementById('trainingLocation').value = t.location;
    document.getElementById('trainingDutyItem').value = t.dutyItem;
    document.getElementById('trainingAmount').value = t.amount;

    // Reset checkboxes
    const checkboxes = document.getElementsByName('trAttendee');
    checkboxes.forEach(cb => {
        cb.checked = t.attendees.includes(cb.value);
    });

    document.getElementById('trainingFormTitle').innerText = "編輯訓練紀錄";
    document.getElementById('trainingFormContainer').classList.remove('hidden');
};

// Delete Training
window.deleteTraining = function(id) {
    if (confirm("您確定要刪除這筆訓練紀錄嗎？")) {
        state.trainings = state.trainings.filter(item => item.id !== id);
        saveTrainings();
        renderTrainings();
        renderDashboard();
    }
};

// Render Dispatches List
function renderDispatches() {
    const listBody = document.getElementById('dispatchesListBody');
    if (!listBody) return;
    listBody.innerHTML = '';

    state.dispatches.sort((a,b) => new Date(b.date) - new Date(a.date)).forEach(d => {
        const tr = document.createElement('tr');
        tr.className = "hover:bg-gray-50 border-b border-gray-200 text-sm";
        
        const attendeeNames = d.attendees.map(aid => {
            const m = state.members.find(mem => mem.id === aid);
            return m ? m.name : '未知';
        }).join(', ');

        const combinedDesc = d.description + (d.detail ? ` (${d.detail})` : '');

        tr.innerHTML = `
            <td class="px-6 py-4 font-medium text-gray-900">${getMinguoDateStr(d.date)}</td>
            <td class="px-6 py-4">${d.startTime} - ${d.endTime}</td>
            <td class="px-6 py-4 font-mono">${d.caseNo || '-'}</td>
            <td class="px-6 py-4 max-w-xs truncate" title="${combinedDesc}">${combinedDesc}</td>
            <td class="px-6 py-4 text-center font-semibold text-gray-800">${d.attendees.length} 人</td>
            <td class="px-6 py-4 max-w-xs truncate" title="${attendeeNames}">${attendeeNames}</td>
            <td class="px-6 py-4 text-right">
                <button onclick="editDispatch('${d.id}')" class="text-indigo-600 hover:text-indigo-900 mr-3">編輯</button>
                <button onclick="deleteDispatch('${d.id}')" class="text-red-600 hover:text-red-900">刪除</button>
            </td>
        `;
        listBody.appendChild(tr);
    });
}

// Edit Dispatch
window.editDispatch = function(id) {
    const d = state.dispatches.find(item => item.id === id);
    if (!d) return;

    document.getElementById('dispatchId').value = d.id;
    document.getElementById('dispatchDate').value = d.date;
    document.getElementById('dispatchStartTime').value = d.startTime;
    document.getElementById('dispatchEndTime').value = d.endTime;
    document.getElementById('dispatchCaseNo').value = d.caseNo || '';
    document.getElementById('dispatchDescription').value = d.description;
    document.getElementById('dispatchDetail').value = d.detail || '';
    document.getElementById('dispatchRate').value = d.rate || 150;

    // Reset checkboxes
    const checkboxes = document.getElementsByName('dispAttendee');
    checkboxes.forEach(cb => {
        cb.checked = d.attendees.includes(cb.value);
    });

    document.getElementById('dispatchFormTitle').innerText = "編輯出勤紀錄";
    document.getElementById('dispatchFormContainer').classList.remove('hidden');
};

// Delete Dispatch
window.deleteDispatch = function(id) {
    if (confirm("您確定要刪除這筆出勤紀錄嗎？")) {
        state.dispatches = state.dispatches.filter(item => item.id !== id);
        saveDispatches();
        renderDispatches();
        renderDashboard();
    }
};

// Render Dashboard Statistics
function renderDashboard() {
    document.getElementById('statTotalMembers').innerText = state.members.length;
    document.getElementById('statTotalTrainings').innerText = state.trainings.length;
    document.getElementById('statTotalDispatches').innerText = state.dispatches.length;

    // Calculate EMT Warning count
    const today = new Date();
    const alertLimit = 90 * 24 * 60 * 60 * 1000;
    let warningCount = 0;

    state.members.forEach(m => {
        if (m.emtExpiry) {
            const timeDiff = new Date(m.emtExpiry).getTime() - today.getTime();
            if (timeDiff < alertLimit) {
                warningCount++;
            }
        }
    });

    const warningEl = document.getElementById('statEmtWarnings');
    warningEl.innerText = warningCount;
    if (warningCount > 0) {
        warningEl.className = "text-2xl font-bold text-red-600";
    } else {
        warningEl.className = "text-2xl font-bold text-green-600";
    }
}

// Generate Report previews
window.generateReport = function() {
    const reportType = document.getElementById('reportType').value;
    const minguoYear = document.getElementById('reportYear').value;
    const month = document.getElementById('reportMonth').value;

    const targetYear = minguoToCEYear(minguoYear);
    const targetMonth = parseInt(month); // 1-12

    const previewContainer = document.getElementById('reportPreviewContent');
    previewContainer.innerHTML = '';

    // Add print title headers based on selected values
    const unitTitle = "嘉義縣消防局義勇消防總隊救護義消大隊水上分隊";

    if (reportType === "report1") {
        // Report 1: 定期訓練服勤代金印領清冊 (For a specific training event in the month)
        // Find trainings in that month
        const monthTrainings = state.trainings.filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === targetYear && (d.getMonth() + 1) === targetMonth;
        });

        if (monthTrainings.length === 0) {
            previewContainer.innerHTML = `
                <div class="text-center p-8 text-gray-500">
                    <p class="text-lg font-semibold">此月份查無訓練紀錄！</p>
                    <p class="text-sm mt-1">請先至「訓練紀錄」分頁新增該月份的訓練，再行產出印領清冊。</p>
                </div>
            `;
            return;
        }

        // Show selector for training event if there are multiple, or just take the first one
        let selectedTr = monthTrainings[0];
        
        // Add a training selector toolbar on screen
        const toolbar = document.createElement('div');
        toolbar.className = "no-print bg-red-50 border border-red-200 rounded-md p-4 mb-4 text-sm flex flex-col md:flex-row md:items-center justify-between gap-2";
        toolbar.innerHTML = `
            <div>
                <span class="font-bold text-red-800">選擇訓練場次：</span>
                <select id="report1TrainingSelect" class="rounded border-gray-300 text-sm focus:border-red-500 focus:ring-red-500">
                    ${monthTrainings.map(t => `<option value="${t.id}">${getMinguoDateStr(t.date)} (${t.startTime}-${t.endTime}) - ${t.dutyItem}</option>`).join('')}
                </select>
            </div>
            <p class="text-gray-600">本表為「定期訓練服勤代金印領清冊」，每人每次發放金額為代金欄位設定之數值。</p>
        `;
        previewContainer.appendChild(toolbar);

        const tableContainer = document.createElement('div');
        tableContainer.className = "report-preview-box";
        tableContainer.id = "report1PrintArea";
        previewContainer.appendChild(tableContainer);

        const renderR1 = (trEvent) => {
            const minguoDate = getMinguoDateStr(trEvent.date);
            
            // Build the side-by-side table rows
            // Left list and Right list
            const mid = Math.ceil(state.members.length / 2);
            const leftMembers = state.members.slice(0, mid);
            const rightMembers = state.members.slice(mid);

            let rowsHtml = '';
            let grandTotal = 0;
            let attendeeCount = 0;

            const maxRows = Math.max(leftMembers.length, rightMembers.length);
            for (let i = 0; i < maxRows; i++) {
                const lm = leftMembers[i];
                const rm = rightMembers[i];

                const lAttended = lm ? trEvent.attendees.includes(lm.id) : false;
                const rAttended = rm ? trEvent.attendees.includes(rm.id) : false;

                const lAmount = lAttended ? trEvent.amount : 0;
                const rAmount = rAttended ? trEvent.amount : 0;

                const lSig = lAttended ? '' : '事假';
                const rSig = rAttended ? '' : '事假';

                // Sum only if attended
                if (lm && lAttended) {
                    grandTotal += lAmount;
                    attendeeCount++;
                }
                if (rm && rAttended) {
                    grandTotal += rAmount;
                    attendeeCount++;
                }

                rowsHtml += `
                    <tr>
                        <td>${lm ? lm.title : ''}</td>
                        <td>${lm ? lm.name : ''}</td>
                        <td>${lm ? (lAttended ? lAmount : 0) : ''}</td>
                        <td style="height: 45px; color: #ef4444; font-weight: bold;">${lm ? lSig : ''}</td>
                        <td>${rm ? rm.title : ''}</td>
                        <td>${rm ? rm.name : ''}</td>
                        <td>${rm ? (rAttended ? rAmount : 0) : ''}</td>
                        <td style="height: 45px; color: #ef4444; font-weight: bold;">${rm ? rSig : ''}</td>
                    </tr>
                `;
            }

            tableContainer.innerHTML = `
                <div class="chiayi-report-title">${unitTitle}</div>
                <div class="chiayi-report-subtitle">${minguoYear}年${month}月份定期訓練服勤代金印領清冊</div>
                
                <table class="chiayi-table" style="margin-bottom: 0; white-space: nowrap;">
                    <tr style="height: 50px;">
                        <td style="width: 25%; font-weight: bold;">${minguoDate}</td>
                        <td style="width: 50%; font-weight: bold;">起：${trEvent.startTime.replace(':', '時')}分<br>迄：${trEvent.endTime.replace(':', '時')}分</td>
                        <td style="width: 25%; font-weight: bold;">地點：${trEvent.location}</td>
                    </tr>
                    <tr style="height: 50px;">
                        <td colspan="2" style="text-align: left; padding-left: 10px; font-weight: bold;">勤務項目：${trEvent.dutyItem}─每次金額${trEvent.amount}元</td>
                        <td style="font-weight: bold;">應到人數： ${state.members.length} 人</td>
                    </tr>
                </table>
                
                <table class="chiayi-table">
                    <thead>
                        <tr style="height: 50px;">
                            <th style="width: 12%;">職稱</th>
                            <th style="width: 13%;">姓名</th>
                            <th style="width: 10%;">金額</th>
                            <th style="width: 15%;">簽名(或蓋章)處</th>
                            <th style="width: 12%;">職稱</th>
                            <th style="width: 13%;">姓名</th>
                            <th style="width: 10%;">金額</th>
                            <th style="width: 15%;">簽名(或蓋章)處</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rowsHtml}
                        <tr>
                            <td colspan="8" style="text-align: center; font-weight: bold;">合計： ${attendeeCount} 人次　　　　總計：新台幣 ${grandTotal} 元整</td>
                        </tr>
                    </tbody>
                </table>
                
                <div class="flex justify-between mt-6 text-sm font-semibold" style="margin-top: 25px;">
                    <div>承辦（核發）人簽章：</div>
                    <div style="margin-right: 100px;">單位主管簽章：</div>
                </div>
            `;
        };

        renderR1(selectedTr);

        document.getElementById('report1TrainingSelect').addEventListener('change', (e) => {
            const tr = monthTrainings.find(item => item.id === e.target.value);
            if (tr) {
                renderR1(tr);
            }
        });

    } else if (reportType === "report2") {
        // Report 2: 定期訓練服勤代金轉發印領清冊 (Monthly summary of training)
        const monthTrainings = state.trainings.filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === targetYear && (d.getMonth() + 1) === targetMonth;
        });

        const tableContainer = document.createElement('div');
        tableContainer.className = "report-preview-box";
        tableContainer.id = "report2PrintArea";
        previewContainer.appendChild(tableContainer);

        let rowsHtml = '';
        let totalAmount = 0;

        state.members.forEach(m => {
            // Count how many trainings they attended in this month
            const attendedCount = monthTrainings.filter(t => t.attendees.includes(m.id)).length;
            if (attendedCount === 0) return; // Skip if no attendance
            const amount = attendedCount * 100; // Let's assume standard training fee is 100 per attendance
            totalAmount += amount;

            rowsHtml += `
                <tr>
                    <td>${m.name}</td>
                    <td>${amount}</td>
                    <td style="height: 45px;"></td>
                    <td>${attendedCount > 0 ? '0' : ''}</td>
                    <td></td>
                </tr>
            `;
        });

        tableContainer.innerHTML = `
            <div class="chiayi-report-title">${unitTitle}</div>
            <div class="chiayi-report-subtitle">${minguoYear}年${month}月份定期訓練服勤代金轉發印領清冊</div>
            
            <table class="chiayi-table">
                <thead>
                    <tr style="height: 50px;">
                        <th style="width: 20%;">姓名</th>
                        <th style="width: 15%;">金額</th>
                        <th style="width: 25%;">簽名（或蓋章）處</th>
                        <th style="width: 15%;">日期</th>
                        <th style="width: 25%;">備註</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                    <tr style="font-weight: bold;">
                        <td>合計</td>
                        <td>${totalAmount}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        `;

    } else if (reportType === "report3") {
        // Report 3: 義消救護車出勤代金及出勤內容紀錄 (Image 3: 31 days per person)
        const daysInMonth = getDaysInMonth(targetYear, targetMonth);
        
        // Filter dispatches for target month
        const monthDispatches = state.dispatches.filter(d => {
            const dt = new Date(d.date);
            return dt.getFullYear() === targetYear && (dt.getMonth() + 1) === targetMonth;
        });

        const tableContainer = document.createElement('div');
        tableContainer.className = "report-preview-box-wide";
        tableContainer.id = "report3PrintArea";
        previewContainer.appendChild(tableContainer);

        let fullTableHtml = `
            <div class="chiayi-report-title">${unitTitle}</div>
            <div class="chiayi-report-subtitle">${minguoYear}年${month}月份義消救護車出勤代金及出勤內容紀錄</div>
            
            <table class="chiayi-table" style="font-size: 9pt;">
                <thead>
                    <tr>
                        <th style="width: 8%;">職稱</th>
                        <th style="width: 8%;">姓名</th>
                        <th style="width: 4%;">項目</th>
                        <th style="width: 35%;">出勤日期及起訖時間</th>
                        <th style="width: 9%;">每次代金</th>
                        <th style="width: 9%;">代金小計</th>
                        <th style="width: 6%;">次數</th>
                        <th style="width: 10%;">簽章</th>
                        <th style="width: 11%;">備註</th>
                    </tr>
                </thead>
                <tbody>
        `;

        state.members.forEach(m => {
            // Find all dispatches of this member in this month
            const memberDispatches = monthDispatches.filter(d => d.attendees.includes(m.id));
            const times = memberDispatches.length;
            const rate = memberDispatches.length > 0 ? (memberDispatches[0].rate || 150) : 150;
            const subtotal = times * rate;

            // Group dispatches by day of the month
            const dayLogs = {};
            memberDispatches.forEach(d => {
                const day = new Date(d.date).getDate();
                if (!dayLogs[day]) dayLogs[day] = [];
                dayLogs[day].push(`${d.startTime}-${d.endTime}`);
            });

            // Generate 31 rows (or daysInMonth rows)
            // The Title, Name, Rate, Subtotal, Times, Signature, Remarks cells will have rowspan = daysInMonth
            for (let day = 1; day <= daysInMonth; day++) {
                const timesText = dayLogs[day] ? dayLogs[day].join(', ') : '-';
                
                if (day === 1) {
                    fullTableHtml += `
                        <tr class="member-dispatch-group">
                            <td rowspan="${daysInMonth}" style="font-weight: bold;">${m.title}</td>
                            <td rowspan="${daysInMonth}" style="font-weight: bold;">${m.name}</td>
                            <td class="sub-day-number">${day}</td>
                            <td class="sub-day-time">${timesText}</td>
                            <td rowspan="${daysInMonth}">${rate}</td>
                            <td rowspan="${daysInMonth}" style="font-weight: bold;">${subtotal}</td>
                            <td rowspan="${daysInMonth}" style="font-weight: bold;">${times}</td>
                            <td rowspan="${daysInMonth}"></td>
                            <td rowspan="${daysInMonth}"></td>
                        </tr>
                    `;
                } else {
                    fullTableHtml += `
                        <tr>
                            <td class="sub-day-number">${day}</td>
                            <td class="sub-day-time">${timesText}</td>
                        </tr>
                    `;
                }
            }
        });

        // Sum row
        const totalDispatchesCount = monthDispatches.reduce((acc, d) => acc + d.attendees.length, 0);
        const totalPayout = monthDispatches.reduce((acc, d) => acc + (d.attendees.length * (d.rate || 150)), 0);

        fullTableHtml += `
                    <tr style="font-weight: bold; font-size: 11pt;">
                        <td colspan="3">合計</td>
                        <td></td>
                        <td></td>
                        <td>${totalPayout}</td>
                        <td>${totalDispatchesCount}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <div class="flex justify-between mt-4 text-sm font-semibold" style="margin-top: 15px;">
                <div>承辦（核發）人簽章：</div>
                <div style="margin-right: 100px;">單位主管簽章：</div>
            </div>
        `;

        tableContainer.innerHTML = fullTableHtml;

    } else if (reportType === "report4") {
        // Report 4: 救護車出勤津貼轉發印領清冊 (Image 4)
        const monthDispatches = state.dispatches.filter(d => {
            const dt = new Date(d.date);
            return dt.getFullYear() === targetYear && (dt.getMonth() + 1) === targetMonth;
        });

        const tableContainer = document.createElement('div');
        tableContainer.className = "report-preview-box";
        tableContainer.id = "report4PrintArea";
        previewContainer.appendChild(tableContainer);

        let rowsHtml = '';
        let totalAmount = 0;

        state.members.forEach(m => {
            const memberDispatches = monthDispatches.filter(d => d.attendees.includes(m.id));
            const times = memberDispatches.length;
            const rate = memberDispatches.length > 0 ? (memberDispatches[0].rate || 150) : 150;
            const amount = times * rate;
            totalAmount += amount;

            rowsHtml += `
                <tr>
                    <td>${m.name}</td>
                    <td>${amount}</td>
                    <td style="height: 45px;"></td>
                    <td>${times > 0 ? '0' : ''}</td>
                    <td></td>
                </tr>
            `;
        });

        tableContainer.innerHTML = `
            <div class="chiayi-report-title">${unitTitle}</div>
            <div class="chiayi-report-subtitle">${minguoYear}年${month}月份救護義消救護車出勤津貼轉發印領清冊</div>
            
            <table class="chiayi-table">
                <thead>
                    <tr style="height: 50px;">
                        <th style="width: 20%;">姓名</th>
                        <th style="width: 15%;">金額</th>
                        <th style="width: 25%;">簽名（或蓋章）處</th>
                        <th style="width: 15%;">日期</th>
                        <th style="width: 25%;">備註</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHtml}
                    <tr style="font-weight: bold;">
                        <td>合計</td>
                        <td>${totalAmount}</td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        `;
    }
};

// Print Report
window.printReport = function() {
    window.print();
};

// Excel Export (SheetJS)
window.exportToExcel = function() {
    if (typeof XLSX === 'undefined') {
        alert("Excel 匯出元件尚未載入，請確認網路連線！");
        return;
    }

    const reportType = document.getElementById('reportType').value;
    const minguoYear = document.getElementById('reportYear').value;
    const month = document.getElementById('reportMonth').value;
    const targetYear = minguoToCEYear(minguoYear);
    const targetMonth = parseInt(month);

    const wb = XLSX.utils.book_new();

    if (reportType === "report1") {
        // Export training attendance
        const monthTrainings = state.trainings.filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === targetYear && (d.getMonth() + 1) === targetMonth;
        });

        if (monthTrainings.length === 0) {
            alert("查無本月訓練紀錄！");
            return;
        }

        monthTrainings.forEach((trEvent, idx) => {
            const data = [
                [`${minguoYear}年${month}月份定期訓練服勤代金印領清冊`],
                ["日期", getMinguoDateStr(trEvent.date), "地點", trEvent.location],
                ["起訖時間", `${trEvent.startTime}-${trEvent.endTime}`, "應到人數", state.members.length],
                ["勤務項目", `${trEvent.dutyItem}─每次金額${trEvent.amount}元`, "", ""],
                [],
                ["職稱", "姓名", "金額", "簽名(或蓋章)處"]
            ];

            state.members.forEach(m => {
                const attended = trEvent.attendees.includes(m.id);
                data.push([
                    m.title,
                    m.name,
                    attended ? trEvent.amount : 0,
                    attended ? "" : "事假"
                ]);
            });

            const ws = XLSX.utils.aoa_to_sheet(data);
            
            // Set widths and merges
            ws['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 12 }, { wch: 25 }];
            ws['!merges'] = [
                { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } }, // Merge title row A1:D1
                { s: { r: 3, c: 1 }, e: { r: 3, c: 3 } }  // Merge duty item detail
            ];

            XLSX.utils.book_append_sheet(wb, ws, `訓練場次${idx+1}`);
        });

        XLSX.writeFile(wb, `定期訓練服勤代金印領清冊_${minguoYear}年${month}月.xlsx`);

    } else if (reportType === "report2") {
        // Export training monthly summary
        const monthTrainings = state.trainings.filter(t => {
            const d = new Date(t.date);
            return d.getFullYear() === targetYear && (d.getMonth() + 1) === targetMonth;
        });

        const data = [
            [`${minguoYear}年${month}月份定期訓練服勤代金轉發印領清冊`],
            [`年度月份：民國 ${minguoYear} 年 ${month} 月`],
            [],
            ["姓名", "金額", "簽名（或蓋章）處", "日期", "備註"]
        ];

        let total = 0;
        state.members.forEach(m => {
            const attendedCount = monthTrainings.filter(t => t.attendees.includes(m.id)).length;
            if (attendedCount === 0) return; // Skip if no attendance
            const amount = attendedCount * 100;
            total += amount;
            data.push([m.name, amount, "", attendedCount > 0 ? "0" : "", ""]);
        });

        data.push(["合計", total, "", "", ""]);

        const ws = XLSX.utils.aoa_to_sheet(data);
        
        // Set widths and merges
        ws['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 15 }, { wch: 20 }];
        ws['!merges'] = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } }, // Title
            { s: { r: 1, c: 0 }, e: { r: 1, c: 4 } }  // Subtitle
        ];

        XLSX.utils.book_append_sheet(wb, ws, "訓練代金轉發");
        XLSX.writeFile(wb, `定期訓練代金轉發清冊_${minguoYear}年${month}月.xlsx`);

    } else if (reportType === "report3" || reportType === "report4") {
        // Export dispatch summaries
        const monthDispatches = state.dispatches.filter(d => {
            const dt = new Date(d.date);
            return dt.getFullYear() === targetYear && (dt.getMonth() + 1) === targetMonth;
        });

        // Tab 1: Detailed records (Report 3 structure)
        const sheet3Data = [
            [`${minguoYear}年${month}月份義消救護車出勤代金及出勤內容紀錄`],
            [`年度月份：民國 ${minguoYear} 年 ${month} 月`],
            [],
            ["職稱", "姓名", "日", "出勤起訖時間", "每次代金", "代金小計", "次數", "簽章", "備註"]
        ];

        const merges3 = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 8 } },
            { s: { r: 1, c: 0 }, e: { r: 1, c: 8 } }
        ];

        let currentRow = 4; // Start row for data mapping

        state.members.forEach(m => {
            const memberDispatches = monthDispatches.filter(d => d.attendees.includes(m.id));
            const times = memberDispatches.length;
            const rate = memberDispatches.length > 0 ? (memberDispatches[0].rate || 150) : 150;
            const subtotal = times * rate;

            const dayLogs = {};
            memberDispatches.forEach(d => {
                const day = new Date(d.date).getDate();
                if (!dayLogs[day]) dayLogs[day] = [];
                dayLogs[day].push(`${d.startTime}-${d.endTime}`);
            });

            const daysInMonth = getDaysInMonth(targetYear, targetMonth);
            
            // Push vertical merges for this member
            const startRow = currentRow;
            const endRow = currentRow + daysInMonth - 1;
            
            merges3.push(
                { s: { r: startRow, c: 0 }, e: { r: endRow, c: 0 } }, // Title
                { s: { r: startRow, c: 1 }, e: { r: endRow, c: 1 } }, // Name
                { s: { r: startRow, c: 4 }, e: { r: endRow, c: 4 } }, // Rate
                { s: { r: startRow, c: 5 }, e: { r: endRow, c: 5 } }, // Subtotal
                { s: { r: startRow, c: 6 }, e: { r: endRow, c: 6 } }, // Count
                { s: { r: startRow, c: 7 }, e: { r: endRow, c: 7 } }, // Sign
                { s: { r: startRow, c: 8 }, e: { r: endRow, c: 8 } }  // Note
            );

            for (let day = 1; day <= daysInMonth; day++) {
                const timesText = dayLogs[day] ? dayLogs[day].join(', ') : "-";
                if (day === 1) {
                    sheet3Data.push([
                        m.title, m.name, day, timesText, rate, subtotal, times, "", ""
                    ]);
                } else {
                    sheet3Data.push([
                        "", "", day, timesText, "", "", "", "", ""
                    ]);
                }
                currentRow++;
            }
        });

        const ws3 = XLSX.utils.aoa_to_sheet(sheet3Data);
        ws3['!cols'] = [
            { wch: 12 }, { wch: 12 }, { wch: 6 }, { wch: 25 }, 
            { wch: 12 }, { wch: 12 }, { wch: 8 }, { wch: 12 }, { wch: 12 }
        ];
        ws3['!merges'] = merges3;
        XLSX.utils.book_append_sheet(wb, ws3, "出勤明細紀錄");

        // Tab 2: Allowance Disbursement summary (Report 4 structure)
        const sheet4Data = [
            [`${minguoYear}年${month}月份救護車出勤津貼轉發印領清冊`],
            [`年度月份：民國 ${minguoYear} 年 ${month} 月`],
            [],
            ["姓名", "金額", "簽名（或蓋章）處", "日期", "備註"]
        ];

        let total = 0;
        state.members.forEach(m => {
            const memberDispatches = monthDispatches.filter(d => d.attendees.includes(m.id));
            const times = memberDispatches.length;
            const rate = memberDispatches.length > 0 ? (memberDispatches[0].rate || 150) : 150;
            const amount = times * rate;
            total += amount;
            sheet4Data.push([m.name, amount, "", times > 0 ? "0" : "", ""]);
        });
        sheet4Data.push(["合計", total, "", "", ""]);

        const ws4 = XLSX.utils.aoa_to_sheet(sheet4Data);
        ws4['!cols'] = [{ wch: 15 }, { wch: 15 }, { wch: 25 }, { wch: 15 }, { wch: 20 }];
        ws4['!merges'] = [
            { s: { r: 0, c: 0 }, e: { r: 0, c: 4 } },
            { s: { r: 1, c: 0 }, e: { r: 1, c: 4 } }
        ];
        
        XLSX.utils.book_append_sheet(wb, ws4, "出勤津貼轉發");

        XLSX.writeFile(wb, `救護出勤紀錄與代金清冊_${minguoYear}年${month}月.xlsx`);
    }
};

// JSON Import & Export functions
window.exportDataBackup = function() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state));
    const dlAnchorElem = document.createElement('a');
    dlAnchorElem.setAttribute("href",     dataStr     );
    dlAnchorElem.setAttribute("download", `救護義消系統備份_${new Date().toISOString().slice(0,10)}.json`);
    dlAnchorElem.click();
};

window.importDataBackup = function(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = function() {
        try {
            const importedState = JSON.parse(reader.result);
            if (importedState.members && importedState.trainings && importedState.dispatches) {
                state = importedState;
                saveMembers();
                saveTrainings();
                saveDispatches();
                
                // Re-render
                renderMembers();
                renderTrainings();
                renderDispatches();
                renderDashboard();
                
                alert("資料庫成功還原！");
            } else {
                alert("格式不符！請確保匯入正確的備份檔。");
            }
        } catch (e) {
            alert("讀取檔案失敗：" + e.message);
        }
    };
    reader.readAsText(input.files[0]);
};

// Global Tab Switching function
window.switchTab = function(tabId) {
    const tabs = document.querySelectorAll(".nav-tab");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(t => {
        const isTarget = t.dataset.tab === tabId;
        if (isTarget) {
            t.classList.add("border-red-500", "text-red-600", "bg-white", "shadow-sm");
            t.classList.remove("border-transparent", "text-gray-200", "hover:text-white");
        } else {
            t.classList.remove("border-red-500", "text-red-600", "bg-white", "shadow-sm");
            t.classList.add("border-transparent", "text-gray-200", "hover:text-white");
        }
    });

    contents.forEach(c => {
        if (c.id === tabId) {
            c.classList.add("active");
        } else {
            c.classList.remove("active");
        }
    });

    // Specific tab initializations
    if (tabId === 'tab-reports') {
        generateReport();
    }
};

// UI Interactions & Event Listeners
document.addEventListener("DOMContentLoaded", () => {
    // Load local storage
    loadData();

    // Render components
    renderMembers();
    renderTrainings();
    renderDispatches();
    renderDashboard();

    // Tab Navigation Logic
    const tabs = document.querySelectorAll(".nav-tab");
    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            window.switchTab(tab.dataset.tab);
        });
    });

    // Populate Report Years selection (110 - 120 Minguo)
    const yearSelect = document.getElementById('reportYear');
    if (yearSelect) {
        const curMinguo = new Date().getFullYear() - 1911;
        yearSelect.innerHTML = '';
        for (let y = curMinguo - 2; y <= curMinguo + 2; y++) {
            const opt = document.createElement('option');
            opt.value = y;
            opt.innerText = `民國 ${y} 年`;
            if (y === curMinguo) opt.selected = true;
            yearSelect.appendChild(opt);
        }
    }

    // Populate Report Month selection (current month)
    const monthSelect = document.getElementById('reportMonth');
    if (monthSelect) {
        const curM = new Date().getMonth() + 1;
        monthSelect.value = curM;
    }

    // Member Form handling
    const openMemberFormBtn = document.getElementById('openMemberFormBtn');
    const closeMemberFormBtn = document.getElementById('closeMemberFormBtn');
    const memberForm = document.getElementById('memberForm');
    const memberFormContainer = document.getElementById('memberFormContainer');

    if (openMemberFormBtn && closeMemberFormBtn && memberForm && memberFormContainer) {
        openMemberFormBtn.addEventListener('click', () => {
            document.getElementById('memberId').value = '';
            memberForm.reset();
            document.getElementById('memberFormTitle').innerText = "新增隊員";
            memberFormContainer.classList.remove('hidden');
        });

        closeMemberFormBtn.addEventListener('click', () => {
            memberFormContainer.classList.add('hidden');
        });

        memberForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('memberId').value;
            const title = document.getElementById('memberTitle').value;
            const name = document.getElementById('memberName').value;
            const birthDate = document.getElementById('memberBirthDate').value;
            const emtLevel = document.getElementById('memberEmtLevel').value;
            const emtExpiry = document.getElementById('memberEmtExpiry').value;
            const certNo = document.getElementById('memberCertNo').value;
            const org = document.getElementById('memberOrg').value;
            const joinDate = document.getElementById('memberJoinDate').value;

            if (id) {
                // Update
                const idx = state.members.findIndex(m => m.id === id);
                if (idx !== -1) {
                    state.members[idx] = { id, title, name, birthDate, emtLevel, emtExpiry, certNo, org, joinDate };
                }
            } else {
                // Insert
                const newId = String(Date.now());
                state.members.push({ id: newId, title, name, birthDate, emtLevel, emtExpiry, certNo, org, joinDate });
            }

            saveMembers();
            renderMembers();
            renderDashboard();
            memberFormContainer.classList.add('hidden');
        });
    }

    // Training Form handling
    const openTrainingFormBtn = document.getElementById('openTrainingFormBtn');
    const closeTrainingFormBtn = document.getElementById('closeTrainingFormBtn');
    const trainingForm = document.getElementById('trainingForm');
    const trainingFormContainer = document.getElementById('trainingFormContainer');

    if (openTrainingFormBtn && closeTrainingFormBtn && trainingForm && trainingFormContainer) {
        openTrainingFormBtn.addEventListener('click', () => {
            document.getElementById('trainingId').value = '';
            trainingForm.reset();
            
            // Set default date to today
            document.getElementById('trainingDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('trainingStartTime').value = "18:00";
            document.getElementById('trainingEndTime').value = "22:00";
            document.getElementById('trainingLocation').value = "水上分隊";
            document.getElementById('trainingDutyItem').value = "定期訓練服勤代金";
            document.getElementById('trainingAmount').value = 100;

            // Reset all checkboxes to checked (default expected everyone)
            const checkboxes = document.getElementsByName('trAttendee');
            checkboxes.forEach(cb => cb.checked = true);

            document.getElementById('trainingFormTitle').innerText = "新增訓練紀錄";
            trainingFormContainer.classList.remove('hidden');
        });

        closeTrainingFormBtn.addEventListener('click', () => {
            trainingFormContainer.classList.add('hidden');
        });

        trainingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('trainingId').value;
            const date = document.getElementById('trainingDate').value;
            const startTime = document.getElementById('trainingStartTime').value;
            const endTime = document.getElementById('trainingEndTime').value;
            const location = document.getElementById('trainingLocation').value;
            const dutyItem = document.getElementById('trainingDutyItem').value;
            const amount = parseInt(document.getElementById('trainingAmount').value) || 100;

            const checkedBoxes = document.querySelectorAll('input[name="trAttendee"]:checked');
            const attendees = Array.from(checkedBoxes).map(cb => cb.value);

            if (attendees.length === 0) {
                alert("請至少選擇一位參訓人員！");
                return;
            }

            if (id) {
                const idx = state.trainings.findIndex(t => t.id === id);
                if (idx !== -1) {
                    state.trainings[idx] = { id, date, startTime, endTime, location, dutyItem, amount, attendees };
                }
            } else {
                const newId = String(Date.now());
                state.trainings.push({ id: newId, date, startTime, endTime, location, dutyItem, amount, attendees });
            }

            saveTrainings();
            renderTrainings();
            renderDashboard();
            trainingFormContainer.classList.add('hidden');
        });
    }

    // Dispatch Form handling
    const openDispatchFormBtn = document.getElementById('openDispatchFormBtn');
    const closeDispatchFormBtn = document.getElementById('closeDispatchFormBtn');
    const dispatchForm = document.getElementById('dispatchForm');
    const dispatchFormContainer = document.getElementById('dispatchFormContainer');

    if (openDispatchFormBtn && closeDispatchFormBtn && dispatchForm && dispatchFormContainer) {
        openDispatchFormBtn.addEventListener('click', () => {
            document.getElementById('dispatchId').value = '';
            dispatchForm.reset();
            
            document.getElementById('dispatchDate').value = new Date().toISOString().split('T')[0];
            document.getElementById('dispatchStartTime').value = "08:00";
            document.getElementById('dispatchEndTime').value = "10:00";
            document.getElementById('dispatchRate').value = 150; // standard allowance per dispatch
            document.getElementById('dispatchDescription').value = "急病";
            document.getElementById('dispatchDetail').value = "";

            const checkboxes = document.getElementsByName('dispAttendee');
            checkboxes.forEach(cb => cb.checked = false);

            document.getElementById('dispatchFormTitle').innerText = "新增救護出勤紀錄";
            dispatchFormContainer.classList.remove('hidden');
        });

        closeDispatchFormBtn.addEventListener('click', () => {
            dispatchFormContainer.classList.add('hidden');
        });

        dispatchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const id = document.getElementById('dispatchId').value;
            const date = document.getElementById('dispatchDate').value;
            const startTime = document.getElementById('dispatchStartTime').value;
            const endTime = document.getElementById('dispatchEndTime').value;
            const caseNo = document.getElementById('dispatchCaseNo').value;
            const description = document.getElementById('dispatchDescription').value;
            const detail = document.getElementById('dispatchDetail').value;
            const rate = parseInt(document.getElementById('dispatchRate').value) || 150;

            const checkedBoxes = document.querySelectorAll('input[name="dispAttendee"]:checked');
            const attendees = Array.from(checkedBoxes).map(cb => cb.value);

            if (attendees.length === 0) {
                alert("請至少選擇一位出勤人員！");
                return;
            }

            if (id) {
                const idx = state.dispatches.findIndex(d => d.id === id);
                if (idx !== -1) {
                    state.dispatches[idx] = { id, date, startTime, endTime, caseNo, description, detail, rate, attendees };
                }
            } else {
                const newId = String(Date.now());
                state.dispatches.push({ id: newId, date, startTime, endTime, caseNo, description, detail, rate, attendees });
            }

            saveDispatches();
            renderDispatches();
            renderDashboard();
            dispatchFormContainer.classList.add('hidden');
        });
    }

    // Print config listeners
    const reportType = document.getElementById('reportType');
    const reportYear = document.getElementById('reportYear');
    const reportMonth = document.getElementById('reportMonth');

    if (reportType && reportYear && reportMonth) {
        reportType.addEventListener('change', generateReport);
        reportYear.addEventListener('change', generateReport);
        reportMonth.addEventListener('change', generateReport);
    }
});
