

import "./searchItem.css";
import { useNavigate } from "react-router-dom";

const SearchItem = ({ img, title, distance, subtitle, features, rating, price}) => {
  const navigate = useNavigate();

  // Example: hardcode the ID or pass it as a prop
  const hotelId = "123"; // you can replace this with a real ID later

  return (
    <div className="searchItem">
      <img
        src= {img}
        alt=""
        className="siImg"
      />
      
      <div className="siDesc">
        <h1 className="siTitle">{title}</h1>
        <span className="siDistance">{distance}</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">{subtitle}</span>
        <span className="siFeatures">{features}</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>

      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>{rating}</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">{price}</span>
          <span className="siTaxOp">Includes taxes and fees</span>

          {/* ✅ Navigate to the hotel details page with ID */}
          <button
            className="siCheckButton"
            onClick={({title}) => navigate(`/hotels/${hotelId}`)}
          >
            See availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
