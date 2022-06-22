import { useEffect, useRef, useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { useWindowSize } from "~/src/hooks/useWindowSize";
import { StyledBackgroundLogo } from "~/src/styles/styled";
import styles from "../src/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export const meta: MetaFunction = () => ({
  title: "321 Mag",
  description: "321 Magazine",
  "og:image": "https://321-magazine.vercel.app/assets/321.png",
  "twitter:card": "321 Magazine",
  "twitter:image": "https://321-magazine.vercel.app/assets/321.png",
  viewport: "width=device-width,initial-scale=1",
});

const IndexPage = () => {
  const logoWidth = 1387.96;
  const logoHeight = 100.07;
  const size = useWindowSize();
  const v1 = (size.height || 1) * logoWidth;
  const finalWidth = v1 / logoHeight;

  const [height, setHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const ref = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    //@ts-expect-error
    setHeight(ref.current.clientHeight);
    //@ts-expect-error
    setFooterHeight(footerRef.current.clientHeight);
  }, [size.height, size.width]);

  return (
    <div className="scrolling_container">
      <StyledBackgroundLogo
        height={size.height || 1}
        windowWidth={size.width || 100}
        width={finalWidth}
      />
      <p className="text" ref={ref}>
        We at 321 Magazine aim to serve as a platform committed to fostering a
        deeper engagement with truly personal image making, while cultivating
        opportunities for both excellent next generation creatives as well as
        established professionals. As an editorial playground, we proudly
        display over 100 pages of content featuring photo stories,
        illustrations, writing, and focused evidence that answers our call to
        contributors for what each issue’s theme means specifically to them.
      </p>
      <div
        className="spacer"
        style={{ height: `calc(85vh - ${height}px - ${footerHeight}px)` }}
      />
      <nav className="contact_links" ref={footerRef}>
        <img src="/assets/LOGOMARK.svg" className="logo" alt="321" />
        <a className="contact_link" href="mailto:Studio@321-magazine.com">
          Contact
        </a>
        <a
          className="contact_link"
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

export default IndexPage;
