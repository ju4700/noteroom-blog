"use client";

import dynamic from "next/dynamic";

const DarkVeil = dynamic(() => import("@/components/ui/DarkVeil"), {
  ssr: false,
});

export default function DarkVeilWrapper(props: any) {
  return <DarkVeil {...props} />;
}
