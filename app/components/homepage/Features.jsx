import Adjustments from "~/components/icons/Adjustments";
import Brightness from "~/components/icons/Brightness";
import CodeIcon from "~/components/icons/Code";
import Expand from "~/components/icons/Expand";
import Speedtest from "~/components/icons/Speedtest";

export default function Features(props) {
  return (
    <section className="features" {...props}>
      <hgroup>
        <h2>
          Superpowered <mark>AI&nbsp;Agents</mark>
        </h2>
        <p>
          Agents that can be directed and guided to seamlessly execute tasks, iterating until your
          goals are achieved with precision and efficiency.
        </p>
      </hgroup>
      <div className="grid">
        <article>
          <CodeIcon />
          <h3>Guided by Human Intuition</h3>
          <p>
            Zola can contact the user at any stage to clarify requirements or ask for futher
            permission for sensitive tasks.
          </p>
          {/*<ArrowLink to="/docs/classless">Discover the class-less version</ArrowLink>*/}
        </article>
        <article>
          <Expand />
          <h3>Safety At Each Step</h3>
          <p>
            Each step in our agent execution process is designed with safety in mind, from input
            validation and ethical alignment before execution to real-time monitoring and result
            evaluation after completion.
          </p>
          {/*<ArrowLink to="/docs">Learn about safety</ArrowLink>*/}
        </article>
        <article>
          <Expand />
          <h3>24/7 Maximum Effort</h3>
          <p>
            Zola operates 24/7, continuously learning and adapting to user needs, moving beyond the
            traditional prompt-and-response model to provide proactive, dynamic assistance. They
            autonomously manage tasks, anticipate next steps, and adjust their actions in real-time
            to optimize outcomes.
          </p>
          {/*<ArrowLink to="/docs/typography">Discover always on agents</ArrowLink>*/}
        </article>
        <article>
          <Brightness />
          <h3>Advanced Reasoning</h3>
          <p>
            Zola, our advanced reasoning agent, enhances prompting and safety checks by continuously
            evaluating context and ensuring that every action aligns with ethical standards and
            safety protocols. Leveraging tools and MCP servers, Zola not only refines its
            decision-making process but also integrates real-time data, allowing for dynamic,
            context-aware responses while maintaining the highest level of safety and control.
          </p>
          {/*<ArrowLink to="/docs/color-schemes">Learn about advanced reasoning</ArrowLink>*/}
        </article>
        <article>
          <Adjustments />
          <h3>Periodic Reporting and Insights</h3>
          <p>
            Zola generates daily reports that provide detailed insights into progress, highlight
            potential issues, and identify areas requiring attention or improvement, ensuring
            continuous optimization and accountability.
          </p>
          {/*<ArrowLink to="/docs/css-variables">Learn about reporting</ArrowLink>*/}
        </article>
        <article>
          <Speedtest />
          <h3>Optimized Performance</h3>
          <p>
            Optimized execution at scale is achieved through robust, redundant fallbacks that ensure
            uninterrupted service.
          </p>
          {/*<ArrowLink to="/docs">Optimized execution</ArrowLink>*/}
        </article>
      </div>
    </section>
  );
}
