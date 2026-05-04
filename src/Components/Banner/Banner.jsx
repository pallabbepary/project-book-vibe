import React from 'react';
import bookimage from "../../assets/bookimg.png"

const Banner = () => {
    return (
        <section className='w-11/12 mx-auto bg-[#f3f3f3] flex justify-around items-center rounded-3xl my-15 py-10'>
            <div className=' space-y-10'>
                <h1 className='font-bold text-6xl'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn font-bold rounded-lg px-5 py-7 text-white text-xl bg-[#23BE0A]'>View The List</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </section>
    );
};

export default Banner;