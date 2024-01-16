import React from 'react'

import '../../styles/News/NewsPart3.scss';

import Pecypc from "../../assets/Images/Ресурс.png"


export default function NewsPart3() {
  return (
    <div className='NewsPart3 left_padding'>
        <div className='NewsPart3_left_side'>
            <h2>Promote Company</h2>
            <p>If you want to promote your product or company, have an update you want to share, you can submit the application and after review it will appear on our web-page and social networks.</p>
            <button>Promote</button>
        </div>

        <div className='NewsPart3_right_side'>
            <img src={Pecypc} alt="Pecypc" />
        </div>

    </div>
  )
}

