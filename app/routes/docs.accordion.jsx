import { useRef } from "react";
import Code from "~/components/Code";
import Heading from "~/components/Heading";
import Link from "~/components/Link";
import Content from "~/components/docs/Content";
import EditOnGithub from "~/components/docs/EditOnGithub";
import Header from "~/components/docs/Header";
import TableOfContents from "~/components/docs/TableOfContents";
import metaData from "~/data/meta";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Accordions ${titleSuffix}` },
  {
    name: "description",
    content:
      "Toggle sections of content in pure HTML, without JavaScript, using minimal and semantic markup.",
  },
];

export default function Accordion() {
  const overviewRef = useRef();
  const buttonVariantsRef = useRef();

  return (
    <>
      {/* Header */}
      <Header
        title="Accordions"
        description="Toggle sections of content in pure&nbsp;HTML, without JavaScript, using minimal and semantic&nbsp;markup."
      />

      {/* Table of content */}
      <TableOfContents
        data={[
          {
            anchor: "",
            title: "Overview",
            ref: overviewRef,
          },
          {
            anchor: "button-variants",
            title: "Button variants",
            ref: buttonVariantsRef,
          },
        ]}
      />

      {/* Content */}
      <Content>
        <section ref={overviewRef}>
          <p>
            <code>name="example"</code> can be added to multiple {" "}
            <Code display="inline">{`<details>`}</Code> so only one can be open at a time.
          </p>
          <article aria-label="Accordions example" className="component">
            <details name="example" open>
              <summary>Accordion 1</summary>
              <p>
                Flamingos are known for their bright pink feathers and distinctive long necks. These
                birds are social creatures that live in large groups, and a group of flamingos is
                called a flamboyance. They can often be seen standing on one leg, which helps them
                conserve body heat.
              </p>
            </details>
            <hr />
            <details name="example">
              <summary>Accordion 2</summary>
              <ul>
                <li>Kangaroos are marsupials that are native to Australia.</li>
                <li>They are known for their powerful hind legs, which they use to hop around.</li>
                <li>Kangaroos can’t walk backwards due to the shape of their legs and tail.</li>
                <li>
                  Baby kangaroos, called joeys, are born very small and undeveloped and must crawl
                  into their mother’s pouch to continue developing.
                </li>
                <li>Some species of kangaroos can leap up to 30 feet in a single bound.</li>
              </ul>
            </details>
            <Code as="footer">{`<details name="example" open>
  <summary>Accordion 1</summary>
  <p>...</p>
</details>

<hr />

<details name="example">
  <summary>Accordion 2</summary>
  <ul>
    <li>...</li>
    <li>...</li>
  </ul>
</details>`}</Code>
          </article>
        </section>

        <section ref={buttonVariantsRef}>
          <Heading level={2} anchor="button-variants">
            Button variants
          </Heading>

          <p>
            <code>role="button"</code> can be used to turn{" "}
            <Code display="inline">{`<summary>`}</Code> into a button.
          </p>
          <article aria-label="Accordions buttons example" className="component">
            <details>
              <summary role="button">Button</summary>
              <p>
                Owls are nocturnal birds of prey that are known for their distinctive hooting calls.
                A group of owls is called a parliament, and these birds are often associated with
                wisdom and intelligence. Owls have excellent hearing and vision, which helps them
                hunt prey in the dark.
              </p>
            </details>
            <Code as="footer">{`<details>
  <summary role="button">Owls</summary>
  <p>...</p>
</details>`}</Code>
          </article>
          <p>
            Like regular buttons, they come with <code>.secondary</code>, <code>.contrast</code>,
            and <code>.outline</code> (Not available in the{" "}
            <Link to="/docs/classless">class-less version</Link>).
          </p>
          <article aria-label="Accordions buttons example" className="component">
            <details>
              <summary role="button" className="secondary">
                Secondary
              </summary>
              <p>
                Ostriches are the largest birds in the world and are native to Africa. They have
                long, powerful legs that they use to run at high speeds, and they can reach up to 45
                miles per hour. An ostrich’s eye is bigger than its brain, which is unusual for
                birds.
              </p>
            </details>
            <details>
              <summary role="button" className="contrast">
                Contrast
              </summary>
              <p>
                Koalas are arboreal marsupials that are native to Australia. They are known for
                their cute and cuddly appearance, but they can be quite aggressive if provoked. The
                fingerprints of koalas are so similar to those of humans that they have been
                mistaken for crime scene prints.
              </p>
            </details>
            <details>
              <summary role="button" className="outline">
                Primary outline
              </summary>
              <p>
                Elephants are the largest land animals and highly intelligent with intricate
                communication systems. They use infrasonic sounds to talk and have long memories.
                They create and maintain habitats for other species, and can eat up to 300 pounds of
                vegetation per day. Their elongated incisor teeth, called tusks, serve various
                purposes, including digging and defense.
              </p>
            </details>
            <details>
              <summary role="button" className="outline secondary">
                Secondary outline
              </summary>
              <p>
                Crows are intelligent birds that are known for their problem-solving abilities. A
                group of crows is called a murder, and these birds have a reputation for being
                mischievous and sometimes even aggressive. Despite their negative image in some
                cultures, crows are important for their role in controlling pest populations and
                maintaining ecological balance.
              </p>
            </details>
            <details>
              <summary role="button" className="outline contrast">
                Contrast outline
              </summary>
              <p>
                Penguins are flightless birds with a tuxedo-like appearance. They swim well and can
                hold their breath for up to 20 minutes. Penguins are social, forming tight-knit
                communities, and some mate for life. They have adaptations to survive in cold
                climates, including thick feathers and a layer of fat for insulation.
              </p>
            </details>
            <Code as="footer">{`<!-- Secondary -->
<details>
  <summary role="button" class="secondary">Secondary</summary>
  <p>...</p>
</details>

<!-- Contrast -->
<details>
  <summary role="button" class="contrast">Contrast</summary>
  <p>...</p>
</details>

<!-- Primary outline -->
<details>
  <summary role="button" class="outline">Primary outline</summary>
  <p>...</p>
</details>

<!-- Secondary outline -->
<details>
  <summary role="button" class="outline secondary">Secondary outline</summary>
  <p>...</p>
</details>

<!-- Contrast outline -->
<details>
  <summary role="button" class="outline contrast">Contrast outline</summary>
  <p>...</p>
</details>`}</Code>
          </article>
        </section>

        {/* Edit on GitHub */}
        <EditOnGithub file="docs.accordion.jsx" />
      </Content>
    </>
  );
}
