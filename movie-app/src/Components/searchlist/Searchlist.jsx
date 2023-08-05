import React, { useEffect, useState } from "react";
import { Card } from "../cards/Card";


const Searchlist = ({searchList}) => {
    console.log(searchList);
    return (
      <>
        <div className="movieList">
          <div className="cardList">
            {searchList.map((movie) => (
              <Card key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </>
    );
  };
  
  export { Searchlist };