import { useState, useEffect } from "react";
import "./App.css";
import Brew from "./components/Brew";

const ACCESS_KEY = import.meta.env.VITE_APP_ACCESS_KEY;

function App() {
  const [brewery, setBrewery] = useState([]);
  const [totalNum, setTotalNum] = useState(0);
  const [inputFilter, setInputFilter] = useState({
    size: "",
    zip: "",
  });

  // const getCoordinates = (zipcode) => {
  //   fetch(
  //     `https://maps.googleapis.com/maps/api/geocode/json?address=${zipcode}&key=${ACCESS_KEY}`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const latitude = data.results[0].geometry.location.lat;
  //       const longitude = data.results[0].geometry.location.lng;
  //       // setInputLocation({ latitude, longitude });
  //       // console.log(userLocation);
  //     });
  // };

  const fetchAPI = async (size = "", zip = "") => {
    console.log("fetchAPI:", size, zip);
    const json = await (
      await fetch(
        `https://api.openbrewerydb.org/v1/breweries${
          zip != "" ? "?by_postal=" + zip : ""
        }${size != "" ? "?by_type=" + size : ""}`
      )
    ).json();
    setBrewery(json);
    setTotalNum(json.length);
    setInputFilter({ size: "", zip: "" });
  };

  const handleInputChange = (e) => {
    setInputFilter((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    fetchAPI(inputFilter.size, inputFilter.zip);
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="App">
      <h1>Let's Get Drunk! 🍻</h1>
      <h3>Find brewery near you</h3>

      <div className="Summary">
        <div className="Sum Total">
          <strong>TOTAL</strong>
          <p>{totalNum}</p>
        </div>
        <div className="Sum Cities">
          <strong>CITIES</strong>
          <p></p>
        </div>
        <div className="Sum Types">
          <strong>TYPES</strong>
          <p></p>
        </div>
      </div>

      <div className="Filter">
        <label for="size">Type: </label>
        <select id="size" name="size" onChange={handleInputChange}>
          <option value=""></option>
          <option value="nano">Nano</option>
          <option value="micro">Micro</option>
          <option value="large">Large</option>
          <option value="regional">Regional</option>
          <option value="brewpub">Brewpub</option>
          <option value="bar">Bar</option>
        </select>

        <label for="zip">Zip Code: </label>
        <input
          id="zip"
          name="zip"
          type="text"
          pattern="[0-9][0-9][0-9][0-9][0-9]"
          placeholder="Enter zip code"
          value={inputFilter.zip}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit}>Search</button>
      </div>

      {brewery.map((brew) => (
        <Brew
          key={brew.id}
          name={brew.name}
          street={brew.street}
          city={brew.city}
          state={brew.state}
          postal={brew.postal_code.slice(0, 5)}
          website={brew.website_url}
          phone={brew.phone}
          type={brew.brewery_type}
        />
      ))}
    </div>
  );
}

export default App;
