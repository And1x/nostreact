import { ReactNode } from "react";

interface ContentBoxProbs {
  children: ReactNode;
  margin?: string;
  borderColor?: string;
  padding?: string;
}

export default function ContentBox({
  children,
  margin,
  borderColor,
  padding,
}: ContentBoxProbs) {
  return (
    <div
      className={`relative box-border h-auto font-bold text-slate-200 bg-gray-700 rounded border shadow-xl ${
        borderColor ? borderColor : "border-emerald-600 "
      } ${margin} ${padding ? padding : "p-4"}`}
    >
      {children}
    </div>
  );
}
