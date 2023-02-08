import React from 'react'
import './index.css'
import Nav from './components/nav/nav'
import Cards from './components/cards/cards'
import Input from './components/input/input'

const App = () => {
  return (
    <div>
      <Nav />

      <Input />

      <h1 className='text-center font-semibold text-3xl mb-7'>Cocktails</h1>

      <div className='flex justify-center m-5'>
      <Cards _img={'./img/1.jpg'} _titre={'A1'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/2.jpg'} _titre={'A2'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/3.jpg'} _titre={'A3'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex justify-center m-5'>
      <Cards _img={'./img/4.jpg'} _titre={'A4'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/5.jpg'} _titre={'A5'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/6.jpg'} _titre={'A6'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex justify-center m-5'>
      <Cards _img={'./img/7.jpg'} _titre={'A7'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/8.jpg'} _titre={'A8'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/9.jpg'} _titre={'A9'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex justify-center m-5'>
      <Cards _img={'./img/10.jpg'} _titre={'A10'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/11.jpg'} _titre={'A11'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/12.jpg'} _titre={'A12'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex justify-center m-5'>
      <Cards _img={'./img/13.jpg'} _titre={'A13'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/14.jpg'} _titre={'A14'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/15.jpg'} _titre={'A15'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex justify-center m-5'>
      <Cards _img={'./img/16.jpg'} _titre={'A16'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/17.jpg'} _titre={'A17'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/18.jpg'} _titre={'A18'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex justify-center m-5'>
      <Cards _img={'./img/19.jpg'} _titre={'A19'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/20.jpg'} _titre={'A20'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      <Cards _img={'./img/21.jpg'} _titre={'A21'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
      <div className='flex m-5'>
      <Cards _img={'./img/22.jpg'} _titre={'A22'} _nomCockail={'Cocktail glass'} _description={'Alcoholic'} />
      </div>
    </div>
  )
}

export default App;