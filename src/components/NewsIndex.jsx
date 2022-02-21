import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import NewsCard from './NewsCard'


const NewsIndex = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.newsFeed);
  return (
    <>
      <NewsCard />
    </>
  )
}

export default NewsIndex
