
// import { useState } from 'react';
// import { Industries, Regions } from '../../helpers/constant';
// // import svgr from "vite-plugin-svgr";

// import '../../styles/News/NewsPart1.scss';

// import reset from '../../assets/Images/reset.svg';
// import map1 from "../../assets/Images/map1.svg?react";
// import map2 from "../../assets/Images/map2.svg?react";
// import map3 from "../../assets/Images/map3.svg?react";
// import map4 from "../../assets/Images/map4.svg?react";
// import map5 from "../../assets/Images/map5.svg?react";
// import map6 from "../../assets/Images/map6.svg?react";
// import map7 from "../../assets/Images/map7.svg?react";
// import map8 from "../../assets/Images/map8.svg?react";
// import map9 from "../../assets/Images/map9.svg?react";
// // import Logo from "./logo.svg?react";

// function NewsPart1({ onFilterChange, filters, onResetFilters }) {
//   const [selectedIndustries, setSelectedIndustries] = useState([]);
//   const [selectedRegions, setSelectedRegions] = useState([]);

//   const handleIndustryClick = (industry) => {
//     const updatedIndustries = selectedIndustries.includes(industry)
//       ? selectedIndustries.filter((item) => item !== industry)
//       : [...selectedIndustries, industry];

//     setSelectedIndustries(updatedIndustries);
//     onFilterChange({ industry: updatedIndustries, region: selectedRegions });
//   };

//   const handleRegionClick = (region) => {
//     const updatedRegions = selectedRegions.includes(region)
//       ? selectedRegions.filter((item) => item !== region)
//       : [...selectedRegions, region];

//     setSelectedRegions(updatedRegions);
//     onFilterChange({ industry: selectedIndustries, region: updatedRegions });
//   };

//   const handleResetFilters = () => {
//     setSelectedIndustries([]);
//     setSelectedRegions([]);
//     onFilterChange({ industry: [], region: [] });
//   };

//   return (
//     <div className='NewsPart1 left_padding'>
//       <div className='NewsPart1_wrapper'>
//          <div className='NewsPart1_left'>
//            <h2>
//             News <span>.</span>
//           </h2>
//            <p>Filter by categories</p>
//       <div className='Industries'>
//         <h3>Industries</h3>
//         <ul>
//           {Industries.map(({ id, name }) => (
//             <li key={id}>
//               <button
//                 onClick={() => handleIndustryClick(name)}
//                 className={selectedIndustries.includes(name) ? 'selected' : ''}
//               >
//                 {name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className='Regions'>
//         <h3>Regions</h3>
//         <ul>
//           {Regions.map(({ id, name }) => (
//             <li key={id}>
//               <button
//                 onClick={() => handleRegionClick(name)}
//                 className={selectedRegions.includes(name) ? 'selected' : ''}
//               >
//                 {name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className='reset' onClick={handleResetFilters}>
//         <img src={reset} alt='reset' />
//         <span>Reset filters</span>
//       </div>
//             </div>

//                 <div className='map'>
//                    <img src={map1} alt="map1" className='map1'/>
//                    <img src={map2} alt="map2" className='map2'/>
//                    <img src={map3} alt="map3" className='map3'/>
//                    <img src={map4} alt="map4" className='map4'/>
//                    <img src={map5} alt="map5" className='map5'/>
//                    <img src={map6} alt="map6" className='map6'/>
//                    <img src={map7} alt="map7" className='map7'/>
//                    <img src={map8} alt="map8" className='map8'/>
//                    <img src={map9} alt="map8" className='map9'/>
//                 </div>
//       </div>
//     </div>
//   );
// }

// export default NewsPart1;


import { useState } from 'react';
import { Industries, Regions } from '../../helpers/constant';

import '../../styles/News/NewsPart1.scss';

import reset from '../../assets/Images/reset.svg';
import  Map1  from '../../assets/Images/map1.svg?react';
import  Map2  from '../../assets/Images/map2.svg?react';
import  Map3  from '../../assets/Images/map3.svg?react';
import  Map4  from '../../assets/Images/map4.svg?react';
import  Map5  from '../../assets/Images/map5.svg?react';
import  Map6  from '../../assets/Images/map6.svg?react';
import  Map7  from '../../assets/Images/map7.svg?react';
import  Map8  from '../../assets/Images/map8.svg?react';
import  Map9  from '../../assets/Images/map9.svg?react';



function NewsPart1({ onFilterChange, filters, onResetFilters }) {
  const [selectedIndustries, setSelectedIndustries] = useState([]);
  const [selectedRegions, setSelectedRegions] = useState([]);

  const handleIndustryClick = (industry) => {
    const updatedIndustries = selectedIndustries.includes(industry)
      ? selectedIndustries.filter((item) => item !== industry)
      : [...selectedIndustries, industry];

    setSelectedIndustries(updatedIndustries);
    onFilterChange({ industry: updatedIndustries, region: selectedRegions });
  };

  const handleRegionClick = (region) => {
    const updatedRegions = selectedRegions.includes(region)
      ? selectedRegions.filter((item) => item !== region)
      : [...selectedRegions, region];

    setSelectedRegions(updatedRegions);
    onFilterChange({ industry: selectedIndustries, region: updatedRegions });
  };

  const handleResetFilters = () => {
    setSelectedIndustries([]);
    setSelectedRegions([]);
    onFilterChange({ industry: [], region: [] });
  };


  return (
    <div className='NewsPart1 left_padding'>
      <div className='NewsPart1_wrapper'>
         <div className='NewsPart1_left'>
           <h2>
            News <span>.</span>
          </h2>
           <p>Filter by categories</p>
      <div className='Industries'>
        <h3>Industries</h3>
        <ul>
          {Industries.map(({ id, name }) => (
            <li key={id}>
              <button
                onClick={() => handleIndustryClick(name)}
                className={selectedIndustries.includes(name) ? 'selected' : ''}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='Regions'>
        <h3>Regions</h3>
        <ul>
          {Regions.map(({ id, name }) => (
            <li key={id}>
              <button
                onClick={() => handleRegionClick(name)}
                className={selectedRegions.includes(name) ? 'selected' : ''}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className='reset' onClick={handleResetFilters}>
        <img src={reset} alt='reset' />
        <span>Reset filters</span>
      </div>
        </div>

            <div className='map'>
                  <Map1 alt="map1" className='map1'/>
                  <Map2 alt="map2" className='map2'/>
                  <Map3 alt="map3" className='map3'/>
                  <Map4 alt="map4" className='map4'/>
                  <Map5 alt="map5" className='map5'/>
                  <Map6 alt="map6" className='map6'/>
                  <Map7 alt="map7" className='map7'/>
                  <Map8 alt="map8" className='map8'/>
                  <Map9 alt="map8" className='map9'/>
             </div>
      </div>
    </div>
  );
}

export default NewsPart1;









