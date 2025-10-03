

import React, { useState, useRef, useEffect } from 'react';
import './header2.css';
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { useNavigate } from "react-router-dom";
const Header2 = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    }
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const dateRef = useRef(null);
  const optionsRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dateRef.current && !dateRef.current.contains(e.target)) {
        setOpenDate(false);
      }
      if (optionsRef.current && !optionsRef.current.contains(e.target)) {
        setOpenOptions(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]:
        operation === 'i'
          ? prev[name] + 1
          : prev[name] > (name === 'adult' ? 1 : 0)
          ? prev[name] - 1
          : prev[name],
    }));
  };

  const handleSearch = () => {
  if (!destination.trim()) {
    alert("⚠️ Please enter a destination before searching!");
    return;
  }

  if (!date[0].startDate || !date[0].endDate) {
    alert("⚠️ Please select a valid date range!");
    return;
  }

  navigate("/hotels", { state: { destination, date, options } });
};


  return (
    <div className='total'>
      <div className='header'>
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <i className="fa-solid fa-bed"></i>
              <span>Stays</span>
            </div>
            <div className="headerListItem"><i className="fa-solid fa-plane-circle-check"></i><span>Flights</span></div>
            <div className="headerListItem"><i className="fa-solid fa-car"></i><span>Car rental</span></div>
            <div className="headerListItem"><i className="fa-solid fa-bed"></i><span>Attractions</span></div>
            <div className="headerListItem"><i className="fa-solid fa-taxi"></i><span>Airport taxis</span></div>
          </div>
          <h1 className='headerTitle'>A lifetime of discounts? It's Genius</h1>
          <p className="headerDesc">
            Get rewarded for your travels — unlock instant savings of 10% or more with a free Booking.com account
          </p>
          {/* <button className="headerbtn" onClick={() => navigate(`/register`)}>Sign in / Register</button> */}
        </div>    
      </div>

      {/* ✅ Search Bar Section */}
      <div className="headerSearch">
        <div className="searchBar">

          {/* Destination Input */}
          <input
            type="text"
            placeholder=" Where are you going?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="searchInput"
          />

          {/* ✅ Date Picker */}
          <div className="datePickerWrapper" ref={dateRef}>
            <span
              onClick={() => setOpenDate(!openDate)}
              className="searchDate"
            >
              {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}
            </span>

            {openDate && (
              <div className="datePickerDropdown">
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="dateRange"
                  minDate={new Date()}
                />
              </div>
            )}
          </div>

          {/* ✅ Guest Selector */}
          <div className="optionsWrapper" ref={optionsRef}>
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className="searchOptions"
            >
              {`${options.adult} adult · ${options.children} children · ${options.room} room`}
            </span>

            {openOptions && (
              <div className="optionsDropdown">
                {["adult", "children", "room"].map((type) => (
                  <div className="optionItem" key={type}>
                    <span className="optionText">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                    <div className="optionCounter">
                      <button
                        className="optionBtn"
                        onClick={() => handleOption(type, 'd')}
                        disabled={options[type] <= (type === 'adult' ? 1 : 0)}
                      >−</button>
                      <span className="optionNumber">{options[type]}</span>
                      <button
                        className="optionBtn"
                        onClick={() => handleOption(type, 'i')}
                      >+</button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Search Button */}
          <button className="searchButton" onClick={handleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Header2;
