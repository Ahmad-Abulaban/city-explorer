import React from "react";
import { Table } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Movietitle</th>
            <th style={{ textAlign: "center" }}>overview</th>
            <th style={{ textAlign: "center" }}>averageVotes</th>
            <th style={{ textAlign: "center" }}>totalVotes</th>
            <th style={{ textAlign: "center" }}>imageUrl</th>
            <th style={{ textAlign: "center" }}>popularity</th>
            <th style={{ textAlign: "center" }}>releasedOn</th>
          </tr>
        </thead>
        <tbody>
          {this.props.MovieResult.map((ele) => {
            return (
              <tr>
                <td>{ele.title}</td>
                <td>{ele.overview}</td>
                <td>{ele.averageVotes}</td>
                <td>{ele.totalVotes}</td>  
                <td><img style={{ width: "15rem" }} src={ele.imageUrl} alt='img' /></td>
                <td>{ele.popularity}</td>
                <td>{ele.releasedOn}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Movie;
