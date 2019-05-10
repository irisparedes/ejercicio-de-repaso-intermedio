import React from 'react';
import './App.css';

const data = {
  "version": "v0.0.0",
  "palettes": [
    {
      "name": "Tardis Blue",
      "from": "Doctor Who",
      "colors": [
        "003A6E",
        "9B9A99",
        "000000",
        "FFFFFF",
        "6F4500"
      ]
    },
    {
      "name": "Millenium Falcon",
      "from": "Star Wars",
      "colors": [
        "B6B6BE",
        "D8D7D4",
        "413A31",
        "746C66",
        "A32D2C"
      ]
    },
    {
      "name": "Battlestar Galactica",
      "from": "Battlestar Galactica",
      "colors": [
        "080F19",
        "1B2E3F",
        "364269",
        "3D6973",
        "E5635F"
      ]
    },
    {
      "name": "Serenity",
      "from": "Firefly",
      "colors": [
        "3C5375",
        "7285A6",
        "96AABF",
        "F1DB7E",
        "0C0C0C"
      ]
    },
    {
      "name": "Nostromo",
      "from": "Alien",
      "colors": [
        "08070C",
        "F4F3F5",
        "121828",
        "464F75",
        "9ABEF2"
      ]
    }
  ]
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.logMyColor = this.logMyColor.bind(this);
  }

  logMyColor(event) {
    const quien = event.currentTarget;
    console.log(quien.innerHTML);
  }

  render() {
    return (
      <div className="App">
        <h1 className="App__title">Mis paletas :D</h1>
        <ul className="palettes">
          {data.palettes.map((item, index) => {
            return (
              <li className="palettes__item" key={index}>
                <h2 className="palettes__title">{item.name}</h2>
                <p><small>{item.from}</small></p>
                <ol>
                  {item.colors.map((color,indexColor) => {
                    return (
                    <li 
                      style={ {backgroundColor: `#${color}`} } 
                      key={indexColor}
                      onClick={this.logMyColor}
                    >
                      #{color}
                    </li>)
                  })}
                </ol>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  
}

export default App;
