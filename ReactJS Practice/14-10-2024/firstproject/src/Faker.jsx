import React, { useState } from "react";
import { faker } from "@faker-js/faker";

function Faker() {
  let [state, setState] = useState(faker.animal.cat());
  let [img, setImg] = useState(faker.image.avatar());

  let handleChange = () => {
    setState(faker.animal.dog());
    setImg(faker.image.avatar());
  };

  return (
    <div>
      Animal Name : {state}
      <div>
        <img src={img} alt="name" />
        <button onClick={handleChange}>Change</button>
      </div>
    </div>
  );
}

export default Faker;
