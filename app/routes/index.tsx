import { Link } from "react-router-dom";
import styles from "../src/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

const IndexPage = () => {
  return (
    <div className="scrolling_container">
      <div className="scrolling_logo" />
        <p className="text body_text">
        We at 321 Magazine aim to serve as a platform committed to fostering a deeper engagement with truly personal image making, while cultivating opportunities for both excellent next generation creatives as well as established professionals. As an editorial playground, we proudly display over 100 pages of content featuring photo stories, illustrations, writing, and focused evidence that answers our call to contributors for what each issue’s theme means specifically to them.
        </p>
        <div className="spacer" />
        <nav className="contact_links">
          <img src="/assets/LOGOMARK.svg" className="logo" alt="321"/>
          <a className="text contact_link" href="mailto:Studio@321-magazine.com">Contact</a>
          <a className="text contact_link" href="https://www.instagram.com/321_magazine" target="_blank" rel="noreferrer">Instagram</a>
        </nav>
    </div>
  );
};

export default IndexPage;
