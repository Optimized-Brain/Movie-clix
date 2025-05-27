
# StreamVerse 🎬

StreamVerse is a modern, AI-powered movie and TV show discovery platform built with Next.js, React, ShadCN UI, Tailwind CSS, and Genkit. It provides a sleek interface for browsing content, watching trailers, and getting personalized recommendations.

## ✨ Features

- **Modern UI/UX**: Built with ShadCN UI components and Tailwind CSS for a professional and responsive design.
- **Content Discovery**: Browse trending, recently added, and genre-specific movies and TV shows.
- **Detailed Content Pages**: View comprehensive information about each title, including synopsis, cast, release year, rating, duration, and seasons/episodes for TV shows.
- **Video Playback**: Integrated trailer playback.
- **Responsive Design**: Optimized for various screen sizes, from mobile to desktop.
- **Loading Skeletons**: Smooth user experience with skeleton loaders while content is being fetched.

## 🚀 Getting Started

Follow these instructions to get a local copy up and running for development and testing purposes.

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation & Setup

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    # yarn install
    ```


4.  **Run the development server for the Next.js app:**
    ```bash
    npm run dev
    ```
    This will start the Next.js application, typically on `http://localhost:9002`.

## 🛠️ Key Technologies Used

-   **Next.js**: React framework for server-side rendering, static site generation, and more.
-   **React**: JavaScript library for building user interfaces.
-   **TypeScript**: Superset of JavaScript that adds static typing.
-   **ShadCN UI**: Re-usable UI components built with Radix UI and Tailwind CSS.
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
-   **Genkit (Firebase)**: Toolkit for building AI-powered features, integrated with Google AI models (e.g., Gemini).
-   **Lucide React**: Library for beautiful and consistent icons.
-   **Zod**: TypeScript-first schema declaration and validation library, used with Genki

## 📜 Available Scripts

In the `package.json`, you will find several scripts:

-   `npm run dev`: Starts the Next.js development server with Turbopack (usually on port 9002).
-   `npm run genkit:dev`: Starts the Genkit development server.
-   `npm run genkit:watch`: Starts the Genkit development server with watch mode (reloads on file changes).
-   `npm run build`: Builds the Next.js application for production.
-   `npm run start`: Starts the Next.js production server (after running `build`).
-   `npm run lint`: Lints the codebase using Next.js's built-in ESLint configuration.
-   `npm run typecheck`: Runs TypeScript to check for type errors.

## ☁️ Deployment

This project is configured for deployment on **Firebase App Hosting**. The `apphosting.yaml` file contains the basic configuration for this.

To deploy:
1. Ensure you have the Firebase CLI installed and configured.
2. Set up a Firebase project and link it to your local directory.
3. Deploy using the Firebase CLI:
   ```bash
   firebase deploy --only hosting
   # or specific to App Hosting if configured
   ```
   Refer to the [Firebase App Hosting documentation](https://firebase.google.com/docs/app-hosting) for detailed deployment instructions.

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve the app, feel free to:
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

