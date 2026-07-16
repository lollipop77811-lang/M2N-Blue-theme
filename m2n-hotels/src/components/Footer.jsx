import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="py-16 px-4 md:px-8 lg:px-16 bg-background border-t border-accent">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-heading text-lg font-bold tracking-[8px] text-primary uppercase mb-4">
              M2N
            </h3>
            <p className="font-body text-muted text-sm leading-relaxed">
              Redefining luxury hospitality through thoughtful design and
              impeccable service.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-[4px] text-primary uppercase mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  className="font-body text-muted text-sm hover:text-primary transition-colors"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="font-body text-muted text-sm hover:text-primary transition-colors"
                  to="/rooms"
                >
                  Rooms & Suites
                </Link>
              </li>
              <li>
                <Link
                  className="font-body text-muted text-sm hover:text-primary transition-colors"
                  to="/dining"
                >
                  Dining
                </Link>
              </li>
              <li>
                <Link
                  className="font-body text-muted text-sm hover:text-primary transition-colors"
                  to="/lawns"
                >
                  Lawns & Banquet
                </Link>
              </li>
              <li>
                <Link
                  className="font-body text-muted text-sm hover:text-primary transition-colors"
                  to="/contact"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-[4px] text-primary uppercase mb-4">
              Contact
            </h4>
            <p className="font-body text-muted text-sm leading-relaxed">
              123 Luxury Avenue
              <br />
              Metropolis, NY 10001
              <br />
              +1 (555) 123-4567
            </p>
          </div>
          <div>
            <h4 className="font-heading text-xs font-semibold tracking-[4px] text-primary uppercase mb-4">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="font-body text-muted text-sm hover:text-primary transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="font-body text-muted text-sm hover:text-primary transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="font-body text-muted text-sm hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-accent text-center">
          <p className="font-body text-xs text-muted tracking-[2px] uppercase">
            © 2024 M2N Hotels. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
