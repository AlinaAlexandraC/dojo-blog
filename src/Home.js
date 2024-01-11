import { useState, useEffect } from 'react';
import BlogList from './BlogList';

// 3rd Example - outputting lists

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    // const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // useEffect(() => {
    //     console.log("Use effect ran");
    //     console.log(name);
    // }, [name]);

    useEffect(() => {
        console.log("Use effect ran");
    }, []);

    return (
        <div className="home">
            <BlogList blogs={ blogs } title="All blogs" handleDelete={handleDelete}/>
            {/* <BlogList blogs={ blogs.filter((blog) => blog.author === 'mario') } title="Mario's blogs" /> */}
            {/* <button onClick={() => setName('luigi')}>change name</button>
            <p>{ name }</p> */}
        </div>
    );
}

// 2nd Example - using useState hooks to update content on site

// const Home = () => {
//     // let name = "Mario"; // only updating name in Console
//     const [name, setName] = useState('Mario');
//     const [age, setAge] = useState(25);

//     const handleClick = () => {
//         // name = "Luigi";
//         // console.log(name);
//         setName('Luigi');
//         setAge(30);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <p>{ name } is { age } years old</p>
//             <button onClick={handleClick}>Click me</button>
//         </div>
//     );
// }

// 1st Example - two buttons (created using functions - one function without and one function with a parameter)

// const Home = () => {

//     const handleClick = () => {
//         console.log("Hello, ninjas");
//     }

//     const handleClickAgain = (name) => {
//         console.log(`Hello, ${name}`);
//     }

//     return (
//         <div className="home">
//             <h2>Homepage</h2>
//             <button onClick={handleClick}>Click me</button>
//             <button onClick={() => handleClickAgain("Mario")}>Click me again</button>
//         </div>
//     );
// }

export default Home;