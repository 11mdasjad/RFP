"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GalleryItemRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/gallery");
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0e0d12] flex items-center justify-center text-white/50 font-mono text-sm">
      Loading visual gallery...
    </div>
  );
}
