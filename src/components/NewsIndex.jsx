import React, { useEffect, useState } from 'react';
import NewsService from '../modules/NewsService';
import NewsCard from './NewsCard';

const NewsIndex = () => {
  const fetchNews = async () => {
    const news = await NewsService.index()
    // debugger
  }

  useEffect(() => {
    fetchNews()
  }, [])
  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
