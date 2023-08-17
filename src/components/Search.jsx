import img from "../assets/search.svg";

function Search() {
  return (
    <div className="Search">
      <h1>Everywhere is good, but the best is waiting for you here</h1>
      <div>
        <button className="buy">Buy</button>
        <button className="sell">Sell</button>
        <section className="searchBox">
          <form action="#">
            <input type="text" />
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
