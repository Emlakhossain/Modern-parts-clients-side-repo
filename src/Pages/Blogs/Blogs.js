import React from 'react';

const Blogs = () => {
    return (
        <div className=''>
            <h4 className="text-4xl blogs-container text-center font-bold text-primary my-20">Blogs</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-20 '>
                <div class="card w-4/5 bg-base-100  shadow-xl mx-10 my-5">
                    <div class="card-body">
                        <h2 class="card-title text-secondary">How will you improve the performance of a React Application?</h2>
                        <p><small className='text-primary'>Author: Imran Ahmed</small></p>
                        <p>To improve the performance of your React app,</p>
                        <p>1. Avoid inline functions as much as possible</p>
                        <p>2. Remember that Immutability is the key to avoid unnecessary re-renders.</p>
                        <p>3. Always render hidden components like Modals and Dropdowns conditionally</p>
                        <p>4. Always call multiple APIs parallelly.</p>

                    </div>
                </div>
                <div class="card w-4/5 bg-base-100  shadow-xl mx-10 my-5">
                    <div class="card-body">
                        <h2 class="card-title text-secondary">What are the different ways to manage a state in a React application?</h2>
                        <p><small className='text-primary'>Author: Imran Ahmed</small></p>
                        <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.</p>
                        <p>There are four main types of state you need to properly manage in your React apps:</p>
                        <p><strong>1. Local state</strong>:For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs. </p>
                        <p><strong>2. Global state</strong>:Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. </p>
                        <p><strong>3. Server state</strong>:Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 mt-20'>
                <div class="card w-4/5 bg-base-100  shadow-xl mx-10 my-5">
                    <div class="card-body">
                        <h2 class="card-title text-secondary">How does prototypical inheritance work?</h2>
                        <p><small className='text-primary'>Author: Imran Ahmed</small></p>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
                        <p><strong> What is important prototypal inheritance ?</strong></p>
                        <p>One of the most important advantages of prototypal inheritance is that you can add new properties to prototypes after they are created. This allows you to add new methods to a prototype which will be automatically made available to all the objects which delegate to that prototype.</p>

                    </div>
                </div>
                <div class="card w-4/5 bg-base-100  shadow-xl mx-10 my-5">
                    <div class="card-body">
                        <h2 class="card-title text-secondary">What are the different ways to manage a state in a React application?</h2>
                        <p><small className='text-primary'>Author: Imran Ahmed</small></p>
                        <p>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.

                            There are four main types of state you need to properly manage in your React apps:

                            Local state
                            Global state
                            Server state
                            URL state</p>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-20'>
                <div class="card w-4/5 bg-base-100  shadow-xl mx-10">
                    <div class="card-body">
                        <h2 class="card-title text-secondary"> You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p><small className='text-primary'>Author: Imran Ahmed</small></p>
                        <p>To improve the performance of your React app,</p>
                        <p>1. Avoid inline functions as much as possible</p>
                        <p>2. Remember that Immutability is the key to avoid unnecessary re-renders.</p>
                        <p>3. Always render hidden components like Modals and Dropdowns conditionally</p>
                        <p>4. Always call multiple APIs parallelly.</p>

                    </div>
                </div>
                <div class="card w-4/5 bg-base-100  shadow-xl mx-10 mt-10">
                    <div class="card-body">
                        <h2 class="card-title text-secondary"> What is a unit test? Why should write unit tests?</h2>
                        <p><small className='text-primary'>Author: Imran Ahmed</small></p>
                        <p>To improve the performance of your React app,</p>
                        <p>1. Avoid inline functions as much as possible</p>
                        <p>2. Remember that Immutability is the key to avoid unnecessary re-renders.</p>
                        <p>3. Always render hidden components like Modals and Dropdowns conditionally</p>
                        <p>4. Always call multiple APIs parallelly.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;