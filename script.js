const urlParams = new URLSearchParams(window.location.search);
const auth = urlParams.get("auth");

const targetOrigin = "https://billowing-wave-75de.josephcasasolareal.workers.dev";

if (auth !== "dcaptain123") {
  // Kung walang tamang auth, balik sa Linkvertise
  window.location.href = "https://link-hub.net/1408907/57D6CaRirKtJ";
} else {
  // Kung tama, ipakita laman ng proxied site (galing sa worker)
  document.getElementById("status").innerText = "Access granted ✅";
  document.getElementById("content").classList.remove("hidden");
  
  // Optional: kung gusto mong i-load yung laman ng worker sa iframe
  const iframe = document.createElement("iframe");
  iframe.src = targetOrigin;
  iframe.style.width = "100%";
  iframe.style.height = "80vh";
  iframe.style.border = "none";
  document.body.appendChild(iframe);
}
