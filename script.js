const linkvertiseURL = "https://link-hub.net/1408907/57D6CaRirKtJ";
const validAuth = "dcaptain123";

const urlParams = new URLSearchParams(window.location.search);
const auth = urlParams.get("auth");

// Always require key — no saved sessions
if (auth === validAuth) {
  // Valid key, grant temporary access
  document.getElementById("status").innerText = "Access granted ✅";
  document.getElementById("content").classList.remove("hidden");

  // Clean the URL after unlocking
  history.replaceState(null, "", window.location.pathname);

  // Optional: auto-expire access after few seconds or reload
  window.addEventListener("beforeunload", () => {
    // When tab closed or refreshed, will require Linkvertise again
    sessionStorage.clear();
  });
} else {
  // Always redirect if key missing or wrong
  window.location.href = linkvertiseURL;
}
