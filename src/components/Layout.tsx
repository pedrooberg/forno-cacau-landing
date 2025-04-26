
import { Mail, Phone, Instagram, Globe } from "lucide-react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://player.vimeo.com/external/372308607.sd.mp4?s=0c597b55efb8d89ccfe4cd7545d755e700444396&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative z-10">
        {children}
      </div>

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
