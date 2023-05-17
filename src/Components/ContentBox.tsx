import { ReactNode } from "react";

interface ContentBoxProbs {
  children: ReactNode;
  margin?: string;
  borderColor?: string;
}

export default function ContentBox({
  children,
  margin,
  borderColor,
}: ContentBoxProbs) {
  return (
    <div
      className={`relative box-border h-auto  p-4 font-bold text-slate-200 bg-gray-700 rounded border shadow-xl ${
        borderColor ? borderColor : "border-emerald-600"
      } ${margin}`}
    >
      {children}
    </div>
  );
}
