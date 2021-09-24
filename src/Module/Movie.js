import React from "react";
import { Table } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Movies</th>
          </tr>
        </thead>
        <tbody>
          {this.props.MovieResult.map((ele) => {
            return (
              <tr style={{ textAlign: "center"}}>
                <br />
                <tr>{ele.title}</tr>
                <br />
                <tr>{ele.overview}</tr>
                <br />
                <tr>{ele.averageVotes}</tr>
                <br />
                <tr>{ele.totalVotes}</tr>  
                <img style={{ width: "15rem" }} src={ele.imageUrl} />
                <tr>{ele.popularity}</tr>
                <br />
                <tr>{ele.releasedOn}</tr>
                <br />
                <br />
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Movie;
