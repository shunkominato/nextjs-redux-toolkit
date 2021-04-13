import axios from "axios";

export const getbits = async () => {
  const res = await axios.get(
    "https://api.coindesk.com/v1/bpi/currentprice.json"
  );
  console.log(res.data.bpi.USD.rate);
  const bit = { ...res };

  return bit.data.bpi.USD.rate;
};
