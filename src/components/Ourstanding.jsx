import img from "../assets/man2.png";
import location from "../assets/location.svg";
function Ourstanding() {
  const card = (image, name, title, address) => {
    return (
      <div className="card">
        <img className="personalImage" src={image} alt="image" />
        <div className="data">
          <p className="name">{name}</p>
          <p className="title">{title}</p>
          <div className="location">
            <img src={location} alt="location" />
            <p className="address">{address}</p>
          </div>
          <p className="look">I will have a look</p>
        </div>
      </div>
    );
  };
  return (
    <div className="Ourstanding">
      <div className="title">
        <h1>
          Our outstanding real estate brokerage and credit expert partners
        </h1>
      </div>
      <div className="cards">
        {card(
          img,
          "Nádi Csaba",
          "Certified real estate agent",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém"
        )}
        {card(
          img,
          "Nádi Csaba",
          "Certified real estate agent",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém"
        )}
        {card(
          img,
          "Nádi Csaba",
          "Certified real estate agent",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém"
        )}
        {card(
          img,
          "Nádi Csaba",
          "Certified real estate agent",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém"
        )}
        {card(
          img,
          "Nádi Csaba",
          "Certified real estate agent",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém"
        )}
        {card(
          img,
          "Nádi Csaba",
          "Certified real estate agent",
          "Keszthely, III. district, Szombathely,Balatonfüred, Veszprém"
        )}
      </div>
    </div>
  );
}

export default Ourstanding;
