import { motion } from 'framer-motion';

const NikhilSignatureLoader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
      className="fixed inset-0 z-9999 flex items-center justify-center bg-brand-900"
    >
      <div className="w-[min(72vw,400px)]">
        <svg
          viewBox="0 0 1065 578"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          {/* Main left arc — the 'N' / flowing start of the signature */}
          <motion.path
            d="M119.455 488.999C162.255 360.999 166.955 204.666 163.955 142.499C170.455 313.333 245.273 552.174 289.454 462C350.454 337.5 504.454 56.9992 249.454 50.9992C-5.54564 44.9992 -90.4184 576.499 119.455 576.5C466.454 576.5 450.191 239.793 430.954 288.5C407.454 348 408.954 431.5 466.454 446.5"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 1.8, ease: [0.25, 0.1, 0.25, 1] },
              opacity: { duration: 0.3 },
            }}
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Vertical stroke — the 'i' stem */}
          <motion.path
            d="M569.277 62.0269L523.277 458.527"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 1.7 },
              opacity: { duration: 0.2, delay: 1.7 },
            }}
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Right flowing strokes — 'k', 'h', 'i', 'l' */}
          <motion.path
            d="M674.782 141.527C627.282 214.527 506.907 369.439 504.282 343.027C496.281 262.526 636.777 427.527 678.277 363.527C719.777 299.527 794.782 -194.473 753.282 87.0265C720.082 312.227 707.782 414.86 705.782 438.026C699.948 377.36 701.282 254.826 753.282 250.026C818.282 244.026 804.277 429.527 822.277 416.527C840.277 403.527 876.271 146.323 885.277 279.527C893.63 403.08 913.777 410.527 948.782 386.026C1056.18 310.86 1068.28 13.6264 1030.28 10.0264C982.782 5.52644 976.777 424.527 1064.28 368.027"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 1.2, ease: [0.25, 0.1, 0.25, 1], delay: 2.2 },
              opacity: { duration: 0.2, delay: 2.2 },
            }}
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Dot for the first 'i' */}
          <motion.path
            d="M438.844 254.034C431.376 254.773 433.344 266.034 438.844 265.534C444.344 265.034 446.312 253.295 438.844 254.034Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 0.5, ease: 'easeOut', delay: 3.55 },
              opacity: { duration: 0.15, delay: 3.55 },
            }}
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Dot for the second 'i' */}
          <motion.path
            d="M882.844 208.034C875.376 208.773 877.344 220.034 882.844 219.534C888.344 219.034 890.312 207.295 882.844 208.034Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              pathLength: { type: 'tween', duration: 0.4, ease: 'easeOut', delay: 3.85 },
              opacity: { duration: 0.15, delay: 3.85 },
            }}
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
    </motion.div>
  );
};

export default NikhilSignatureLoader;
