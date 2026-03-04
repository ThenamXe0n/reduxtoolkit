import React from "react";
import { apiInstance } from "./service/axiosInstance";
import { useDispatch, useSelector } from "react-redux";
import { increment, manualCountValue } from "./redux/counterSlice.js";
const Apiurl = "http://localhost:8080/quotes";
function App() {
  const c = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  // async function getQuotes() {
  //   try {
  //     let response = await apiInstance.get("/quotes");
  //     let data = await response.json();
  //     let quotes = data;
  //     console.log(quotes);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // getQuotes();

  return (
    <div>
      count {c}{" "}
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <input onChange={(e)=>{dispatch(manualCountValue({value:e.target.value}))}} type="text" />
    </div>
  );
}

export default App;
