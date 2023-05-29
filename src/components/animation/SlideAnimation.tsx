import { motion, AnimatePresence } from 'framer-motion';

export default function SlideAnimation({
  children,
  visible,
}: {
  visible: boolean;
  children: React.ReactNode;
}) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ x: '-100%', y: 0 }}
          animate={{ x: 80 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
