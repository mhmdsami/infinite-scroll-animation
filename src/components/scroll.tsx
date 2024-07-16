"use client";

import { motion } from "framer-motion";
import * as React from "react";
import { useEffect, useId, useRef, useState } from "react";

interface ScrollProps {
  children: React.ReactElement[];
  duration?: number;
  reverse?: boolean;
}

export default function AutoScroll({
  children,
  duration = 20,
  reverse = false,
}: ScrollProps) {
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState(0);
  const [dupes, setDupes] = useState(0);

  useEffect(() => {
    let contentHeight = 0;

    for (let i = 0; i < children.length; i++) {
      const element = document.getElementById(`${id}_index`);
      contentHeight += element?.clientHeight || 0;
    }

    setContentHeight(contentHeight);
  }, [children.length, id]);

  useEffect(() => {
    if (ref.current && contentHeight) {
      setDupes(
        Math.max(Math.ceil((2 * ref.current.clientHeight) / contentHeight), 1),
      );
    }
  }, [contentHeight]);

  return (
    <div ref={ref} className="h-full w-full overflow-hidden">
      <motion.div
        animate={{ y: reverse ? -contentHeight : [-contentHeight, 0] }}
        transition={{
          repeat: Infinity,
          duration,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col"
      >
        {children.map((item, idx) => (
          <div key={idx} id={`${id}_index`}>
            {item}
          </div>
        ))}
        {[...Array(dupes)].map((_) =>
          children.map((item, idx) => <div key={idx}>{item}</div>),
        )}
      </motion.div>
    </div>
  );
}
