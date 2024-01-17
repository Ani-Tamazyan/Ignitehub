import { useState } from 'react';
import { Industries, Regions } from '../../helpers/constant';

import '../../styles/News/NewsPart1.scss';

import reset from '../../assets/Images/reset.svg';
import  Map1  from '../../assets/Images/Map1.svg?react';
import  Map2  from '../../assets/Images/Map2.svg?react';
import  Map3  from '../../assets/Images/Map3.svg?react';
import  Map4  from '../../assets/Images/Map4.svg?react';
import  Map5  from '../../assets/Images/Map5.svg?react';
import  Map6  from '../../assets/Images/Map6.svg?react';
import  Map7  from '../../assets/Images/Map7.svg?react';
import  Map8  from '../../assets/Images/Map8.svg?react';
import  Map9  from '../../assets/Images/Map9.svg?react';



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



// import { useState } from 'react';
// import { Industries, Regions } from '../../helpers/constant';

// import '../../styles/News/NewsPart1.scss';

// import reset from '../../assets/Images/reset.svg';
// import  Map1  from '../../assets/Images/Map1.svg?react';
// import  Map2  from '../../assets/Images/Map2.svg?react';
// import  Map3  from '../../assets/Images/Map3.svg?react';
// import  Map4  from '../../assets/Images/Map4.svg?react';
// import  Map5  from '../../assets/Images/Map5.svg?react';
// import  Map6  from '../../assets/Images/Map6.svg?react';
// import  Map7  from '../../assets/Images/Map7.svg?react';
// import  Map8  from '../../assets/Images/Map8.svg?react';
// import  Map9  from '../../assets/Images/Map9.svg?react';



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


// const selectedMap = filters.selectedMap;



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
//         </div>

//         <div className='map'>
//         {[Map1, Map2, Map3, Map4, Map5, Map6, Map7, Map8, Map9].map((mapName, index) => (
//           <Map1
//             key={index}
//             alt={mapName}
//             className={`map${index + 1} ${mapName === selectedMap ? 'selected_map' : ''}`}
//           />
//         ))}
//       </div>
//       </div>
//     </div>
//   );
// }

// export default NewsPart1;



// import { useState } from 'react';
// import { Industries, Regions } from '../../helpers/constant';
// import '../../styles/News/NewsPart1.scss';
// import reset from '../../assets/Images/reset.svg';
// import Map1 from '../../assets/Images/Map1.svg?react';
// import Map2 from '../../assets/Images/Map2.svg?react';
// import Map3 from '../../assets/Images/Map3.svg?react';
// import Map4 from '../../assets/Images/Map4.svg?react';
// import Map5 from '../../assets/Images/Map5.svg?react';
// import Map6 from '../../assets/Images/Map6.svg?react';
// import Map7 from '../../assets/Images/Map7.svg?react';
// import Map8 from '../../assets/Images/Map8.svg?react';
// import Map9 from '../../assets/Images/Map9.svg?react';

// function NewsPart1({ onFilterChange, filters, onResetFilters, selectedMap }) {
//   const [selectedIndustries, setSelectedIndustries] = useState([]);
//   const [selectedRegions, setSelectedRegions] = useState([]);
//   const [activeMap, setActiveMap] = useState([]);

//   const handleIndustryClick = (industry) => {
//     const updatedIndustries = selectedIndustries.includes(industry)
//       ? selectedIndustries.filter((item) => item !== industry)
//       : [...selectedIndustries, industry];

//     setSelectedIndustries(updatedIndustries);
//     onFilterChange({
//       industry: updatedIndustries,
//       region: selectedRegions,
//       selectedMap: null, 
//     });
//     setActiveMap(null);
//   };

//   const handleRegionClick = (region) => {
//     const updatedRegions = selectedRegions.includes(region)
//       ? selectedRegions.filter((item) => item !== region)
//       : [...selectedRegions, region];

//     setSelectedRegions(updatedRegions);
//     onFilterChange({
//       industry: selectedIndustries,
//       region: updatedRegions,
//       selectedMap: null, 
//     });
//     setActiveMap(null);
//   };

//   const handleResetFilters = () => {
//     setSelectedIndustries([]);
//     setSelectedRegions([]);
//     onFilterChange({
//       industry: [],
//       region: [],
//       selectedMap: null,
//     });
//     setActiveMap(null);
//   };

//   const setActiveMapClass = (map) => {
//     setActiveMap(map);
//   };

//   return (
//     <div className='NewsPart1 left_padding'>
//       <div className='NewsPart1_wrapper'>
//         <div className='NewsPart1_left'>
//           <h2>
//             News <span>.</span>
//           </h2>
//           <p>Filter by categories</p>
//           <div className='Industries'>
//             <h3>Industries</h3>
//             <ul>
//               {Industries.map(({ id, name }) => (
//                 <li key={id}>
//                   <button
//                     onClick={() => handleIndustryClick(name)}
//                     className={selectedIndustries.includes(name) ? 'selected' : ''}
//                   >
//                     {name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className='Regions'>
//             <h3>Regions</h3>
//             <ul>
//               {Regions.map(({ id, name }) => (
//                 <li key={id}>
//                   <button
//                     onClick={() => handleRegionClick(name)}
//                     className={selectedRegions.includes(name) ? 'selected' : ''}
//                   >
//                     {name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className='reset' onClick={() => { handleResetFilters(); setActiveMapClass(null); }}>
//             <img src={reset} alt='reset' />
//             <span>Reset filters</span>
//           </div>
//         </div>

//         <div className='map'>
//           {[
//             Map1,
//             Map2,
//             Map3,
//             Map4,
//             Map5,
//             Map6,
//             Map7,
//             Map8,
//             Map9,
//           ].map((MapComponent, index) => (
//             <MapComponent
//               key={index}
//               alt={`map${index + 1}`}
//               className={`map${index + 1}${selectedMap === `map${index + 1}` ? ' selected_map' : ''}`}
//               onClick={() => {
//                 setActiveMapClass(`map${index + 1}`);
//                 onFilterChange({
//                   industry: selectedIndustries,
//                   region: selectedRegions,
//                   selectedMap: `map${index + 1}`,
//                 });
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewsPart1;



// import { useState } from 'react';
// import { Industries, Regions } from '../../helpers/constant';
// import '../../styles/News/NewsPart1.scss';
// import reset from '../../assets/Images/reset.svg';
// import Map1 from '../../assets/Images/Map1.svg?react';
// import Map2 from '../../assets/Images/Map2.svg?react';
// import Map3 from '../../assets/Images/Map3.svg?react';
// import Map4 from '../../assets/Images/Map4.svg?react';
// import Map5 from '../../assets/Images/Map5.svg?react';
// import Map6 from '../../assets/Images/Map6.svg?react';
// import Map7 from '../../assets/Images/Map7.svg?react';
// import Map8 from '../../assets/Images/Map8.svg?react';
// import Map9 from '../../assets/Images/Map9.svg?react';

// function NewsPart1({ onFilterChange, filters, onResetFilters, selectedMap }) {
//   const [selectedIndustries, setSelectedIndustries] = useState([]);
//   const [selectedRegions, setSelectedRegions] = useState([]);
//   const [activeMap, setActiveMap] = useState(null);

//   const handleIndustryClick = (industry) => {
//     const updatedIndustries = selectedIndustries.includes(industry)
//       ? selectedIndustries.filter((item) => item !== industry)
//       : [...selectedIndustries, industry];

//     setSelectedIndustries(updatedIndustries);
//     onFilterChange({
//       industry: updatedIndustries,
//       region: selectedRegions,
//       selectedMap: null, 
//     });
//     setActiveMap(null);
//   };

//   const handleRegionClick = (region) => {
//     const updatedRegions = selectedRegions.includes(region)
//       ? selectedRegions.filter((item) => item !== region)
//       : [...selectedRegions, region];

//     setSelectedRegions(updatedRegions);
//     onFilterChange({
//       industry: selectedIndustries,
//       region: updatedRegions,
//       selectedMap: null, 
//     });
//     setActiveMap(null);
//   };

//   const handleResetFilters = () => {
//     setSelectedIndustries([]);
//     setSelectedRegions([]);
//     onFilterChange({
//       industry: [],
//       region: [],
//       selectedMap: null,
//     });
//     setActiveMap(null);
//   };

//   const setActiveMapClass = (map) => {
//     setActiveMap(map);
//   };

//   return (
//     <div className='NewsPart1 left_padding'>
//       <div className='NewsPart1_wrapper'>
//         <div className='NewsPart1_left'>
//           <h2>
//             News <span>.</span>
//           </h2>
//           <p>Filter by categories</p>

//           <div className='Industries'>
//             <h3>Industries</h3>
//             <ul>
//               {Industries.map(({ id, name }) => (
//                 <li key={id}>
//                   <button
//                     onClick={() => handleIndustryClick(name)}
//                     className={selectedIndustries.includes(name) ? 'selected' : ''}
//                   >
//                     {name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className='Regions'>
//             <h3>Regions</h3>
//             <ul>
//               {Regions.map(({ id, name }) => (
//                 <li key={id}>
//                   <button
//                     onClick={() => handleRegionClick(name)}
//                     className={selectedRegions.includes(name) ? 'selected' : ''}
//                   >
//                     {name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className='reset' onClick={() => { handleResetFilters(); setActiveMapClass(null); }}>
//             <img src={reset} alt='reset' />
//             <span>Reset filters</span>
//           </div>
//         </div>

//         <div className='map'>
//           {[
//             Map1,
//             Map2,
//             Map3,
//             Map4,
//             Map5,
//             Map6,
//             Map7,
//             Map8,
//             Map9,
//           ].map((MapComponent, index) => (
//             <MapComponent
//               key={index}
//               alt={`map${index + 1}`}
//               className={`map${index + 1}${selectedMap === `map${index + 1}` ? ' selected_map' : ''}`}
//               onClick={() => {
//                 setActiveMapClass(`map${index + 1}`);
//                 onFilterChange({
//                   industry: selectedIndustries,
//                   region: selectedRegions,
//                   selectedMap: `map${index + 1}`,
//                 });
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewsPart1;