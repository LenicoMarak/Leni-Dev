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
			"Instant Messaging with Real - time Sync",
			"Online/ Offline Status Tracking",
			"Push Notifications for New Messages",
			"Chat with Any Registered User ",
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
			new URL("src/assets/projects/chatapp/chat_app.png", import.meta.url).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-144921.png",
				import.meta.url
			).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-144928.png",
				import.meta.url
			).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-144932.png",
				import.meta.url
			).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-144934.png",
				import.meta.url
			).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-145012.png",
				import.meta.url
			).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-150049.png",
				import.meta.url
			).href,
			new URL(
				"src/assets/projects/chatapp/Screenshot_20250717-150105.png",
				import.meta.url
			).href,
		],
		link: "https://github.com/LenicoMarak/Android-Chat-App",
	},
	{
		title: "GLyrics",
		shortDesc:
			"A cross-platform mobile lyrics app to search and display gospel lyrics",
		fullDesc: `A Gospel Lyrics Application designed to provide users with easy access to a comprehensive collection of gospel song lyrics.Built using React Native and the Expo
		 framework.
		 The app is meticalously designed for seamless user experience, allowing individuals to quickly find,read,and engage with their favorite gospel lyrics. Levaraging Expo's
		 simplified development workflow, I was able to rapidly prototype and iterals, focusing on core features and user satisfaction`,
		keyFeatures: [
			`Extensive Lyrics Library: A vast collection of gospel song lyrics,categorized 
			and easily seachable`,
			`Search Functionality: Users can effortlessly search for song by title or keywords
			 within the lyrics`,
			`Offline Access: (Potentially) The app is completely offline and works without any
			 internet connection`,
			`Customizable Display: Options for adjusting text size,fonts,and potentially themes
			 for personalized reading`,
			`User-FriendLy Interface: Intuitive navigation and clean design built with React Native
			 components ensure a smooth and enjoyable experience.`,
			`Favorite /Bookmarks: Users can mark songs as favorite for quick access.`,
			`Text Editor: User can write a their custom lyrics and save `,
		],
		techUsed: [
			"Javascript",
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
		shortDesc: "A simple calculator app built using Kotline Jetpack Compose",
		fullDesc: `A robust calculator application built using Kotline and Jetpack Compose.,focusing on a clean, modern user interface and sopthisticated mathematical capabilitites

			One of the core strenght of this calculator lies in its advanced exprrssion evaluation.I've implement a system that can handle complex medium mathematical expressions,not just simple binary operation.
			This is achieve through the use of infix to postfix conversion,a fundamental algorithm in compiler design and expression parsing.By converting user-entered infix expression(the way humans typically write them)
			into postfix notation,the app can then efficiently and accurately evalute them,ensuring correct order of operations and handling of parentheses.

			The user interface .crafted with Jetpack Compose,provides a fluid and rsponsive experience.Compose's declarative UI paradigm allowed me to build dynamic and visually appealing layout wit ease, ensuring
			the app looks great and function seamlessly acros different Android devices.
			 `,
		keyFeatures: [
			"Modern UI with Jetpack Compose",
			"Mathematical Expression Evaluation",
			"Infix to Postfix Conversion",
			"Built with Kotline",
		],
		techUsed: ["Kotline(Jetpack Compose)", "Android Studio", "Material UI"],
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
