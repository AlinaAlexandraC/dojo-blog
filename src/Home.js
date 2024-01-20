import { useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
import db from './data/db.json';

const Home = () => {
    // const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
    console.log(db);
    return (
        <div className="home">
            {/* { error && <div> { error} </div>}
            { isPending && <div>Loading...</div> } */}
            {db.blogs && <BlogList blogs={ db.blogs } title="All blogs" />}
        </div>
    );
}

export default Home;