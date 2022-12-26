import React, { useState, useEffect } from "react";
import { homepageSlide } from "../Products";

const Navbar = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(homepageSlide);
  }, []);

  return (
    <main>
      {data &&
        data.map((item) => (
          <img key={item.id} src={item.url} alt={item.name} />
        ))}
    </main>
  );
};

export default Navbar;
