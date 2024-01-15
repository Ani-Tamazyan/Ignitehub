
// import NewsPart1 from "../components/News/NewsPart1"
// import NewsPart2 from "../components/News/NewsPart2"
// // import NewsPart3 from "../components/News/NewsPart3"


// function News() {
//     return (
//         <>
//             <NewsPart1 />
//             <NewsPart2 />
//             {/* <NewsPart3 /> */}
//         </>
//     )
// }

// export default News


import React, { useState } from 'react';
import NewsPart1 from "../components/News/NewsPart1"
import NewsPart2 from "../components/News/NewsPart2"
import NewsPart3 from "../components/News/NewsPart3"

function News() {
  const [filters, setFilters] = useState({ industry: null, region: null });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div>
      <NewsPart1 onFilterChange={handleFilterChange} />
      <NewsPart2 filter={filters} />
      <NewsPart3/>
    </div>
  );
}

export default News;
