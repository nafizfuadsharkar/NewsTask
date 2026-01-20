import React, { useEffect, useState } from "react";
import FilterBar from "./components/FilterBar";
import NewsList from "./components/NewsList";
import { fetchFilters, fetchNews } from "./services/api";

export default function App() {
  const [filters, setFilters] = useState({
    countries: [],
    categories: [],
    languages: [],
    sources: [],
  });

  const [selected, setSelected] = useState({
    country: "",
    category: "",
    language: "",
    source: "",
    from: "",
    to: "",
  });

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);

  // fetch filter data
  useEffect(() => {
    const getFilters = async () => {
      const data = await fetchFilters();
      setFilters(data);
    };
    getFilters();
  }, []);

  // fetch news whenever filters change
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const data = await fetchNews(selected);
      setArticles(data);
      setLoading(false);
    };
    getNews();
  }, [selected]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-black">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Latest News</h1>

        <FilterBar
          filters={filters}
          selected={selected}
          setSelected={setSelected}
        />

        {loading ? <p>Loading...</p> : <NewsList articles={articles} />}
      </div>
    </div>
  );
}
