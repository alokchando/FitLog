"use client";

import { useContext } from "react";
import { workoutContext } from "@/context/context";
import React from "react";

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
      className="rounded-lg border border-gray-700 px-4 py-2.5 text-xs font-medium text-gray-300 transition-colors duration-200 hover:bg-gray-800"
    >
      Save for later
    </button>
  );
};

export default SaveLaterBtn;
