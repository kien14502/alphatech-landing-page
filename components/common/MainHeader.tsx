"use client"

import { cn, routes } from "@/lib/utils";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Mainheader = () => {
  const pathname = usePathname()
  return (
    <div className="stick top-0 p-(--padding-layout) text-white flex items-center justify-center gap-4 bg-[#000000b3]">
      <Link href={"/"}>Logo here</Link>
      {routes.map((route) => (
          <Link
            className={cn("uppercase text-lg font-semibold hover:text-primary", pathname === route.link &&"text-primary")}
            href={route.link}
            key={route.link}
          >
            <div className="relative py-2 px-3">
              {route.name}
              {pathname === route.link &&(
              <motion.div
                layoutId="active-tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                }}
              />
            )}
            </div>
            
          </Link>
        ))}
        
    </div>
  );
};
export default Mainheader;
