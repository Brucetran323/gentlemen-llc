const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-base-content">
      <div>
      <img className="rounded-3xl w-44" src="./images/1.jpg" alt="Logo" />
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

    </footer>
  )
};

export default Footer;