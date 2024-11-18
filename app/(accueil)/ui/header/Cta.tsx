"use client";

import { redirect } from "next/navigation";
import Button from "@/app/ui/button/Button";

function Cta() {
  const handleButton = () => {
    redirect("/contact");
  };

  return (
    <>
      <Button
        label="Travaillons ensemble !"
        variant="primary"
        size="big"
        onClick={handleButton}
      />
    </>
  );
}

export default Cta;
