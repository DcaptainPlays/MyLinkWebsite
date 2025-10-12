// ==================== SOUND EFFECTS ==================== 
function playClickSound() {
    const audio = new Audio('https://DcaptainPlays.github.io/MyLinkWebsite/sounds/click.mp3');
    audio.volume = 0.5;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

function playSuccessSound() {
    const audio = new Audio('https://DcaptainPlays.github.io/MyLinkWebsite/sounds/successfullaccess.mp3');
    audio.volume = 0.6;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

function playDeniedSound() {
    const audio = new Audio('https://DcaptainPlays.github.io/MyLinkWebsite/sounds/break.mp3');
    audio.volume = 0.6;
    audio.play().catch(e => console.log('Audio play failed:', e));
}

// ==================== SECURITY CHECK ==================== 
const linkvertiseURL = "https://link-hub.net/1408907/57D6CaRirKtJ";
const validAuth = "dcaptain123";

// Check if user is authenticated
function isAuthenticated() {
    const authStatus = localStorage.getItem('auth_status');
    const authTimestamp = localStorage.getItem('auth_timestamp');
    
    if (!authStatus || !authTimestamp) return false;
    
    // Authentication expires after 10 minutes
    const now = new Date().getTime();
    const timePassed = now - parseInt(authTimestamp);
    if (timePassed > 600000) { // 10 min expiration
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
        document.getElementById("securityStatus").innerText = "Access Granted! Welcome to DcaptainPlays Hub! ✅";
        document.getElementById("securityStatus").style.color = "#AAFFAA";
        playSuccessSound();
        setAuthenticated(true);
        setTimeout(() => { 
            grantAccess(); 
        }, 5000); // 5 second delay
    } else if (isAuthenticated()) {
        document.getElementById("securityStatus").innerText = "Welcome Back to DcaptainPlays Hub! ✅";
        document.getElementById("securityStatus").style.color = "#AAFFAA";
        playSuccessSound();
        setTimeout(() => { 
            grantAccess(); 
        }, 5000); // 5 second delay
    } else {
        document.getElementById("securityStatus").innerText = "Access Denied ❌";
        document.getElementById("securityStatus").style.color = "#FFAAAA";
        playDeniedSound();
        setTimeout(() => { 
            document.getElementById("securityStatus").innerText = "You need to verify through Linkvertise...";
            document.getElementById("securityStatus").style.color = "#FFCCAA";
        }, 3000);
        setTimeout(() => { 
            window.location.href = linkvertiseURL; 
        }, 5000); // 5 second delay
    }
}

function grantAccess() {
    const container = document.querySelector('.security-container');
    
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
        
        // Initialize history state for back button handling
        initializeBackButtonHandler();
    }, 1500);
}

// Clear authentication when user explicitly logs out
function logout() {
    setAuthenticated(false);
    window.location.href = linkvertiseURL;
}

// Check access only once on load
document.addEventListener("visibilitychange", function() {
    if (!document.hidden && !isAuthenticated()) {
        checkAccess();
    }
});

window.addEventListener("focus", function() {
    if (!isAuthenticated()) checkAccess();
});

// Initialize security check when page loads
window.addEventListener("DOMContentLoaded", checkAccess);

// ==================== BACK BUTTON HANDLER ====================
let isOnHomePage = true;
let homePageScrollAttempts = 0;

function initializeBackButtonHandler() {
    // Push initial state
    history.pushState({ page: 'home', scrolled: false }, '', '');
    
    window.addEventListener('popstate', handleBackButton);
}

function handleBackButton(event) {
    const activePage = document.querySelector('.page.active');
    const activePageId = activePage ? activePage.id : 'homePage';
    
    // If we're on the home page
    if (activePageId === 'homePage') {
        // Check if we're already at the top
        if (window.scrollY === 0) {
            // User pressed back again while at top, redirect to Linkvertise
            homePageScrollAttempts++;
            if (homePageScrollAttempts >= 1) {
                setAuthenticated(false);
                window.location.href = linkvertiseURL;
                return;
            }
        } else {
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            homePageScrollAttempts = 0;
            // Push state again so user can press back one more time to exit
            history.pushState({ page: 'home', scrolled: true }, '', '');
        }
    } else {
        // We're on a sub-page, navigate back to appropriate page
        navigateBackFromSubPage(activePageId);
        homePageScrollAttempts = 0; // Reset counter when leaving home
    }
}

function navigateBackFromSubPage(currentPageId) {
    // Determine which page to go back to
    const parentPages = {
        'aboutPage': 'homePage',
        'socialsPage': 'homePage',
        'downloadsPage': 'homePage',
        'addonsPage': 'downloadsPage',
        'resourcePage': 'downloadsPage',
        'apkPage': 'downloadsPage',
        'hackClientPage': 'downloadsPage'
    };
    
    const targetPage = parentPages[currentPageId] || 'homePage';
    
    if (targetPage === 'homePage') {
        goToHome();
    } else {
        goToPage(targetPage);
    }
}

// ==================== DATA ====================
const allAddons = [
    {
        id: "snake-addon-pack",
        name: "Snake Addon Pack",
        description: "Adds realistic snakes with animations and AI behavior.",
        image: "https://i.imgur.com/YHoAhki.png",
        tags: ["Animals", "Mobs"],
        downloadLink: "#"
    },
    {
        id: "epic-weapons",
        name: "Epic Weapons Arsenal",
        description: "Powerful weapons with custom models.",
        image: "https://i.imgur.com/q0kFxLH.jpeg",
        tags: ["Weapons", "PvP"],
        downloadLink: "#"
    },
    {
        id: "dragon-mount-plus",
        name: "Dragon Mount Plus",
        description: "Ride dragons with custom animations and abilities.",
        image: "https://i.imgur.com/SBU16HK.jpeg",
        tags: ["Mounts", "Animation"],
        downloadLink: "#"
    },
    {
        id: "enhanced-tools",
        name: "Enhanced Tools Pack",
        description: "Better tools with special abilities.",
        image: "https://i.imgur.com/VniYVtv.png",
        tags: ["Tools"],
        downloadLink: "#"
    },
    {
        id: "hacked-client-x",
        name: "Hacked Client X",
        description: "Advanced features for experienced players.",
        image: "https://i.imgur.com/7wpie0Y.jpeg",
        tags: ["Advanced"],
        downloadLink: "#"
    }
];

const allResources = [
    {
        id: "hd-textures",
        name: "HD Textures Pack",
        description: "High-definition textures for a better look.",
        image: "https://i.imgur.com/SBU16HK.jpeg",
        tags: ["Textures", "HD"],
        downloadLink: "#"
    },
    {
        id: "pvp-pack",
        name: "PvP Resource Pack",
        description: "Optimized textures for PvP gameplay.",
        image: "https://i.imgur.com/q0kFxLH.jpeg",
        tags: ["PvP", "Performance"],
        downloadLink: "#"
    },
    {
        id: "fantasy-theme",
        name: "Fantasy Theme Pack",
        description: "Medieval fantasy themed textures.",
        image: "https://i.imgur.com/YHoAhki.png",
        tags: ["Fantasy", "Theme"],
        downloadLink: "#"
    }
];

const hackClients = [
    {
        id: "toolbox-pro",
        name: "Toolbox Pro",
        description: "Advanced Minecraft client with many features.",
        image: "https://i.imgur.com/7wpie0Y.jpeg",
        tags: ["Client", "Tools"],
        downloadLink: "#"
    },
    {
        id: "hacked-client-x",
        name: "Hacked Client X",
        description: "Feature-rich client for advanced users.",
        image: "https://i.imgur.com/OlYW3ka.png",
        tags: ["Advanced", "Hacks"],
        downloadLink: "#"
    },
    {
        id: "mod-menu-plus",
        name: "Mod Menu Plus",
        description: "Extensive mod menu with custom features.",
        image: "https://i.imgur.com/OlYW3ka.png",
        tags: ["Mods", "Menu"],
        downloadLink: "#"
    }
];

const apks = [
    {
        id: "minecraft-v121",
        name: "Minecraft v1.21",
        description: "Latest stable build with new features.",
        image: "https://i.imgur.com/MboC4Fc.png",
        tags: ["Stable"],
        downloadLink: "#"
    },
    {
        id: "mc-modded",
        name: "Minecraft Modded",
        description: "Performance optimized version.",
        image: "https://i.imgur.com/MboC4Fc.png",
        tags: ["Modded"],
        downloadLink: "#"
    }
];

// ==================== PAGE NAVIGATION ====================
function goToPage(pageId) {
    playClickSound();
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    const target = document.getElementById(pageId);
    if (target) {
        target.classList.add('active');
        window.scrollTo(0, 0);
    }
    
    // Update home page flag
    isOnHomePage = (pageId === 'homePage');
    homePageScrollAttempts = 0; // Reset scroll attempts
    
    // Push new state to history
    history.pushState({ page: pageId }, '', '');
    
    if (pageId === 'addonsPage') displayAddons();
    if (pageId === 'resourcePage') displayResources();
}

function goToHome() {
    playClickSound();
    document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
    document.getElementById('homePage').classList.add('active');
    window.scrollTo(0, 0);
    
    isOnHomePage = true;
    homePageScrollAttempts = 0;
    
    // Push new state to history
    history.pushState({ page: 'home' }, '', '');
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

// News display functions
function displayNewsAddons() {
    const grid = document.getElementById('newAddonsGrid');
    grid.innerHTML = '';
    allAddons.slice(0, 3).forEach(addon => {
        grid.appendChild(createNewsCard(addon, 'addon'));
    });
}

function displayNewsResources() {
    const grid = document.getElementById('newResourcesGrid');
    grid.innerHTML = '';
    allResources.slice(0, 3).forEach(resource => {
        grid.appendChild(createNewsCard(resource, 'resource'));
    });
}

function displayNewsClients() {
    const grid = document.getElementById('newClientsGrid');
    grid.innerHTML = '';
    hackClients.slice(0, 3).forEach(client => {
        grid.appendChild(createNewsCard(client, 'client'));
    });
}

function displayNewsApks() {
    const grid = document.getElementById('newApksGrid');
    grid.innerHTML = '';
    apks.slice(0, 3).forEach(apk => {
        grid.appendChild(createNewsCard(apk, 'apk'));
    });
}

// ==================== CARD CREATION ====================
function createCard(item) {
    const card = document.createElement('div');
    card.className = 'addon-card';
    card.id = item.id;
    card.onclick = () => {
        playClickSound();
        window.open(item.downloadLink, '_blank');
    };
    
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

function createNewsCard(item, type) {
    const card = document.createElement('div');
    card.className = 'news-card';
    card.onclick = () => {
        playClickSound();
        openNewsItem(item.id, type);
    };
    
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

// ==================== OPEN NEWS ITEM ====================
function openNewsItem(itemId, type) {
    let pageId = '';
    switch (type) {
        case 'addon': pageId = 'addonsPage'; break;
        case 'resource': pageId = 'resourcePage'; break;
        case 'client': pageId = 'hackClientPage'; break;
        case 'apk': pageId = 'apkPage'; break;
    }

    goToPage(pageId);
    setTimeout(() => {
        const card = document.getElementById(itemId);
        if (card) {
            card.scrollIntoView({ behavior: "smooth", block: "center" });
            card.style.outline = "3px solid #8BC34A";
            setTimeout(() => card.style.outline = "none", 3000);
        }
    }, 500);
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
            playClickSound();
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
    playClickSound();
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
    playClickSound();
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
    playClickSound();
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
    playClickSound();
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
});
