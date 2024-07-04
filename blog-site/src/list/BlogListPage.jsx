import React, { useState } from 'react';
import ArticleItem from './ArticleItem';
import ControlPanel from './ControlPanel';
import PersonIcon from '@mui/icons-material/Person';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

const BlogListPage = () => {
  
  const articles = [
    { id: 1, title: 'Title 1', text: 'Text 1', imageUrl: '/favicon.jpg' },
    { id: 2, title: 'Title 2', text: 'Text 2', imageUrl: '/favicon.jpg' },
    { id: 3, title: 'Title 3', text: 'Text 3', imageUrl: '/favicon.jpg' },
    { id: 4, title: 'Title 4', text: 'Text 4', imageUrl: '/favicon.jpg' },
    { id: 5, title: 'Title 5', text: 'Text 5', imageUrl: '/favicon.jpg' },
    { id: 6, title: 'Title 6', text: 'Text 6', imageUrl: '/favicon.jpg' },
    { id: 7, title: 'Title 7', text: 'Text 7', imageUrl: '/favicon.jpg' },
    { id: 8, title: 'Title 8', text: 'Text 8', imageUrl: '/favicon.jpg' },
    { id: 9, title: 'Title 9', text: 'Text 9', imageUrl: '/favicon.jpg' },
    { id: 10, title: 'Title 10', text: 'Text 10', imageUrl: 'https://via.placeholder.com/150' },
  ];
  
  return (
    <div>
      {/*
      <ControlPanel
        showAll={showAll}
        setShowAll={setShowAll}
        selectedArticles={selectedArticles}
        setSelectedArticles={setSelectedArticles}
        articles={articles}
        setArticles={setArticles}
      />
            <div className="grid grid-cols-1 gap-4">
        <ArticleItem/>
      </div>
      <Pagination/>
    <ControlPanel/>
      */}
   <div className="h-screen bg-black-100 overflow-hidden">
      <div className="absolute top-20 left-0 right-0 z-10 flex justify-end space-x-4 px-4">
        <PersonIcon className="text-orange-400 self-center" />
        <button className="bg-transparent text-orange-700 border border-white py-2 px-0 rounded-full hover:bg-white hover:text-black transition duration-300 relative overflow-hidden">
          <span className="relative z-10">myself</span>
        </button>
        <PeopleAltIcon className="text-green-600 self-center" />
        <button className="bg-transparent text-green-800 border border-white py-2 px-0 rounded-full hover:bg-white hover:text-black transition duration-300 relative overflow-hidden">
          <span className="relative z-10">everyone</span>
        </button>
      </div>
      <div className="flex items-center justify-center h-screen">
        <div className="container mx-auto py-20">
          <ArticleItem />
        </div>
      </div>
    </div>
    </div>

  );
};

export default BlogListPage;