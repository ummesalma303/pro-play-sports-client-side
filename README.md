# Pro Play Sports

![Pro Play Sports Screenshot](https://i.ibb.co.com/WWRYVHMk/Screenshot-173.png) <!-- Replace with an actual screenshot -->

## 🚀 Project Overview

**Pro Play Sports** is a web application that provides sports enthusiasts with essential tools, resources, and information about various sports equipment. The platform allows users to explore different products, compare options, and make informed purchasing decisions.

## 🌍 Live Project

🔗 Visit Live Website: https://sportsequirement.web.app/ 

## 🛠 Technologies Used

- **Frontend**: React, React Router DOM, Tailwind CSS, DaisyUI
- **Backend & Services**: Firebase
- **Animation & UI Enhancements**: Lottie React, React Icons, React Awesome Reveal, Swiper
- **Alerts & Notifications**: SweetAlert2, React Tooltip, React Toggle
- **Development Tools**: Vite, ESLint, PostCSS

---

## 📖 Table of Contents

- [Features](#-features)
- [Installation](#-installation)
- [Dependencies](#-dependencies)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Troubleshooting](#-troubleshooting)
- [Contributors](#-contributors)
- [License](#-license)

---

## ✨ Features

- 🏆 Explore a wide range of sports equipment.
- 🔍 Search and sort items efficiently.
- 🛒 Add items to a wishlist or cart.
- 🔥 Smooth animations and interactive UI.
- 🔐 Secure authentication via Firebase.

---

## 📥 Installation

Follow these steps to run the project locally:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/ummesalma303/pro-play-sports-client-side.git
   cd pro-play-sports
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Create an `.env.local` file** in the root directory and add the following environment variables:
   ```sh
   VITE_apiKey=your_api_key
   VITE_authDomain=your_auth_domain
   VITE_projectId=your_project_id
   VITE_storageBucket=your_storage_bucket
   VITE_messagingSenderId=your_messaging_sender_id
   VITE_appId=your_app_id
   ```

4. **Start the development server**:
   ```sh
   npm run dev
   ```

---

## 📦 Dependencies

### Main Dependencies:
```json
"@emotion/react": "^11.13.5",
"firebase": "^11.0.2",
"localforage": "^1.10.0",
"lottie-react": "^2.4.0",
"match-sorter": "^8.0.0",
"react": "^18.3.1",
"react-awesome-reveal": "^4.2.14",
"react-dom": "^18.3.1",
"react-icons": "^5.4.0",
"react-loader-spinner": "^6.1.6",
"react-router-dom": "^7.0.2",
"react-toggle": "^4.1.3",
"react-tooltip": "^5.28.0",
"sort-by": "^1.2.0",
"sweetalert2": "^11.14.5",
"swiper": "^11.1.15"
```

### Development Dependencies:
```json
"@eslint/js": "^9.15.0",
"@types/react": "^18.3.12",
"@types/react-dom": "^18.3.1",
"@vitejs/plugin-react": "^4.3.4",
"autoprefixer": "^10.4.20",
"daisyui": "^4.12.14",
"eslint": "^9.15.0",
"eslint-plugin-react": "^7.37.2",
"eslint-plugin-react-hooks": "^5.0.0",
"eslint-plugin-react-refresh": "^0.4.14",
"globals": "^15.12.0",
"postcss": "^8.4.49",
"tailwindcss": "^3.4.15",
"vite": "^6.0.1"
```

---

## ⚙️ Configuration

Ensure you have a Firebase project set up and replace `.env.local` values with your actual Firebase configuration.

---

## 📚 Usage

- Start the project using `npm run dev`.
- Open `http://localhost:5173` in your browser.
- Register/Login using Firebase authentication.
- Explore different sports equipment, add to wishlist, and compare options.

---

## 🔧 Troubleshooting

- **Vite not working?** Try clearing the cache:  
  ```sh
  rm -rf node_modules && npm install
  ```
- **Firebase authentication errors?** Ensure your Firebase project settings are correct.









<!--# Pro Play Sports

## Live Preview: https://sportsequirement.web.app/
## Feature: 

- Tailwind CSS: The component leverages Tailwind CSS, enabling the creation of highly customizable and modern UI components.

- Responsive Design: Fully responsive layout ensures seamless browsing across all devices, from desktops to smartphones.

- SweetAlert: Displays delightful confirmation messages upon successful submissions, enhancing the user experience.

- React Router DOM: Enables smooth navigation between pages without reloading, ensuring a fast and seamless user interface.

- React Awesome Reveal: Adds elegant animations to your components with the help of this powerful NPM package.

- React Tooltip: Provides informative tooltips, such as showing the user's name when hovering over their profile.
-->
