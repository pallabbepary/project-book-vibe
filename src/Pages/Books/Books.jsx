import React, { Suspense, useEffect, useState } from 'react';
// import { data } from 'react-router';
import Book from '../Book/Book';

const Books = ({data}) => {

    const [allBooks, setAllBooks] = useState([])


    // useEffect(() => {
    //     fetch("bookData.json")
    //     .then(res => res.json())
    //     .then(data =>{
    //         setAllBooks(data)
    //     })
    // }, [])


    // const bookPromise = fetch("bookData.json")
    //     .then(res => res.json())
        

    return (
        <div>
            <h1 className='font-bold text-[40px] items-center text-center'>Books</h1>
                <Suspense fallback={<span>Loading....</span>}>
                <div className='grid md:grid-cols-4 w-11/12 mx-auto  space-y-8 md:space-x-10'>
                    {
                    data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
                }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;