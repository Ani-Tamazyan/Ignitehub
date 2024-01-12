import React from 'react'
import {Industries, Regions} from "../../helpers/constant";

import "../../styles/News/NewsPart1.scss"

import reset from "../../assets/Images/reset.svg";
import map1 from "../../assets/Images/map1.svg";
import map2 from "../../assets/Images/map2.svg";
import map3 from "../../assets/Images/map3.svg";
import map4 from "../../assets/Images/map4.svg";
import map5 from "../../assets/Images/map5.svg";
import map6 from "../../assets/Images/map6.svg";
import map7 from "../../assets/Images/map7.svg";
import map8 from "../../assets/Images/map8.svg";
import map9 from "../../assets/Images/map9.svg";

function NewsPart1() {
    return (
        <div className='NewsPart1 left_padding'>

            <div className='NewsPart1_wrapper'>

                <div className='NewsPart1_left'>
                    <h2>News <span>.</span></h2>

                    <p>Filter by categories</p>

                    <div className='Industries'>
                        <h3>Industries</h3>
                        {/* <hr /> */}

                        <ul>
                            {Industries.map(({id, name}) =>{
                                return (
                                    <li key={id}>
                                        <button>{name}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='Regions'>
                        <h3>Regions</h3>
                        {/* <hr /> */}

                        <ul>
                            {Regions.map(({id, name}) =>{
                                return (
                                    <li key={id}>
                                        <button>{name}</button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    <div className='reset'>
                        <img src={reset} alt="reset" />
                        <span>Reset filters</span>
                    </div>
                </div>

                <div className='map'>
                    <img src={map1} alt="map1" className='map1'/>
                    <img src={map2} alt="map2" className='map2'/>
                    <img src={map3} alt="map3" className='map3'/>
                    <img src={map4} alt="map4" className='map4'/>
                    <img src={map5} alt="map5" className='map5'/>
                    <img src={map6} alt="map6" className='map6'/>
                    <img src={map7} alt="map7" className='map7'/>
                    <img src={map8} alt="map8" className='map8'/>
                    <img src={map9} alt="map8" className='map9'/>
                </div>
            </div>
        </div>

    )
}

export default NewsPart1
