import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = () => {
  const BreedsURL = "https://api.thecatapi.com/v1/breeds?limit=";

  const [catList, setCatList] = useState([]);
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    async function getBreedsData() {
      const result = await axios.get(BreedsURL + perPage);
      setCatList(result.data);
      // console.log(result.data);
    }
    getBreedsData();
  }, [perPage]);

  const nextPage = () => {
    setPerPage(perPage + 10);
  };

  return (
    <div className="container my-5">
      <div className="accordion" id="accordionExample">
        <InfiniteScroll
          dataLength={catList.length}
          next={nextPage}
          hasMore={true}
        >
          {catList.map((res) => {
            return <List key={res.id} data={res} />;
          })}
        </InfiniteScroll>
      </div>
    </div>
  );
};

export default Main;
