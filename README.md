# News Dashboard Project

A simple web application to view the latest news with multiple filters, built with **ReactJS** on the frontend and **ExpressJS + MongoDB** on the backend.

## Features

- **Fetch latest news** from NewsData.io API.
- **Filters for news**:
  - Country
  - Category (business, tech, sports, lifestyle, etc.)
  - Language
  - Source
  - Date range
- **All fetched news stored in MongoDB** for fast retrieval.
- **News display in card layout**:
  - Cover image
  - Title
  - Description
  - Category badge
  - Source name
  - Date
  - Link to full news
- **Backend filtering**: All filters are applied on the backend for accurate results.
- **Dynamic filter options**: Categories, countries, languages, and sources are fetched from the database.

## Tech Stack

- **Frontend**: ReactJS, TailwindCSS (optional)
- **Backend**: Node.js, ExpressJS
- **Database**: MongoDB
- **API**: NewsData.io

## How It Works

1. The backend fetches news from NewsData.io API and stores it in MongoDB.
2. A `/filters` endpoint provides all available filter options (countries, categories, languages, sources).
3. Frontend fetches filter options and allows users to select filters.
4. Selecting filters or date range triggers a fetch from `/news-db` endpoint, which returns filtered news from MongoDB.
5. News cards are displayed with title, image, description, category, source, and date.


