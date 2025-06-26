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
            <a href="https://rebrand.ly/0mh28ht">Gencall</a>, a revolutionary
            language learning platform that connects learners with their
            potential for growth. Gencall is available now on{" "}
            <a href="https://rebrand.ly/0mh28ht">iOS and Android</a>.
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
            ourselves. We are remote-first with offices in New York and San
            Francisco.
          </p>
          <p className="team-member">
            Godo Lim, Co-Founder & CEO
            <br />
            Junseo Oh, Co-Founder & CTO
            <br />
            Hyerin Jang, Co-Founder & Designer
          </p>
          <p>
            If you&apos;re interested in joining our mission to light the torch
            of knowledge for humanity, please email us at{" "}
            <a href="mailto:caveoffounders@gmail.com">
              caveoffounders@gmail.com
            </a>
            .
          </p>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <a href="https://rebrand.ly/0mh28ht">GENCALL</a>
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
