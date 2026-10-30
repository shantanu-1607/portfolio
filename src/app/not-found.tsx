import Link from "next/link";
import { ArrowLeft } from "lucide-react";
export default function NotFound() {
  return (
    <main id="main-content" className="shell error-page" tabIndex={-1}>
      <p className="eyebrow">404 / UNCHARTED TERRITORY</p>
      <h1>
        This route
        <br />
        doesn’t <em>exist.</em>
      </h1>
      <p>The page may have moved. There’s still plenty to explore.</p>
      <Link href="/" className="button button-primary">
        <ArrowLeft size={16} /> Back to the portfolio
      </Link>
    </main>
  );
}
