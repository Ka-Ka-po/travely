import React from 'react'
import all_packages from '../assets/all_packages.js'
import Item from './Item.jsx';

const Package_item = () => {
  return (
    <div class="container mx-auto mt-8 px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {all_packages.map((item, i)=>{
              return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
}

export default Package_item