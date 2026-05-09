import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';

const ReadList = () => {

    const [readList, setReadList] = useState([])

    const data = useLoaderData();
    // console.log(data)

    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId));
        setReadList(myReadList);
    },[])

    return (
        <div>
            <Tabs>
                <TabList>
                  <Tab>Read Books</Tab>
                  <Tab>Wishlist Books</Tab>
                </TabList>

                <TabPanel>
                  <h2>Read Books {readList.length}</h2>
                  <div className=''>
                    {
                        readList.map(b => <Book key={b.bookId} singleBook={b} ></Book>)
                    }
                  </div>
                </TabPanel>
                <TabPanel>
                  <h2>Wishlist Books</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;