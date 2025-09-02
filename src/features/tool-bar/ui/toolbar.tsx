import { Indicator } from "./indicator";
import { ModeSwitcher } from "./mode-switcher";
import { ReloadIcon } from "./reload-icon";

export function ToolBar() {
  return (
    <div className="mb-5 flex justify-between items-center h-[50px]">
      <div className="w-10 h-10">
        <ReloadIcon />
      </div>
      <Indicator bombs={10} />
      <ModeSwitcher />
    </div>
  );
}
