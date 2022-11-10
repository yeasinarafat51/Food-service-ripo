import React from 'react';
import Usetitle from '../../../hooks/Usetitle';

const Blog = () => {
    Usetitle('Blog')
    return (
        <div className='text-center bg-cyan-100'>
            <h1 className='text-orange-600'>Difference between SQL and NoSQL</h1>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores. SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            <h1 className='text-orange-600'>What is JWT, and how does it work?</h1>
            <p> JWTs are a good way of securely transmitting inform between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.</p>
            <h1 className='text-orange-600'>What is the difference between javascript and NodeJS?</h1>
            <p >JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language</p>
            <h1 className='text-orange-600'>How does NodeJS handle multiple requests at the same time?</h1>
            <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
        </div>
    );
};

export default Blog;