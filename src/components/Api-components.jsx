import { Component } from "react";
import axios from "axios";
import CardComponent from "./wether-card-component";
import "./card.modules.css";

class ApiComponent extends Component {
  state = {
    response: null,
    input: "",
  };

  componentDidMount() {
    this.getLocation();
  }

  getLocation() {
    if (navigator?.geolocation) {
      navigator?.geolocation?.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        if (latitude && longitude) {
          this.fetchData(latitude, longitude);
        }
      });
    } else {
      console.log("user error throw");
    }
  }

  // current location data fetch data function

  fetchData = async (lat, long) => {
    const { status, data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=61776afa2133a9f1858767134e0dd749`
    );

    if (status == 200) {
      this.setState({
        response: data,
      });
    }
  };


    //search Api fetch data function

  searchData = async (query) => {
    const searchApi =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=61776afa2133a9f1858767134e0dd749`);

    this.setState({
      response: searchApi.data,
    });
  };

//input values function

  handleInputChange = (event) => {
    
    this.setState({
      input: event.target.value.trim(),
    },()=>{
        
    });
  };
 

//search button function

  search = () => {
    const { input } = this.state;
    this.searchData(input);
  
// let items = JSON.parse(localStorage.getItem('city')) || [];
// items.push(input);
// localStorage.setItem('city', JSON.stringify(items));

  };

  render() {
    const { response } = this.state;

    return (
      <div className="body-card">
        {response ? (
          Math.floor(response.main.temp_max - 273.15) > 25 ? (
            <div className="main_card1">
              <CardComponent
                name={response.name}
                temp_max={`Temp_max: ${Math.floor(
                  response.main.temp_max - 273.15
                )}°C`}
                temp_min={`Temp_min: ${Math.floor(
                  response.main.temp_min - 273.15
                )}°C`}
                input={this.input}
                onInputChange={this.handleInputChange}
                onSearch={this.search}
              />
            </div>
          ) : (
            <div className="main_card">
              <CardComponent
                name={response.name}
                temp_max={`Temp_max: ${Math.floor(
                  response.main.temp_max - 273.15
                )}°C`}
                temp_min={`Temp_min: ${Math.floor(
                  response.main.temp_min - 273.15
                )}°C`}
                search={this.input}
                onInputChange={this.handleInputChange}
                onSearch={this.search}
              />
            </div>
          )
        ) : (
          <h2>wait....</h2>
        )}
      </div>
    );
  }
}

export default ApiComponent;
