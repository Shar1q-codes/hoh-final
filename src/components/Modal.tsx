import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface ModalProps {
  title: string;
  body: string;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ title, body, onClose }) => {
  // Disable background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 100, opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative max-h-[90vh] w-[90%] max-w-3xl overflow-y-auto rounded-2xl bg-white/10 px-6 py-8 text-white shadow-xl backdrop-blur-lg border border-white/20"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="absolute right-4 top-4 text-2xl text-white/70 hover:text-gold focus:outline-none cursor-pointer hover:text-red-500"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="mb-4 font-lora text-3xl font-bold text-gold">
            {title}
          </h2>

          <div className="font-poppins text-sm leading-7 text-white/90 whitespace-pre-wrap">
            {body}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Modal;
