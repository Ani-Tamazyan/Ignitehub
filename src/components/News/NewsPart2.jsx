import { useState, useEffect, useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import '../../styles/News/NewsPart2.scss';

function NewsPart2({ filter }) {
  const [jsonData, setJsonData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    console.log('Filter Values:', filter);
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [filter]);

  useEffect(() => {
    window.onresize = updateWindowWidth;

    return () => {
      window.onresize = null;
    };
  }, [updateWindowWidth]);

  const itemsPerPage = Math.floor((windowWidth - 180) / 299) * 4;
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const filteredData =
    jsonData &&
    jsonData.filter((item) => {
      const industryMatch =
        !filter.industry.length ||
        (item.Industries && filter.industry.every((ind) => item.Industries.includes(ind)));
      const regionMatch =
        !filter.region.length || (item.Regions && filter.region.every((reg) => item.Regions.includes(reg)));

      return industryMatch && regionMatch;
    });

  const displayData = filteredData ? filteredData.slice(startIndex, endIndex) : [];
  console.log(filteredData)

  const totalPages = Math.ceil((filteredData && filteredData.length) / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className='NewsPart2 left_padding'>
      <div className='cards_wrapper'>

        {displayData.map(({ id, title, header, button1, button2, date, photo }) => (
          <div key={id} className='card'>
            {photo && <img src={photo} alt='photo' />}
            <h2>{header}</h2>
            {title && <p>{title}</p>}
            <div className='card_button_wrapper'>
              <button>{button1}</button>
              <button>{button2}</button>
            </div>
            <p>{date}</p>
          </div>
        ))}

      {[...Array(Math.floor((windowWidth - 180) / 299) - 1)].map((_, index) => (
      <i key={index} aria-hidden="true"></i>
      ))}

        
      </div>
      <div className='pagination'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageClassName='page_button'
          previousClassName='prev_button'
          nextClassName='next_button'
          marginPagesDisplayed={1}
        />
      </div>
    </div>
  );
}

export default NewsPart2;


// import { useState, useEffect, useCallback } from 'react';
// import ReactPaginate from 'react-paginate';
// import '../../styles/News/NewsPart2.scss';

// function NewsPart2({ filter }) {
//   const [jsonData, setJsonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const updateWindowWidth = useCallback(() => {
//     setWindowWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     console.log('Filter Values:', filter);
//     fetch('./data.json')
//       .then((response) => response.json())
//       .then((data) => setJsonData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, [filter]);

//   useEffect(() => {
//     window.onresize = updateWindowWidth;

//     return () => {
//       window.onresize = null;
//     };
//   }, [updateWindowWidth]);

//   const itemsPerPage = Math.floor((windowWidth - 180) / 299) * 4;
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const filteredData =
//     jsonData &&
//     jsonData.filter((item) => {
//       const industryMatch =
//         !filter.industry.length ||
//         (item.Industries && filter.industry.every((ind) => item.Industries.includes(ind)));
//       const regionMatch =
//         !filter.region.length || (item.Regions && filter.region.every((reg) => item.Regions.includes(reg)));

//       return industryMatch && regionMatch;
//     });

//   const displayData = filteredData ? filteredData.slice(startIndex, endIndex) : [];

//   const totalPages = Math.ceil((filteredData && filteredData.length) / itemsPerPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   return (
//     <div className='NewsPart2 left_padding'>
//       <div className='cards_wrapper'>

//         {displayData.map(({ id, title, header, button1, button2, date, photo }) => (
//           <div key={id} className='card'>
//             {photo && <img src={photo} alt='photo' />}
//             <h2>{header}</h2>
//             {title && <p>{title}</p>}
//             <div className='card_button_wrapper'>
//               <button>{button1}</button>
//               <button>{button2}</button>
//             </div>
//             <p>{date}</p>
//           </div>
//         ))}

//       {[...Array(Math.floor((windowWidth - 180) / 299) - 1)].map((_, index) => (
//       <i key={index} aria-hidden="true"></i>
//       ))}

        
//       </div>
//       <div className='pagination'>
//         <ReactPaginate
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           breakLabel={'...'}
//           breakClassName={'break-me'}
//           pageCount={totalPages}
//           onPageChange={handlePageClick}
//           containerClassName={'pagination'}
//           subContainerClassName={'pages pagination'}
//           activeClassName={'active'}
//           pageClassName='page_button'
//           previousClassName='prev_button'
//           nextClassName='next_button'
//           marginPagesDisplayed={1}
//         />
//       </div>
//     </div>
//   );
// }

// export default NewsPart2;




// import React, { useState, useEffect, useCallback } from 'react';
// import ReactPaginate from 'react-paginate';
// import '../../styles/News/NewsPart2.scss';

// function NewsPart2({ filter, selectedMap }) {
//   const [jsonData, setJsonData] = useState(null);
//   const [currentPage, setCurrentPage] = useState(0);
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const updateWindowWidth = useCallback(() => {
//     setWindowWidth(window.innerWidth);
//   }, []);

//   useEffect(() => {
//     fetch('./data.json')
//       .then((response) => response.json())
//       .then((data) => setJsonData(data))
//       .catch((error) => console.error('Error fetching data:', error));
//   }, [filter]);

//   useEffect(() => {
//     window.onresize = updateWindowWidth;

//     return () => {
//       window.onresize = null;
//     };
//   }, [updateWindowWidth]);

//   const itemsPerPage = Math.floor((windowWidth - 180) / 299) * 4;
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const filteredData =
//     jsonData &&
//     jsonData.filter((item) => {
//       const industryMatch =
//         !filter.industry.length ||
//         (item.Industries && filter.industry.every((ind) => item.Industries.includes(ind)));
//       const regionMatch =
//         !filter.region.length || (item.Regions && filter.region.every((reg) => item.Regions.includes(reg)));

//       return industryMatch && regionMatch;
//     });

//   const displayData = filteredData ? filteredData.slice(startIndex, endIndex) : [];

//   const totalPages = Math.ceil((filteredData && filteredData.length) / itemsPerPage);

//   const handlePageClick = ({ selected }) => {
//     setCurrentPage(selected);
//   };

//   const renderMaps = (filteredData) => {
//     return filteredData.map((item) => (
//       <div key={item.id} className='map'>
//         {item.map && (
//           React.createElement(item.map, {
//             alt: item.map,
//             className: `map${item.map.substring(3)}${selectedMap === item.map ? ' selected_map' : ''}`,
//           })
//         )}
//       </div>
//     ));
//   };

//   return (
//     <div className='NewsPart2 left_padding'>
//       <div className='cards_wrapper'>
//            {displayData.map(({ id, title, header, button1, button2, date, photo }) => (
//            <div key={id} className='card'>
//              {photo && <img src={photo} alt='photo' />}
//              <h2>{header}</h2>
//              {title && <p>{title}</p>}
//              <div className='card_button_wrapper'>
//               <button>{button1}</button>
//                <button>{button2}</button>
//             </div>
//              <p>{date}</p>
//            </div>
//          ))}

//        {[...Array(Math.floor((windowWidth - 180) / 299) - 1)].map((_, index) => (
//        <i key={index} aria-hidden="true"></i>
//        ))}
//       </div>

//       {filteredData && renderMaps(filteredData)}

//       <div className='pagination'>
//         <ReactPaginate
//           previousLabel={'Previous'}
//           nextLabel={'Next'}
//           breakLabel={'...'}
//           breakClassName={'break-me'}
//           pageCount={totalPages}
//           onPageChange={handlePageClick}
//           containerClassName={'pagination'}
//           subContainerClassName={'pages pagination'}
//           activeClassName={'active'}
//           pageClassName='page_button'
//           previousClassName='prev_button'
//           nextClassName='next_button'
//           marginPagesDisplayed={1}
//         />
//       </div>
//     </div>
//   );
// }

// export default NewsPart2;
