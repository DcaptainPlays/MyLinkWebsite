window.appConfig = {

    // ============================================================
    // SITE
    // ============================================================
    siteTitle: "Client Showcase",

    // ============================================================
    // PAGE 1 — ACCESS GATE
    // ============================================================
    page1: {
        title:       "Secure Access 🔐",
        description: "Enter the access code below to preview the interactive client presentation.",
        placeholder: "Enter your access code...",
        buttonText:  "Unlock Access 🔐",
        accessCode:  "Premium"   // ← case-insensitive
    },

    // ============================================================
    // WRONG CODE MODAL
    // ============================================================
    wrongCodeModal: {
        title:      "❌ Wrong Access Code",
        buttonText: "Try Again 🔄",
        clues: [
            "❌ That's not correct. Try again! ✨",
            "💡 Hint: Check your onboarding email.",
            "💡 Hint: The access code is a single professional word.",
            "💡 Final hint: It begins with the letter 'P'. (Case-insensitive)"
        ]
    },

    // ============================================================
    // WELCOME MODAL  (shows after correct access code)
    // ============================================================
    welcomeModal: {
        title:       "Welcome Aboard 👋",
        description: "Your interactive client showcase is ready. Complete the mini-challenge to continue.",
        buttonText:  "Start the Experience 🚀"
    },

    // ============================================================
    // TIC TAC TOE
    // ============================================================
    ticTacToe: {
        title:       "Client Strategy Challenge 🎯",
        subtitle:    "Win the board to unlock the premium section.",
        restartText: "Restart 🔁",

        // Player X  — this is the human player
        playerX: {
            name:     "your name",
            imageUrl: "https://i.imgur.com/QmkSyUyt.jpeg"
        },

        // Player O  — this is the AI
        playerO: {
            name:     "The person's name",
            imageUrl: "https://i.imgur.com/Hehre6OE.jpeg"
        },

        // Win modal
        winModal: {
            title:      "You Won! 🎉",
            message:    "Great work — the premium presentation is now unlocked.",
            buttonText: "Let's Go ➡️"
        },

        // Lose / draw modal
        loseModal: {
            title:      "Try Again 😓",
            message:    "Stay focused and try the challenge again to continue.",
            buttonText: "Restart 🔁"
        }
    },

    // ============================================================
    // MAIN PAGE HEADER
    // ============================================================
    mainHeader: {
        title:    "Client Showcase ✨",
        subtitle: "A refined interactive page for presenting professional services and portfolio work."
    },

    // ============================================================
    // NAV BUTTONS  (order matters — first item is shown by default)
    // ============================================================
    nav: [
        { id: "loveSection",    label: "Highlights ✨" },
        { id: "musicSection",   label: "Music 🎵"      },
        { id: "gallerySection", label: "Gallery 🖼️"    },
        { id: "notesSection",   label: "Notes 📝"      }
    ],

    // ============================================================
    // HIGHLIGHTS SECTION
    // ============================================================
    highlights: {
        sectionTitle: "Feature Highlights ✨",
        buttonText:   "Reveal Message 💌",
        message:      "This template is a polished, responsive landing page designed for premium client presentations. Easily update the content, images, and brand details to match your business. 🚀"
    },

    // ============================================================
    // MUSIC SECTION
    // ============================================================
    music: {
        sectionTitle:    "Music 🎵",
        backgroundTrack: "sounds/background-music.mp3",   // plays on main page
        tracks: [
            {
                src:   "sounds/CIOFH.mp3",
                title: "Come Inside of My Heart — IV OF SPADES 🎸"
            },
            {
                src:   "sounds/doubledeckerbus.mp3",
                title: "There Is a Light That Never Goes Out — The Smiths 🌹"
            },
            {
                src:   "sounds/mundo.mp3",
                title: "Mundo — IV OF SPADES 🌟"
            }
        ]
    },

    // ============================================================
    // GALLERY SECTION
    // ============================================================
    gallery: {
        sectionTitle: "Gallery 🖼️",
        items: [
            { id: 1, src: "images/examplepicture.png", alt: "Professional sample 1", caption: "Brand identity concept 🎨"  },
            { id: 2, src: "images/examplepicture.png", alt: "Professional sample 2", caption: "Portfolio showcase 💼"       },
            { id: 3, src: "images/examplepicture.png", alt: "Professional sample 3", caption: "Client case study 📊"        },
            { id: 4, src: "images/examplepicture.png", alt: "Professional sample 4", caption: "Design preview ✏️"           },
            { id: 5, src: "images/examplepicture.png", alt: "Professional sample 5", caption: "Service highlight ⭐"        },
            { id: 6, src: "images/examplepicture.png", alt: "Professional sample 6", caption: "Campaign concept 🚀"         }
        ]
    },

    // ============================================================
    // NOTES SECTION
    // ============================================================
    notes: {
        sectionTitle: "Notes 📝",
        icon:         "💡",
        items: [
            "Use this space to add convincing selling points for your offer. 💰",
            "Swap gallery images to showcase your portfolio or product visuals. 🖼️",
            "Keep the message crisp, professional, and brand-aligned. ✍️",
            "This layout is built to be clean, responsive, and easy to customize. ⚡"
        ]
    },

    // ============================================================
    // FOOTER
    // ============================================================
    footer: "Designed for premium client presentations. 💼✨",

    // ============================================================
    // FLOATING IMAGES  (shown on the main page background)
    // ============================================================
    floatingImages: [
        "images/examplepicture.png",
        "images/examplepicture.png",
        "images/examplepicture.png",
        "images/examplepicture.png",
        "images/examplepicture.png"
    ]

};