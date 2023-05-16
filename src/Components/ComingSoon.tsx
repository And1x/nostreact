import { useParams } from "react-router-dom";
import ContentBox from "./ContentBox";

export default function ComingSoon() {
  const param = useParams();

  return (
    <div className="flex flex-col items-center justify-center">
      <ContentBox>
        <div className="flex flex-col gap-4 max-w-[75vw] min-w-[21rem]">
          <h3 className="text-slate-50 text-2xl self-center">Coming Soon</h3>
          <p className="text-white">
            - <span className="text-emerald-50">{param.query}</span>
          </p>
        </div>
      </ContentBox>
    </div>
  );
}
