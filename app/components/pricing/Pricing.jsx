export default function Hero(props) {
  return (
    <section className="examples-list" {...props}>
      <article key={1}>
        <h2>Free</h2>
        <p>Try Zima</p>
        <button className="container-fluid outline">Try Zola</button>
        <ul>
          <li className="hide-before-sm">Define 3 goals</li>
          <li className="hide-before-sm">Storage up to 100mb</li>
        </ul>
      </article>
      <article key={2}>
        <h2>Pro</h2>
        <p>For everyday use</p>
        <button className="container-fluid outline">Try Zola</button>
        <ul>
          <li className="hide-before-sm">Define 3 goals</li>
          <li className="hide-before-sm">Storage up to 100mb</li>
        </ul>
      </article>
      <article key={3}>
        <h2>Max</h2>
        <p>Get the most out of Zima agents</p>
        <button className="container-fluid outline">Try Zola</button>
        <ul>
          <li className="hide-before-sm">Define 3 goals</li>
          <li className="hide-before-sm">Storage up to 100mb</li>
        </ul>
      </article>
    </section>
  );
}
