// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Home2 from "./pages/home2/Home2";
// import List from "./pages/list/List";
// import Hotel from "./pages/hotel/Hotel";
// import Register from "./pages/register/Register";
// import Login from "./pages/login/Login";


// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/register/login" element={<Login />} />
//         <Route path="/register/login/home2" element={<Home2 />} />
//         <Route path="/hotels" element={<List />} />
//         <Route path="/hotels/:id" element={<Hotel/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Home2 from "./pages/home2/Home2";
import List from "./pages/list/List";
import Hotel from "./pages/hotel/Hotel";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Loading from "./components/loading/Loading"; // Import loading

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loading onFinish={() => setLoading(false)} />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register/login" element={<Login />} />
            <Route path="/register/login/home2" element={<Home2 />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotels/:id" element={<Hotel />} />
          </Routes>
        </Router>
      )}
    </>
  );
}

export default App;
