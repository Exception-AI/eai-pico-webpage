import Header from "~/components/Header";
import SkipToContent from "~/components/SkipToContent";
import Comparison from "~/components/homepage/Comparison";
import Features from "~/components/homepage/Features";
import Hero from "~/components/homepage/Hero";
import Stats from "~/components/homepage/Stats";
import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";
import landingPageStyles from "~/styles/css/landings.css";

const { defaultTitle, defaultDescription } = metaData;

export const meta = () => [
  { title: defaultTitle },
  {
    name: "description",
    content: defaultDescription,
  },
];

export function links() {
  return [{ rel: "stylesheet", href: landingPageStyles }];
}

export default function Homepage() {
  const { isLoading } = useNavigation();

  return (
    <>
      <SkipToContent />
      <Header />
      <main id="content" className={`homepage container${isLoading ? " is-loading" : ""}`}>
        <Hero />
        <Stats />
        <Features />
        <Comparison />
      </main>
    </>
  );
}
