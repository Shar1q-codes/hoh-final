"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NominateNow from "@/components/NominateNow";

const FloatingNominateButton = () => {
  const [visible, setVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Desktop: Rope + Button */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={visible ? { y: 0, opacity: 1 } : {}}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="fixed top-0 right-6 z-50 hidden lg:flex flex-col items-center"
      >
        <motion.div
          initial={{ rotate: -5 }}
          animate={{ rotate: [-5, 5, -3, 3, -1, 1, 0] }}
          whileHover={{ rotate: [0, 3, -3, 2, -2, 0] }}
          transition={{ duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center origin-top"
        >
          <div className="h-[45vh] w-[2px] bg-white/60 animate-pulse" />
          <button
            onClick={() => setShowModal(true)}
            className="rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-6 py-3 font-bold text-black text-sm shadow-2xl hover:scale-105 transition-transform glow-effect origin-top"
          >
            Nominate Now
          </button>
        </motion.div>
      </motion.div>

      {/* Mobile: Button only (bottom-right) */}
      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 px-5 py-3 font-bold text-black text-sm shadow-xl hover:scale-105 transition-transform glow-effect lg:hidden"
      >
        Nominate Now
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-center items-start bg-black/70 backdrop-blur-sm overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-auto my-16 rounded-xl bg-white/5 backdrop-blur-lg border border-white/20 shadow-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-2xl text-white/80 hover:text-red-500 z-10"
              >
                &times;
              </button>

              {/* Nominate Form inside Modal */}
              <NominateNow isModal={true} onClose={() => setShowModal(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNominateButton;
