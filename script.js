// ==================== SECURITY CHECK ====================
const linkvertiseURL = "https://link-hub.net/1408907/57D6CaRirKtJ";
const validAuth = "dcaptain123";

// Check if user is authenticated
function isAuthenticated() {
    const authStatus = localStorage.getItem('auth_status');
    const authTimestamp = localStorage.getItem('auth_timestamp');
    
    if (!authStatus || !authTimestamp) return false;
    
    // Authentication expires after 1 second (to force redirect on refresh)
    const now = new Date().getTime();
    const timePassed = now - parseInt(authTimestamp);
    if (timePassed > 1000) { // 1 second expiration
        localStorage.removeItem('auth_status');
        localStorage.removeItem('auth_timestamp');
        return false;
    }
    
    return authStatus === 'verified';
}

// Set authentication status
function setAuthenticated(status) {
    if (status) {
        localStorage.setItem('auth_status', 'verified');
        localStorage.setItem('auth_timestamp', new Date().getTime().toString());
    } else {
        localStorage.removeItem('auth_status');
        localStorage.removeItem('auth_timestamp');
    }
}

function checkAccess() {
    const urlParams = new URLSearchParams(window.location.search);
    const auth = urlParams.get("auth");

    // Always check authentication status
    if (auth === validAuth) {
        setAuthenticated(true);
        grantAccess();
    } else if (isAuthenticated()) {
        // Only grant access if authentication hasn't expired
        grantAccess();
    } else {
        // Redirect to Linkvertise if not authenticated
        document.getElementById("securityStatus").innerText = "Redirecting to verification...";
        setTimeout(() => { 
            window.location.href = linkvertiseURL; 
        }, 2000);
    }
}

function grantAccess() {
    document.getElementById("securityStatus").innerText = "Access granted ✅";
    const container = document.querySelector('.security-container');
    
    // Add fade-out animation
    container.classList.add('fade-out');
    
    setTimeout(() => {
        document.getElementById("securityCheck").style.display = "none";
        document.getElementById("mainContent").classList.remove("hidden");
        document.getElementById("homePage").classList.add("active");
        // Clean URL without affecting authentication
        history.replaceState(null, "", window.location.pathname);
        
        // Initialize content
        displayNewsAddons();
        displayNewsResources();
        displayNewsClients();
        displayNewsApks();
    }, 1500);
}

// Clear authentication when user explicitly logs out
function logout() {
    setAuthenticated(false);
    window.location.href = linkvertiseURL;
}

// Add event listeners for page visibility and focus changes
document.addEventListener("visibilitychange", function() {
    if (!document.hidden) {
        // Page becomes visible again (tab focus)
        checkAccess();
    }
});

window.addEventListener("focus", function() {
    // Window regains focus
    checkAccess();
});

// Clear authentication on page refresh/reload
window.addEventListener('beforeunload', function() {
    setAuthenticated(false);
});

// Initialize security check when page loads
window.addEventListener("DOMContentLoaded", checkAccess);

// ==================== DATA ====================
const allAddons = [
    {
        name: "Snake Addon Pack",
        description: "Adds realistic snakes with animations and AI behavior.",
        image: "https://i.imgur.com/YHoAhki.png",
        tags: ["Animals", "Mobs"],
        downloadLink: "#"
    },
    {
        name: "Epic Weapons Arsenal",
        description: "Powerful weapons with custom models.",
        image: "https://i.imgur.com/q0kFxLH.jpeg",
        tags: ["Weapons", "PvP"],
        downloadLink: "#"
    },
    {
        name: "Dragon Mount Plus",
        description: "Ride dragons with custom animations and abilities.",
        image: "https://i.imgur.com/SBU16HK.jpeg",
        tags: ["Mounts", "Animation"],
        downloadLink: "#"
    },
    {
        name: "Enhanced Tools Pack",
        description: "Better tools with special abilities.",
        image: "https://i.imgur.com/VniYVtv.png",
        tags: ["Tools"],
        downloadLink: "#"
    },
    {
        name: "Hacked Client X",
        description: "Advanced features for experienced players.",
        image: "https://i.imgur.com/7wpie0Y.jpeg",
        tags: ["Advanced"],
        downloadLink: "#"
    }
];

const allResources = [
    {
        name: "HD Textures Pack",
        description: "High-definition textures for a better look.",
        image: "https://i.imgur.com/SBU16HK.jpeg",
        tags: ["Textures", "HD"],
        downloadLink: "#"
    },
    {
        name: "PvP Resource Pack",
        description: "Optimized textures for PvP gameplay.",
        image: "https://i.imgur.com/q0kFxLH.jpeg",
        tags: ["PvP", "Performance"],
        downloadLink: "#"
    },
    {
        name: "Fantasy Theme Pack",
        description: "Medieval fantasy themed textures.",
        image: "https://i.imgur.com/YHoAhki.png",
        tags: ["Fantasy", "Theme"],
        downloadLink: "#"
    }
];

const hackClients = [
    {
        name: "Toolbox Pro",
        description: "Advanced Minecraft client with many features.",
        image: "https://i.imgur.com/7wpie0Y.jpeg",
        tags: ["Client", "Tools"],
        downloadLink: "#"
    },
    {
        name: "Hacked Client X",
        description: "Feature-rich client for advanced users.",
        image: "https://i.imgur.com/OlYW3ka.png",
        tags: ["Advanced", "Hacks"],
        downloadLink: "#"
    },
    {
        name: "Mod Menu Plus",
        description: "Extensive mod menu with custom features.",
        image: "https://i.imgur.com/OlYW3ka.png",
        tags: ["Mods", "Menu"],
        downloadLink: "#"
    }
];

const apks = [
    {
        name: "Minecraft v1.21",
        description: "Latest stable build with new features.",
        image: "https://i.imgur.com/MboC4Fc.png",
        tags: ["Stable"],
        downloadLink: "#"
    },
    {
        name: "Minecraft Modded",
        description: "Performance optimized version.",
        image: "https://i.imgur.com/MboC4Fc.png",
        tags: ["Modded"],
        downloadLink: "#"
    }
];

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

// ==================== DISPLAY FUNCTIONS ====================
let currentPage = 1;
let resourcePageNum = 1;
const ITEMS_PER_PAGE = 9;
let filteredAddons = [...allAddons];
let filteredResources = [...allResources];

function searchAddons() {
    const term = document.getElementById('searchInput').value.toLowerCase();
    filteredAddons = allAddons.filter(addon => 
        addon.name.toLowerCase().includes(term) || 
        addon.description.toLowerCase().includes(term) || 
        addon.tags.some(tag => tag.toLowerCase().includes(term))
    );
    currentPage = 1;
    displayAddons();
}

function searchResources() {
    const term = document.getElementById('resourceSearchInput').value.toLowerCase();
    filteredResources = allResources.filter(resource => 
        resource.name.toLowerCase().includes(term) || 
        resource.description.toLowerCase().includes(term) || 
        resource.tags.some(tag => tag.toLowerCase().includes(term))
    );
    resourcePageNum = 1;
    displayResources();
}

function displayAddons() {
    const grid = document.getElementById('addonsGrid');
    const totalPages = Math.ceil(filteredAddons.length / ITEMS_PER_PAGE);
    
    grid.innerHTML = '';
    if (filteredAddons.length === 0) {
        grid.innerHTML = '<div class="no-results">No addons found.</div>';
        document.getElementById('pagination').style.display = 'none';
        return;
    }

    document.getElementById('pagination').style.display = 'flex';
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = Math.min(start + ITEMS_PER_PAGE, filteredAddons.length);
    
    for (let i = start; i < end; i++) {
        grid.appendChild(createCard(filteredAddons[i]));
    }
    
    updatePagination(totalPages, 'addons');
}

function displayResources() {
    const grid = document.getElementById('resourceGrid');
    const totalPages = Math.ceil(filteredResources.length / ITEMS_PER_PAGE);
    
    grid.innerHTML = '';
    if (filteredResources.length === 0) {
        grid.innerHTML = '<div class="no-results">No resources found.</div>';
        document.getElementById('resourcePagination').style.display = 'none';
        return;
    }

    document.getElementById('resourcePagination').style.display = 'flex';
    const start = (resourcePageNum - 1) * ITEMS_PER_PAGE;
    const end = Math.min(start + ITEMS_PER_PAGE, filteredResources.length);
    
    for (let i = start; i < end; i++) {
        grid.appendChild(createCard(filteredResources[i]));
    }
    
    updatePagination(totalPages, 'resources');
}

function displayNewsAddons() {
    const grid = document.getElementById('newAddonsGrid');
    grid.innerHTML = '';
    allAddons.slice(0, 3).forEach(addon => {
        grid.appendChild(createNewsCard(addon));
    });
}

function displayNewsResources() {
    const grid = document.getElementById('newResourcesGrid');
    grid.innerHTML = '';
    allResources.slice(0, 3).forEach(resource => {
        grid.appendChild(createNewsCard(resource));
    });
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

// ==================== CARD CREATION ====================
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'addon-card';
    card.onclick = () => window.open(item.downloadLink, '_blank');
    
    card.innerHTML = `
        <div class="addon-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="addon-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="addon-tags">
                ${item.tags.map(tag => `<span class="addon-tag">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="download-icon">⬇️</div>
    `;
    
    return card;
}

function createNewsCard(item) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => window.open(item.downloadLink, '_blank');
    
    card.innerHTML = `
        <div class="news-card-image">
            <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="news-card-content">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <div class="news-card-tags">
                ${item.tags.map(tag => `<span class="news-card-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `;
    
    return card;
}

// ==================== PAGINATION ====================
function updatePagination(totalPages, type) {
    const isAddons = type === 'addons';
    const current = isAddons ? currentPage : resourcePageNum;
    const pageContainer = document.getElementById(isAddons ? 'pageNumbers' : 'resourcePageNumbers');
    const currentDisplay = document.getElementById(isAddons ? 'currentPageDisplay' : 'resourceCurrentDisplay');
    const totalDisplay = document.getElementById(isAddons ? 'totalPagesDisplay' : 'resourceTotalDisplay');
    
    currentDisplay.textContent = current;
    totalDisplay.textContent = totalPages;
    
    pageContainer.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `page-btn${i === current ? ' active' : ''}`;
        btn.textContent = i;
        btn.onclick = () => {
            if (isAddons) {
                currentPage = i;
                displayAddons();
            } else {
                resourcePageNum = i;
                displayResources();
            }
            window.scrollTo(0, 0);
        };
        pageContainer.appendChild(btn);
    }
}

function previousPage(type) {
    if (type === 'addons' && currentPage > 1) {
        currentPage--;
        displayAddons();
    } else if (type === 'resources' && resourcePageNum > 1) {
        resourcePageNum--;
        displayResources();
    }
    window.scrollTo(0, 0);
}

function nextPage(type) {
    const totalPages = Math.ceil(
        (type === 'addons' ? filteredAddons.length : filteredResources.length) / ITEMS_PER_PAGE
    );
    
    if (type === 'addons' && currentPage < totalPages) {
        currentPage++;
        displayAddons();
    } else if (type === 'resources' && resourcePageNum < totalPages) {
        resourcePageNum++;
        displayResources();
    }
    window.scrollTo(0, 0);
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
    const totalPages = Math.ceil(
        (type === 'addons' ? filteredAddons.length : filteredResources.length) / ITEMS_PER_PAGE
    );
    
    if (type === 'addons') {
        currentPage = totalPages;
        displayAddons();
    } else {
        resourcePageNum = totalPages;
        displayResources();
    }
    window.scrollTo(0, 0);
}

// Initialize everything when the page loads
window.addEventListener("DOMContentLoaded", function() {
    checkAccess();
    displayNewsAddons();
    displayNewsResources();
    displayNewsClients();
    displayNewsApks();
});
