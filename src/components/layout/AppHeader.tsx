
import { useState } from 'react';
import { Route, Menu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const AppHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="relative flex items-center">
            <Route className="w-8 h-8" style={{ color: '#3ECF8E' }} />
          </div>
          <span className="text-xl font-semibold text-foreground">
            Secure<span style={{ color: '#3ECF8E' }}>Track</span>
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Dashboard
          </Link>
          <a href="/documents" className="text-sm font-medium hover:text-primary transition-colors">
            Documents
          </a>
          <a href="/assessments" className="text-sm font-medium hover:text-primary transition-colors">
            SOC 2
          </a>
          <Link to="/create-project">
            <Button variant="default" size="sm">
              Create Project
            </Button>
          </Link>
        </nav>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </Button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 glass-card py-4 px-6 slide-up">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              Dashboard
            </Link>
            <a href="/documents" className="text-sm font-medium hover:text-primary transition-colors">
              Documents
            </a>
            <a href="/assessments" className="text-sm font-medium hover:text-primary transition-colors">
              SOC 2
            </a>
            <Link to="/create-project">
              <Button variant="default" size="sm" className="w-full">
                Create Project
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default AppHeader;
