import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locationResult: {},
      WeatherResult: [],
      searchQuery: "",
      showLocInfo: false,
    };
  }

  getLocFun = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value,
    });

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_SERVER_LINK}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(reqUrl);

    let weatherUrl = `http://localhost:3005/weather?SearchQuery=${this.state.searchQuery}`;

    let weatherResult = await axios.get(weatherUrl);

    this.setState({
      locationResult: locResult.data[0],
      WeatherResult: weatherResult.data,
      showLocInfo: true,
    });
    console.log(this.state.WeatherResult);
  };

  render() {
    return (
      <div>
        <header style={{ backgroundColor: "gray", padding: "15px" }}>
          <h2>City-Explorer</h2>
        </header>
        <main
          style={{
            backgroundColor: "lightgray",
            marginTop: "-25px",
            paddingBottom: "25px",
            width: "100%",
            minHeight: "832px",
          }}
        >
          <Form
            onSubmit={this.getLocFun}
            style={{
              width: "25rem",
              marginLeft: "25px",
              marginTop: "25px",
              paddingBottom: "50px",
              paddingTop: "50px",
            }}
          >
            <Form.Group className="mb-3" controlId="SearchForLocation">
              <Form.Label>Location City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder="Enter Location City"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              Explore!
            </Button>
          </Form>

          {this.state.showLocInfo && (
            <>
              <Card
                style={{
                  width: "25rem",
                  border: "2px solid red",
                  marginLeft: "25px",
                  marginTop: "25px",
                  marginBottom: "25px",
                }}
              >
                <Card.Body>
                  <Card.Title>Location City</Card.Title>
                  <Card.Text>
                    <p>latitude: {this.state.locationResult.lat}</p>
                    <p>longitude: {this.state.locationResult.lon} </p>

                    {this.state.WeatherResult.map((ele) => {
                      return (
                        <>
                          <p>date: {ele.date}</p>
                          <p>
                            description: {ele.description}</p>
                        </>
                      );
                    })}
                  </Card.Text>
                  <Card.Img
                    variant="top"
                    src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_SERVER_LINK}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`}
                  />
                </Card.Body>
              </Card>
            </>
          )}
        </main>
        <footer style={{ backgroundColor: "gray", padding: "15px" }}>
          <h3>Create by Ahmad Abulaban</h3>
        </footer>
      </div>
    );
  }
}

export default App;
