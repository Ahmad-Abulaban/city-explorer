import React from "react";
import { Table } from "react-bootstrap";

class Movie extends React.Component {
  render() {
    return (

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>MovieTitle</th>
          </tr>
        </thead>
        <tbody>
          {this.props.MovieResult.map((ele) => {
            return (
              <tr>
                <td>{ele.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Movie;
