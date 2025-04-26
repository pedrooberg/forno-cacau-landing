
import { Mail, Phone } from "lucide-react";
import { motion } from "framer-motion";

interface ContactCardProps {
  name: string;
  role: string;
  email: string;
  whatsapp: string;
}

const ContactCard = ({ name, role, email, whatsapp }: ContactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="contact-signature"
    >
      <h4>{name}</h4>
      <p className="text-forno-green text-sm">{role}</p>
      <motion.div className="contact-info">
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={`mailto:${email}`}
        >
          <Mail className="w-4 h-4" />
          {email}
        </motion.a>
        <motion.a
          whileHover={{ scale: 1.05 }}
          href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`}
        >
          <Phone className="w-4 h-4" />
          {whatsapp}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default ContactCard;
