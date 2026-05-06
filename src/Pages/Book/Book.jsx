// import React, { use } from 'react';
import { Star } from 'lucide-react';

const Book = ({singleBook}) => {
    
    console.log(singleBook)

    const { bookName, image, tags, publisher, category, rating } = singleBook

    // const data = use(bookPromise);
    // console.log(data)

    return (
        <div>
            <div className="card px-5 pt-5 shadow-sm rounded-3xl">
                <figure className="py-7 rounded-2xl bg-[#f3f3f3]">
                    <img src={image} className="h-[266px] rounded-xl" />
                </figure>
                <div className='flex gap-10 mt-7'>
                    {
                        tags.map(tag => <p className='font-medium text-[16px] rounded-full px-6 py-1 text-[#23be0a] bg-[#cae2c390] '>{tag}</p>)
                    }
                </div>
                <div className="grid mt-5">
                    <h1 className="card-title font-bold text-2xl">{bookName}</h1>
                    <p className='font-medium text-[16px] mt-4'>By : {publisher}</p>

                    <span className='mt-5 border border-dashed text-[#13131325]'></span>
                    
                    <div className="flex justify-between my-5">
                        <div className='font-medium text-[16px]'>{category}</div>
                       <div className='flex items-center gap-2'>
                         <span className='text-[17px]'>{rating}</span>
                        <span className=''><Star /></span>
                       </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Book;