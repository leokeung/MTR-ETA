const api = 'https://rt.data.gov.hk/v1/transport/mtr/getSchedule.php';
const line = {
    KTL: {
        text: "觀塘線",
        color: "#7ed957",
        sta: [
            { code: "WHA", name: "Whampoa" },
            { code: "HOM", name: "Ho Man Tin" },
            { code: "YMT", name: "Yau Ma Tei" },
            { code: "MOK", name: "Mong Kok" },
            { code: "PRE", name: "Prince Edward" },
            { code: "SKM", name: "Shek Kip Mei" },
            { code: "KOT", name: "Kowloon Tong" },
            { code: "LOF", name: "Lok Fu" },
            { code: "WTS", name: "Wong Tai Sin" },
            { code: "DIH", name: "Diamond Hill" },
            { code: "CHH", name: "Choi Hung" },
            { code: "KOB", name: "Kowloon Bay" },
            { code: "NTK", name: "Ngau Tau Kok" },
            { code: "KWT", name: "Kwun Tong" },
            { code: "LAT", name: "Lam Tin" },
            { code: "YAT", name: "Yau Tong" },
            { code: "TIK", name: "Tiu Keng Leng" },
        ],
    },
    ISL: {
        text: "港島線",
        color: "#004aad",
        sta: [
            { code: "KET", name: "Kennedy Town" },
            { code: "HKU", name: "HKU" },
            { code: "SYP", name: "Sai Ying Pun" },
            { code: "SHW", name: "Sheung Wan" },
            { code: "CEN", name: "Central" },
            { code: "ADM", name: "Admiralty" },
            { code: "WAC", name: "Wan Chai" },
            { code: "CAB", name: "Causeway Bay" },
            { code: "TIH", name: "Tin Hau" },
            { code: "FOH", name: "Fortress Hill" },
            { code: "NOP", name: "North Point" },
            { code: "QUB", name: "Quarry Bay" },
            { code: "TAK", name: "Tai Koo" },
            { code: "SWH", name: "Sai Wan Ho" },
            { code: "SKW", name: "Shau Kei Wan" },
            { code: "HFC", name: "Heng Fa Chuen" },
            { code: "CHW", name: "Chai Wan" },
        ],
    },
    TWL: {
        text: "荃灣線",
        color: "#ff3131",
        sta: [
            { code: "CEN", name: "Central" },
            { code: "ADM", name: "Admiralty" },
            { code: "TST", name: "Tsim Sha Tsui" },
            { code: "JOR", name: "Jordan" },
            { code: "YMT", name: "Yau Ma Tei" },
            { code: "MOK", name: "Mong Kok" },
            { code: "PRE", name: "Price Edward" },
            { code: "SSP", name: "Sham Shui Po" },
            { code: "CSW", name: "Cheung Sha Wan" },
            { code: "LCK", name: "Lai Chi Kok" },
            { code: "MEF", name: "Mei Foo" },
            { code: "LAK", name: "Lai King" },
            { code: "KWF", name: "Kwai Fong" },
            { code: "KWH", name: "Kwai Hing" },
            { code: "TWH", name: "Tai Wo Hau" },
            { code: "TSW", name: "Tsuen Wan" },
        ],
    },
    SIL: {
        text: "南港島線",
        color: "#cbcd09",
        sta: [
            { code: "ADM", name: "Admiralty" },
            { code: "OCP", name: "Ocean Park" },
            { code: "WCH", name: "Wong Chuk Hang" },
            { code: "LET", name: "Lei Tung" },
            { code: "SOH", name: "South Horizons" },
        ],
    },
    TCL: {
        text: "東涌線",
        color: "#f6943d",
        sta: [
            { code: "HOK", name: "Hong Kong" },
            { code: "KOW", name: "Kowloon" },
            { code: "OLY", name: "Olympic" },
            { code: "NAC", name: "Nam Cheong" },
            { code: "LAK", name: "Lai King" },
            { code: "TSY", name: "Tsing Yi" },
            { code: "SUN", name: "Sunny Bay" },
            { code: "TUC", name: "Tung Chung" },
        ],
    },
    EAL: {
        text: "東鐵線",
        color: "#5ce1e6",
        sta: [
            { code: "ADM", name: "Admiralty" },
            { code: "EXC", name: "Exhibition Centre" },
            { code: "HUH", name: "Hung Hom" },
            { code: "MKK", name: "Mong Kok East" },
            { code: "KOT", name: "Kowloon Tong" },
            { code: "TAW", name: "Tai Wai" },
            { code: "SHT", name: "Sha Tin" },
            { code: "FOT", name: "Fo Tan" },
            { code: "RAC", name: "Racecourse" },
            { code: "UNI", name: "University" },
            { code: "TAP", name: "Tai Po Market" },
            { code: "TWO", name: "Tai Wo" },
            { code: "FAN", name: "Fanling" },
            { code: "SHS", name: "Sheung Shui" },
            { code: "LOW", name: "Lo Wu" },
            { code: "LMC", name: "Lok Ma Chau" },
        ],
    },
    TML: {
        text: "屯馬線",
        color: "#8d6019",
        sta: [
            { code: "WKS", name: "Wu Kai Sha" },
            { code: "MOS", name: "Ma On Shan" },
            { code: "HEO", name: "Heng On" },
            { code: "TSH", name: "Tai Shui Hang" },
            { code: "SHM", name: "Shek Mun" },
            { code: "CIO", name: "City One" },
            { code: "STW", name: "Sha Tin Wai" },
            { code: "CKT", name: "Che Kung Temple" },
            { code: "TAW", name: "Tai Wai" },
            { code: "HIK", name: "Hin Keng" },
            { code: "DIH", name: "Diamond Hill" },
            { code: "KAT", name: "Kai Tak" },
            { code: "SUW", name: "Sung Wong Toi" },
            { code: "TKW", name: "To Kwa Wan" },
            { code: "HOM", name: "Ho Man Tin" },
            { code: "HUH", name: "Hung Hom" },
            { code: "ETS", name: "East Tsim Sha Tsui" },
            { code: "AUS", name: "Austin" },
            { code: "NAC", name: "Nam Cheong" },
            { code: "MEF", name: "Mei Foo" },
            { code: "TWW", name: "Tsuen Wan West" },
            { code: "KSR", name: "Kam Sheung Road" },
            { code: "YUL", name: "Yuen Long" },
            { code: "LOP", name: "Long Ping" },
            { code: "TIS", name: "Tin Shui Wai" },
            { code: "SIH", name: "Siu Hong" },
            { code: "TUM", name: "Tuen Mun" },
        ],
    },
    AEL: {
        text: "機場快線",
        color: "#3d9ea0",
        sta: [
            { code: "HOK", name: "Hong Kong" },
            { code: "KOW", name: "Kowloon" },
            { code: "TSY", name: "Tsing Yi" },
            { code: "AIR", name: "Airport" },
            { code: "AWE", name: "AsiaWorld Expo" },
        ],
    },
    TKL: {
        text: "將軍澳線",
        color: "#8d45ab",
        sta: [
            { code: "NOP", name: "North Point" },
            { code: "QUB", name: "Quarry Bay" },
            { code: "YAT", name: "Yau Tong" },
            { code: "TIK", name: "Tiu Keng Leng" },
            { code: "TKO", name: "Tseung Kwan O" },
            { code: "LHP", name: "LOHAS Park" },
            { code: "HAH", name: "Hang Hau" },
            { code: "POA", name: "Po Lam" },
        ],
    },
};

document.addEventListener('DOMContentLoaded', function () {
    renderBtn();
    const btnArr = document.getElementsByClassName('line-button');

    for (let i = 0; i < btnArr.length; i++) {
        btnArr[i].addEventListener('click', function () {
            // loop #0
            const route = btnArr[i].getAttribute('data-route');
            resetBtnColor();
            this.style.backgroundColor = line[route].color;
            this.style.color = '#ffffff';
            fetchMTRData(route);
        });
    }

});

function renderBtn() {
    const btnContainer = document.getElementById('btn-container');
    for (let key in line) {
        const btn = document.createElement('button');
        btn.classList.add('line-button');
        btn.innerText = line[key].text; // line['KTL'].text >>> 觀塘線
        btn.style.color = line[key].color;
        btn.style.borderColor = line[key].color;
        btnContainer.appendChild(btn);
        btn.setAttribute('data-route', key);
    }
}

function resetBtnColor() {
    const btnArr = document.getElementsByClassName('line-button');
    for (let i = 0; i < btnArr.length; i++) {
        const route = btnArr[i].getAttribute('data-route');
        btnArr[i].style.color = line[route].color;
        btnArr[i].style.backgroundColor = '#ffffff';
    }
}

async function fetchMTRData(route) {
    let updateTime = new Date(Date.now()).toString().substring(4, 21);
    const lastUpdateDiv = document.querySelector('div.update-time');
    lastUpdateDiv.innerHTML = `最後更新時間： ${updateTime}`;

    const lineStops = line[route].sta;
    const upContainer = document.getElementById('up-line');
    const downContainer = document.getElementById('down-line');

    upContainer.innerHTML = '';
    downContainer.innerHTML = '';

    let upCardArr = [];
    let downCardArr = [];
    for (let i = 0; i < lineStops.length; i++) {
        const res = await fetch(`${api}?line=${route}&sta=${lineStops[i].code}`);
        const results = await res.json();
        const info = results['data'][`${route}-${lineStops[i].code}`];
        console.log(info);
        // UP
        if (info['UP'] && info['UP'][0]) { // undefined >>> false 
            const staInfo = info['UP'][0];
            const upCard = renderCard(route, lineStops[i], staInfo);
            upCardArr.push(upCard);
            //console.log(upCardArr);
        }
        // DOWN
        if (info['DOWN'] && info['DOWN'][0]) {
            const staInfo = info['DOWN'][0];
            const downCard = renderCard(route, lineStops[i], staInfo);
            downCardArr.push(downCard);
        }
    }
    downCardArr.reverse(); // reverse DOWN sequence

    for (let i = 0; i < upCardArr.length; i++) {
        upContainer.appendChild(upCardArr[i]);
    }

    for (let i = 0; i < downCardArr.length; i++) {
        downContainer.appendChild(downCardArr[i]);
    }
}

function renderCard(route, lineStop, staInfo) {
    // Card
    const card = document.createElement('div');
    card.className = 'station';
    card.style.backgroundColor = line[route].color;

    // Stop Name 
    const stopName = document.createElement('div');
    stopName.className = 'station-name';
    stopName.textContent = lineStop.name;
    card.appendChild(stopName);

    // Info (Wrapper)
    const cardInfo = document.createElement('div');
    cardInfo.className = 'station-info';
    card.appendChild(cardInfo);

    // Time 
    const cardTime = document.createElement('div');
    cardTime.className = 'station-next';
    cardTime.textContent = `下班列車：${staInfo.time.split(' ')[1].substring(0, 5)}`;
    cardInfo.appendChild(cardTime);

    // Platform 
    const cardPlatform = document.createElement('div');
    cardPlatform.className = 'station-platform';
    cardPlatform.textContent = `開出月台：${staInfo.plat}`;
    cardInfo.appendChild(cardPlatform);

    return card;
}