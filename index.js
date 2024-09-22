const axios = require('axios');

const getPrice = async () => {
  try {
    const response = await axios.get('https://api.binance.com/api/v3/avgPrice', {
      params: {
        symbol: 'BTCUSDT'
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

getPrice();
