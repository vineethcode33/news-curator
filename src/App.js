import React, { useState, useEffect } from "react";
import "./App.css";

import HeaderBar from "./HeaderBar";
import NewsItem from "./NewsItem";

function App() {
  const [error, setError] = useState(false);
  const [newsItems, setNewsItems] = useState([]);

  const fetchData = (URI) => {
    return fetch(URI)
      .then((response) => response.json())
      .then((response) => response);
  };

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then((res) => res.json())
      .then(
        (result) => {
          const requests = [];
          result.slice(0, 30).forEach((eachResult) => {
            requests.push(
              fetchData(
                `https://hacker-news.firebaseio.com/v0/item/${eachResult}.json?print=pretty`
              )
            );
          });

          Promise.all(requests).then((resultNews) => {
            setNewsItems(resultNews);
          });
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <HeaderBar />
      <NewsItem newsItems={newsItems} />
    </div>
  );
}

export default App;
