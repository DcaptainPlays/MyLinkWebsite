// ==================== SECURITY CHECK ====================
const linkvertiseURL = "https://link-hub.net/1408907/57D6CaRirKtJ";
const validAuth = "dcaptain123";

function checkAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const auth = urlParams.get("auth");

    if (auth === validAuth) {
        document.getElementById("securityStatus").innerText = "Access granted ✅";
        
        setTimeout(() => {
            document.getElementById("securityPage").classList.remove("active");
            document.getElementById("homePage").classList.add("active");
            history.replaceState(null, "", window.location.pathname);
            displayNewsAddons();
            displayNewsResources();
            displayNewsClients();
            displayNewsApks();
        }, 1500);

        window.addEventListener("beforeunload", () => sessionStorage.clear());
    } else {
        document.getElementById("securityStatus").innerText = "Redirecting to verification...";
        setTimeout(() => { window.location.href = linkvertiseURL; }, 2000);
    }
}

window.addEventListener("DOMContentLoaded", checkAccess);

// ==================== PAGE NAVIGATION ====================
function goToPage(pageId) {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
    if (pageId === 'addonsPage') displayAddons();
    if (pageId === 'resourcePage') displayResources();
}

function goToHome() {
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
    window.scrollTo(0, 0);
}

// ==================== DATA (Add more items here) ====================
const allAddons = [
    { name: "Snake Addon Pack", description: "Adds realistic snakes with animations and AI behavior.", image: "https://i.imgur.com/YHoAhki.png", tags: ["Animals", "Mobs"], downloadLink: "#" },
    { name: "Epic Weapons Arsenal", description: "Powerful weapons with custom models.", image: "https://i.imgur.com/q0kFxLH.jpeg", tags: ["Weapons", "PvP"], downloadLink: "#" },
];

const allResources = [
    { name: "HD Textures Pack", description: "High-resolution blocks and item visuals.", image: "https://i.imgur.com/YHoAhki.png", tags: ["HD", "Visuals"], downloadLink: "#" },
    { name: "Realistic Shaders", description: "Realistic lighting and shadows.", image: "https://i.imgur.com/q0kFxLH.jpeg", tags: ["Shaders"], downloadLink: "#" },
];

const hackClients = [
    { name: "Toolbox Pro", description: "Feature-rich client with advanced tools.", image: "https://i.imgur.com/OlYW3ka.png", tags: ["Tools"], downloadLink: "#" },
    { name: "Hacked Client X", description: "Advanced features for experienced players.", image: "https://i.imgur.com/7wpie0Y.jpeg", tags: ["Advanced"], downloadLink: "#" },
];

const apks = [
    { name: "Minecraft v1.21", description: "Latest stable build with new features.", image: "https://i.imgur.com/MboC4Fc.png", tags: ["Stable"], downloadLink: "#" },
    { name: "Minecraft Modded", description: "Performance optimized version.", image: "https://i.imgur.com/MboC4Fc.png", tags: ["Modded"], downloadLink: "#" },
];

// ==================== PAGINATION ====================
const ADDONS_PER_PAGE = 10;
const RESOURCES_PER_PAGE = 10;
let currentPage = 1;
let resourcePageNum = 1;
let filteredAddons = [...allAddons];
let filteredResources = [...allResources];

// ==================== SEARCH ====================
function searchAddons() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    filteredAddons = allAddons.filter(a => 
        a.name.toLowerCase().includes(term) || 
        a.description.toLowerCase().includes(term) || 
        a.tags.some(t => t.toLowerCase().includes(term))
    );
    currentPage = 1;
    displayAddons();
}

function searchResources() {
    const term = document.getElementById('resourceSearchInput').value.toLowerCase();
    filteredResources = allResources.filter(a => 
        a.name.toLowerCase().includes(term) || 
        a.description.toLowerCase().includes(term) || 
        a.tags.some(t => t.toLowerCase().includes(term))
    );
    resourcePageNum = 1;
    displayResources();
}

// ==================== DISPLAY ====================
function displayAddons() {
    const grid = document.getElementById('addonsGrid');
    const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
    grid.innerHTML = '';
    if (filteredAddons.length === 0) {
        grid.innerHTML = '<div class="no-results">No addons found.</div>';
        document.getElementById('pagination').style.display = 'none';
        return;
    }
    document.getElementById('pagination').style.display = 'flex';
    const start = (currentPage - 1) * ADDONS_PER_PAGE;
    const end = Math.min(start + ADDONS_PER_PAGE, filteredAddons.length);
    for (let i = start; i < end; i++) grid.appendChild(createAddonCard(filteredAddons[i]));
    updatePagination(totalPages, 'addons');
}

function displayResources() {
    const grid = document.getElementById('resourceGrid');
    const totalPages = Math.ceil(filteredResources.length / RESOURCES_PER_PAGE);
    grid.innerHTML = '';
    if (filteredResources.length === 0) {
        grid.innerHTML = '<div class="no-results">No resource packs found.</div>';
        document.getElementById('resourcePagination').style.display = 'none';
        return;
    }
    document.getElementById('resourcePagination').style.display = 'flex';
    const start = (resourcePageNum - 1) * RESOURCES_PER_PAGE;
    const end = Math.min(start + RESOURCES_PER_PAGE, filteredResources.length);
    for (let i = start; i < end; i++) grid.appendChild(createAddonCard(filteredResources[i]));
    updatePagination(totalPages, 'resources');
}

function displayNewsAddons() {
    const grid = document.getElementById('newAddonsGrid');
    grid.innerHTML = '';
    for (let i = 0; i < Math.min(3, allAddons.length); i++) {
        grid.appendChild(createNewsCard(allAddons[i]));
    }
}

function displayNewsResources() {
    const grid = document.getElementById('newResourcesGrid');
    grid.innerHTML = '';
    for (let i = 0; i < Math.min(3, allResources.length); i++) {
        grid.appendChild(createNewsCard(allResources[i]));
    }
}

function displayNewsClients() {
    const grid = document.getElementById('newClientsGrid');
    grid.innerHTML = '';
    for (let i = 0; i < Math.min(3, hackClients.length); i++) {
        grid.appendChild(createNewsCard(hackClients[i]));
    }
}

function displayNewsApks() {
    const grid = document.getElementById('newApksGrid');
    grid.innerHTML = '';
    for (let i = 0; i < Math.min(3, apks.length); i++) {
        grid.appendChild(createNewsCard(apks[i]));
    }
}

// ==================== CREATE CARDS ====================
function createAddonCard(addon) {
    const card = document.createElement('div');
    card.className = 'addon-card';
    card.onclick = () => window.open(addon.downloadLink, '_blank');
    card.innerHTML = `
        <div class="addon-image"><img src="${addon.image}" alt="${addon.name}"></div>
        <div class="addon-content">
            <h3>${addon.name}</h3>
            <p>${addon.description}</p>
            <div class="addon-tags">${addon.tags.map(tag => `<span class="addon-tag">${tag}</span>`).join('')}</div>
        </div>
        <div class="download-icon">⬇️</div>`;
    return card;
}

function createNewsCard(item) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => window.open(item.downloadLink, '_blank');
    card.innerHTML = `
        <div class="news-card-image"><img src="${item.image}" alt="${item.name}"></div>
        <div class="news-card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="news-card-tags">${item.tags.map(tag => `<span class="news-card-tag">${tag}</span>`).join('')}</div>
        </div>`;
    return card;
}

// ==================== PAGINATION ====================
function updatePagination(totalPages, type) {
    const isAddon = type === 'addons';
    const current = isAddon ? currentPage : resourcePageNum;
    const pageContainer = document.getElementById(isAddon ? 'pageNumbers' : 'resourcePageNumbers');
    const currentDisplay = document.getElementById(isAddon ? 'currentPageDisplay' : 'resourceCurrentDisplay');
    const totalDisplay = document.getElementById(isAddon ? 'totalPagesDisplay' : 'resourceTotalDisplay');
    currentDisplay.textContent = current;
    totalDisplay.textContent = totalPages;
    pageContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = 'page-btn' + (i === current ? ' active' : '');
        btn.textContent = i;
        btn.onclick = () => {
            if (isAddon) { currentPage = i; displayAddons(); }
            else { resourcePageNum = i; displayResources(); }
            window.scrollTo(0, 0);
        };
        pageContainer.appendChild(btn);
    }
}

function previousPage(type) {
    if (type === 'addons' && currentPage > 1) {
        currentPage--;
        displayAddons();
        window.scrollTo(0, 0);
    } else if (type === 'resources' && resourcePageNum > 1) {
        resourcePageNum--;
        displayResources();
        window.scrollTo(0, 0);
    }
}

function nextPage(type) {
    if (type === 'addons') {
        const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
        if (currentPage < totalPages) {
            currentPage++;
            displayAddons();
            window.scrollTo(0, 0);
        }
    } else {
        const totalPages = Math.ceil(filteredResources.length / RESOURCES_PER_PAGE);
        if (resourcePageNum < totalPages) {
            resourcePageNum++;
            displayResources();
            window.scrollTo(0, 0);
        }
    }
}

function goToFirstPage(type) {
    if (type === 'addons') {
        currentPage = 1;
        displayAddons();
    } else {
        resourcePageNum = 1;
        displayResources();
    }
    window.scrollTo(0, 0);
}

function goToLastPage(type) {
    if (type === 'addons') {
        const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
        currentPage = totalPages;
        displayAddons();
    } else {
        const totalPages = Math.ceil(filteredResources.length / RESOURCES_PER_PAGE);
        resourcePageNum = totalPages;
        displayResources();
    }
    window.scrollTo(0, 0);
}
