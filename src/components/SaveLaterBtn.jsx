"use client";

import { useContext } from "react";
import { workoutContext } from "@/context/context";
import React from "react";
import { Bookmark } from "lucide-react";

const SaveLaterBtn = ({ workout }) => {
  const { later, setLater } = useContext(workoutContext);
  const { saved, setSaved } = useContext(workoutContext);

  const handleSaveLater = () => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      return;
    }
    setLater([...later, workout]);
  };

  return (
    <button
    onClick={handleSaveLater}
    className=" flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-xs font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-800"
    >
    <Bookmark size={16} />
      Save for later
    </button>
  );
};

export default SaveLaterBtn;
