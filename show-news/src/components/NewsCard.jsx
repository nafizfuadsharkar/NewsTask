import React from "react";

const NewsCard = ({article}) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md p-4 flex flex-col">
      {article.image_url && (
        <img
          src={article.image_url}
          alt={article.title}
          className="w-full h-48 object-cover mb-4"
        />
      )}
      <h2 className="font-bold text-lg mb-2">{article.title}</h2>
      <p className="text-sm text-gray-700 mb-2">{article.description}</p>
      <div className="flex justify-between items-center text-xs text-gray-500 mb-2">
        <span>{article.category?.join(", ") || "Unknown"}</span>
        <span>{article.source_name || "Unknown source"}</span>
      </div>
      <span className="text-xs text-gray-400 mb-2">
        {new Date(article.pubDate).toLocaleString()}
      </span>
      <a
        href={article.link || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-blue-500 hover:underline"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
