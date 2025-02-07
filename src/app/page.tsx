import React from 'react'
import Hero from './Components/hero';
import Products from './Components/products';
import Categories from './Components/categories';
import ExploreStyles from './Components/explore';
import Our from './Components/our';
import SanityData from './Components/Sanitydata';




const page = () => {
  return (
    <section>

    <Hero/>
    <SanityData/>
    <Products/>
    <Categories/>
    <ExploreStyles/>
    <Our/>

    </section>
  );
};

export default page;