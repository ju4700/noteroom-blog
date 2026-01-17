"use client";

import dynamic from "next/dynamic";

const ColorBends = dynamic(() => import("./ColorBends"), {
  ssr: false,
});

export default function ColorBendsWrapper(props: any) {
  return <ColorBends {...props} />;
}
