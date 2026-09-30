import React from "react";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/site";
import PremiumBackground from "@/components/effects/PremiumBackground";
import FintechEmbed from "./fintech-embed";
import SignalField from "@/components/effects/SignalField";
export const Arrow = () => <span aria-hidden="true">↗</span>;
export function Brand() {
  return (
    <Link className="brand" href="/" aria-label="SPX MGMT home">
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M2 25 11 7h8L10 25zm12 0L23 7h7l-9 18z" fill="currentColor" />
      </svg>
      <span>
        SPX<span className="brand-light">MGMT</span>
        <small>ALTERNATIVE INVESTMENTS</small>
      </span>
    </Link>
  );
}

export function Button({
  href = "/contact",
  children = "Start a conversation",
  light = false,
}) {
  return (
    <Link className={`button ${light ? "button-light" : ""}`} href={href}>
      {children}
      <Arrow />
    </Link>
  );
}
export function Eyebrow({ children, light = false }) {
  return (
    <p className={`eyebrow ${light ? "on-dark" : ""}`}>
      <span />
      {children}
    </p>
  );
}
export function Invitation() {
  return (
    <section className="invitation wrap">
      <div>
        <Eyebrow>THE NEXT CONVERSATION</Eyebrow>
        <h2>
          A different perspective.
          <br />A shared ambition.
        </h2>
        <p>
          Get to know our approach and explore whether it aligns with your
          investment objectives.
        </p>
      </div>
      <Button />
    </section>
  );
}
const principles = [
  [
    "01",
    "Beyond market direction.",
    "A non-directional framework focused on option pricing, time decay, and market dynamics.",
  ],
  [
    "02",
    "Refined in real time.",
    "An approach informed by live market experience and continuously reviewed as conditions evolve.",
  ],
  [
    "03",
    "Discipline by design.",
    "Defined risk parameters, ongoing monitoring, and a deliberate approach to execution.",
  ],
];
export function Home() {
  return (
    <>
      <div className="hero-stage">
      <PremiumBackground position="hero" intensity="standard" />
      <SignalField />
      <section className="hero wrap">
        <div className="hero-copy">
          <Eyebrow>SYSTEMATIC THINKING. QUANTITATIVE PRECISION.</Eyebrow>
          <h1>
            Find the signal.
            <br />
            <em>Beyond the noise.</em>
          </h1>
          <p>
            A quantitative approach to index options.
            <br />
            Independent of direction. Grounded in discipline. Refined in live
            markets.
          </p>
          <Button href="/strategy">Explore our approach</Button>
          <div className="hero-note">
            <span className="tiny-cross">+</span> NON-DIRECTIONAL. SYSTEMATIC.
            INDEPENDENT.
          </div>
        </div>

      </section>
      </div>
      <section className="press-strip wrap" aria-label="Media coverage">
        <span>OUR FOUNDER IN THE NEWS</span>
        <a
          href={articles[0].url}
          target="_blank"
          rel="noreferrer"
          className="wsj-wordmark"
        >
          THE WALL STREET JOURNAL.
        </a>
        <a
          href={articles[1].url}
          className="fintech-wordmark"
        >
          FINTECH<span>TV</span>
        </a>
        <span className="press-note">
          Independent coverage.
          <br />
          Distinct perspectives.
        </span>
      </section>
      <section id="solutions" className="approach-section wrap">
        <div className="section-intro">
          <Eyebrow>01 / THE SPX MGMT APPROACH</Eyebrow>
          <div>
            <h2>
              Markets move.
              <br />
              <span className="muted">Our discipline stays.</span>
            </h2>
            <p>
              SPX MGMT LLC is an alternative investment firm established in 2023
              to provide sophisticated, qualified clients with a systematic,
              risk-managed approach to trading index options. Our strategies are
              grounded in non-directional frameworks and refined in live market
              environments.
            </p>
          </div>
        </div>
        <div className="principles">
          {principles.map(([n, title, body]) => (
            <article className="principle" key={n}>
              <span className="index">
                {n}
                <span>↗</span>
              </span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <Link className="text-link" href="/strategy">
          Inside our investment process <Arrow />
        </Link>
      </section>
      <section id="founder" className="founder-band">
        <PremiumBackground position="section" />
        <div className="wrap founder-grid">
          <div className="founder-photo">
            <Image
              src="/wsj3.png"
              alt="David Chau at the New York Stock Exchange, as featured on the SPX MGMT website"
              width={1332}
              height={1528}
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span>DAVID CHAU / FOUNDER & CIO</span>
          </div>
          <div className="founder-copy">
            <Eyebrow light>02 / THE PEOPLE BEHIND THE PROCESS</Eyebrow>
            <h2>
              Experience earned
              <br />
              in the market.
            </h2>
            <p>
              Led by David Chau, known in the options trading community as
              “Captain Condor,” SPX MGMT brings an independent perspective to
              the complexity of index options.
            </p>
            <p>
              A serial entrepreneur, David has built and invested in multiple
              start-ups and emerging companies. As Chief Investment Officer, he
              is responsible for all investment management and trading decisions
              at SPX MGMT.
            </p>
            <Button href="/about" light>
              Meet our founder
            </Button>
          </div>
        </div>
      </section>
      <section id="wsj" className="insights-section wrap">
        <div className="section-top">
          <div>
            <Eyebrow>03 / IN THE CONVERSATION</Eyebrow>
            <h2>A perspective worth sharing.</h2>
          </div>
          <Link className="text-link" href="/media">
            All media <Arrow />
          </Link>
        </div>
        <div className="article-grid">
          {articles.slice(0, 2).map((article, i) => (
            <Article key={article.url} article={article} index={i} />
          ))}
        </div>
      </section>
      <Interview />
      <section id="contact">
        <Invitation />
      </section>
    </>
  );
}
export function Article({ article, index }) {
  return (
    <a
      className={`article article-${index % 2}`}
      href={article.url}
      target={article.url.startsWith("/") ? undefined : "_blank"}
      rel={article.url.startsWith("/") ? undefined : "noopener noreferrer"}
    >
      <div className="article-heading">
        <span>{article.publication}</span>
        <Arrow />
      </div>
      <div className="article-bottom">
        <span className="eyebrow">{article.category}</span>
        <h3>{article.title}</h3>
        <span className="article-action">
          {article.category === "Video interview" ? "Watch the interview" : "Read the story"} <span aria-hidden="true">↗</span>
        </span>
      </div>
    </a>
  );
}
export function PageHero({ eyebrow, title, text = "" }) {
  return (
    <section className="page-hero wrap">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {text && <p>{text}</p>}
    </section>
  );
}
export function Strategy() {
  return (
    <>
      <PageHero
        eyebrow="OUR INVESTMENT APPROACH"
        title={
          <>
            Built on process.
            <br />
            <em>Refined by markets.</em>
          </>
        }
        text="A systematic, non-directional approach to index options. Grounded in live market experience and guided by disciplined risk management."
      />
      <section className="strategy-feature wrap">
        <div>
          <Eyebrow>THE FRAMEWORK</Eyebrow>
          <h2>
            Opportunity beyond
            <br />
            up or down.
          </h2>
          <p>
            Our strategies are grounded in non-directional frameworks and have
            been refined in live market environments, rather than relying solely
            on back-tested results. We focus on statistical edge and disciplined
            execution.
          </p>
          <p>
            Our process emphasizes transparency, repeatability, and
            institutional-level risk controls, offering sophisticated investors
            an alternative to traditional active trading models. We seek
            risk-adjusted returns through varying market conditions; outcomes
            are not guaranteed.
          </p>
        </div>
        <div className="framework">
          <span className="eyebrow">A CONTINUOUS PROCESS</span>
          <div className="framework-ring">
            <span>
              OBSERVE
              <br />
              <b>↘</b>
            </span>
            <strong>
              Discipline
              <br />
              at the center
            </strong>
            <span>
              <b>↖</b>
              <br />
              ADAPT
            </span>
          </div>
          <div className="framework-bottom">
            ASSESS <span>→</span> EXECUTE <span>→</span> REVIEW
          </div>
        </div>
      </section>
      <section className="process-section wrap">
        <Eyebrow>HOW WE THINK</Eyebrow>
        <h2>Conviction in the process.</h2>
        {[
          [
            "Live market refinement",
            "Our models are continuously reviewed using real-time market dynamics, observed money flows, and evolving option pricing. Live experience informs how the strategy adapts.",
          ],
          [
            "Risk as a starting point",
            "Defined risk parameters and continuous position monitoring are integral to the investment process. Risk management seeks to manage exposure; it cannot eliminate the risk of loss.",
          ],
          [
            "Clear communication",
            "We believe prospective investors should understand the strategy, its risks, and its structure. Offering documents and an individual conversation provide the basis for evaluating suitability.",
          ],
        ].map(([title, body], i) => (
          <div className="process-row" key={title}>
            <span className="index">0{i + 1}</span>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        ))}
      </section>
      <Invitation />
    </>
  );
}
export function Founder() {
  return (
    <>
      <PageHero
        eyebrow="OUR FOUNDER"
        title={
          <>
            An independent mind.
            <br />
            <em>A disciplined approach.</em>
          </>
        }
      />
      <section className="bio wrap">
        <div className="bio-image">
          <Image
            src="/wsj3.png"
            alt="David Chau at the New York Stock Exchange"
            width={1332}
            height={1528}
            sizes="(max-width: 760px) 100vw, 45vw"
          />
          <span>DAVID CHAU</span>
        </div>
        <div>
          <Eyebrow>FOUNDER & CHIEF INVESTMENT OFFICER</Eyebrow>
          <h2>Meet David Chau.</h2>
          <p className="lead">
            Entrepreneur, options trader, and the founder of SPX MGMT.
          </p>
          <p>
            David Chau is the Founder and Chief Investment Officer of SPX MGMT
            LLC, a boutique alternative investment firm specializing in
            non-directional options strategies. A serial entrepreneur, David has
            built and invested in multiple start-ups and emerging companies.
          </p>
          <p>
            David’s work and unique approach to SPX options have been featured
            in The Wall Street Journal and on FinTech TV, where he has shared
            insights into quantitative trading strategies and market efficiency.
          </p>
          <div className="bio-fact">
            <span>2023</span>
            <p>
              SPX MGMT was established to bring a systematic approach to
              non-directional options investing.
            </p>
          </div>
          <Link href="/media" className="text-link">
            Explore the media coverage <Arrow />
          </Link>
          <p className="interview-link">
            <a
              href="#interview"
            >
              Watch David’s FinTech TV interview ↗
            </a>
          </p>
        </div>
      </section>
      <section className="statement wrap">
        <Eyebrow>DAVID CHAU / IN HIS WORDS</Eyebrow>
        <blockquote>
          “As CIO of SPX MGMT LLC, I’m responsible for all investment management
          and trading decisions, bringing a systematic, risk-managed approach to
          every aspect of our firm’s strategy.”
        </blockquote>
        <p>— David Chau, Founder & Chief Investment Officer</p>
      </section>
      <Interview />
      <Invitation />
    </>
  );
}
export function Media() {
  return (
    <>
      <PageHero
        eyebrow="INSIGHTS & MEDIA"
        title={
          <>
            In the market.
            <br />
            <em>In the conversation.</em>
          </>
        }
        text="Independent coverage and perspectives on David Chau, options trading, and the evolving market landscape."
      />
      <section className="wrap media-list">
        <div className="article-grid">
          {articles.map((article, i) => (
            <Article key={article.url} article={article} index={i} />
          ))}
        </div>
        <p className="fineprint">
          The Wall Street Journal opens a third-party publication and may require a subscription.
          Coverage does not constitute an endorsement of SPX MGMT or its
          investments.
        </p>
      </section>
      <Invitation />
    </>
  );
}

export function NotFound() {
  return (
    <section className="page-hero wrap">
      <Eyebrow>404 / PAGE NOT FOUND</Eyebrow>
      <h1>
        A fresh
        <br />
        <em>starting point.</em>
      </h1>
      <p>We couldn’t find the page you requested.</p>
      <Button href="/">Back to home</Button>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <PremiumBackground position="footer" />
      <div className="wrap">
        <div className="footer-top">
          <Brand />
          <p>
            Independent thinking.
            <br />
            Disciplined execution.
          </p>
          <Link href="/contact" className="footer-contact">
            Let’s talk <Arrow />
          </Link>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SPX MGMT LLC</span>
          <div>
            <Link href="/strategy">Our approach</Link>
            <Link href="/about">Our founder</Link>
            <Link href="/media">Media</Link>
            <Link href="/legal">Legal & disclosures</Link>
          </div>
          <span>CARSON CITY, NEVADA</span>
        </div>
        <p className="footer-disclosure">
          For informational purposes only. Not an offer to sell or a
          solicitation to buy securities. Investing involves risk, including the
          possible loss of principal. Past performance is not indicative of
          future results.
        </p>
      </div>
    </footer>
  );
}

export function Interview() {
  return (
      <section id="interview" className="interview-section wrap">
        <div>
          <Eyebrow>THE FOUNDER’S PERSPECTIVE</Eyebrow>
          <h2>
            In conversation
            <br />
            with FinTech TV.
          </h2>
          <p>David on quantitative trading strategies and market efficiency.</p>
        </div>
        <FintechEmbed />
      </section>
  );
}
