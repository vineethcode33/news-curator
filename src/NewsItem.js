import React from "react";
import { Table } from "reactstrap";
import "./NewsItem.css";

const NewsItem = ({ newsItems }) => {
  const extractHostname = (url) => {
    if (url) {
      console.log(url);
      let hostname;
      if (url.indexOf("//") > -1) {
        hostname = url.split("/")[2];
      } else {
        hostname = url.split("/")[0];
      }

      //find & remove port number
      hostname = hostname.split(":")[0];
      //find & remove "?"
      hostname = hostname.split("?")[0];

      return hostname;
    } else {
      return url;
    }
  };

  const constructNewsItem = () => {
    const newsRows = [];
    newsItems.forEach((eachNewsItem) => {
      newsRows.push(
        <tr key={eachNewsItem.id}>
          <td>
            <div className="top-row">
              <i className="fa fa-caret-up" aria-hidden="true"></i>
              {eachNewsItem.title}
              <a href="example.com">({extractHostname(eachNewsItem.url)})</a>
            </div>
            <div className="bottom-row">
              {eachNewsItem.score} points by <a href="">{eachNewsItem.by}</a> 3
              hours ago | hide | {eachNewsItem.descendants} comments
            </div>
          </td>
        </tr>
      );
    });
    return newsRows;
  };

  return (
    <Table>
      <tbody>{constructNewsItem()}</tbody>
    </Table>
  );
};

export default NewsItem;
