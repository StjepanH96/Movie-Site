Movie App

Getting Started

Prerequisites

Before you can run this project locally, make sure you have the following installed:

	•	Node.js (recommended version: 16.x or higher)
	•	Docker
	•	Docker Compose

Installation

Follow these steps to get your development environment set up:

	1.	Clone the repository

    git clone https://yourrepository.com/movie-app.git
    cd movie-app

    2.	Install dependencies
        
    npm install

    3.	Start the application using Docker Compose 

    docker-compose up

    4.	Optionally you can run the development server only, there is not added volume in docker file so if you want make changes and see them you need to  use this command or add volume in docker file.

    npm run dev

Architecture


	•	React: Manages the UI components.
	•	Next.js: Facilitates server-side rendering and static site generation.
	•	Redux & Redux Toolkit: Manages state across the application, enhancing Redux usage for easier configuration and maintenance. Favorites are saved using local storage inside FavoritesContext.tsx.
	•	TMDB Movie APIs: Nested inside pages/api. Browser caching is also utilized to enhance performance.

Backend Setup

	•	Next.js API Routes: pages/api/search.js Handles backend operations like searching and fetching movies directly within the Next.js framework. 

Modern JavaScript Features (ES6+)

	•	Utilizes arrow functions, async/await, destructuring, modules, and more to keep the codebase modern and clean.

Features

	•	Home Page - Top 3 Movies of the Week: Showcases the most popular movies based on user ratings and also displays movies filtered by genre.
	•	Most Watched - Infinite Scrolling: Loads more movies as the user scrolls down, providing a seamless browsing experience. When users apply filters for genre, year, and score, it resets the pagination to the first page request and follows the same policy.
	•	New Movies: Shows new movies that are currently playing.
	•	Movie Details: Contains all information about a movie, including a cast slider that slides horizontally. Additionally, banners and trailers are pulled for movies, with some featuring preview videos or interviews.
	•	Search: Includes search options, which use a backend endpoint and return a list of movies based on the query.
	•	Responsive Design: Ensures the app looks great on both desktops and mobile devices. On mobile, an extra page is added for favorites to map favorite movies. For larger screens, there is a dropdown.

Scripts

Here are some useful commands you can use:

	•	npm run dev: Runs the app in development mode.
	•	npm run build: Builds the app for production.
	•	npm start: Starts a production server.
	•	npm run lint: Lints and fixes files.
