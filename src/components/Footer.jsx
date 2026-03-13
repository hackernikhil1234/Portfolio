import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 border-t border-brand-800">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-brand-500 text-sm">
          &copy; {new Date().getFullYear()} Nikhil Kumar Yadav. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
