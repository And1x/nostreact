import { ReactNode } from "react";

export default function ContentBox({ children }: { children: ReactNode }) {
  return (
    <div className="relative box-border h-auto w-fit p-7 font-bold text-slate-200 bg-gray-700 rounded border border-emerald-600 shadow-xl">
      {children}
    </div>
  );
}
