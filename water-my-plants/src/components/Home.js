import React from "react";
import { Link } from "react-router-dom";
import HomeFeature from "./HomeFeature";


export default function Home() {
  return (
  <section className = 'pg home-pg'>
      <article className = 'water'>
          <div className='home-wrapper'>
             <img
            className='home-image'
            src='https://media.istockphoto.com/photos/earth-day-in-the-hands-of-trees-growing-seedlings-bokeh-green-female-picture-id949173492?k=20&m=949173492&s=612x612&w=0&h=Y-aSVMr4aOqlThLrIIlX05Eaczu56CYLizMfgn76ogc='
            alt=''
            />
          </div>
      </article>

      <article className = 'features'>
        <h2>What We Offer</h2>
        <div className = 'featureList'>
            <HomeFeature 
            title = 'Organize'
            description = 'We help you keep track of all your plants in one place, all in one dashboard'
            />
            <HomeFeature 
            title = 'Forget'
            description = "We remember when your plants need to be watered so you don't have to!"
            />
            <HomeFeature
            title = 'Record'
            description = "Quickly record when you've watered your plants, then get right back to your tasks."
            />
        </div>
      </article>
      
      <article className = 'Mission'>
          <h2>Our Mission</h2>
          <p>
              To help those plants who always forget to get watered.
          </p>
          <p>
                Water helps a plant by transporting important nutrients through the plant. Nutrients are drawn from the soil and used by the plant. Without enough water in the cells, the plant will droop, so water helps a plant to stand upright. Water carries dissolved sugar and other nutrients through the plant. Watering your plants is crucial to their life span, and that's why we're here to help.
          </p>
      </article>
  </section>
    );
}