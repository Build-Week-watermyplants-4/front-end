import React from "react";
import HomeFeature from "./HomeFeature";
import styled from 'styled-components'

const StyledP= styled.p`
    text-align: justify;
    border: 2px solid black;
    margin: 20px;
    text-shadow: .5px .5px 2px grey;
`
const StyledImg = styled.img`
    border-radius: 90%;
    display: block;
    width: 50%;
    float: right; 
    margin: 5px;
    box-shadow: 8px 8px 4px grey;
`
const StyledSection = styled.section`
    text-shadow: .5px .5px 2px grey;
    color: black;
`

export default function Home() {
  return (
  <StyledSection className = 'pg home-pg'>
      <article className = 'water'>
          <div className='home-wrapper'>
             <StyledImg
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
          <StyledP>
              To help those plants who always forget to get watered.
          </StyledP>
          <StyledP>
                Water helps a plant by transporting important nutrients through the plant. Nutrients are drawn from the soil and used by the plant. Without enough water in the cells, the plant will droop, so water helps a plant to stand upright. Water carries dissolved sugar and other nutrients through the plant. Watering your plants is crucial to their life span, and that's why we're here to help.
          </StyledP>
      </article>
  </StyledSection>
    );
}