import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <img
            src="/src/assets/img/adam-solutions-logo.png"
            alt="Adam Solutions"
            className="h-6 w-6"
          />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2024 Adam DevOps Solutions Ltd. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <Link to="/policies" className="hover:text-foreground">
            Privacy Policy
          </Link>
          <Link to="/policies" className="hover:text-foreground">
            Terms of Service
          </Link>
          <Link to="/contact" className="hover:text-foreground">
            Support
          </Link>
        </div>
      </div>
    </footer>
  );
}
