import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ArticleDetail.css';  // Assuming the CSS is saved in ArticleDetail.css
import Header from '../Header/header.js';

const ArticalDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    // Fetch article details by ID from the API
    axios
      .get(`https://prnews.today/api/getArticleById/${id}`)
      .then((response) => {
        setArticle(response.data); // Assuming the response contains the article details
      })
      .catch((error) => {
        console.error('Error fetching article:', error);
      });
  }, [id]);

  // Display loading message while article is being fetched
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="article-detail-container">
        <h1>{article.Title}</h1>
        {/* Display the first image */}
        {article.Imageurl && (
          <img
            src={`https://prnews.today/${article.Imageurl}`}
            alt={article.Title}
            className="article-image"
          />
        )}
        {/* Display the second image if it exists */}
        {article.SecondImageUrl && (
          <img
            src={`https://prnews.today/${article.SecondImageUrl}`}
            alt="Second Image"
            className="article-image"
          />
        )}
        {/* Display the third image if it exists */}
        {article.ThirdImageUrl && (
          <img
            src={`https://prnews.today/${article.ThirdImageUrl}`}
            alt="Third Image"
            className="article-image"
          />
        )}
        <p>{article.Content}</p>
        <p>{article.SecondContent}</p>
      </div>
    </>
  );
};

export default ArticalDetail;
