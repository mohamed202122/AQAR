import img from "../assets/house.png";
function Search_result() {
  const desc =
    "Features of Loft52; spacious interiors, varied floor plans, exceptional atmosphere.  Captivating places and recreation opportunities within easy walking distance of your home.";
  const card = (image, title, desc) => {
    return (
      <div className="cart" style={{ width: "50%", height: "auto" }}>
        <img src={image} alt="image" />
        <div className="data">
          <p className="title">{title}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="Search_result">
      <div className="ask">
        <h1>Would you like to move to a residential park?</h1>
        <a href="#">See All</a>
      </div>
      <div className="carts">
        {card(img, "LOFT 52", desc)}
        {card(img, "LOFT 52", desc)}
        {card(img, "LOFT 52", desc)}
        {card(img, "LOFT 52", desc)}
        {card(img, "LOFT 52", desc)}
      </div>
    </div>
  );
}

export default Search_result;
