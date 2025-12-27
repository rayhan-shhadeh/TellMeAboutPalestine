# Tell Me About Palestine 🇵🇸

An educational mobile application designed for children aged 6-12 to learn about Palestine through interactive stories, games, and fun facts in a positive, engaging, and age-appropriate way.

## 🌟 Vision

This app presents Palestinian facts, statistics, geography, culture, heritage, and daily life in a hopeful, respectful, and empowering manner. The goal is to educate without trauma, inspire curiosity, strengthen identity, and encourage learning through play, interaction, animation, sound, and storytelling.

## 🎯 Target Audience

- **Primary**: Children aged 6-12 years
- **Secondary**: Parents, teachers, and educators

## ✨ Features

### 🏠 Main Sections

1. **Home** - Welcome screen with character mascots and navigation
2. **Explore Palestine** - Interactive map and places to discover
3. **Fun Facts** - Amazing statistics and information presented visually
4. **Stories & Characters** - Meet friendly mascots (Zaytuna the Olive Tree, Layla the Explorer, Sunbul the Bird)
5. **Games & Challenges** - Interactive puzzles, matching games, quizzes, and memory games
6. **My Progress** - Track stars, badges, and achievements
7. **Parents & Teachers** - Dashboard with learning goals and discussion prompts

### 🎨 Design Principles

- **Color Palette**: Olive green, sky blue, warm beige, soft red
- **Typography**: Large, child-friendly fonts with Arabic and English support
- **Animations**: Gentle, playful motion using React Native Reanimated and Moti
- **Accessibility**: High contrast, dyslexia-friendly, voice narration ready

### 🌐 Multilingual Support

- English
- Arabic (Palestinian dialect friendly)
- Easy language switching in Parents section

## 🛠 Tech Stack

- **Framework**: React Native with Expo (Managed Workflow)
- **Language**: TypeScript (strict mode)
- **Navigation**: React Navigation v6
- **Animations**:
  - React Native Reanimated v3
  - Lottie React Native
  - Moti
- **Audio**: Expo AV
- **Styling**: StyleSheet with custom theme system

## 📦 Installation

### Prerequisites

- Node.js 18 LTS or higher
- npm 9+ or yarn
- Expo Go app on your mobile device (for testing)

### Setup

```bash
# Clone the repository
git clone https://github.com/rayhan-shhadeh/TellMeAboutPalestine.git
cd TellMeAboutPalestine

# Install dependencies
npm install

# Start the development server
npm start
```

### Running the App

After starting the development server:

1. Scan the QR code with Expo Go (Android) or Camera app (iOS)
2. The app will load on your device

Alternatively:

```bash
# Run on iOS simulator (macOS only)
npm run ios

# Run on Android emulator
npm run android
```

## 🏗 Project Structure

```
src/
├── core/
│   ├── theme/           # Colors, typography, spacing
│   ├── animation/       # Animation presets
│   └── components/      # Reusable components (SafeButton, etc.)
├── features/
│   ├── home/           # Home, Facts, Progress screens
│   ├── explore/        # Explore Palestine screen
│   ├── stories/        # Stories & Characters screen
│   ├── games/          # Games & Challenges screen
│   └── parents/        # Parents & Teachers dashboard
├── navigation/         # Navigation configuration
├── localization/       # English and Arabic translations
└── types/             # TypeScript type definitions
```

## 🎮 Development

### Type Safety

This project uses TypeScript in strict mode to ensure type safety and prevent runtime errors:

```bash
# Check for TypeScript errors
npx tsc --noEmit
```

### Code Quality

- All animations use typed presets
- No `any` types allowed
- Strict null checks enabled
- Component props fully typed

## 🌈 Theme System

The app uses a consistent theme system with:

- **Colors**: Palestinian-inspired palette (olive green, sky blue, warm beige)
- **Typography**: Large, accessible font sizes
- **Spacing**: 8px grid system
- **Shadows**: Elevation system for depth

## 🔊 Planned Features

- [ ] Audio narration for all content
- [ ] Offline mode support
- [ ] More interactive games
- [ ] Additional character stories
- [ ] Parent progress tracking
- [ ] Custom achievements system
- [ ] Dark mode support

## 📱 Compatibility

- **iOS**: 13.0 and above
- **Android**: API level 21 (Android 5.0) and above
- **Expo Go**: Compatible from day one

## 🤝 Contributing

This is an educational project aimed at providing positive, age-appropriate content about Palestine for children. Contributions that align with this vision are welcome.

## 📄 License

This project is created for educational purposes.

## 🙏 Acknowledgments

This app is built with love and care to provide a safe, colorful, and interactive window into Palestine for children worldwide.

## 📞 Support

For questions, feedback, or support, please open an issue in the GitHub repository.

---

**Made with ❤️ for children to learn, explore, and grow**
