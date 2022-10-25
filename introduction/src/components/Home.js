import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';


const listStyle = {
  listStyle: "none",
  margin: 0,
  padding: 0,
};

const listItemStyle = {
  margin: "28px 0px",
  padding: "5px 40px",
  background: "#E4E1DB"
};

const labelStyle = {
  color: "#333333",
  paddingRight: 5,
};

const titleStyle = {
  textDecoration: "none",
  color: "#333",
}

const moreStyle = {
  color: "#333",
  marginBottom: "5px",
  textDecoration: "none",
  borderBottom: "1px solid #FF00FF",
  paddingBottom: "3px"
}

function Home({ filter }) {
  const [articles, setArticles] = useState([]);

  // Reset articles when filter changes
  useEffect(() => {
    if (filter) setArticles([]);
  }, [filter]);

  // Fetch articles
  useEffect(() => {
    const fetchArticles = async (filter = '') => {
      try {
        const data = await fetch(
          `https://dev.to/api/articles${filter ? `?tag=${filter}` : ''}`,
        );
        const result = await data.json();

        if (result) {
          setArticles(result);
        }
      } catch (e) {
        console.log('Error', e.message);
      }
    };

    if (!articles.length) {
      fetchArticles(filter);
    }
  }, [articles, filter]);

  return (
    <>
      <ul style={listStyle}>
        {articles.length === 0 ? <li style={listItemStyle}>...</li> : null}
        {articles.map(({id, title, description, user}, index) => (
          <li key={id} style={listItemStyle}>
          <h2>
            <span style={labelStyle}>{index + 1}.</span>
            <Link style={titleStyle} to={`articles/${id}`}>
              {title}
            </Link>
          </h2>
          
          {description}
          <br></br><br></br>
          <Link to={`/articles/${id}`} style={moreStyle}>Les mer</Link>
          <br></br><br></br>
        </li>
        ))}
      </ul>
    </>
  );
}

export default Home;
