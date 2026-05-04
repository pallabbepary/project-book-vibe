// import React, { use } from 'react';

const Book = ({singleBook}) => {
    
    console.log(singleBook)

    const { bookName, author, image, publisher, rating } = singleBook

    // const data = use(bookPromise);
    // console.log(data)

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img src={image} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h1 className="card-title">{bookName}</h1>
    <p>Publisher: {publisher}</p>
    <div className="card-actions">
      <span>{rating}</span>
      <span></span>
    </div>
  </div>
</div>
        </div>
    );
};

export default Book;