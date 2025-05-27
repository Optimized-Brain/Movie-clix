
# StreamVerse 🎬

StreamVerse is a modern, AI-powered movie and TV show discovery platform built with Next.js, React, ShadCN UI, Tailwind CSS, and Genkit. It provides a sleek interface for browsing content, watching trailers, and getting personalized recommendations.

## ✨ Features

- **Modern UI/UX**: Built with ShadCN UI components and Tailwind CSS for a professional and responsive design.
- **Content Discovery**: Browse trending, recently added, and genre-specific movies and TV shows.
- **Detailed Content Pages**: View comprehensive information about each title, including synopsis, cast, release year, rating, duration, and seasons/episodes for TV shows.
- **Video Playback**: Integrated trailer playback.
- **AI-Powered Recommendations**: Utilizes Genkit to provide personalized content suggestions based on viewing history.
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

3.  **Environment Variables:**
    Create a `.env` file in the root of your project. You may need to add API keys or other configuration variables here, especially for Genkit and any external services.
    Example `.env` file:
    ```
    GOOGLE_API_KEY=your_google_api_key_here
    ```
    *(Note: `GOOGLE_API_KEY` is an example; refer to Genkit documentation for specific environment variables required for your AI models.)*

4.  **Run the development server for the Next.js app:**
    ```bash
    npm run dev
    ```
    This will start the Next.js application, typically on `http://localhost:9002`.

5.  **Run the Genkit development server (in a separate terminal):**
    Genkit flows (AI logic) are often run with a separate development server.
    ```bash
    npm run genkit:dev
    # or for auto-reloading on changes
    # npm run genkit:watch
    ```
    This starts the Genkit development environment, allowing you to test and debug your AI flows.

## 🛠️ Key Technologies Used

-   **Next.js**: React framework for server-side rendering, static site generation, and more.
-   **React**: JavaScript library for building user interfaces.
-   **TypeScript**: Superset of JavaScript that adds static typing.
-   **ShadCN UI**: Re-usable UI components built with Radix UI and Tailwind CSS.
-   **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
-   **Genkit (Firebase)**: Toolkit for building AI-powered features, integrated with Google AI models (e.g., Gemini).
-   **Lucide React**: Library for beautiful and consistent icons.
-   **Zod**: TypeScript-first schema declaration and validation library, used with Genkit.

## 📁 Project Structure

Here's a brief overview of the key directories:

```
.
├── public/             # Static assets
├── src/
│   ├── ai/             # Genkit AI flows and configuration
│   │   ├── flows/      # Specific AI flow implementations (e.g., recommend-content.ts)
│   │   ├── dev.ts      # Genkit development server entry point
│   │   └── genkit.ts   # Genkit global initialization
│   ├── app/            # Next.js App Router (pages, layouts, API routes)
│   │   ├── (routes)/   # Route groups and page files (e.g., watch/[id]/page.tsx)
│   │   ├── globals.css # Global styles and ShadCN theme variables
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Homepage
│   ├── components/     # React components
│   │   ├── layout/     # Layout components (e.g., Navbar)
│   │   ├── streamverse/# App-specific components (e.g., ContentCard, HeroVideo)
│   │   └── ui/         # ShadCN UI components
│   ├── hooks/          # Custom React hooks (e.g., useToast, useMobile)
│   ├── lib/            # Utility functions, data sources, etc.
│   │   ├── data.ts     # Mock data and data fetching functions
│   │   └── utils.ts    # General utility functions (e.g., cn for Tailwind)
├── .env                # Environment variables (create this file)
├── components.json     # ShadCN UI configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

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

## 📚 Further Help & Resources

-   [Next.js Documentation](https://nextjs.org/docs)
-   [React Documentation](https://react.dev/)
-   [ShadCN UI](https://ui.shadcn.com/)
-   [Tailwind CSS](https://tailwindcss.com/docs)
-   [Genkit Documentation](https://firebase.google.com/docs/genkit)
-   [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)
-   [Lucide Icons](https://lucide.dev/)

---

Happy Coding!

