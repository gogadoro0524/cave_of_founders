import caveImage from "@/assets/cave.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="main-content">
        <div className="header">
          <Image src={caveImage} alt="Cave" width={80} height={80} priority />
        </div>
        <div className="content">
          <p>
            Cave of Founders is an innovative education technology company
            focused on language learning applications that unlock global
            opportunities. We&apos;re currently building{" "}
            <a href="https://www.gencall.app">Gencall</a>, a revolutionary
            language learning platform that connects learners with their
            potential for growth. Gencall is available now on{" "}
            <a href="https://www.gencall.app/download">iOS and Android</a>.
          </p>
          <p>
            Cave of Founders draws inspiration from the ancient Korean legend of
            Dangun, where beings transform and evolve within the depths of a
            mystical cave, emerging reborn as enlightened humans. We&apos;re
            building our company on the conviction that the best transformations
            come from dedicated teams with a shared passion for the Hongik-ingan
            spirit - benefiting all humanity. Language learning is not just
            about communication; it opens doors to new worlds, connects us to
            diverse opportunities, and awakens the dormant potential within
            ourselves. We&apos;re backed by a strong group of investors
            including <a href="https://thrivecap.com/">Thrive Capital</a>,{" "}
            <a href="https://www.linkedin.com/in/dylanfield">Dylan Field</a>,{" "}
            <a href="https://www.scribble.vc/">Scribble Ventures</a>,{" "}
            <a href="https://www.boxgroup.com/">Box Group</a>,{" "}
            <a href="https://imaginary.co/">Imaginary Ventures</a>,{" "}
            <a href="https://www.coalitionoperators.com/">Coalition</a>,{" "}
            <a href="https://linktr.ee/convictionvc">Conviction</a>,{" "}
            <a href="https://www.wearecopper.us/">Copper</a>,{" "}
            <a href="https://www.positivesumvc.com/">Positive Sum</a>, and a
            group of angel investors who share our vision for illuminating the
            world through education. We are remote-first with offices in New
            York and San Francisco.
          </p>
          <p className="team-member">Godo Lim, Co-Founder & CEO</p>
          <p>
            If you&apos;re interested in joining our mission to light the torch
            of knowledge for humanity, please email us at{" "}
            <a href="mailto:founders@gencall.app">founders@gencall.app</a>.
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://www.gencall.app">GENCALL</a>
            <a href="/gencall/privacy">PRIVACY</a>
            <a href="/gencall/terms">TERMS</a>
            <a href="https://twitter.com/gencallapp">TWITTER</a>
            <a href="https://www.instagram.com/gencallapp/">INSTAGRAM</a>
          </div>
          <p className="footer-copyright">© 2025 CAVE OF FOUNDERS, INC.</p>
          <p className="footer-address">
            2261 MARKET STREET #4958, SAN FRANCISCO, CA
          </p>
        </div>
      </footer>
    </div>
  );
}
