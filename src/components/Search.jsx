import img from "../assets/search.svg";
import Select from "react-select";
import { useState } from "react";
function Search() {
  const [value, setValue] = useState("department");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="Search">
      <h1>Everywhere is good, but the best is waiting for you here</h1>
      <div>
        <button className="buy">Buy</button>
        <button className="sell">Sell</button>
        <section className="searchBox">
          <form action="#">
            <select value={value} onChange={handleChange}>
              <option value="department">department</option>

              <option value="flat">flat</option>

              <option value="hello">hello</option>
            </select>
            <input type="text" placeholder="Where are you looking? " />
            <input type="text" placeholder="Price (HUF million) " />
            <input type="text" placeholder="floor area (m2) " />
            <input type="text" placeholder="room number " />
            <img src={img} alt="" />
          </form>
        </section>
      </div>
    </div>
  );
}

export default Search;
