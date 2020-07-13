import React from "react";
import { Table } from "reactstrap";
import "./NewsItem.css";

const NewsItem = () => {
  return (
    <Table>
      <tbody>
        <tr>
          <td>
            <div className="top-row">
              <i class="fa fa-caret-up" aria-hidden="true"></i>
              This is a sample news item.
              <a href="example.com">(example.com)</a>
            </div>
            <div className="bottom-row">
              120 points by <a href="">exampleid</a> 3 hours ago | hide |
              comments
            </div>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default NewsItem;
