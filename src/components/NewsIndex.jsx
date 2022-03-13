import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard'
import NewsService from '../modules/NewsService'

const NewsIndex = () => {
  const fetchNews = async () => {
  const news = await NewsService.index()
}
  useEffect(() => {
    fecthNews()
  }, [])

  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
