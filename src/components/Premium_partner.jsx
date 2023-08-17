import img from "../assets/woman.png";
import location from "../assets/location.svg";
function Premium_partner() {
  const card = (image, name, address, experience, commission) => {
    return (
      <div className="card">
        <img className="personalImage" src={image} alt="image" />
        <p className="name">{name}</p>
        <div className="address">
          <img src={location} alt="location" />
          <address>{address}</address>
        </div>
        <div className="data">
          <p>{experience}</p>
          <p>{commission}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="Premium_partner">
      <div className="article">
        <h2>Premium Partner</h2>
        <a href="#">See All The Partner</a>
      </div>
      <div className="cards">
        {card(
          img,
          "Judge Bea",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém",
          "12 years on AQAR",
          "Commission: 3% gross"
        )}
        {card(
          img,
          "Judge Bea",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém",
          "12 years on AQAR",
          "Commission: 3% gross"
        )}
        {card(
          img,
          "Judge Bea",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém",
          "12 years on AQAR",
          "Commission: 3% gross"
        )}
        {card(
          img,
          "Judge Bea",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém",
          "12 years on AQAR",
          "Commission: 3% gross"
        )}
        {card(
          img,
          "Judge Bea",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém",
          "12 years on AQAR",
          "Commission: 3% gross"
        )}
      </div>
    </div>
  );
}

export default Premium_partner;
