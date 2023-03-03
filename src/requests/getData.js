import axios from "axios";
import React, { useEffect } from "react";

// require("dotenv").config();

// const MY_KEY = process.env.REACT_APP_API_KEY;

const getTramData = () => {
  axios
    .get("http://localhost:4000/")
    .then(({ data }) => {
      // setTramData(data);
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

// const getTramData = () => {
// const endpoint = `https://api.tfgm.com/odata/Metrolinks?`;

//   axios({
//     method: "get",
//     url: "https://api.tfgm.com/odata/Metrolinks?",
//     headers: {
//       "Ocp-Apim-Subscription-Key": "968f2b248786444083c8debf06072f31",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "content-type",
//       "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
//     },
//   })
//     .then((res) => console.log(res.data.value))
//     .catch((err) => console.log(err));
// };

// const getTramData = async () => {
//   try {
//     const res = await axios.get(`https://api.tfgm.com/odata/Metrolinks?`, {
//       headers: {
//         "Ocp-Apim-Subscription-Key": "968f2b248786444083c8debf06072f31",
//       },
//       params: {},
//     });
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

export default getTramData;
