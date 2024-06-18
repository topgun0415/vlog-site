import React, { useState } from 'react';
import ArticleItem from './ArticleItem';
import Pagination from './Pagination';
import ControlPanel from './ControlPanel';

const BlogListPage = () => {
  const [articles, setArticles] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 4;

  return (
    <div>
      <ControlPanel
        showAll={showAll}
        setShowAll={setShowAll}
        selectedArticles={selectedArticles}
        setSelectedArticles={setSelectedArticles}
        articles={articles}
        setArticles={setArticles}
      />
      <div className="grid grid-cols-1 gap-4">
        {articles
          .slice((currentPage - 1) * articlesPerPage, currentPage * articlesPerPage)
          .map((article) => (
            <ArticleItem
              key={article.id}
              article={article}
              selectedArticles={selectedArticles}
              setSelectedArticles={setSelectedArticles}
            />
          ))}
      </div>
      <Pagination
        totalArticles={articles.length}
        articlesPerPage={articlesPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default BlogListPage;