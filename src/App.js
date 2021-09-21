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
      searchQuery: '',
      showLocInfo: false,
      cityInfo: {}
    };
  }


  getInfo = async ()=> {
    let location = `${process.env.REACT_APP_SERVER_LINK}/data/weather.json/timezone`
    let AllData = await axios.get(location)
    this.setState({
      cityInfo: AllData.data
    })
  }

  getLocFun = async (e) => {
    e.preventDefault();

    await this.setState({
      searchQuery: e.target.city.value,
    });

    let reqUrl = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_SERVER_LINK}&q=${this.state.searchQuery}&format=json`;

    let locResult = await axios.get(reqUrl);

    this.setState({
      locationResult: locResult.data[0],
      showLocInfo: true,
    });
  };

  render() {
    return (
      <div>
        <header style={{backgroundColor: "gray", padding:'15px'}}>
        <h2>City-Explorer</h2>
        </header>
        <main style={{backgroundColor: "lightgray" , marginTop: '-25px', paddingBottom: '25px', width: '100%', minHeight: '832px'}}>
        <Form onSubmit={this.getLocFun} style={{ width: "25rem" , marginLeft: '25px', marginTop: '25px', paddingBottom: '50px', paddingTop: '50px'}} >
          <Form.Group className="mb-3" controlId="SearchForLocation">
            <Form.Label>Location City</Form.Label>
            <Form.Control type="text" name='city' placeholder="Enter Location City" />
          </Form.Group>
          <Button type="submit" variant="primary">
            Explore!
          </Button>
        </Form>

        {this.state.showLocInfo &&
          <>
            <Card style={{ width: "18rem" , border: '2px solid red', marginLeft: '25px', marginTop: '25px', marginBottom: '25px'}}>
              <Card.Body>
                <Card.Title>Location City</Card.Title>
                <Card.Text>
                  <p>latitude: {this.state.locationResult.lat}</p>
                  <p>longitude: {this.state.locationResult.lon} </p>
                </Card.Text>
                <Card.Img
                  variant="top"
                  src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.locationResult.lat},${this.state.locationResult.lon}&zoom=10`}
                />
              </Card.Body>
            </Card>
          </>
        }

        <p>{this.state.cityInfo.name}</p>
        </main>
        <footer style={{backgroundColor: "gray" , padding:'15px'}}>
          <h3>Create by Ahmad Abulaban</h3>
        </footer>
      </div>
    );
  }
}

export default App;
