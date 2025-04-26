
import { Mail, Phone } from "lucide-react";

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  whatsapp: string;
}

const ContactCard = ({ name, role, email, whatsapp }: ContactCardProps) => {
  return (
    <div className="contact-signature">
      <h4>{name}</h4>
      <p className="text-forno-green text-sm">{role}</p>
      <div className="contact-info">
        <a href={`mailto:${email}`}>
          <Mail className="w-4 h-4" />
          {email}
        </a>
        <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}>
          <Phone className="w-4 h-4" />
          {whatsapp}
        </a>
      </div>
    </div>
  );
};

export default ContactCard;
