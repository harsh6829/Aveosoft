import React, { Component } from "react";
import "./Post.css";
import { Link } from "react-router-dom";

class Post extends Component {
  detailView = () => {
    window.location.pathname("DetailsScreen");
  };
  render() {
    return (
      <article className="Post" onClick={this.props.clicked}>
        <h1>{this.props.title}</h1>
        <div>{this.props.id}</div>
        <Link to={`/Details/${this.props.id}`}>
          <button className="btnstyle">View Details</button>
        </Link>
      </article>
    );
  }
}

export default Post;
