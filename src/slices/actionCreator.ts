import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const asyncInstaThunk = createAsyncThunk(
  "asyncInstaThunk",
  async (message: string, { getState, requestId }) => {
    console.log("thunk");
    console.log(message);
    // const res = await axios.get('https://www.instagram.com/daikiojm/?__a=1');
    const res = await axios.get(
      "https://api.coindesk.com/v1/bpi/currentprice.json"
    );
    console.log(res.data.bpi.USD.rate);
    console.log(typeof res.data.bpi.USD.rate);
    return res.data.bpi.USD.rate;
  }
);
