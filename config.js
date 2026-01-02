// ===== Melo Application Configuration =====

const CONFIG = {
    // App Information
    APP_NAME: "Melo",
    VERSION: "1.0.0",
    BUILD: "2024.10.24",
    
    // API Configuration
    API_KEY: "AIzaSyC9ZSV4hpKHLSpZOEMW7_Wg_cLTDymzyks", 
    GEMINI_MODEL: "gemini-1.5-flash",
    API_TIMEOUT: 10000,
    
    // Feature Flags
    FEATURES: {
        AURI_CHAT: true,
        JOURNAL: true,
        INSIGHTS: true,
        TOOLKIT: true,
        AID: true,
        VENT_ROOM: true,
        SETTINGS: true
    },
    
    // User Settings Defaults
    DEFAULT_SETTINGS: {
        theme: "dark",
        notifications: true,
        auriType: "supportive",
        emergencyContact: {
            name: "",
            phone: ""
        }
    },
    
    // Mood Configuration
    MOOD_SCORE_MAP: {
        '🤯': 1,
        '😔': 2,
        '😶': 3,
        '😴': 4,
        '😀': 5
    },
    
    // Breathing Exercise Configuration
    BREATHING: {
        INHALE: 4,
        HOLD: 4,
        EXHALE: 6,
        CYCLES: 5
    },

    // Toolkit Resources
    AFFIRMATIONS: [
        "I am capable of handling whatever this day brings.",
        "My feelings are valid, but they do not define my reality.",
        "I deserve peace, love, and happiness.",
        "I am growing and learning every single day.",
        "I have the power to create change in my life.",
        "I am enough, exactly as I am.",
        "I choose to be kind to myself today.",
        "This moment is temporary; I am resilient.",
        "I am worthy of taking up space.",
        "My potential is limitless."
    ],
    
    // Vent Room Configuration
    VENT: {
        MAX_MESSAGES: 50,
        MESSAGE_LIMIT: 500,
        ANONYMITY: true
    },
    
    // Indian Crisis Helplines
    INDIAN_HOTLINES: [
        {
            name: "Kiran Mental Health Helpline",
            description: "Ministry of Social Justice & Empowerment",
            number: "1800-599-0019",
            type: "toll-free",
            hours: "24/7",
            languages: "Multilingual"
        },
        {
            name: "Vandrevala Foundation",
            description: "Mental health & suicide prevention",
            numbers: ["9999 666 555", "915 298 7821"],
            type: "phone",
            hours: "24/7",
            features: ["WhatsApp available", "Professional counselors"]
        },
        {
            name: "iCall Psychosocial Helpline",
            description: "Tata Institute of Social Sciences",
            number: "915 298 7821",
            type: "phone",
            hours: "Mon-Sat 10AM-8PM",
            email: "icall@tiss.edu"
        },
        {
            name: "Police & Emergency",
            description: "Immediate life-threatening situations",
            numbers: ["100", "112"],
            type: "emergency",
            hours: "24/7"
        }
    ],
    
    // Local Storage Keys
    STORAGE_KEYS: {
        AURI_HISTORY: "auri_history",
        JOURNAL_ENTRIES: "journal_entries",
        VENT_MESSAGES: "vent_messages",
        USER_PROFILE: "user_profile",
        LOGGED_IN: "melo_logged_in",
        USER_ID: "melo_user_id",
        USER_EMAIL: "melo_user_email"
    },
    
    // Error Messages
    ERRORS: {
        NETWORK: "Network error. Please check your connection.",
        OFFLINE: "You're offline. Some features may be limited.",
        SAVE_FAILED: "Failed to save. Trying locally...",
        LOAD_FAILED: "Failed to load data."
    }
};