import React from "react";
import products from "./products.json";

const Table = () => {
  return (
    //   console.log(products);
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
              <th>Maker</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {products.map((e) => {
              return (
                <tr key={e.Id}>
                  <td>
                    {console.log(e)}
                    {e.Id}
                  </td>
                  <td>{e.Title}</td>
                  <td>{e.Description}</td>
                  <td id="imageContainer">
                    <img src={e.img} alt="e.title" id="img" />
                  </td>
                  <td>{e.Maker}</td>
                  <td>
                    <a href={e.Url}>Link</a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
