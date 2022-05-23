import React from 'react';
import img from '../../img/my-img.jpg';
import './Portfolio.css';

const Portfolio = () => {
    return (
        <div className='bg-slate-200'>
            <div class="card lg:card-side   mx-10">

                <div class="card-body">
                    <div className='card-text '>
                        <h2 class="card-title text-6xl font-bold text-primary mb-5">Hello Imran ahmed!</h2>
                        <p className='text-secondary mb-5 '> I am professional Junior Font End Web Developer</p>
                        <button className='btn btn-outline w-60'>Hire Me</button>
                    </div>
                </div>
                <div class="avatar">
                    <div class=" rounded-xl">
                        <img src={img} alt="Album" />
                    </div>
                </div>


            </div>
            <section className='mx-10 my-20'>
                <h3 className='text-center font-bold text-primary my-20 text-3xl'>About:</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='about-img-container ml-20 py-4'>
                        <img src={img} alt="" />
                    </div>
                    <div className='mx-20'>
                        <h2 className='text-start font-bold text-3xl text-primary'>Imran Ahmed</h2>
                        <p className='text-start font-bold text-secondary'>Font End Web developer</p>
                        <div class="divider w-2/3 mb-10"></div>
                        <p className='mb-5'>Hello everybody! My name is Imran Ahmed. I am a Web Developer, and I'm very passionate and dedicated to my work.</p>
                        <p>I am a student of Programming Hero as web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>

                        <button class="btn btn-outline w-60 my-10">LEARN MORE</button>
                    </div>
                </div>
            </section>
            <section className='mx-10 my-20'>
                <h3 className='text-center font-bold text-primary text-2xl my-20'>My Services</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20 gap-4'>
                    <div class="card w-98 bg-slate-100 shadow">
                        <div className='flex justify-center items-center p-5'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 bg-primary rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h2 class="card-title">Web Development</h2>
                                <p>This is Imran Ahmed portfolio. I am a  javascript web developer. Now I am learning how to make final projects. </p>
                                <div class="card-actions justify-end">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card w-98 bg-slate-100 shadow">
                        <div className='flex justify-center items-center p-5'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 bg-primary rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body">
                                <h2 class="card-title">Full Stack Web Development</h2>
                                <p>This is Imran Ahmed portfolio. I am a  javascript web developer. Now I am learning how to make final projects. </p>
                                <div class="card-actions justify-end">

                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card w-98 bg-slate-100 shadow">
                        <div className='flex justify-center items-center p-5'>
                            <div className=''>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 bg-primary rounded-lg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="card-body my-4">
                                <h2 class="card-title">Creative Designer</h2>
                                <p>This is Imran Ahmed portfolio. I am a  javascript web developer. Now I am learning how to make final projects. </p>
                                <div class="card-actions justify-end">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;