export function Indicator({ bombs }: { bombs: number }) {
  return (
    <div className="flex justify-center items-center w-[70px] h-10 bg-slate-200 rounded-lg border border-slate-300 text-2xl font-semibold text-red-500">
      {bombs}
    </div>
  );
}
