import { useState } from 'react';
import NewsPart1 from "../components/News/NewsPart1"
import NewsPart2 from "../components/News/NewsPart2"
import NewsPart3 from "../components/News/NewsPart3"


function News() {
  const [filters, setFilters] = useState({ industry: [], region: [] });
  const [uniqueMapValues, setUniqueMapValues] = useState([]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({ industry: [], region: [] });
  };

  return (
    <div>
      <NewsPart1
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
        filters={filters}
        uniqueMapValues={uniqueMapValues} 
      />
      <NewsPart2 filter={filters} setUniqueMapValues={setUniqueMapValues} />
      <NewsPart3 />
    </div>
  );
}

export default News;













