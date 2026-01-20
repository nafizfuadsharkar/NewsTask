import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ articles }) => {
   if (!articles.length) return <p>No news found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article) => (
        <NewsCard key={article._id || article.article_id} article={article} />
      ))}
    </div>
  );
};

export default NewsList;
