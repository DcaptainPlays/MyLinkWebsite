// ==================== PAGE NAVIGATION ====================
function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }

    if (pageId === 'addonsPage') displayAddons();
    if (pageId === 'resourcePage') displayResources();
}

function goToHome() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
    window.scrollTo(0, 0);
}

// ==================== ADDON DATA ====================
const allAddons = [
    { name: "Snake Addon Pack", description: "Adds realistic snakes with animations and AI behavior to Minecraft.", image: "https://i.imgur.com/YHoAhki.png", tags: ["Animals", "Mobs"], downloadLink: "https://fsymbols.com/generators/tarty/" },
    { name: "Epic Weapons Arsenal", description: "A collection of unique and powerful weapons with custom models.", image: "https://i.imgur.com/q0kFxLH.jpeg", tags: ["Weapons", "PvP"], downloadLink: "https://example.com/weapons-addon" },
    { name: "Magic & Spells System", description: "Cast spells, summon fireballs, and master arcane power.", image: "https://i.imgur.com/MboC4Fc.png", tags: ["Magic", "Fantasy"], downloadLink: "https://example.com/magic-addon" },
    { name: "Vehicles Expansion", description: "Adds cars, bikes, and planes with realistic physics.", image: "https://i.imgur.com/OlYW3ka.png", tags: ["Vehicles"], downloadLink: "https://example.com/vehicles-addon" },
    { name: "Tools Overhaul", description: "Enhances all Minecraft tools with new textures and effects.", image: "https://i.imgur.com/8H0OAvB.png", tags: ["Tools", "Utility"], downloadLink: "https://example.com/tools-addon" },
    { name: "Mob Enhancer", description: "Makes mobs smarter and more challenging in battles.", image: "https://i.imgur.com/PK4AHoX.jpeg", tags: ["AI", "Survival"], downloadLink: "https://example.com/mobs-addon" },
    { name: "Advanced Farming", description: "Grow custom crops, plants, and new food recipes.", image: "https://i.imgur.com/zGfJMuH.jpeg", tags: ["Farming", "Survival"], downloadLink: "https://example.com/farming-addon" },
    { name: "Weather & Seasons", description: "Dynamic weather, storms, and changing seasons system.", image: "https://i.imgur.com/TKz9Ryf.jpeg", tags: ["Environment", "Survival"], downloadLink: "https://example.com/weather-addon" },
    { name: "Ocean Expansion", description: "Adds new marine life, corals, and underwater weapons.", image: "https://i.imgur.com/dXb2E1p.jpeg", tags: ["Ocean", "Exploration"], downloadLink: "https://example.com/ocean-addon" },
    { name: "Furniture & Decor", description: "Decorate your house with stylish furniture and props.", image: "https://i.imgur.com/7PfrhSf.jpeg", tags: ["Furniture", "Building"], downloadLink: "https://example.com/furniture-addon" },
    { name: "Pets & Companions", description: "Adds tameable pets with unique abilities and upgrades.", image: "https://i.imgur.com/ZtT8u3k.jpeg", tags: ["Pets", "Adventure"], downloadLink: "https://example.com/pets-addon" },
    { name: "Mythical Creatures", description: "Summon dragons, griffins, and mythical bosses.", image: "https://i.imgur.com/aXj7Mpg.jpeg", tags: ["Fantasy", "Bosses"], downloadLink: "https://example.com/mythical-addon" },
    { name: "Combat Rework", description: "New fighting system with combo moves and skills.", image: "https://i.imgur.com/AmPvK8u.jpeg", tags: ["Combat", "PvP"], downloadLink: "https://example.com/combat-addon" },
    { name: "Mining Machines", description: "Automatic mining tools and machines for resource gathering.", image: "https://i.imgur.com/qOZb1Qy.jpeg", tags: ["Mining", "Automation"], downloadLink: "https://example.com/mining-addon" },
    { name: "Better Villagers", description: "Adds new villager jobs, trading items, and animations.", image: "https://i.imgur.com/zEX5gHT.jpeg", tags: ["Villagers", "Economy"], downloadLink: "https://example.com/villagers-addon" },
    { name: "Dungeon Expansion", description: "Adds randomly generated dungeons filled with loot and danger.", image: "https://i.imgur.com/SrRg0on.jpeg", tags: ["Adventure", "Structures"], downloadLink: "https://example.com/dungeon-addon" },
    { name: "Sky Islands", description: "Generates floating sky islands with unique biomes.", image: "https://i.imgur.com/M9LkTKr.jpeg", tags: ["WorldGen", "Exploration"], downloadLink: "https://example.com/sky-addon" },
    { name: "Redstone Enhancer", description: "Adds more redstone gadgets, traps, and machines.", image: "https://i.imgur.com/kSu1y1K.jpeg", tags: ["Redstone", "Utility"], downloadLink: "https://example.com/redstone-addon" },
    { name: "Mob Battles", description: "Spawn mobs and watch them fight each other in arenas.", image: "https://i.imgur.com/kLh4VZK.jpeg", tags: ["PvP", "Fun"], downloadLink: "https://example.com/mob-battle-addon" },
    { name: "Survival Enhancements", description: "Harder survival mechanics, thirst, and temperature system.", image: "https://i.imgur.com/AGgDk7y.jpeg", tags: ["Survival", "Realism"], downloadLink: "https://example.com/survival-addon" },
];

const allResources = [
    { name: "HD Textures Pack", description: "High-resolution blocks and item visuals.", image: "https://i.imgur.com/YHoAhki.png", tags: ["HD", "Visuals"], downloadLink: "#" },
    { name: "Realistic Shaders", description: "Adds realistic lighting and shadows to Minecraft.", image: "https://i.imgur.com/q0kFxLH.jpeg", tags: ["Shaders"], downloadLink: "#" },
    { name: "Faithful 64x", description: "Improved vanilla textures with higher resolution.", image: "https://i.imgur.com/MboC4Fc.png", tags: ["Faithful"], downloadLink: "#" },
    { name: "Cartoon Style", description: "Bright, smooth, and colorful cartoon-like textures.", image: "https://i.imgur.com/OlYW3ka.png", tags: ["Cartoon"], downloadLink: "#" },
    { name: "Dark Mode UI", description: "Replaces UI with sleek dark theme.", image: "https://i.imgur.com/8H0OAvB.png", tags: ["UI"], downloadLink: "#" },
];

// ==================== PAGINATION SETTINGS ====================
const ADDONS_PER_PAGE = 10;
let currentPage = 1;
let filteredAddons = [...allAddons];

const RESOURCES_PER_PAGE = 10;
let resourcePageNum = 1;
let filteredResources = [...allResources];

// ==================== SEARCH FUNCTIONS ====================
function searchAddons() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    filteredAddons = allAddons.filter(a =>
        a.name.toLowerCase().includes(searchTerm) ||
        a.description.toLowerCase().includes(searchTerm) ||
        a.tags.some(t => t.toLowerCase().includes(searchTerm))
    );
    currentPage = 1;
    displayAddons();
}

function searchResources() {
    const searchTerm = document.getElementById('resourceSearchInput').value.toLowerCase();
    filteredResources = allResources.filter(a =>
        a.name.toLowerCase().includes(searchTerm) ||
        a.description.toLowerCase().includes(searchTerm) ||
        a.tags.some(t => t.toLowerCase().includes(searchTerm))
    );
    resourcePageNum = 1;
    displayResources();
}

// ==================== DISPLAY ADDONS ====================
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
    const startIndex = (currentPage - 1) * ADDONS_PER_PAGE;
    const endIndex = Math.min(startIndex + ADDONS_PER_PAGE, filteredAddons.length);

    for (let i = startIndex; i < endIndex; i++) grid.appendChild(createAddonCard(filteredAddons[i]));
    updatePagination(totalPages, 'addons');
}

// ==================== DISPLAY RESOURCES ====================
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
    const startIndex = (resourcePageNum - 1) * RESOURCES_PER_PAGE;
    const endIndex = Math.min(startIndex + RESOURCES_PER_PAGE, filteredResources.length);

    for (let i = startIndex; i < endIndex; i++) grid.appendChild(createAddonCard(filteredResources[i]));
    updatePagination(totalPages, 'resources');
}

// ==================== CREATE ADDON CARD ====================
function createAddonCard(addon) {
    const card = document.createElement('div');
    card.className = 'addon-card';
    card.onclick = () => window.open(addon.downloadLink, '_blank');
    card.innerHTML = `
        <div class="addon-image"><img src="${addon.image}" alt="${addon.name}"></div>
        <div class="addon-content"><h3>${addon.name}</h3><p>${addon.description}</p>
        <div class="addon-tags">${addon.tags.map(tag => `<span class="addon-tag">${tag}</span>`).join('')}</div></div>
        <div class="download-icon">⬇️</div>`;
    return card;
}

// ==================== PAGINATION HANDLER ====================
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

// ==================== PAGINATION NAVIGATION ====================
function previousPage(type) {
    if (type === 'addons') {
        if (currentPage > 1) {
            currentPage--;
            displayAddons();
            window.scrollTo(0, 0);
        }
    } else {
        if (resourcePageNum > 1) {
            resourcePageNum--;
            displayResources();
            window.scrollTo(0, 0);
        }
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

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    goToHome();
});
