import React from 'react';
import '../../assets/css/CardItem.css'

function CardItem(props) {
    return (
        <>
            <li className='cards__item'>
                <div className='cards__item__link'>
                    {/* <h4>{props.title}</h4> */}
                    <figure className='cards__item__pic-wrap' data-category={props.label}>
                        <img src={props.src} alt='' className='cards__item__img' />
                    </figure>
                    <div className='cards__item__info'>
                        <h4 className='cards__item__time'>{props.time}</h4>
                        <h2 className='cards__item__title'>{props.title}</h2>
                    </div>
                </div>
            </li>
        </>
    )
}

export default CardItem
