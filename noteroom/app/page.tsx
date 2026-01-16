import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative flex min-h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden bg-transparent">
      {/* Background to cover entire viewport including header area */}
      <div className="fixed inset-0 -z-10 bg-[#F4F4F2]" />
    </div>
  );
}
