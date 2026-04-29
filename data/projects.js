export const projects = [
  {
    id: 'sentinelrx',
    index: '01',
    title: 'SentinelRX',
    category: 'Healthcare AI',
    tagline: 'AI-powered literature monitoring and analysis system.',

    problem:
      'Teams handling large volumes of research literature struggle with manual tracking, delayed insights, and inefficient workflows.',

    solution:
      'Contributed to building an AI-powered system that monitors and processes literature using LLM-based workflows, combined with a clean and structured UI for efficient analysis.',

    outcome: [
      'Reduced manual effort in literature tracking and review workflows',
      'Improved accessibility of insights through structured UI and automation',
      'Enabled faster decision-making using AI-assisted processing',
    ],

    tech: ['React', 'Java', 'MySQL', 'Docker', 'Python', 'LLMs', 'API Integration'],

    role: [
      'UI/UX Design',
      'Frontend Development',
      'AI/LLM Integration',
      'Database Design',
      'API Development',
    ],

    links: {
      github: null,
      live: null,
    },

    featured: true,
    accent: '#c9a96e',
  },

  {
    id: 'nutrition-app',
    index: '02',
    title: 'Nutrition Tracking App',
    category: 'Health & Wellness',
    tagline: 'AI-powered food tracking made seamless.',

    problem:
      'Manual calorie tracking is tedious and often leads to users abandoning fitness apps.',

    solution:
      'Built a Flutter-based mobile application that uses image input to estimate calories and nutritional values, reducing manual entry and improving usability.',

    outcome: [
      'Simplified food logging process using AI-based input',
      'Improved user experience with real-time feedback',
      'Designed for practical, everyday usability',
    ],

    tech: ['Flutter', 'Dart', 'Gemini API', 'Firebase', 'API Integration'],

    role: [
      'Full Mobile App Development',
      'UI/UX Design',
      'AI Integration',
    ],

    links: {
      github: null,
      live: null,
    },

    featured: true,
    accent: '#6e9ec9',
  },

  {
    id: 'khedan',
    index: '03',
    title: 'Khedan',
    category: 'Sports Platform',
    tagline: 'End-to-end sports booking and management system.',

    problem:
      'Sports facility bookings and event management are often handled manually, leading to inefficiencies and scheduling conflicts.',

    solution:
      'Developed a full-stack platform for booking turfs, managing schedules, and handling user interactions with a streamlined interface.',

    outcome: [
      'Simplified booking and scheduling workflows',
      'Centralized platform for users and organizers',
      'Improved overall system efficiency',
    ],

    tech: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'JWT Auth',
      'Razorpay Integration',
      'API Integration',
      'Git',
    ],

    role: [
      'Full Stack Development',
    ],

    links: {
      github: null,
      live: null,
    },

    featured: false,
    accent: '#6ec9a4',
  },

  {
    id: 'stock-prediction',
    index: '04',
    title: 'Stock Price Prediction',
    category: 'Machine Learning',
    tagline: 'Multi-model time-series forecasting system.',

    problem:
      'Predicting stock prices involves handling complex time-series data and multiple influencing factors.',

    solution:
      'Built a system using LSTM, ARIMA, and SARIMA models with an interactive interface to visualize and compare predictions.',

    outcome: [
      'Implemented multiple forecasting models for comparison',
      'Improved understanding of model behavior through visualization',
      'Combined data science with a user-friendly interface',
    ],

    tech: [
      'Python',
      'LSTM',
      'ARIMA',
      'SARIMA',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'Streamlit',
    ],

    role: [
      'Machine Learning Development',
      'Data Analysis',
      'Interface Development',
    ],

    links: {
      github: null,
      live: null,
    },

    featured: false,
    accent: '#c96e6e',
  },
];

export default projects;