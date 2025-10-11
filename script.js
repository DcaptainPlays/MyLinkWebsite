const linkvertiseURL = "https://link-hub.net/1408907/57D6CaRirKtJ";
const validAuth = "dcaptain123";
const sessionKey = "dcaptain_access_granted";

const urlParams = new URLSearchParams(window.location.search);
const auth = urlParams.get("auth");

// Check if already allowed this session
if (sessionStorage.getItem(sessionKey) === "true") {
  showAccess();
} else if (auth === validAuth) {
  // Valid auth — grant access once
  sessionStorage.setItem(sessionKey, "true");

  // Clean URL (remove ?auth=)
  history.replaceState(null, "", window.location.pathname);

  showAccess();
} else {
  // No access — send back to Linkvertise
  window.location.href = linkvertiseURL;
}

function showAccess() {
  document.getElementById("status").innerText = "Access granted ✅";
  document.getElementById("content").classList.remove("hidden");
}
