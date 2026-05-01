// ============================================
// WEBSITE CONFIGURATION
// Edit all content here - NO coding needed!
// ============================================

const CONFIG = {
  // === SITE SETTINGS ===
  site: {
    title: "Forever Together ❤️",
    girlfriendName: "Beautiful, You",
    yourName: "Your Name"
  },

  // === HERO SECTION ===
  hero: {
    title: "Welcome to Our Love Story",
    subtitle: "A special place dedicated to our journey together",
    buttonText: "Enter & Explore Our Story"
  },

  // === LOVE LETTER ===
letter: {
    date: "January 15, 2026",
    greeting: "My Most Cherished,",
    paragraphs: [
      "Welcome home. Every moment away from you feels like an eternity, and I find myself thinking of you constantly throughout the day. From the moment I wake up until I fall asleep, you're always on my mind. You mean everything to me—not just as a partner, but as my best friend, my confidant, and my greatest source of comfort. You make me feel complete in a way I never thought possible. I want you to know with absolute certainty that I'm here to stay. Through every joy and challenge, I promise to be by your side. Your presence alone brightens my world. I love everything about you—your voice, your laughter, your way of seeing the world. You inspire me to be better every single day, and I'm so grateful that you chose me.",
      "I cherish every moment we share together—the quiet times when we're simply being with each other, the adventures we embark on, and the intimate moments that bring us closer. You bring so much warmth and tenderness to my life. I love how comfortable I am with you, how I can be completely myself without fear. You accept all of me, and that acceptance means the world. With you, I feel safe, understood, and deeply loved. I'm excited about our future together and all the memories we'll create. Thank you for being patient with me, for believing in me, and for sharing your heart with me.",
      "You've become such an essential part of my life that I cannot imagine it without you. Beyond the romance, beyond the attraction, there's a deep connection and genuine partnership that we've built. I appreciate your kindness, your strength, and the way you care so deeply about the people around you. You inspire me daily. I promise to care for you, to support your dreams, to listen when you need me, and to stand with you through everything life brings. We're a team, you and I, and I'm committed to building a beautiful life together. Thank you for choosing me, for being mine, and for allowing me to be yours. I love you more deeply than words could ever express."
    ],
    closing: "Forever devoted,",
    signature: "Your Love"
  },

  // === PHOTO GALLERY ===
  // category must be one of: "us", "you", "adventures"
  photos: [
    { filename: "examplepicture.png", caption: "The beginning of our love story", category: "us" },
    { filename: "examplepicture.png", caption: "Your radiant smile that melts my heart", category: "you" },
    { filename: "examplepicture.png", caption: "A day of adventure together", category: "adventures" },
    { filename: "examplepicture.png", caption: "Unforgettable moments creating memories", category: "adventures" },
    { filename: "examplepicture.png", caption: "Us at a special place together", category: "us" },
    { filename: "examplepicture.png", caption: "Your beautiful essence", category: "you" },
    { filename: "examplepicture.png", caption: "Celebrating our achievements together", category: "us" },
    { filename: "examplepicture.png", caption: "Capturing happiness with you", category: "you" },
    { filename: "examplepicture.png", caption: "A candid moment I treasure", category: "you" },
    { filename: "examplepicture.png", caption: "Our journey as a couple", category: "us" },
    { filename: "examplepicture.png", caption: "Adventures with you are the best", category: "you" }
  ],

  // === MEMORY TIMELINE ===
  timeline: [
    {
      date: "August 1, 2025",
      title: "Our First Official Date",
      description: "The day we officially became us—unforgettable and full of laughter",
      image: "examplepicture.png"
    },
    {
      date: "November 20, 2025",
      title: "Our First Adventure Together",
      description: "A journey that brought us closer and created beautiful memories",
      image: "examplepicture.png"
    },
    {
      date: "December 11, 2025",
      title: "A Candid Moment",
      description: "Capturing natural moments and genuine smiles together",
      image: "examplepicture.png"
    },
    {
      date: "December 23, 2025",
      title: "Sharing Special Moments",
      description: "Creating wonderful memories over our favorite meals",
      image: "examplepicture.png"
    },
    {
      date: "December 26, 2025",
      title: "A Day We'll Always Treasure",
      description: "Another unforgettable adventure that strengthened our bond",
      image: "examplepicture.png"
    }
  ],

  // === REASONS I LOVE YOU ===
  // Add 10-20 for a fuller page
reasons: [
  { short: "Your Smile", long: "Your smile brightens even my darkest days" },
  { short: "Your Laugh", long: "The way you laugh is music to my ears" },
  { short: "Your Kindness", long: "You care deeply for others and it inspires me daily" },
  { short: "Your Heart", long: "You love with genuine warmth and authenticity" },
  { short: "Your Mind", long: "I love how thoughtful and creative you are" },
  { short: "Your Eyes", long: "Your eyes are windows to your beautiful soul" },
  { short: "Your Strength", long: "You face challenges with grace and determination" },
  { short: "Your Softness", long: "You make the world feel safer and calmer" },
  { short: "Your Support", long: "You believe in my dreams more than I do sometimes" },
  { short: "Your Voice", long: "Hearing you speak brings me peace and comfort" },
  { short: "Your Hugs", long: "Being held by you feels like coming home" },
  { short: "Your Patience", long: "You understand me even when I'm difficult" },
  { short: "Your Dreams", long: "I love watching you pursue what you're passionate about" },
  { short: "Your Loyalty", long: "You stand by me through thick and thin" },
  { short: "Your Humor", long: "You bring laughter and joy into my life" },
  { short: "Your Passion", long: "The way you care about things is inspiring" },
  { short: "Your Presence", long: "Everything feels right when you're around" },
  { short: "Your Love", long: "The way you love me changes my entire world" },
  { short: "Your Growth", long: "You're always becoming a better version of yourself" },
  { short: "Just You", long: "You are my favorite person and that's all that matters" }
],


  // === MUSIC PLAYLIST ===
  // Put your mp3 files inside /sounds
  playlist: [
  {
    title: "With a Smile",
    artist: "Eraserheads",
    filename: "smile.mp3",
    message: "Our story told through music💜"
  },
  {
    title: "Hanggang Kailan",
    artist: "Orange and Lemons",
    filename: "umuwikanababy.mp3",
    message: "Every moment with you feels like coming home"
  },
  {
    title: "And I Love Her",
    artist: "The Beatles",
    filename: "andiloveher.mp3",
    message: "And I love you more. Always."
  },
  {
    title: "The Man Who Can't be Moved",
    artist: "The Script",
    filename: "themanmove.mp3",
    message: "I'll wait for you, always"
  },
  {
    title: "Endless Love",
    artist: "Rivermaya",
    filename: "balisong.mp3",
    message: "You're the reason for my happiness🎶"
  },
  {
    title: "Come inside in my Heart",
    artist: "IV Of Spades",
    filename: "COMEHEART.mp3",
    message: "You're always in my heart"
  },
  {
    title: "Kathang Isip",
    artist: "Ben&Ben",
    filename: "kathangisip.mp3",
    message: "You're real, not just a dream"
  },
  {
    title: "Much Better",
    artist: "Smokey Robinson",
    filename: "muchbetter.mp3",
    message: "Everything's much better with you"
  },
  {
    title: "Mundo",
    artist: "IV of Spades",
    filename: "mundo.mp3",
    message: "You are my entire world"
  },
  {
    title: "My Kind of Woman",
    artist: "Mac DeMarco",
    filename: "mykindofwoman.mp3",
    message: "You're exactly what I've been waiting for"
  },
  {
    title: "Only",
    artist: "LeeHi",
    filename: "only.mp3",
    message: "You're the only one for me"
  },
  {
    title: "Pink",
    artist: "Wave to earth",
    filename: "pink.mp3",
    message: "Love in all its beautiful colors"
  },
  {
    title: "Romantic Lover",
    artist: "Eyedress",
    filename: "romanticlover.mp3",
    message: "A lifetime of romance awaits us"
  },
  {
    title: "Romcom",
    artist: "Rob Deniel",
    filename: "romcom.mp3",
    message: "The greatest love story ever told"
  }
],


  // === QUIZ ===
  quiz: {
    questions: [
      {
        question: "Where was our first official date?",
        options: ["Restaurant", "Food Court", "School", "Centro"],
        correct: 1,
        funFact: "You looked absolutely stunning that day—I was mesmerized"
      },
      {
        question: "What's my favorite thing about you?",
        options: ["Your smile", "Your laugh", "Your eyes", "Everything"],
        correct: 3,
        funFact: "Trick question—I love absolutely everything about you"
      },
      {
        question: "What's our favorite activity together?",
        options: ["Cooking", "Travel", "Movie nights", "All of it"],
        correct: 3,
        funFact: "Every moment with you is my favorite, honestly!"
      },
      {
        question: "What color fits our vibe best?",
        options: ["Blue", "Purple", "Green", "Orange"],
        correct: 1,
        funFact: "Obviously purple—it matches the warmth of our love 💜"
      },
      {
        question: "What do I miss most when you're not around?",
        options: ["Your hugs", "Your body", "Your smile", "All of it"],
        correct: 3,
        funFact: "Distance may separate us, but nothing can separate our hearts"
      }
    ],
    scoreMessages: {
      perfect: "You know me so well! I love you so much! 💖",
      high: "Great job! You know me pretty well!",
      medium: "Not bad! But we should spend more time together so you know me better!",
      low: "Aww, looks like we need more quality time together to strengthen our bond!"
    }
  },

  // === COUNTDOWNS ===
  // IMPORTANT: Use "YYYY-MM-DD" format
  countdowns: [
    {
      event: "Our Anniversary",
      date: "2024-08-01",
      message: "Can't wait to celebrate another year of love with you!"
    },
    {
      event: "Your Birthday",
      date: "2025-12-26",
      message: "Happy Birthday to the most amazing person! You deserve all the love"
    },
    {
      event: "Next Date Night",
      date: "2026-05-23",
      message: "A special evening just for us—creating more beautiful memories"
    }
  ],

// === MESSAGE BOARD ===
// color: "yellow" | "pink" | "purple"
// size: "small" | "medium" | "large"
// category: "sweet" | "funny" | "random"
messages: [
  {
    text: "Good morning beautiful! Start your day with a smile💛",
    color: "yellow",
    size: "small",
    category: "sweet"
  },
  {
    text: "You're the peanut butter to my jelly",
    color: "pink",
    size: "medium",
    category: "funny"
  },
  {
    text: "I love spending time with you—every moment matters",
    color: "pink",
    size: "medium",
    category: "sweet"
  },
  {
    text: "Thank you for being you. I love you more every day",
    color: "purple",
    size: "large",
    category: "sweet"
  },
  {
    text: "Plot twist: I still have a crush on you",
    color: "pink",
    size: "small",
    category: "random"
  },
  {
    text: "If you were a calculator, you'd be the equal sign—you complete me",
    color: "yellow",
    size: "medium",
    category: "funny"
  },
  {
    text: "I miss you even when we've just been together",
    color: "pink",
    size: "small",
    category: "sweet"
  },
  {
    text: "You make my heart happy in ways words can't describe",
    color: "pink",
    size: "large",
    category: "sweet"
  },
  {
    text: "Can I have a hug? I need to feel you near me",
    color: "purple",
    size: "medium",
    category: "sweet"
  },
  {
    text: "You're the reason I smile, even when I'm having a bad day",
    color: "pink",
    size: "medium",
    category: "funny"
  },
  {
    text: "Without you, my world would be incomplete",
    color: "purple",
    size: "small",
    category: "sweet"
  },
  {
    text: "Knock knock! Who's there? Love. Love who? Love you!",
    color: "yellow",
    size: "medium",
    category: "funny"
  },
  {
    text: "I want to go wherever you go—adventures are better with you",
    color: "pink",
    size: "large",
    category: "funny"
  },
  {
    text: "You know what's my favorite? You",
    color: "yellow",
    size: "small",
    category: "funny"
  },
  {
    text: "Random thought: I want to spend forever with you",
    color: "purple",
    size: "medium",
    category: "random"
  },
  {
    text: "Will you be my forever? Yes seems like the only option",
    color: "pink",
    size: "large",
    category: "sweet"
  },
  {
    text: "You're like my favorite person in the world—automatic choice every time",
    color: "yellow",
    size: "medium",
    category: "funny"
  },
  {
    text: "Every moment without you feels too long",
    color: "pink",
    size: "small",
    category: "sweet"
  },
  {
    text: "If I could keep you in my heart always, I would",
    color: "purple",
    size: "medium",
    category: "sweet"
  },
  {
    text: "Just a reminder: You're my forever person",
    color: "pink",
    size: "large",
    category: "random"
  }
],


  // === GIFT BOX ===
  gifts: [
    { type: "compliment", content: "You're the most beautiful person, inside and out." },
    { type: "promise", content: "I promise to always choose you, every day." },
    { type: "date", content: "Date us when you're free!" },
    { type: "photo", filename: "examplepicture.png", message: "Remember this special moment? It meant the world to me" },
    { type: "compliment", content: "You make my life softer and brighter." },
    { type: "promise", content: "I promise to listen, even when it’s hard." },
    { type: "date", content: "Ice cream + walk + no phones = us time" },
    { type: "compliment", content: "Your smile is my favorite place" }
  ],

  // === LOVE COUPONS ===
  coupons: [
    {
      title: "One Free Massage",
      description: "30-minute relaxation massage whenever you want",
      expiry: "2026-04-12",
      redeemed: false
    },
    {
      title: "Mall TIME!",
      description: "Unlimited shopping date—no time limit, just us",
      expiry: null,
      redeemed: false
    },
    {
      title: "Breakfast in Bed",
      description: "I'll make you breakfast and bring it to bed",
      expiry: "2026-12-31",
      redeemed: false
    },
    {
      title: "One ‘Yes’ Day",
      description: "Say yes to everything I ask, even if it's just for fun!",
      expiry: null,
      redeemed: false
    }
  ],

  // === FOOTER ===
  footer: {
    message: "Made for",
    dateCreated: "January 2026"
  }
};
