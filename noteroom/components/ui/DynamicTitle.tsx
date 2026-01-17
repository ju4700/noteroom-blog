"use client";

import { useEffect, useRef } from "react";

export default function DynamicTitle() {
  const originalTitleRef = useRef<string>("");

  useEffect(() => {
    originalTitleRef.current = document.title;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        originalTitleRef.current = document.title;
        document.title = "Come Back";
      } else {
        document.title = originalTitleRef.current;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    };
  }, []);

  return null;
}
