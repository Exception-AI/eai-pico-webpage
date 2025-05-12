import Header from "~/components/Header";
import SkipToContent from "~/components/SkipToContent";
import Hero from "~/components/login/Hero";
import Login from "~/components/login/Login";
import { useNavigation } from "~/contexts/NavigationContext";
import metaData from "~/data/meta";
import landingPageStyles from "~/styles/css/landings.css";

const { titleSuffix } = metaData;

export const meta = () => [
  { title: `Login ${titleSuffix}` },
  {
    name: "description",
    content: "Login to try out Zola.",
  },
];

export function links() {
  return [{ rel: "stylesheet", href: landingPageStyles }];
}

export default function LoginPage() {
  const { isLoading } = useNavigation();

  return (
    <>
      <SkipToContent />
      <Header />
      <main id="content" className={`examples container${isLoading ? " is-loading" : ""}`}>
        <Hero />
        <Login />
      </main>
    </>
  );
}
