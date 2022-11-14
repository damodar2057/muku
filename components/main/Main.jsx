import React from 'react'
import "./main.css"
import imag from "./hydropower.JPG"

const Main = () => {
  return (
<div className="main">
    <div className="main-left">
        <h1 className="main-left-title">Chilime Hydropower Company  Limited</h1>
  <div className="paragraph">

  <p>Chilime Hydropower Company Limited (Chilime) was incorporated in 1995 with an objective of hydroelectricity generation through optimal utilization of resources within the country. Nepal Electricity Authority (NEA) holds majority ownership with 51% share holding. Remaining 49% shareholding is from general public including 10% equity ownership of local people. Chilime owns and operates 22.1 MW power plant commissioned on August 25, 2003 and located in Rasuwa district, 133 km north of capital city Kathmandu. It sales bulk electricity to NEA at the long term PPA price. The annual energy generation from the plant is about 150 GWh.</p>
  </div>
    </div>
  <div className="main-right">
    <div className="main-img-container">
        <img  className='imaag'
        src={imag}
        alt=""
        />
    </div>
  </div>
</div>
    )
}

export default Main