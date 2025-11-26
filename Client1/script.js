// ==================== ADDON DATA ====================
// Add your addons here - You can have up to 50+ addons!
const allAddons = [
    {
        name: "Snake Addon Pack",
        description: "Add realistic snakes to your Minecraft world with special abilities",
        image: "https://via.placeholder.com/300x200/4CAF50/ffffff?text=Snake+Pack",
        tags: ["Animals", "Mobs"],
        downloadLink: "YOUR_DOWNLOAD_LINK_1"
    },
    {
        name: "Epic Weapons Arsenal",
        description: "Powerful weapons with unique effects and abilities",
        image: "https://via.placeholder.com/300x200/2196F3/ffffff?text=Weapons",
        tags: ["Weapons", "PvP"],
        downloadLink: "YOUR_DOWNLOAD_LINK_2"
    },
    {
        name: "Custom Mobs Collection",
        description: "New challenging mobs and epic bosses to fight",
        image: "https://via.placeholder.com/300x200/FF5722/ffffff?text=Mobs",
        tags: ["Mobs", "Boss"],
        downloadLink: "YOUR_DOWNLOAD_LINK_3"
    },
    {
        name: "Advanced Tools Mod",
        description: "Enhanced tools with special mining abilities",
        image: "https://via.placeholder.com/300x200/9C27B0/ffffff?text=Tools",
        tags: ["Tools", "Mining"],
        downloadLink: "YOUR_DOWNLOAD_LINK_4"
    },
    {
        name: "Furniture Plus",
        description: "Decorate your builds with amazing furniture pieces",
        image: "https://via.placeholder.com/300x200/FF9800/ffffff?text=Furniture",
        tags: ["Decoration", "Building"],
        downloadLink: "YOUR_DOWNLOAD_LINK_5"
    },
    {
        name: "Magic & Spells System",
        description: "Cast powerful spells and enchantments in your world",
        image: "https://via.placeholder.com/300x200/00BCD4/ffffff?text=Magic",
        tags: ["Magic", "Fantasy"],
        downloadLink: "YOUR_DOWNLOAD_LINK_6"
    },
    {
        name: "Survival Plus Enhanced",
        description: "Enhanced hardcore survival experience with new challenges",
        image: "https://via.placeholder.com/300x200/E91E63/ffffff?text=Survival",
        tags: ["Survival", "Hardcore"],
        downloadLink: "YOUR_DOWNLOAD_LINK_7"
    },
    {
        name: "Dragon Riders Addon",
        description: "Tame and ride dragons across your Minecraft world",
        image: "https://via.placeholder.com/300x200/3F51B5/ffffff?text=Dragons",
        tags: ["Dragons", "Mobs"],
        downloadLink: "YOUR_DOWNLOAD_LINK_8"
    },
    {
        name: "Tech Machinery Pack",
        description: "Add industrial machines and automation to your world",
        image: "https://via.placeholder.com/300x200/607D8B/ffffff?text=Tech",
        tags: ["Tech", "Automation"],
        downloadLink: "YOUR_DOWNLOAD_LINK_9"
    },
    {
        name: "Ocean Depths Expansion",
        description: "Explore the deep ocean with new sea creatures and treasures",
        image: "https://via.placeholder.com/300x200/0097A7/ffffff?text=Ocean",
        tags: ["Ocean", "Exploration"],
        downloadLink: "YOUR_DOWNLOAD_LINK_10"
    },
    {
        name: "Nether Overhaul",
        description: "Complete nether dimension remake with new biomes",
        image: "https://via.placeholder.com/300x200/D32F2F/ffffff?text=Nether",
        tags: ["Nether", "Dimension"],
        downloadLink: "YOUR_DOWNLOAD_LINK_11"
    },
    {
        name: "End Dimension Plus",
        description: "Enhanced End dimension with new islands and bosses",
        image: "https://via.placeholder.com/300x200/512DA8/ffffff?text=End",
        tags: ["End", "Boss"],
        downloadLink: "YOUR_DOWNLOAD_LINK_12"
    },
    {
        name: "Vehicles & Transportation",
        description: "Cars, planes, and boats for fast travel",
        image: "https://via.placeholder.com/300x200/1976D2/ffffff?text=Vehicles",
        tags: ["Vehicles", "Travel"],
        downloadLink: "YOUR_DOWNLOAD_LINK_13"
    },
    {
        name: "Food & Farming Extended",
        description: "New crops, foods, and farming mechanics",
        image: "https://via.placeholder.com/300x200/388E3C/ffffff?text=Farming",
        tags: ["Farming", "Food"],
        downloadLink: "YOUR_DOWNLOAD_LINK_14"
    },
    {
        name: "Pets & Companions",
        description: "Adopt and train loyal pets with unique abilities",
        image: "https://via.placeholder.com/300x200/FBC02D/ffffff?text=Pets",
        tags: ["Pets", "Animals"],
        downloadLink: "YOUR_DOWNLOAD_LINK_15"
    },
    {
        name: "Building Blocks Mega Pack",
        description: "Thousands of new decorative building blocks",
        image: "https://via.placeholder.com/300x200/5D4037/ffffff?text=Blocks",
        tags: ["Building", "Decoration"],
        downloadLink: "YOUR_DOWNLOAD_LINK_16"
    },
    {
        name: "Armor & Cosmetics",
        description: "Stylish armor sets and cosmetic items",
        image: "https://via.placeholder.com/300x200/F57C00/ffffff?text=Armor",
        tags: ["Armor", "Cosmetics"],
        downloadLink: "YOUR_DOWNLOAD_LINK_17"
    },
    {
        name: "Dungeon Crawler",
        description: "Procedurally generated dungeons with epic loot",
        image: "https://via.placeholder.com/300x200/455A64/ffffff?text=Dungeons",
        tags: ["Dungeons", "Adventure"],
        downloadLink: "YOUR_DOWNLOAD_LINK_18"
    }
];

// ==================== PAGINATION SETTINGS ====================
const ADDONS_PER_PAGE = 15;
let currentPage = 1;
let filteredAddons = [...allAddons];

// ==================== NAVIGATION ====================
function goToAddons() {
    document.getElementById('homePage').classList.remove('active');
    document.getElementById('addonsPage').classList.add('active');
    window.scrollTo(0, 0);
    displayAddons();
}

function goToHome() {
    document.getElementById('addonsPage').classList.remove('active');
    document.getElementById('homePage').classList.add('active');
    window.scrollTo(0, 0);
    currentPage = 1;
    document.getElementById('searchInput').value = '';
    filteredAddons = [...allAddons];
}

// ==================== SEARCH FUNCTION ====================
function searchAddons() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredAddons = allAddons.filter(addon => 
        addon.name.toLowerCase().includes(searchTerm) ||
        addon.description.toLowerCase().includes(searchTerm) ||
        addon.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    currentPage = 1;
    displayAddons();
}

// ==================== DISPLAY ADDONS ====================
function displayAddons() {
    const grid = document.getElementById('addonsGrid');
    const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
    
    grid.innerHTML = '';
    
    if (filteredAddons.length === 0) {
        grid.innerHTML = '<div class="no-results">No addons found. Try a different search term!</div>';
        document.getElementById('pagination').style.display = 'none';
        document.getElementById('currentPageDisplay').textContent = '0';
        document.getElementById('totalPagesDisplay').textContent = '0';
        return;
    }
    
    document.getElementById('pagination').style.display = 'flex';
    
    const startIndex = (currentPage - 1) * ADDONS_PER_PAGE;
    const endIndex = Math.min(startIndex + ADDONS_PER_PAGE, filteredAddons.length);
    
    for (let i = startIndex; i < endIndex; i++) {
        const addon = filteredAddons[i];
        const card = createAddonCard(addon);
        grid.appendChild(card);
    }
    
    updatePagination(totalPages);
}

// ==================== CREATE ADDON CARD ====================
function createAddonCard(addon) {
    const card = document.createElement('div');
    card.className = 'addon-card';
    card.onclick = () => window.open(addon.downloadLink, '_blank');
    
    card.innerHTML = `
        <div class="addon-image">
            <img src="${addon.image}" alt="${addon.name}">
        </div>
        <div class="addon-content">
            <h3>${addon.name}</h3>
            <p>${addon.description}</p>
            <div class="addon-tags">
                ${addon.tags.map(tag => `<span class="addon-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="download-icon">⬇️</div>
    `;
    
    return card;
}

// ==================== PAGINATION FUNCTIONS ====================
function updatePagination(totalPages) {
    document.getElementById('currentPageDisplay').textContent = currentPage;
    document.getElementById('totalPagesDisplay').textContent = totalPages;
    
    const pageNumbers = document.getElementById('pageNumbers');
    pageNumbers.innerHTML = '';
    
    const maxPagesToShow = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
    
    if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }
    
    for (let i = startPage; i <= endPage; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = 'page-btn' + (i === currentPage ? ' active' : '');
        pageBtn.textContent = i;
        pageBtn.onclick = () => goToPage(i);
        pageNumbers.appendChild(pageBtn);
    }
}

function goToPage(page) {
    const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
    if (page >= 1 && page <= totalPages) {
        currentPage = page;
        displayAddons();
        window.scrollTo(0, 0);
    }
}

// ==================== PAGINATION CONTROLS (completed) ====================
function nextPage() {
    const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
    if (currentPage < totalPages) {
        currentPage++;
        displayAddons();
        window.scrollTo(0, 0);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        displayAddons();
        window.scrollTo(0, 0);
    }
}

function goToFirstPage() {
    currentPage = 1;
    displayAddons();
    window.scrollTo(0, 0);
}

function goToLastPage() {
    const totalPages = Math.ceil(filteredAddons.length / ADDONS_PER_PAGE);
    currentPage = totalPages;
    displayAddons();
    window.scrollTo(0, 0);
}

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    goToHome();
});