"use client";
import React from "react";

type FooterStripeProps = {
  layout?: boolean;
};
const FooterStripe = ({ layout = false }: FooterStripeProps) => {
  const date = new Date().getFullYear();
  return (
    <div
      className={`${layout ? "hidden md:flex" : "flex"}  items-center justify-center bg-[#072742] w-full text-center py-2 text-sm text-white`}
    >
      © {date} Abhishek Jain 🇮🇳. All Rights Reserved
    </div>
  );
};

export default FooterStripe;
