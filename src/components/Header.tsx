import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Stotras", path: "/stotras" },
    { name: "Festivals", path: "/festivals" },
    { name: "About Us", path: "/about" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-deep-blue/95 backdrop-blur-sm border-b-4 border-pop-orange">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-pop-orange rounded-full flex items-center justify-center border-3 border-comic-black shadow-comic">
              <span className="font-comic text-2xl text-comic-black">ॐ</span>
            </div>
            <div className="font-comic text-2xl text-pop-orange">
              ARTHVED
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-comic text-lg transition-all duration-300 hover:text-pop-orange ${
                  isActive(item.path)
                    ? "text-pop-orange border-b-2 border-pop-orange"
                    : "text-white hover:scale-105"
                }`}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="comic"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t-2 border-pop-orange/30">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-comic text-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? "text-pop-orange"
                      : "text-white hover:text-pop-orange"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name.toUpperCase()}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};