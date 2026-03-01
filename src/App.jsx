import axios from "axios";
import React from "react";
import { apiInstance } from "./service/axiosInstance";
const Apiurl = "http://localhost:8080/quotes";
function App() {
  async function getQuotes() {
    try {
      let response = await apiInstance.get("/quotes");
      let data = await response.json();
      let quotes = data;
      console.log(quotes);

    } catch (error) {
      console.log(error);
    }
  }

  getQuotes();
  
  return <div>App</div>;
}

export default App;
