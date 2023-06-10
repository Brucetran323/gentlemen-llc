const Home = () => {
    return (
        <>
            <div id="home-hero" className="hero min-h-screen">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold ">Gentlemen LLC</h1>
                        <p className="mb-5 text-2xl font-semibold">Elevating Events, Simplifying Setups</p>
                        <p className="mb-5 text-xl font-semibold"><a href="tel:470-246-5812">(470) 246-5812</a></p>
                        <button className="btn btn-primary">Contact us</button>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-neutral">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Your Special Day, Our Expert Care</h1>
                        <p className="py-6">Gentlemen LLC specializes in seamless event setups and stress-free teardowns. We work closely
                            with planners and florists to bring your wedding vision to life. Our dedicated team ensures every detail is
                            flawlessly arranged, allowing you to relax and enjoy your special day. Trust us to handle the logistics and
                            create an unforgettable event experience from start to finish.</p>
                    </div>
                    <img className="w-64 py-6" src="./images/logo.png" alt="Logo" />
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Contact Information</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Name" className="input input-bordered input-primary w-full max-w-xs" />
                            </div>
                            <div className="form-control">
                                <label for="email" className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" pattern=".+@globex\.com" placeholder="Email" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control">
                                <label for="phone" className="label">
                                    <span className="label-text">Phone Number</span>
                                </label>
                                <input type="number" inputMode="numeric" placeholder="Numbers Only!" className="input input-bordered w-full" />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;