import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>¡Mira estos destinos EPICOS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explora la cascada escondida en las profundidades de la selva amazónica'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Viaja por las islas de Bali en un crucero privado'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Zarpe en el Océano Atlántico visitando Uncharted Waters'
              label='Misterio'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experimenta el fútbol en la cima de las montañas del Himalaya'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Paseo por el desierto del Sahara en un tour guiado en camello'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;