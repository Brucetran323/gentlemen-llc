const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-base-content">
      <div>
        <img className="w-44" src="./images/logo.png" alt="Logo" />
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
      <div>
        <span className="footer-title">Set up a phone connotation!</span>
        <div className="form-control w-80">
          <label className="label">
            <span className="label-text"></span>
          </label>
          <div className="relative">
          <input type="number" inputMode="numeric" placeholder="Numbers Only!" className="input input-bordered w-full" />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Submit</button>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;