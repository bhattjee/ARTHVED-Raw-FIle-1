import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-deep-blue border-t-4 border-pop-orange mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-pop-orange rounded-full flex items-center justify-center border-3 border-comic-black shadow-comic">
                <span className="font-comic text-2xl text-comic-black">ॐ</span>
              </div>
              <div className="font-comic text-3xl text-pop-orange">
                ARTHVED
              </div>
            </div>
            <p className="font-body text-white/80 leading-relaxed">
              Bringing ancient spiritual wisdom to the modern world through vibrant Pop Art aesthetics. 
              Experience the divine power of sacred stotras and bhajans in a whole new way.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-comic text-xl text-pop-orange mb-4">QUICK LINKS</h3>
            <div className="space-y-2">
              <Link to="/" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                Home
              </Link>
              <Link to="/stotras" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                Stotras
              </Link>
              <Link to="/festivals" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                Festivals
              </Link>
              <Link to="/about" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                About Us
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-comic text-xl text-pop-orange mb-4">LEGAL</h3>
            <div className="space-y-2">
              <Link to="/privacy" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="block font-body text-white/80 hover:text-pop-orange transition-colors">
                Disclaimer
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-2 border-pop-orange/30 text-center">
          <p className="font-body text-white/60">
            © 2024 Arthved. All rights reserved. Made with ❤️ for spiritual seekers worldwide.
          </p>
          <div className="mt-4">
            <span className="font-comic text-pop-yellow text-xl">ॐ शान्ति शान्ति शान्तिः ॐ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};