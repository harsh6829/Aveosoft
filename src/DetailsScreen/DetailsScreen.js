import { Component } from "react";
import React from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import "./DetailsScreen.css";
class DetailsScreen extends Component {
  state = {
    id: Number,
    details: [],
    price: Number,
    name: "",
    discription: "",
  };

  componentDidMount() {
    axios
      .get(
        `https://aveosoft-react-assignment.herokuapp.com/products/${this.props.match.params.id}`
      )
      .then((response) => {
        this.setState({ details: response.data });
        this.setState({ id: response.data.id });
        this.setState({ name: response.data.name });
        this.setState({ price: response.data.price });
        this.setState({ description: response.data.description });

        console.log(response.data);
      });
  }
  render() {
    return (
      <Card className="card">
        <div><h3>Id:</h3>{this.state.id}</div>
        <br />
        <div><h3>Name:</h3>{this.state.name}</div>
        <br />
        <div><h3>Price:</h3>{this.state.price}</div>
        <br />
        <div><h3>Description:</h3>{this.state.description}</div>
        
      </Card>
    );
  }
}

export default DetailsScreen;
