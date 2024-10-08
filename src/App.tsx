import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="image">
        <h1 className="heading">Know the Weather</h1>
        <input className="search" placeholder="search place here..." />
      </div>
      <div className="bottom">
        <div className="cards">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZdUEtYcIfUUrf9py5ZyLAcHHes3uenVaavQ&s"
            className="img"
          />
          <hr className="line" />
          <h1 className="city">Hyderabad</h1>
          <p className="p">16 sep 2024</p>
          <h1> 29 C</h1>
          <p className="p">Humidity : 90%</p>
          <p className="p">Sunrise : 06:02 AM</p>
          <p className="p">Sunset : 06:09 PM</p>
        </div>
        <div className="cards">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUhTgrAEB1d8Y-hj0dazJZkxl691NnXOPurw&s"
            className="img"
          />
          <hr className="line" />
          <h1 className="city">vijayawada</h1>
          <p className="p">16 sep 2024</p>
          <h1> 33 C</h1>
          <p className="p">Humidity : 94%</p>
          <p className="p">Sunrise : 06:05 AM</p>
          <p className="p">Sunset : 06:11 PM</p>
        </div>
        <div className="cards">
          <img
            src="data:image/png;base64,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"
            className="img"
          />
          <hr className="line" />
          <h1 className="city">Bangalore</h1>
          <p className="p">16 sep 2024</p>
          <h1> 29 C</h1>
          <p className="p">Humidity : 92%</p>
          <p className="p">Sunrise : 06:09 AM</p>
          <p className="p">Sunset : 06:17 PM</p>
        </div>
      </div>
    </div>
  );
}
