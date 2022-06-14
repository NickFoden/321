import { Link } from "react-router-dom";
import styles from "../src/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const ContactPage = () => {
  return (
    <div className="scrolling_container">
      <div className="scrolling_logo" />
      <p className="text body_text">
        We at 321 Magazine aim to serve as a platform committed to fostering a
        deeper engagement with truly personal image making, while cultivating
        opportunities for both excellent next generation creatives as well as
        established professionals. As an editorial playground, we proudly
        display over 100 pages of content featuring photo stories,
        illustrations, writing, and focused evidence that answers our call to
        contributors for what each issue’s theme means specifically to them.
      </p>
      <nav className="contact_links">
        <Link to="/">
          <img src="/assets/LOGOMARK.svg" className="logo" alt="321" />
        </Link>
        <Link className="text contact_link" to="/contact">
          Contact
        </Link>
        <a
          className="text contact_link"
          href="https://www.instagram.com/321_magazine"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </nav>
    </div>
  );
};

export default ContactPage;
