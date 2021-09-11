import React, { useEffect, useState } from "react";
import List from "./List";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";

const Main = () => {
  const BreedsURL = "https://api.thecatapi.com/v1/breeds?limit=";
  let totalList = 0;

  const [catList, setCatList] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getBreedsData() {
      setLoading(true);
      if (searchTerm === "") {
        const result = await axios.get(BreedsURL + perPage);
        setCatList(result.data);
      } else {
        const result = await axios.get(BreedsURL + 100);
        setCatList(result.data);
      }
      setLoading(false);
      // console.log(result.data);
    }
    getBreedsData();
  }, [perPage, searchTerm]);

  const nextPage = () => {
    setPerPage(perPage + 10);
  };

  return (
    <div className="container my-5">
      <div className="input-group input-group-lg mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter Breed Name"
          aria-label="Username"
          aria-describedby="inputGroup-sizing-lg"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="accordion" id="accordionExample">
        <InfiniteScroll
          dataLength={catList.length}
          next={nextPage}
          hasMore={true}
        >
          {catList
            // eslint-disable-next-line array-callback-return
            .filter((res) => {
              if (searchTerm === "") {
                return res;
              } else if (
                res.name
                  .split(" ")
                  .join("")
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return res;
              }
            })
            .map((res) => {
              totalList++;
              return <List key={res.id} data={res} />;
            })}
        </InfiniteScroll>
        {!loading && totalList === 0 && (
          <h4 className="text-center p-5">No Cats Found</h4>
        )}
        {loading && <h4 className="text-center p-5">Loading ...</h4>}
      </div>
    </div>
  );
};

export default Main;
