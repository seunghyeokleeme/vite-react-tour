import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [getCoin, setGetCoin] = useState(0);
  const [amount, setAmount] = useState(0);
  const [coinName, setCoinName] = useState("Btc");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const selectCoin = (event) => {
    const {
      target: { value: index },
    } = event;
    if (index === "-1") {
      setGetCoin(0);
      return;
    }
    setGetCoin(coins[index].quotes.USD.price / coins[0].quotes.USD.price);
    setCoinName(coins[index].id);
    setAmount(0);
  };

  const onChange = (event) => {
    setAmount(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <select onChange={selectCoin}>
            <option key="-1" value="-1">
              select coin
            </option>
            {coins.map((coin, index) => (
              <option key={index} value={index}>
                {coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <hr />
          {getCoin !== 0 ? (
            <div>
              <label htmlFor="btc">Btc:</label>
              <input
                id="btc"
                onChange={onChange}
                value={amount}
                type="number"
                placeholder="btc"
              />
              <div>
                <strong>
                  {coinName}:{amount * getCoin}개
                </strong>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
