// Resource Packs Data
const resourcesData = [
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

document.addEventListener('DOMContentLoaded', () => {
  setupGridPage({
    data: resourcesData,
    searchPlaceholder: "Search resource packs...",
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
