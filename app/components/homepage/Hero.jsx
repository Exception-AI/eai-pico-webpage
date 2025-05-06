import Link from "~/components/Link";
import ArrowRight from "~/components/icons/ArrowRight";

export default function Hero(props) {
  return (
    <section className="hero" {...props}>
      <div className="hook">
        <h1>
          <mark>AI Agents&nbsp;at Your Service</mark> <br />
          to Automate Your Tasks
        </h1>
        <p className="secondary">
          Our intelligent AI agents follow your instructions step by step, iterating until they
          achieve your defined goals. They can also suggest tasks and autonomously execute them
          based on your needs.
        </p>
        <p>
          Simply define your tasks and let our AI agents do the rest. From execution to iteration,
          they'll adapt to ensure completion.
        </p>
        <div className="grid ctas">
          <Link to="/login" role="button">
            Get Started
            <ArrowRight />
          </Link>
          {/*<Link to="/demo" role="button" className="contrast">*/}
          {/*  Demo*/}
          {/*  <ArrowRight />*/}
          {/*</Link>*/}
        </div>
      </div>
      {/*<Demo />*/}
    </section>
  );
}
