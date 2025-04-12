export function Field({ width, height }: { width: number; height: number }) {
  const items = [];

  for (let i = 0; i < width * height; i++) {
    items.push(
      <div
        className="w-10 h-10 bg-slate-300 rounded-lg cursor-pointer hover:bg-slate-400"
        key={i}
      ></div>,
    );
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
