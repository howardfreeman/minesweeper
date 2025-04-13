import { Tile } from "@/shared/ui/tile";

export function Field({ width, height }: { width: number; height: number }) {
  const items = [];

  for (let i = 0; i < width * height; i++) {
    items.push(<Tile key={i} isMined={false} mines={i} />);
  }

  return (
    <div
      className={`grid gap-1`}
      style={{
        gridTemplateColumns: `repeat(${width}, auto)`,
        gridTemplateRows: `repeat(${height}, auto)`,
      }}
    >
      {items}
    </div>
  );
}
