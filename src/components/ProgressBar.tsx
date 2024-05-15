"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: true }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
