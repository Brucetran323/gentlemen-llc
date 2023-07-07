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
                        
                        <label htmlFor="my_modal_7" className="btn">Plan with us!</label>

                        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
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
                                <label className="modal-backdrop text-white mt-5 btn" htmlFor="my_modal_7">Close</label>
                            </div>
                            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">About Us</h1>
                        <p className="py-6 text-lg">Welcome to Gentlemen LLC – where creativity meets efficiency, and elegance aligns with endurance.
                            Founded in Atlanta in 2022, Gentlemen LLC is not your everyday events labor provider. We are a team of dedicated professionals who believe in the artistry of event setup and tear down, especially for weddings – the most magical and memorable events of all.
                            Our journey began when we noticed that wedding coordinators, décor providers, and florists often struggled with the heavy lifting that goes behind setting up the perfect ambiance. This is where we saw our calling – a unique opportunity to support these creative artists, allowing them to focus on what they do best, while we handle the logistics and physicality of the setup and tear down.
                            Over the past year, we have worked on over 50 weddings, adding life to venues and leaving behind sweet memories of beautifully orchestrated events. Not just confined to ATL, we've made dreams come true in Alabama, North Carolina, and Tennessee too, growing in experience, expertise, and finesse with each event.
                            Our mission is simple: To ensure the smooth execution of every event, thereby allowing the creative minds involved to breathe easy and focus on their masterpiece. We serve as the backbone that supports the beautiful wedding industry, promising impeccable service, punctuality, professionalism, and above all – respect for the craft and those who make these magical events possible.
                            Gentlemen LLC is more than just a business – it's a passion project. It's a commitment to play our part in making every wedding truly memorable. Our team doesn't just set up venues, we lay the groundwork for magical experiences. Every bolt tightened, every curtain draped, every chair arranged is done with utmost care, as we know it is these details that make the big day truly special.
                            We thank you for considering us as a partner in your creative journey. Together, let's make every event more than just a day to remember – let's make it an unforgettable experience.
                            Welcome to Gentlemen LLC – We're ready to lift, so you can create.
                        </p>
                    </div>
                    <img className="rounded-3xl w-80" src="./images/1.jpg" alt="Logo" />
                </div>
            </div>
        </>
    )
}

export default Home;