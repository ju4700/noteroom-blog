"use client";

import dynamic from "next/dynamic";

const CircularGallery = dynamic(
  () => import("@/components/ui/CircularGallery"),
  {
    ssr: false,
  },
);

export default function CircularGalleryWrapper(props: any) {
  return <CircularGallery {...props} />;
}
