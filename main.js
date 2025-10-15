// ==================== SOUND EFFECTS ====================
function playClickSound() {
  const audio = new Audio('https://DcaptainPlays.github.io/MyLinkWebsite/sounds/click.mp3');
  audio.volume = 0.5;
  audio.play().catch(e => {});
}
function playSuccessSound() {
  const audio = new Audio('https://DcaptainPlays.github.io/MyLinkWebsite/sounds/successfullaccess.mp3');
  audio.volume = 0.6;
  audio.play().catch(e => {});
}
function playDeniedSound() {
  const audio = new Audio('https://DcaptainPlays.github.io/MyLinkWebsite/sounds/break.mp3');
  audio.volume = 0.6;
  audio.play().catch(e => {});
}

// ==================== SECURITY GATE (Home Only) ====================
function startSecurityGate({ linkvertiseURL, validAuth, onGranted }) {
  const statusEl = document.getElementById('securityStatus');
  const container = document.querySelector('.security-container');

  function isAuthenticated() {
    const s = sessionStorage.getItem('auth_status');
    const t = sessionStorage.getItem('auth_timestamp');
    if (!s || !t) return false;
    const now = Date.now();
    const passed = now - parseInt(t, 10);
    if (passed > 600000) {
      sessionStorage.removeItem('auth_status');
      sessionStorage.removeItem('auth_timestamp');
      return false;
    }
    return s === 'verified';
  }

  function setAuthenticated(ok) {
    if (ok) {
      sessionStorage.setItem('auth_status', 'verified');
      sessionStorage.setItem('auth_timestamp', String(Date.now()));
    } else {
      sessionStorage.removeItem('auth_status');
      sessionStorage.removeItem('auth_timestamp');
    }
  }

  function grant() {
    container.classList.add('fade-out');
    setTimeout(() => {
      onGranted && onGranted();
      playSuccessSound();
    }, 1200);
  }

  function check() {
    const urlParams = new URLSearchParams(window.location.search);
    const auth = urlParams.get('auth');
    if (auth === validAuth) {
      statusEl.innerText = "Access Granted! Welcome to DcaptainPlays Hub! ✅";
      statusEl.style.color = "#AAFFAA";
      setAuthenticated(true);
      setTimeout(grant, 1200);
      history.replaceState(null, "", window.location.pathname);
      return;
    }
    if (isAuthenticated()) {
      statusEl.innerText = "Welcome Back to DcaptainPlays Hub! ✅";
      statusEl.style.color = "#AAFFAA";
      setTimeout(grant, 1200);
      return;
    }
    statusEl.innerText = "Access Denied ❌";
    statusEl.style.color = "#FFAAAA";
    playDeniedSound();
    setTimeout(() => {
      statusEl.innerText = "You need to verify through Linkvertise...";
      statusEl.style.color = "#FFCCAA";
    }, 1000);
    setTimeout(() => {
      window.location.href = linkvertiseURL;
    }, 2200);
  }

  document.addEventListener("visibilitychange", function() {
    if (!document.hidden && !sessionStorage.getItem('auth_status')) {
      check();
    }
  });
  window.addEventListener("focus", function() {
    if (!sessionStorage.getItem('auth_status')) {
      check();
    }
  });

  check();
}

// ==================== BACK BUTTON HANDLER ====================
function goBack(e) {
  if (e) e.preventDefault();
  playClickSound();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    window.location.href = 'index.html';
  }, 300);
}

// ==================== GENERIC GRID RENDERER ====================
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

function setupGridPage({ data, searchPlaceholder = "Search...", gridId = "grid", searchId = "searchInput", paginationIds }) {
  const grid = document.getElementById(gridId);
  const searchInput = document.getElementById(searchId);
  const firstBtn = document.getElementById(paginationIds.first);
  const prevBtn = document.getElementById(paginationIds.prev);
  const nextBtn = document.getElementById(paginationIds.next);
  const lastBtn = document.getElementById(paginationIds.last);
  const pageNumbers = document.getElementById(paginationIds.numbers);
  const curDisp = document.getElementById(paginationIds.current);
  const totDisp = document.getElementById(paginationIds.total);

  if (searchInput && searchPlaceholder) searchInput.placeholder = searchPlaceholder;

  const ITEMS_PER_PAGE = 9;
  let filtered = [...data];
  let page = 1;

  function render() {
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    grid.innerHTML = '';
    if (filtered.length === 0) {
      grid.innerHTML = '<div class="no-results">No items found.</div>';
      document.getElementById('pagination').style.display = 'none';
      curDisp.textContent = '0';
      totDisp.textContent = '0';
      pageNumbers.innerHTML = '';
      return;
    }
    document.getElementById('pagination').style.display = 'flex';
    if (page > totalPages) page = totalPages;
    const start = (page - 1) * ITEMS_PER_PAGE;
    const end = Math.min(start + ITEMS_PER_PAGE, filtered.length);
    for (let i = start; i < end; i++) {
      grid.appendChild(createCard(filtered[i]));
    }
    // numbers
    pageNumbers.innerHTML = '';
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement('button');
      btn.className = `page-btn${i === page ? ' active' : ''}`;
      btn.textContent = i;
      btn.onclick = () => { playClickSound(); page = i; render(); window.scrollTo(0,0); };
      pageNumbers.appendChild(btn);
    }
    curDisp.textContent = page;
    totDisp.textContent = totalPages;
  }

  function doSearch() {
    const term = (searchInput.value || '').toLowerCase();
    filtered = data.filter(item =>
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.tags.some(t => t.toLowerCase().includes(term))
    );
    page = 1;
    render();
  }

  if (searchInput) {
    searchInput.addEventListener('keyup', doSearch);
  }

  firstBtn.onclick = () => { playClickSound(); page = 1; render(); window.scrollTo(0,0); };
  prevBtn.onclick  = () => { playClickSound(); if (page > 1) { page--; render(); window.scrollTo(0,0); } };
  nextBtn.onclick  = () => {
    playClickSound();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    if (page < totalPages) { page++; render(); window.scrollTo(0,0); }
  };
  lastBtn.onclick  = () => {
    playClickSound();
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    page = totalPages; render(); window.scrollTo(0,0);
  };

  render();

  return {
    jumpTo(id) {
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          el.style.outline = "3px solid #8BC34A";
          setTimeout(() => el.style.outline = "none", 3000);
        }
      }, 250);
    }
  };
}
