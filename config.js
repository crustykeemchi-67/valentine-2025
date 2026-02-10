// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Gibble",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "From me to you <3",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '🤍'],  // Heart emojis
        bears: ['🐱', '🌹']                       // Cute bear emojis
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you love me?",                                    // First interaction
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I love you soo much, you're my favorite man ever!!"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine??", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "I already knew that :3",  // Shows when they go past 5000%
        high: "Hehe 🤭",              // Shows when they go past 1000%
        normal: "Ooookay so you hate me.."                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "YAY!! You make me happiest man in the world!",
        message: "I love you sooo much, baby!! I'm so blessed to have you as my Valentine for two years in a row!",
        emojis: "🐈🐈‍⬛"  // These will bounce around
    },

    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#660f1e",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#660f1e",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#d1cdc7",     // Button color (should stand out against the background)
        buttonHover: "#c7c3bd",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#050402"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/duqia4d0y/video/upload/v1770685175/Somethin_Stupid_2008_Remastered_itkqmu.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
