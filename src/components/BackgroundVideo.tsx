
import { motion } from "framer-motion";

const BackgroundVideo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 w-full h-full object-cover -z-10"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        poster="/lovable-uploads/2ce15f8a-5319-4e89-8bc0-ccf41cc629b2.png"
      >
        <source src="/lovable-uploads/9dc461b4-a912-4b04-bfe0-9b603c4bfa5f.mp4" type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="absolute inset-0 bg-black/70" />
    </motion.div>
  );
};

export default BackgroundVideo;
