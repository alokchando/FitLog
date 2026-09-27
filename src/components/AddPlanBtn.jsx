"use client";

import { workoutContext } from "@/context/context";
import React, { useContext } from "react";

const AddPlanBtn = ({ workout }) => {
  const { saved, setSaved } = useContext(workoutContext);

  const handleAdd = () => {
    const alreadyAdded = saved.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      return;
    }

    setSaved([...saved, workout]);
  };

  return (
    <button
      onClick={handleAdd}
      className="rounded-lg bg-[#ccff00] px-4 py-2.5 text-xs font-semibold text-black"
    >
      Add to today&apos;s plan
    </button>
  );
};

export default AddPlanBtn;
