import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";

const Main = () => {
  const APIurl = "https://api.thecatapi.com/v1/breeds";
  const [catList, setCatList] = useState([]);

  async function getData() {
    const result = await axios.get(APIurl);
    setCatList(result.data);
    return result;
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <h1>Catcyclopedia</h1>
      <div class="accordion" id="catAccordion">
        {catList.map((res) => {
          return <List key={res.id} data={res} />;
        })}
      </div>
    </div>
  );
};

export default Main;
