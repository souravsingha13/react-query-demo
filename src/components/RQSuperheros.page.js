import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const RQSuperherosPage = () => {
  const superHerosApi = 'http://localhost:4000/superheros';

  const fetchSuperHeros = () =>{
      return axios.get(superHerosApi);
  }

  const { isLoading, data, isError, error } = useQuery('super-heros', fetchSuperHeros);
  
  if (isLoading) {
    return (
      <div>
        Loading ...
      </div>
    );
  }
  if(isError){
    <div>
        {error.message}
    </div>
  }

  return (
    <div>
      <h3>This is RQSuper Heros page.</h3>
      {
        data?.data.map(hero => (
          <div key={hero.name}>
            {hero.name}
          </div>
        ))
      }
    </div>
  );
};

export default RQSuperherosPage;
