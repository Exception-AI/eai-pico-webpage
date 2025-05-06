import Link from "~/components/Link";
import { useHeader } from "~/contexts/HeaderContext";

export default function Logo({ displayWordmark = true, shouldAnimateLogo = false, ...props }) {
  const { shouldAnimateLogo: shouldAnimateLogoOnRouteChange } = useHeader();
  const isAnimated = shouldAnimateLogo && shouldAnimateLogoOnRouteChange;
  return (
    <Link to="/" className="contrast">
      Exception AI
    </Link>
  );
}
