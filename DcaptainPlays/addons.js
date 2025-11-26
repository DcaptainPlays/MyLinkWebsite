// Addons Data
const addonsData = [
  {
    id: "actionsandstuff-addon",
    name: "Actions & Stuffs 1.6",
    description: "The Animation Pack You Didn't Know You Needed:\nBring your world to life with new animations, particles, textures, and more!",
    image: "https://i.imgur.com/ugi1Tdz.jpeg",
    tags: ["Animation", "Physics", "Combat", "Player", "Particles", "Textures", "Movement"],
    downloadLink: "https://www.mediafire.com/file/k37q493dltmyrzt/%2528LEAK%2529_Actions_And_Stuff_1.6_by_DcaptainPlays.mcpack/file"
  },
  {
    id: "spongebob-addon-pack",
    name: "SpongeBob SquarePants Addon",
    description: "Bring SpongeBob and his friends into your worlds with this add-on!",
    image: "https://i.imgur.com/ndfJwRF.jpeg",
    tags: ["Cartoons", "Spongebob", "TV", "Textures", "Animals", "Mobs"],
    downloadLink: "https://www.mediafire.com/file/cvg847ai7vykf7a/%2528LEAK%2529_Spongebob_Addon_By_DcaptainPlays.mcaddon/file"
  },
  {
    id: "demon-slayer-addon",
    name: "Demon Slayer Addon",
    description: "Experience the world of Demon Slayer in Minecraft — master breathing techniques, wield Nichirin swords, battle demons.",
    image: "https://i.imgur.com/TBqPiAr.jpeg",
    tags: ["Anime", "Demon", "Slayer", "Weapons", "Breathing", "Swords", "Powers", "Characters"],
    downloadLink: "https://www.mediafire.com/file/cnq8bwxzd9ah224/%2528NOT_A_LEAK%2529_Mules-Slayer-V1_W_Dapy_for_making_it_Free.mcaddon/file"
  },
  {
    id: "realism-craft",
    name: "Realism Craft",
    description: "Realism Craft® 2.1: Custom world-gen, full texture-pack, new mobs, items & blocks.",
    image: "https://i.imgur.com/6GjSvQ5.png",
    tags: ["Realistic", "Textures", "Graphics", "Environment", "Lighting", "Shadows", "Nature", "HD"],
    downloadLink: "https://www.mediafire.com/file/oocecgnk7bf8kb0/%2528LEAK%2529_RealismCraft_2.1_by_DcaptainPlays.mcpack/file"
  },
  {
    id: "player-animations",
    name: "Player Animations Addon",
    description: "Adds smooth and realistic animations to your world! 40+ immersive player animations!",
    image: "https://i.imgur.com/fLe8M0U.png",
    tags: ["Animation", "Player", "Emotes", "Movement", "Realistic", "Gestures", "Actions", "Expressions"],
    downloadLink: "https://www.mediafire.com/file/apaihf580yvxm0t/%2528LEAK%2529_PlayerAnimations_Addon_By_Dcaptain.mcaddon/file"
  },
  {
    id: "realistic-biomes",
    name: "Realistic Biomes Addon",
    description: "Beautiful custom skies, dynamic weather, stunning visual effects, immersive audio.",
    image: "https://i.imgur.com/gJ2RB6d.jpeg",
    tags: ["Realistic", "Biomes", "Nature", "Environment", "World", "Terrain", "Exploration"],
    downloadLink: "https://www.mediafire.com/file/gy6k0y55i31hz6v/%2528LEAK%2529_Realistic_Biomes_by_DcaptainPlays.mcaddon/file"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  setupGridPage({
    data: addonsData,
    searchPlaceholder: "Search addons...",
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
