import React from 'react';
import img from '../../img/my-img.jpg';
import map from '../../img/google.gif';
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
            {/* My projects profile code in below */}
            <section>
                <h4 className='text-center font-bold text-2xl text-primary mt-20'>Completed Task</h4>
                <div class="card w-4/5 bg-slate-100 shadow-xl items-center mx-auto my-10">
                    <div class="card-body">
                        <h2 class="card-title">My Projects:</h2>
                        <p>1. <strong><a href="https://zingy-begonia-143548.netlify.app/home">Independent products services Project link</a></strong></p>
                        <p>2. <strong><a href="https://dainty-pika-8f2fc8.netlify.app/about">product-analysis-website live site link </a></strong></p>
                        <p>3. <strong><a href="https://affectionate-dijkstra-ae4b54.netlify.app/">Insta Shaore website </a></strong></p>
                        <p>4. <strong><a href="https://zingy-begonia-143548.netlify.app/home">Madang Health food website </a></strong></p>
                        <p>5. <strong><a href="https://dainty-pika-8f2fc8.netlify.app/about">product-analysis-website live site link </a></strong></p>

                        <div class="card-actions justify-center mt-10">
                            <button class="btn btn-outline">Learn More</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className=' pb-10'>
                <h3 className='text-center font-bold text-2xl text-primary ml-24 mb-20'>SKILLS:</h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
                    <div className='skill justify-self-center ml-24'>
                        <div className='text-start flex'>
                            <div>
                                <p className='text-start'>HTML5</p>
                                <p><progress class="progress w-96 " value="90" max="100"></progress></p>
                            </div>
                            <p>90%</p>
                        </div>
                        <div className='text-start flex'>
                            <div>
                                <p className='text-start'>CSS3</p>
                                <p><progress class="progress w-96 " value="90" max="100"></progress></p>
                            </div>
                            <p>90%</p>
                        </div>
                        <div className='text-start flex'>
                            <div>
                                <p className='text-start'>Javascript</p>
                                <p><progress class="progress w-96 " value="95" max="100"></progress></p>
                            </div>
                            <p>95%</p>
                        </div>
                    </div>
                    <div className='justify-center items-center'>
                        <h4 className='text-center text-primary font-bold text-2xl'>Welcome To my Skills Parts:</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro tenetur excepturi rerum, error, possimus iure veritatis ea similique dolorem aliquam molestias officia illum praesentium eligendi iusto debitis minima? Nemo, nisi. Odit est repellat quas? Ratione nam possimus repudiandae debitis perspiciatis temporibus sint quas iusto voluptas consequatur iste voluptatum aut minima, ad, tempore eum distinctio itaque ab cumque. Eaque quis molestias aperiam, ipsum officia sunt minus voluptates eum ducimus iste animi harum quidem eius architecto sit excepturi illum iure culpa omnis ipsam alias placeat. Vero sit quisquam nesciunt quasi quaerat culpa tempore in iste numquam modi veritatis repellat laborum nemo ad libero, rem reprehenderit eius </p>
                    </div>
                </div>
            </section>
            <section className="about-container py-20">
                <h4 className='text-start font-bold text-2xl text-primary my-20'>Contact Me:</h4>

                <div className='flex justify-around'>
                    <div>
                        <h4 className='text-center font-bold '>Please contact Me:</h4>
                        <form >
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Enter Your name" class="input input-bordered w-96 max-w-xs" required />

                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Enter Your Email" class="input input-bordered w-96 max-w-xs" required />

                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" class="input input-bordered w-96 max-w-xs" required />
                            <br />
                            <input type="button" value="Submit" className='btn btn-primary w-96 my-5 max-w-xs' />
                        </form>
                    </div>
                    <div>
                        <img src={map} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Portfolio;