
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
      >
        <source src="/lovable-uploads/9dc461b4-a912-4b04-bfe0-9b603c4bfa5f.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/70" />
    </motion.div>
  );
};

export default BackgroundVideo;
