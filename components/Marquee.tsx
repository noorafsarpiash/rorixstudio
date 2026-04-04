import { motion } from "framer-motion";
import { usePreferences } from "@/hooks/usePreferences";
import { formatPrice } from "@/lib/utils";

export function Marquee() {
  const { currency } = usePreferences();

  const items = [
    "150+ Projects Completed",
    "★ 5.0 Google Rating",
    "8 Years in Dubai",
    "Palm Jumeirah · Downtown · Business Bay",
    `${formatPrice(2000000000, currency)} in Designed Properties`,
    "Featured in Gulf News"
  ];

  return (
    <div id="marquee-bar">
      <motion.div 
        className="marquee-track"
        animate={{ x: [0, "-50%"] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        style={{ display: "flex", width: "fit-content" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center shrink-0">
            <span className="marquee-item">{item}</span>
            <span className="marquee-dot">·</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
