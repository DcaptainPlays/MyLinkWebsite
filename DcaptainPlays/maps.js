// Maps Data (formerly APKs page)
const mapsData = [
  {
    id: "restaurant-sim",
    name: "Restaurant Sim: Head Chef",
    description: "Run the best restaurant in town in this action-packed minigame!",
    image: "https://i.imgur.com/Rqkk6kU.jpeg",
    tags: ["Cooking", "Restaurant", "Minigame"],
    downloadLink: "https://www.mediafire.com/file/nrrj0upfeqpa0y5/%2528LEAK%2529_Restaurant_Sim_By_DcaptainPlays.mcworld/file"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  setupGridPage({
    data: mapsData,
    searchPlaceholder: "Search maps...",
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
