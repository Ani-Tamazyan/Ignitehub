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



function NewsPart1({ onFilterChange, filters, onResetFilters, uniqueMapValues }) {
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
          <Map1 alt="map1" className={`map1 ${uniqueMapValues.includes('Map1') ? 'selected_map' : ''}`} />
          <Map2 alt="map2" className={`map2 ${uniqueMapValues.includes('Map2') ? 'selected_map' : ''}`} />
          <Map3 alt="map3" className={`map3 ${uniqueMapValues.includes('Map3') ? 'selected_map' : ''}`} />
          <Map4 alt="map4" className={`map4 ${uniqueMapValues.includes('Map4') ? 'selected_map' : ''}`} />
          <Map5 alt="map5" className={`map5 ${uniqueMapValues.includes('Map5') ? 'selected_map' : ''}`} />
          <Map6 alt="map6" className={`map6 ${uniqueMapValues.includes('Map6') ? 'selected_map' : ''}`} />
          <Map7 alt="map7" className={`map7 ${uniqueMapValues.includes('Map7') ? 'selected_map' : ''}`} />
          <Map8 alt="map8" className={`map8 ${uniqueMapValues.includes('Map8') ? 'selected_map' : ''}`} />
          <Map9 alt="map9" className={`map9 ${uniqueMapValues.includes('Map9') ? 'selected_map' : ''}`} />
        </div>
      </div>
    </div>
  );
}

export default NewsPart1;

