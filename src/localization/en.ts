/**
 * English translations
 * Child-friendly language, simple and clear
 */

export const en = {
  common: {
    appName: 'Tell Me About Palestine',
    loading: 'Loading...',
    error: 'Oops! Something went wrong',
    tryAgain: 'Try Again',
    back: 'Back',
    next: 'Next',
    done: 'Done',
    cancel: 'Cancel',
    ok: 'OK',
    yes: 'Yes',
    no: 'No',
  },

  navigation: {
    home: 'Home',
    explore: 'Explore',
    facts: 'Fun Facts',
    stories: 'Stories',
    games: 'Games',
    music: 'Music',
    progress: 'My Progress',
    parents: 'For Parents',
  },

  home: {
    welcome: 'Welcome!',
    subtitle: 'Let\'s discover Palestine together',
    startJourney: 'Start Your Journey',
    continueExploring: 'Continue Exploring',
    greeting: {
      morning: 'Good Morning!',
      afternoon: 'Good Afternoon!',
      evening: 'Good Evening!',
    },
  },

  explore: {
    title: 'Explore Palestine',
    subtitle: 'Discover amazing places',
    map: 'Interactive Map',
    cities: 'Cities & Villages',
    landmarks: 'Famous Places',
    nature: 'Nature & Environment',
    tapToLearn: 'Tap to learn more',
  },

  facts: {
    title: 'Fun Facts',
    subtitle: 'Amazing things about Palestine',
    didYouKnow: 'Did You Know?',
    population: 'People of Palestine',
    culture: 'Culture & Traditions',
    food: 'Delicious Food',
    symbols: 'Special Symbols',
  },

  stories: {
    title: 'Stories & Characters',
    subtitle: 'Meet our friends',
    olive: {
      name: 'Zaytuna the Olive Tree',
      greeting: 'Hello! I\'m Zaytuna',
      description: 'I\'ve been growing here for hundreds of years',
    },
    child: {
      name: 'Layla the Explorer',
      greeting: 'Hi! I\'m Layla',
      description: 'Let\'s go on an adventure together',
    },
    bird: {
      name: 'Sunbul the Bird',
      greeting: 'Tweet! I\'m Sunbul',
      description: 'I\'ll guide you through Palestine',
    },
  },

  games: {
    title: 'Games & Challenges',
    subtitle: 'Learn while playing',
    puzzles: 'Puzzles',
    matching: 'Matching Game',
    quiz: 'Fun Quiz',
    coloring: 'Coloring',
    memory: 'Memory Game',
    play: 'Play',
    score: 'Score',
    level: 'Level',
  },

  progress: {
    title: 'My Progress',
    subtitle: 'Look how much you\'ve learned!',
    badges: 'Badges Earned',
    achievements: 'Achievements',
    stars: 'Stars Collected',
    completedChallenges: 'Challenges Completed',
    keepGoing: 'Keep Going!',
    congratulations: 'Congratulations!',
  },

  parents: {
    title: 'Parents & Teachers',
    subtitle: 'Supporting young learners',
    learningGoals: 'Learning Goals',
    timeSpent: 'Time Spent',
    contentExplored: 'Content Explored',
    discussionPrompts: 'Discussion Ideas',
    settings: 'Settings',
    about: 'About This App',
  },

  achievements: {
    firstVisit: 'Welcome Visitor',
    firstVisitDesc: 'Started your journey',
    explorerBeginner: 'Curious Explorer',
    explorerBeginnerDesc: 'Visited 5 places',
    storyListener: 'Story Listener',
    storyListenerDesc: 'Completed 3 stories',
    gamePlayer: 'Game Player',
    gamePlayerDesc: 'Played 5 games',
    factCollector: 'Fact Collector',
    factCollectorDesc: 'Learned 10 facts',
  },
};

export type Translation = typeof en;
