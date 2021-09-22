import React from "react";

class Weather extends React.Component {
  render() {
    return (
      <div>
        {this.props.WeatherResult.map((ele) => {
            return (
              <>
                <p>date: {ele.date}</p>
                <p>
                  description: {ele.description}</p>
              </>
            );
          })}
      </div>
    );
  }
}

export default Weather;
