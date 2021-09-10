import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";

const Main = () => {
  const BreedsURL = "https://api.thecatapi.com/v1/breeds";

  const [catList, setCatList] = useState([]);

  async function getBreedsData() {
    const result = await axios.get(BreedsURL);
    setCatList(result.data);
    // console.log(result.data);
    return result;
  }

  useEffect(() => {
    getBreedsData();
  }, []);

  return (
    <div className="container my-5">
      <div className="accordion" id="accordionExample">
        {catList.map((res) => {
          return <List key={res.id} data={res} />;
        })}
        {/* <List /> */}
      </div>
    </div>
  );
};

export default Main;
