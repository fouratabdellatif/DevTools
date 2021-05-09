import React from 'react';
import '../../assets/css/Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/bg06.jpg'
              text='Be the trainer'
              label='Train'
              path='/services'
            />
            <CardItem
              src='images/bg08.jpg'
              text='Train with a private coach'
              label='Train'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/bg02.jpg'
              text='Sell the products you have'
              label='Shop'
              path='/products'
            />
            <CardItem
              src='images/bg11.jpg'
              text='Buy the products you want to have'
              label='Shop'
              path='/products'
            />
            <CardItem
              src='images/bg10.jpg'
              text='Discover this world'
              label='Discover'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;