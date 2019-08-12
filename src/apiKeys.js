import axios from "axios";

// Get currencies Api
export async function getData(code) {
  try {
    const res = await axios.get("https://blockchain.info/ticker");
    const currency = res.data;
    const price = currency[code].last;
    const symbol = currency[code].symbol;
    const codes = Object.keys(currency);
    return { price, symbol, codes };
  } catch (error) {
    console.log(error);
  }
}

// // Conversion API
export async function getConversion(code, amount) {
  const url = `https://blockchain.info/tobtc?currency=${code}&value=${amount}`;
  try {
    const res = await axios.get(url);
    const btcValue = await res.data;
    return btcValue;
  } catch (error) {
    console.log(error);
  }
}
