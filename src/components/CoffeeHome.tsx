import { useEffect, useState } from "react";
import { CoffeeShopp } from "../types";
import CoffeeList from "./CoffeeList";

export const CoffeeHome = () => {
  const [coffeeProducts, setCoffeeProducts] = useState<CoffeeShopp[]>([]);
  useEffect(() => {
    apiFetch();
  }, []);
  const apiFetch = async () => {
    const res = await fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    );
    const data = await res.json();
    console.log(data);
    setCoffeeProducts([...data]);
  };
  const handleAvailable = () => {
    const availble = coffeeProducts.filter((cofe) => cofe.available);
    setCoffeeProducts(availble);
  };
  const handleAll = () => {
    apiFetch();
  };

  return (
    <section className='relative  container w-full p-[10px] py-20 flex flex-col items-center gap-10 justify-center bg-[#1B1D1F] z-10 font-dmSans rounded-lg overflow-hidden'>
      <div className=' flex items-center md:max-w-lg max-w-full flex-col text-center space-y-2'>
        <h1 className='text-[2rem]'>Our Collection</h1>
        <p className='text-[16px] text-[#6F757C] text-center w-full'>
          Introducing our Coffee Collection, a selection of unique coffees from
          different roast types and origins, expertly roasted in small batches
          and shipped fresh weekly.
        </p>
        <div className=' flex gap-3 text-[16px]'>
          <button
            className='rounded-md hover:bg-[#6F757C] px-2 py-1 '
            onClick={handleAll}>
            All Proudcts
          </button>
          <button
            className='rounded-md hover:bg-[#6F757C] px-2 py-1'
            onClick={handleAvailable}>
            Avaliable Now
          </button>
        </div>
      </div>
      <CoffeeList coffee={coffeeProducts} />
      <img
        src='./images/vector.svg'
        alt='Vector'
        className='absolute top-[32px] left-1/2 right-auto -z-10 rotate-3'
      />
    </section>
  );
};
