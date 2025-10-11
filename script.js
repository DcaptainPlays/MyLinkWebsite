// --- Token-based protection for GitHub Pages ---
const LINKVERTISE_URL = "https://direct-link.net/1408907/WATKrEzRckyO";
const VALID_TOKEN = "dcaptain123"; // change this to your own secret if you like
const ALLOW_LOCAL_DEBUG = true;

(function () {
  function getAuthToken() {
    const params = new URLSearchParams(window.location.search);
    return params.get("auth");
  }

  function cleanUrl() {
    if (window.location.search.includes("auth=")) {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }
  }

  function showProtectedContent() {
    document.getElementById("status").textContent = "Access granted.";
    document.getElementById("content").classList.remove("hidden");
    cleanUrl();
  }

  function redirectToLinkvertise() {
    window.location.replace(LINKVERTISE_URL);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const auth = getAuthToken();

    // Allow testing locally
    if (ALLOW_LOCAL_DEBUG && (location.protocol === "file:" || location.hostname === "localhost")) {
      if (auth === VALID_TOKEN) {
        showProtectedContent();
        return;
      }
      document.getElementById("status").textContent =
        "Local debug: add ?auth=" + VALID_TOKEN + " to the URL to simulate Linkvertise.";
      return;
    }

    // Main GitHub Pages behavior
    if (auth === VALID_TOKEN) {
      showProtectedContent();
      return;
    }

    redirectToLinkvertise();
  });
})();
