// Clients Data
const clientsData = [
  {
    id: "apollon-121111-64",
    name: "Apollon Client 1.21.111 64bit",
    description: "Best Top 1 Hack Client. Credits to ZEFF W You.",
    image: "https://i.imgur.com/OlYW3ka.png",
    tags: ["Client", "Hack", "64-bit"],
    downloadLink: "https://apkadmin.com/gpq2dmez3trf/MCPE_Apollon_Client_1.21.111_v4.63_64Bit_Classic.apk.html"
  },
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

document.addEventListener('DOMContentLoaded', () => {
  setupGridPage({
    data: clientsData,
    searchPlaceholder: "Search clients...",
    gridId: "grid",
    searchId: "searchInput",
    paginationIds: {
      first: 'firstBtn',
      prev: 'prevBtn',
      next: 'nextBtn',
      last: 'lastBtn',
      numbers: 'pageNumbers',
      current: 'currentPageDisplay',
      total: 'totalPagesDisplay'
    }
  });
});
