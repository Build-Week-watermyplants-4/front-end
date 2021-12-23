
import { useState } from 'react'


/* Feel Free to change anything/everything on here
or let me know what would work better if you see something 
that's horrible practice */

/* PlantCard should render with the data
from the form submission. Placeholders for now. */
function PlantCard (props) {
    return (
    <div id='plant-container'>
         <div className="plant-card">
            <button>Remove</button> {/* this button should remove the selected card from the display. Unsure how to do that */}
            <div></div>
            <div>PLANT </div>
            <div>SPECIES </div>
            <div>WATERING FREQUENCY</div>
            <button>Click Here for More Info</button> {/* This button should ...mount an additional component that 
            displays more info? Not quite sure how that would work or if another way makes more sense*/}
        </div>
    </div>)
}
/* Plants should ultimately hold a state that's
an array of all all the plantCards that were formed formed
from the data submitted via the form? */
function Plants (props) {
    const [plants, addPlant] = useState([])
    function submit(e){
        e.preventDefault();
    }
    return (
        <>
        <h3>Enter Plant Information</h3>
        <div className="plants-form"> 
        <form id="plants-form" onSubmit={submit} > 
            <label> Choose a Nickname:
                <input type='text' name='nickname'>
                </input><br/>
            </label>
            <label> Plant Species:
                <input type='text' name='species'>
                </input><br/>
            </label>
            <label> Watering Frequency:
                <select type='dropdown' name='nickname'>
                    <option value ="Once Weekly">Once Weekly</option>
                    <option value ="Twice Weekly">Twice Weekly</option>
                    <option value ="Once Daily">Once Daily</option>
                    <option value ="Twice Daily">Twice Daily</option>
                </select>
            </label><br/>
            <button id="submit">
                ADD
            </button>
        </form>
        <h2>PLANTS</h2>
        {/* presently used as placeholder */}
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
        <PlantCard/>
    </div>  
    </>
    )
}

export default Plants;