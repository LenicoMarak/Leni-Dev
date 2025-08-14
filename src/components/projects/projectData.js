const data = [
	{
		title: "TextMe",
		shortDesc: "An Android chat app built using Java and Firebase",
		fullDesc: `The Android Chat App is a real-time messaging application built using Java and Android Studio. Developed as part of my academic project, this app aims to provide a fast, reliable, and user-friendly
		communication platform — much like WhatsApp, but simpler and open for future improvements.

		Users can register and log in using their email credentials via Firebase Authentication. Once logged in, they can view a list of active users, start one-to-one chats, and receive real-time updates.
		Firebase Realtime Database ensures instant message delivery and sync across devices. The app also features a modern, minimal UI inspired by Material Design guidelines, ensuring ease of use even
		for non-technical users.

		Throughout the project, I focused on both backend logic and UI consistency. This project helped me understand key mobile development concepts like activity lifecycle, asynchronous operations,
		Firebase integration, and real-time data syncing.
		`,
		keyFeatures: [
			"User Registration & Secure Login via Firebase",
			"Instant Messaging with Real-time Sync",
			"Online/Offline Status Tracking",
			"Push Notifications for New Messages",
			"Chat with Any Registered User",
			"Message History Stored in Firebase",
			"Intuitive UI Using Material Design Components",
		],
		techUsed: [
			"Java (Android SDK)",
			"Android Studio",
			"Firebase Authentication",
			"Firebase Realtime Database",
			"XML Layouts & Material UI",
		],
		img: [
			new URL("../assets/projects/chatapp/chat_app.png", import.meta.url).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-144921.png",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-144928.png",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-144932.png",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-144934.png",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-145012.png",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-150049.png",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/chatapp/Screenshot_20250717-150105.png",
				import.meta.url
			).href,
		],
		link: "https://github.com/LenicoMarak/Android-Chat-App",
	},
	{
		title: "GLyrics",
		shortDesc:
			"A cross-platform mobile lyrics app to search and display gospel lyrics",
		fullDesc: `A Gospel Lyrics Application designed to provide users with easy access to a comprehensive collection of gospel song lyrics. Built using React Native and the Expo framework.
		The app is meticulously designed for seamless user experience, allowing individuals to quickly find, read, and engage with their favorite gospel lyrics. Leveraging Expo's
		simplified development workflow, I was able to rapidly prototype and iterate, focusing on core features and user satisfaction.`,
		keyFeatures: [
			"Extensive Lyrics Library: A vast collection of gospel song lyrics, categorized and easily searchable",
			"Search Functionality: Users can effortlessly search for songs by title or keywords within the lyrics",
			"Offline Access: (Potentially) The app is completely offline and works without any internet connection",
			"Customizable Display: Options for adjusting text size, fonts, and potentially themes for personalized reading",
			"User-Friendly Interface: Intuitive navigation and clean design built with React Native components ensure a smooth and enjoyable experience.",
			"Favorite /Bookmarks: Users can mark songs as favorite for quick access.",
			"Text Editor: User can write their custom lyrics and save",
		],
		techUsed: [
			"JavaScript",
			"React Router Dom",
			"File System Data Persistence",
			"VsCode",
			"Expo GO",
			"Text Editor Library",
		],
		img: [
			new URL("../assets/lyric-app-logo.png", import.meta.url).href,
			new URL(
				"../assets/projects/glyrics/Screenshot_2025-07-27-16-33-04-18.jpg",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/glyrics/Screenshot_2025-07-27-16-33-15-35.jpg",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/glyrics/Screenshot_2025-07-27-16-33-26-93.jpg",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/glyrics/Screenshot_2025-07-27-16-33-38-41.jpg",
				import.meta.url
			).href,
			new URL(
				"../assets/projects/glyrics/Screenshot_2025-07-27-16-34-03-65.jpg",
				import.meta.url
			).href,
		],
		link: "#",
	},
	{
		title: "Calculator",
		shortDesc: "A simple calculator app built using Kotlin Jetpack Compose",
		fullDesc: `A robust calculator application built using Kotlin and Jetpack Compose, focusing on a clean, modern user interface and sophisticated mathematical capabilities.

		One of the core strengths of this calculator lies in its advanced expression evaluation. I've implemented a system that can handle complex medium mathematical expressions, not just simple binary operations.
		This is achieved through the use of infix to postfix conversion, a fundamental algorithm in compiler design and expression parsing. By converting user-entered infix expressions (the way humans typically write them)
		into postfix notation, the app can then efficiently and accurately evaluate them, ensuring correct order of operations and handling of parentheses.

		The user interface, crafted with Jetpack Compose, provides a fluid and responsive experience. Compose's declarative UI paradigm allowed me to build dynamic and visually appealing layouts with ease, ensuring
		the app looks great and functions seamlessly across different Android devices.`,
		keyFeatures: [
			"Modern UI with Jetpack Compose",
			"Mathematical Expression Evaluation",
			"Infix to Postfix Conversion",
			"Built with Kotlin",
		],
		techUsed: ["Kotlin (Jetpack Compose)", "Android Studio", "Material UI"],
		img: [
			new URL("../assets/projects/calculator/calculator.png", import.meta.url)
				.href,
			new URL(
				"../assets/projects/calculator/Screenshot_20250609-115049.png",
				import.meta.url
			).href,
		],
		link: "#",
	},
];

export default data;
