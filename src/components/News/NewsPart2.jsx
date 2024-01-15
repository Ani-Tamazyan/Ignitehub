// import React, { useState, useEffect } from 'react';
// import "../../styles/News/NewsPart2.scss";

// // import cardPhoto from "../../assets/Images/cardPhoto.png"

// function NewsPart2() {
//     const [jsonData, setJsonData] = useState(null);

//     useEffect(() => {
//         fetch("./data.json")
//             .then(response => response.json())
//             .then(data => setJsonData(data))
//             // .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     return (
//         <div className='NewsPart2 left_padding'>
//             <div className='cards_wrapper'>
//                 {jsonData && (
//                     jsonData.map(({id, title, header, button1, button2, date, photo}) =>{
//                         return (
//                             <div key={id} className="card">
//                                 {photo && <img src={photo} alt="photo" />}
//                                 <h2>{header}</h2>
//                                 {title && <p>{title}</p>}
//                                 <div className='card_button_wrapper'>
//                                     <button>{button1}</button>
//                                     <button>{button2}</button>
//                                 </div>
//                                 <p>{date}</p>
//                             </div>
//                         )
//                     })
//                 )}
                
//             </div>
//         </div>
//     );
// }

// export default NewsPart2;


////////////////////////////////////////////////////////////////



// import React, { useState, useEffect } from 'react';
// import "../../styles/News/NewsPart2.scss";

// function NewsPart2() {
//     const [jsonData, setJsonData] = useState(null);
//     const [currentPage, setCurrentPage] = useState(1);

//     useEffect(() => {
//         fetch("./data.json")
//             .then(response => response.json())
//             .then(data => setJsonData(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const itemsPerPage = 16;

//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const displayData = jsonData && jsonData.slice(startIndex, endIndex);

//     const totalPages = Math.ceil((jsonData && jsonData.length) / itemsPerPage);

//     const handleNextPage = () => {
//         setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
//     };

//     const handlePrevPage = () => {
//         setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
//     };

//     const handleNumberButtonClick = (pageNumber) => {
//         setCurrentPage(pageNumber);
//     };

//     return (
//         <div className='NewsPart2 left_padding'>
//             <div className='cards_wrapper'>
//                 {displayData && displayData.map(({ id, title, header, button1, button2, date, photo }) => (
//                     <div key={id} className="card">
//                         {photo && <img src={photo} alt="photo" />}
//                         <h2>{header}</h2>
//                         {title && <p>{title}</p>}
//                         <div className='card_button_wrapper'>
//                             <button>{button1}</button>
//                             <button>{button2}</button>
//                         </div>
//                         <p>{date}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className='pagination'>
//                 <button onClick={handlePrevPage} disabled={currentPage === 1}>Previous</button>
//                 {Array.from({ length: totalPages }, (_, index) => (
//                     <button key={index + 1} onClick={() => handleNumberButtonClick(index + 1)}>
//                         {index + 1}
//                     </button>
//                 ))}
//                 <button onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
//             </div>
//         </div>
//     );
// }

// export default NewsPart2;





// import React, { useState, useEffect } from 'react';
// import ReactPaginate from 'react-paginate';
// import "../../styles/News/NewsPart2.scss";

// function NewsPart2() {
//     const [jsonData, setJsonData] = useState(null);
//     const [currentPage, setCurrentPage] = useState(0);

//     useEffect(() => {
//         fetch("./data.json")
//             .then(response => response.json())
//             .then(data => setJsonData(data))
//             .catch(error => console.error('Error fetching data:', error));
//     }, []);

//     const itemsPerPage = 16;

//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;

//     const displayData = jsonData && jsonData.slice(startIndex, endIndex);

//     const totalPages = Math.ceil((jsonData && jsonData.length) / itemsPerPage);

//     const handlePageClick = ({ selected }) => {
//         setCurrentPage(selected);
//     };

//     return (
//         <div className='NewsPart2 left_padding'>
//             <div className='cards_wrapper'>
//                 {displayData && displayData.map(({ id, title, header, button1, button2, date, photo }) => (
//                     <div key={id} className="card">
//                         {photo && <img src={photo} alt="photo" />}
//                         <h2>{header}</h2>
//                         {title && <p>{title}</p>}
//                         <div className='card_button_wrapper'>
//                             <button>{button1}</button>
//                             <button>{button2}</button>
//                         </div>
//                         <p>{date}</p>
//                     </div>
//                 ))}
//             </div>
//             <div className='pagination'>
//                 <ReactPaginate
//                     previousLabel={"Previous"}
//                     nextLabel={"Next"}
//                     breakLabel={"..."}
//                     breakClassName={"break-me"}
//                     pageCount={totalPages}
//                     marginPagesDisplayed={1}
//                     pageRangeDisplayed={1}
//                     onPageChange={handlePageClick}
//                     containerClassName={"pagination"}
//                     subContainerClassName={"pages pagination"}
//                     activeClassName={"active"}
//                     pageClassName='page_button'
//                     previousClassName='prev_button'
//                     nextClassName='next_button'
//                 />
//             </div>
//         </div>
//     );
// }

// export default NewsPart2;






import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import '../../styles/News/NewsPart2.scss';

function NewsPart2({ filter }) {
  const [jsonData, setJsonData] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    console.log('Filter Values:', filter);
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, [filter]);

  const itemsPerPage = Math.floor((window.innerWidth - 180 )/ 299) * 4;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  
  const filteredData =
    jsonData &&
    jsonData.filter((item) => {
      const industryMatch =
        !filter.industry || (item.Industries && item.Industries.includes(filter.industry));
      const regionMatch =
        !filter.region || (item.Regions && item.Regions.includes(filter.region));
        console.log(window.innerWidth)

      return industryMatch && regionMatch;
    });

  const displayData = filteredData ? filteredData.slice(startIndex, endIndex) : [];

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
      </div>
      <div className='pagination'>
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={totalPages}
          // marginPagesDisplayed={1}
          // pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
          pageClassName='page_button'
          previousClassName='prev_button'
          nextClassName='next_button'
          // defaultPage={6}
        />
      </div>
    </div>
  );
}

export default NewsPart2;





