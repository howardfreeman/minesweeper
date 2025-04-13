import { useState } from "react";
import { BombIcon } from "@/shared/ui/bomb-icon";

export function Tile({
  mines = 0,
  isMined,
}: {
  mines: number;
  isMined: boolean;
}) {
  const [isRevealed, setIsRevealed] = useState(false);

  const textColors = [
    "",
    "text-teal-600",
    "text-emerald-600",
    "text-green-600",
    "text-lime-600",
    "text-yellow-600",
    "text-amber-600",
    "text-orange-600",
    "text-red-600",
  ];

  const className = isRevealed
    ? `w-10 h-10 bg-slate-200 rounded-lg flex justify-center items-center text-2xl font-semibold ${textColors[mines]}`
    : "w-10 h-10 bg-slate-300 rounded-lg cursor-pointer hover:bg-slate-400";

  return (
    <div className={className} onClick={() => setIsRevealed((ir) => !ir)}>
      {isRevealed ? isMined ? <BombIcon /> : mines || "" : ""}
    </div>
  );
}
