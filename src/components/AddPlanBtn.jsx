"use client";

import { workoutContext } from "@/context/context";
import React, { useContext } from "react";
import { CalendarPlus } from "lucide-react";
import { toast } from "react-toastify";

const AddPlanBtn = ({ workout }) => {
  const { saved, setSaved,later } = useContext(workoutContext);

  const handleAdd = () => {
    const alreadyAdded = saved.some((item) => item.id === workout.id);

    if (later.some((item) => item.id === workout.id)) {
            toast.error("Workout is already saved.");
      return
    }


    if (alreadyAdded) {
       toast.error("Workout is already in today's plan.");
      return;
    }

    setSaved([...saved, workout]);
    toast.success("Workout added to today's plan!");
  };

  return (
    <button
      onClick={handleAdd}
      className="flex items-center gap-2 rounded-lg bg-[#ccff00] px-4 py-2.5 text-xs font-semibold text-black"
    >
      <CalendarPlus size={16} />
      Add to today&apos;s plan
    </button>
  );
};

export default AddPlanBtn;
