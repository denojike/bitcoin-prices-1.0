import axios from "axios";

//Gets Bitcoin Data
export function getData() {
  axios.get("https://blockchain.info/ticker").then(currencies => {
    const d = currencies;
    return d;
  });
}
