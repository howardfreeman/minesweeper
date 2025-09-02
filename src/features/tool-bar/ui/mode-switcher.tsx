import { FlagIcon } from "./flag-icon";
import { ShovelIcon } from "./shovel-icon";

export function ModeSwitcher() {
  return (
    <div className="w-14 h-10 flex justify-between items-center">
      <div className="w-5 h-5">
        <FlagIcon />
      </div>
      <div className="w-5 h-5">
        <ShovelIcon />
      </div>
    </div>
  );
}
