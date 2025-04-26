
import { Phone, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  whatsapp: string;
  email: string;
  image: string;
}

const TeamCard = ({ name, role, whatsapp, email, image }: TeamCardProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-32 h-32 rounded-full mb-4 object-cover" />
      <h3 className="text-2xl font-playfair font-bold mb-2">{name}</h3>
      <p className="text-forno-green mb-4">{role}</p>
      <div className="space-y-2">
        <a
          href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
          className="flex items-center gap-2 hover:text-forno-green transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Phone className="w-4 h-4" />
          {whatsapp}
        </a>
        <a
          href={`mailto:${email}`}
          className="flex items-center gap-2 hover:text-forno-green transition-colors"
        >
          <Mail className="w-4 h-4" />
          {email}
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
