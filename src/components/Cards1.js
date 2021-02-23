import React from 'react';
import './Cards1.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Mira lo que ofrecemos para ti!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/economico.jpg'
              text='Disfruta de la mejor experiencia por un modico precio'
              label='Economico'
              path='/services'
            />
            <CardItem
              src='images/familiar.jpg'
              text='Viaja con tu familia y disfruta de una experiencia unica'
              label='Familiar'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/tours.jpg'
              text='Explora Europa con nuestros tours'
              label='Tours'
              path='/services'
            />
            <CardItem
            
              src='images/luxury.jpg'
              text='Viaja por las islas de Bali en un crucero privado con todo incluido'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;