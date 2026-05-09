import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {
    const {id} = useParams();

    const data = useLoaderData();
    
    const singleBook = data.find(book => book.bookId === parseInt(id));

    const {image, bookName, review,  tags, totalPages, publisher, yearOfPublishing, category, rating} = singleBook
    
    // console.log(singleBook)
    // console.log(data)
    // console.log(id)

    const handelRead = id => {

        addToStoredDB(id)
    }


    return (
       <section className='flex gap-10 mt-20 items-center'>
            
            <div className=" rounded-2xl bg-[#f3f3f3] p-14">
                    <img src={image} className="w-[1680px] h-[5 64px] rounded-xl" />
            </div>
            
            <div>
                <h1 className='font-bold text-5xl mb-4'>{bookName}</h1>
                <span className='font-medium text-[20px]'>By : Awlad Hossain</span>
                <div className="divider"></div>
                <div className='font-medium text-[16px]'>{category}</div>
                <div className="divider"></div>
                <h5 className='font-bold text-[17px] flex gap-2'>Review:<p className='font-normal'>{review}</p></h5>
                <div className='flex gap-7 mt-7'>
                    <h4 className='font-bold text-[17px]'>Tag</h4>
                    {
                        tags.map(tag => <h4 className='font-medium text-[16px] rounded-full     px-6 py-1 text-[#23be0a] bg-[#cae2c390]'># {tag}</h4>)
                    }
                </div>
                <div className="divider"></div>
                <div className=' grid grid-cols-3 items-center gap-[12px]'>
                     <h4 className='font-normal text-[17px]'>Number of Pages </h4>
                     <span>:</span>
                     <p className='font-semibold text-[17px]'>{totalPages}</p>
                
                    <h4 className='font-normal text-[17px]'>By </h4>
                    <span>:</span>
                     <p className='font-semibold text-[17px]'>{publisher}</p>
                
                    <h4 className='font-normal text-[17px]'>Year of Publishing</h4>
                    <span>:</span>
                    <p className='font-semibold text-[17px]'> {yearOfPublishing}</p>
                
                    <h4 className='font-normal text-[17px]'> Rating</h4>
                    <span>:</span>
                    <p className='font-semibold text-[17px]'> {rating}</p>
                </div>
                <div className='mt-8 space-x-6'>
                    <button onClick={() => handelRead(id)} className='btn rounded-lg px-7 py-5 font-semibold text-[18px]'>Read</button>

                    <button className='btn rounded-lg px-7 py-5 font-semibold text-[18px]'>Wishlist</button>
                </div>
            </div>
       </section>
    );
};

export default BookDetails;