import { useState, useEffect } from "react";
import { allUsers } from "..";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState([]);
  const dataFetcher = async () => {
    const data = await allUsers();
    setItems(data);
    // console.log(data);
    // const mappedData = data.map((data) => data.email);
    // console.log(mappedData);
    console.log(items);
  };
  useEffect(() => {
    dataFetcher();
  }, []);

  const getFilteredItems = (query, items) => {
    if (!query) {
      return items;
    }
    return items.filter((users) => users.interests.includes(query));
  };
  const filteredItems = getFilteredItems(query, items);
  return (
    <>
      <label>Search</label>
      <input type="text" onChange={(e) => setQuery(e.target.value)} />
      <ul>
        {filteredItems.map((value) => (
          <h1 key={value.interests}>{value.interests}</h1>
        ))}
      </ul>
    </>
  );
};

export default SearchBar;
