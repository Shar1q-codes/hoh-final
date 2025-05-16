"use client";

import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import { useLoadingState } from "@/hooks/useLoadingState";
import FloatingNominateButton from "@/components/FloatingNominateButton"; // ✅

export default function LoadingWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = useLoadingState();

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingScreen key="loading" />
      ) : (
        <div key="content">
          {children}

          {/* ✅ Show button only when loading ends */}
          <FloatingNominateButton />
        </div>
      )}
    </AnimatePresence>
  );
}
