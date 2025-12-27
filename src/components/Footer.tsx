const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm font-body">
            © {new Date().getFullYear()} Vishwa Kumar. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm font-body">
            Built with passion & <span className="text-primary">code</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
