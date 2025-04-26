import { Mail, Phone, Instagram, Globe } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Italian pattern columns */}
      <div className="italian-pattern left-0" />
      <div className="italian-pattern right-0" />
      
      <header className="relative z-10 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center gap-6">
            <img 
              src="/lovable-uploads/2ce15f8a-5319-4e89-8bc0-ccf41cc629b2.png" 
              alt="Forno da Cacau" 
              className="w-full max-w-2xl"
            />
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:+5582996146604" className="hover:text-forno-green transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" />
                +55 82 99614-6604
              </a>
              <a href="mailto:faleconosco@fornodacacau.com.br" className="hover:text-forno-green transition-colors hidden md:flex items-center gap-2">
                <Mail className="w-4 h-4" />
                faleconosco@fornodacacau.com.br
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-24">
        {children}
      </main>

      <footer className="bg-black/80 text-white py-8 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-playfair text-xl mb-4">Contato B2B</h3>
              <div className="flex items-center gap-2 mb-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+5582996146604" className="hover:text-forno-green transition-colors">
                  +55 82 99614-6604
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Redes Sociais</h3>
              <div className="flex items-center gap-2 mb-2">
                <Instagram className="w-4 h-4" />
                <a href="https://instagram.com/fornodacacau" target="_blank" rel="noopener noreferrer" className="hover:text-forno-green transition-colors">
                  @fornodacacau
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Website</h3>
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-4 h-4" />
                <a href="https://www.fornodacacau.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-forno-green transition-colors">
                  fornodacacau.com.br
                </a>
              </div>
            </div>
            <div>
              <h3 className="font-playfair text-xl mb-4">Email</h3>
              <div className="flex items-center gap-2 mb-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:faleconosco@fornodacacau.com.br" className="hover:text-forno-green transition-colors">
                  faleconosco@fornodacacau.com.br
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p>&copy; {new Date().getFullYear()} Forno da Cacau. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
