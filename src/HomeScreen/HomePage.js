import React, { Component, Fragment } from "react";

import Post from "../Post/Post";
import axios from "axios";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import "./HomePage.css";
class Homecomp extends Component {
  state = {
    posts: [],
    selectedOption: "Mobile",
  };

  componentDidMount() {
    axios
      .get("https://aveosoft-react-assignment.herokuapp.com/products")
      .then((response) => {
        this.setState({ posts: response.data });

        console.log(response);
      });
  }

  _onSelect = (e) => {
    this.setState({ selectedOption: e.value });
  };

  renderPost = (post) => {
    if (this.state.selectedOption === "Mobile" && post.categoryId === 1) {
      return (
        <Post
          key={post.id}
          title={post.name}
          categoryId={post.categoryId}
          id={post.id}
        />
      );
    } else if (
      this.state.selectedOption === "laptop" &&
      post.categoryId === 0
    ) {
      return (
        <Post
          key={post.id}
          title={post.name}
          categoryId={post.categoryId}
          id={post.id}
        />
      );
    } else {
      return null;
    }
  };

  render() {
    const options = ["Mobile", "laptop"];
    return (
      <Fragment>
        <Dropdown
          options={options}
          onChange={this._onSelect}
          value={this.state.selectedOption}
          placeholder="Select an option"
          className={"dropdown"}
        />
        {this.state.posts.map((post) => {
          return this.renderPost(post);
        })}
      </Fragment>
    );
  }
}
export default Homecomp;
