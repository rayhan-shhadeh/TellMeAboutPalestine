/**
 * Arabic translations
 * Palestinian dialect friendly
 * Child-appropriate language
 */

import { Translation } from './en';

export const ar: Translation = {
  common: {
    appName: 'احكيلي عن فلسطين',
    loading: 'جاري التحميل...',
    error: 'عذراً! حدث خطأ',
    tryAgain: 'حاول مرة أخرى',
    back: 'رجوع',
    next: 'التالي',
    done: 'تم',
    cancel: 'إلغاء',
    ok: 'حسناً',
    yes: 'نعم',
    no: 'لا',
  },

  navigation: {
    home: 'الرئيسية',
    explore: 'استكشف',
    facts: 'حقائق ممتعة',
    stories: 'القصص',
    games: 'الألعاب',
    music: 'الموسيقى',
    progress: 'تقدّمي',
    parents: 'للأهل والمعلّمين',
  },

  home: {
    welcome: 'أهلاً وسهلاً!',
    subtitle: 'هيّا نكتشف فلسطين سوياً',
    startJourney: 'ابدأ رحلتك',
    continueExploring: 'واصل الاستكشاف',
    greeting: {
      morning: 'صباح الخير!',
      afternoon: 'نهارك سعيد!',
      evening: 'مساء الخير!',
    },
  },

  explore: {
    title: 'استكشف فلسطين',
    subtitle: 'اكتشف أماكن رائعة',
    map: 'الخريطة التفاعلية',
    cities: 'المدن والقرى',
    landmarks: 'الأماكن المشهورة',
    nature: 'الطبيعة والبيئة',
    tapToLearn: 'اضغط لتتعلّم المزيد',
  },

  facts: {
    title: 'حقائق ممتعة',
    subtitle: 'أشياء مدهشة عن فلسطين',
    didYouKnow: 'هل تعلم؟',
    population: 'أهل فلسطين',
    culture: 'الثقافة والتقاليد',
    food: 'أكلات لذيذة',
    symbols: 'رموز خاصة',
  },

  stories: {
    title: 'القصص والشخصيات',
    subtitle: 'تعرّف على أصدقائنا',
    olive: {
      name: 'زيتونة',
      greeting: 'أهلاً! أنا زيتونة',
      description: 'أنا أنمو هنا منذ مئات السنين',
    },
    child: {
      name: 'ليلى المستكشفة',
      greeting: 'مرحبا! أنا ليلى',
      description: 'هيّا ننطلق في مغامرة سوياً',
    },
    bird: {
      name: 'سنبل',
      greeting: 'زقزق! أنا سنبل',
      description: 'سأرشدك في رحلتك عبر فلسطين',
    },
  },

  games: {
    title: 'الألعاب والتحديات',
    subtitle: 'تعلّم وأنت تلعب',
    puzzles: 'الأحجيات',
    matching: 'لعبة المطابقة',
    quiz: 'مسابقة ممتعة',
    coloring: 'التلوين',
    memory: 'لعبة الذاكرة',
    play: 'العب',
    score: 'النقاط',
    level: 'المستوى',
  },

  progress: {
    title: 'تقدّمي',
    subtitle: 'شاهد كم تعلّمت!',
    badges: 'الشارات المكتسبة',
    achievements: 'الإنجازات',
    stars: 'النجوم المجموعة',
    completedChallenges: 'التحديات المنجزة',
    keepGoing: 'واصل!',
    congratulations: 'مبروك!',
  },

  parents: {
    title: 'الأهل والمعلّمون',
    subtitle: 'دعم المتعلّمين الصغار',
    learningGoals: 'الأهداف التعليمية',
    timeSpent: 'الوقت المستخدَم',
    contentExplored: 'المحتوى المستكشف',
    discussionPrompts: 'أفكار للنقاش',
    settings: 'الإعدادات',
    about: 'عن التطبيق',
  },

  achievements: {
    firstVisit: 'زائر مرحّب به',
    firstVisitDesc: 'بدأت رحلتك',
    explorerBeginner: 'مستكشف فضولي',
    explorerBeginnerDesc: 'زرت 5 أماكن',
    storyListener: 'مستمع للقصص',
    storyListenerDesc: 'أنهيت 3 قصص',
    gamePlayer: 'لاعب',
    gamePlayerDesc: 'لعبت 5 ألعاب',
    factCollector: 'جامع الحقائق',
    factCollectorDesc: 'تعلّمت 10 حقائق',
  },
};
