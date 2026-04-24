
'use client';
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setExit(true);
      setTimeout(onFinish, 1000);
    }, 1800);
  }, []);

  return (
    <motion.div className="fixed inset-0 bg-black flex items-center justify-center z-50"
      animate={exit ? { opacity: 0 } : { opacity: 1 }}>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: 200 }}
        className="w-[2px] bg-white"
        transition={{ duration: 1.2 }}
      />
    </motion.div>
  );
}
