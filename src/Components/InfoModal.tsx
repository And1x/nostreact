import { ReactElement } from "react";
import { ReactComponent as CloseIcon } from "/src/assets/icons/close.svg";

type Probs = {
  children: ReactElement;
  onClose: (event: React.MouseEvent<HTMLElement>) => void;
  showModal: boolean;
};

export default function InfoModal({ children, onClose, showModal }: Probs) {
  return (
    <>
      {showModal ? (
        <div
          onClick={onClose}
          className="flex justify-center items-center fixed inset-0 z-50 text-sm backdrop-blur-sm "
        >
          <div
            className="relative border shadow-2xl rounded-lg bg-gray-200 font-medium p-6 min-w-[54rem] max-w-[80vw] max-h-[95vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-transparent  text-red-600 font-extrabold text-2xl"
              onClick={onClose}
            >
              <CloseIcon className="w-8 h-8 fill-slate-700 hover:fill-slate-950" />
            </button>

            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
