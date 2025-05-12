export default function Hero(props) {
  return (
    <section className="examples-list" {...props}>
      <article key={1}>
        <h2>Free</h2>
        <p>Try Zola</p>
        <button className="container-fluid outline">Try Zola</button>
        <ul>
          <li className="hide-before-sm">Define 3 goals</li>
          <li className="hide-before-sm">10 Timed Inferences/Day</li>
          <li className="hide-before-sm">100 Inferences/Day</li>
          <li className="hide-before-sm">100mb Storage</li>
          <li className="hide-before-sm">Limited Dashboard Features</li>
        </ul>
      </article>
      <article key={2}>
        <h2>Pro</h2>
        <p>For everyday use</p>
        <button className="container-fluid outline">Try Zola</button>
        <ul>
          <li className="hide-before-sm">10 Projects</li>
          <li className="hide-before-sm">Unlimited Inferences/Day</li>
          <li className="hide-before-sm">250mb Storage</li>
          <li className="hide-before-sm">Unlimited Reports/Day</li>
          <li className="hide-before-sm">Full Dashboard Features</li>
          <li className="hide-before-sm">Async Support</li>
        </ul>
      </article>
      <article key={3}>
        <h2>Max</h2>
        <p>Get the most out of Zola agents</p>
        <button className="container-fluid outline">Try Zola</button>
        <ul>
          <li className="hide-before-sm">Define 3 goals</li>
          <li className="hide-before-sm">Storage up to 100mb</li>
        </ul>
      </article>
    </section>
  );
}
