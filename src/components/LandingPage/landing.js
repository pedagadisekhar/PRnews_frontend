import React, { useEffect, useState } from "react";
import axios from "axios"; // Make sure to install axios
import './landing.css';
import Header from "../Header/header";
import backgroundImage from '../../assets/images/home-4.jpg';
import image1 from '../../assets/images/download1.jpg';  // Image for the first news item
import image2 from '../../assets/images/TDP.jpg';      // Image for the second news item
import WhatsAppButton from "../whatsapp/whatsapp";
import ProductUpload from "../Products/UploadProduct";
import { Link, useLocation } from 'react-router-dom';
const HomePage = () => {
  const [articles, setArticles] = useState([]);  // State to store the fetched articles
  const [loading, setLoading] = useState(true);   // Loading state for the API request
  const [error, setError] = useState(null);       // State to handle any errors

  useEffect(() => {
    // Fetch data when the component mounts
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://prnews.today/api/getallArticles');
        console.log(response.data[0])
        setArticles(response.data[0]);  // Assuming response.data contains the articles
        setLoading(false);  // Set loading to false when data is fetched
      } catch (err) {
        console.error('Error fetching articles:', err);
        setError('Failed to load articles');  // Handle error
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);  // Empty dependency array ensures this runs only once when the component mounts

  return (
    <>
      <Header />
      <div className="home-container">
        {/* Hero Section */}
        {/* <section className="hero">
          <div className="hero-content">
            <h1>PR News</h1>
            <p>
              తాజా ప్రెస్ విడుదలలు, కార్పొరేట్ ప్రకటనలు మరియు పరిశ్రమ జ్ఞానంతో అప్‌డేట్ అవ్వండి. మా ప్లాట్‌ఫారమ్ ప్రపంచవ్యాప్తంగా సంస్థల నుండి బ్రేకింగ్ న్యూస్, లోతైన ఆర్టికల్స్ మరియు ముఖ్యమైన నవీకరణలను అందిస్తుంది.
            </p>
            <button className="hero-btn">న్యూస్ చూడండి</button> 
          </div> 
        </section> */}

        {/* Display Articles */}
        <section className="articles-section">
          {/* {loading && <p>Loading articles...</p>}
          {error && <p>{error}</p>}
          {!loading && !error && articles.length === 0 && <p>No articles available</p>} */}
          
          <div className="articles-container">
            {articles.map((article, index) => (
              <div className="article-item" key={index}>
                <Link  to={`/artcle/${article.ArticleID}`}>
                  <img src={`https://prnews.today/${article.Imageurl}`} />
                  </Link>
                <div className="article-content">
                  <h3>{article.Title}</h3>
                  <p>{article.Content}</p>
                  <a href="https://www.youtube.com/@prnewschannel18">YoutubeLink</a>
                </div> 
              </div>
            ))}
          </div>
        </section>

        {/* WhatsApp Button */}
        <WhatsAppButton />
      </div>
    </>
  );
};

export default HomePage;
