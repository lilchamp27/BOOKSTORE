import { ShopContext } from '@/context/ShopContext'
import React, { useContext, useState, useEffect } from 'react'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestBooks = () => {

    const {products} = useContext(ShopContext);
    const [latestBooks, setLatestBooks] = useState([]);

    useEffect(() => {
        setLatestBooks(products.slice(0,10))
    }, [])

    console.log(products);

  return (
    <div>
        <div className='text-center py-8 text-3xl'>
            <Title text1 ={'LATEST'} text2 = {'BOOKS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit, a fugiat. Temporibus inventore ad repudiandae facilis quaerat necessitatibus autem rem!</p>
        </div>

    {/* Rendering Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>

        {
            latestBooks.map((item,index)=> (
                <ProductItem key={index} id={item._id} image={item.image} title={item.title} price={item.price} ratings={item.ratings}/>
            ))
        }

    </div>

    </div>
  )
}

export default LatestBooks