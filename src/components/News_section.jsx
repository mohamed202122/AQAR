import img from "../assets/man.png";

function News_section() {
  const card = (image, date, summary, desc) => {
    return (
      <div className="card">
        <img className="personalImage" src={image} alt="image" width={"100%"} />
        <div className="data">
          <p className="date">{date}</p>
          <p className="summary">{summary}</p>
          <p className="desc">{desc}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="News">
      <div className="title">
        <h1>Real estate market news</h1>
        <p>More Articles</p>
      </div>
      <div className="cards">
        {card(
          img,
          "Aug 2023 4.",
          "A well-regulated brokerage market is also in the interest of principals and brokers",
          "The real estate market is constantly changing, which poses a serious challenge to those who..."
        )}
        {card(
          img,
          "Aug 2023 4.",
          "A well-regulated brokerage market is also in the interest of principals and brokers",
          "The real estate market is constantly changing, which poses a serious challenge to those who..."
        )}
        {card(
          img,
          "Aug 2023 4.",
          "A well-regulated brokerage market is also in the interest of principals and brokers",
          "The real estate market is constantly changing, which poses a serious challenge to those who..."
        )}
        {card(
          img,
          "Aug 2023 4.",
          "A well-regulated brokerage market is also in the interest of principals and brokers",
          "The real estate market is constantly changing, which poses a serious challenge to those who..."
        )}
      </div>
    </div>
  );
}

export default News_section;
