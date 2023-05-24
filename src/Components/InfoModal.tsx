import { ReactElement } from "react";

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
          className="flex justify-center items-center fixed inset-0 z-50 border backdrop-blur-sm "
        >
          <div
            className="relative border shadow-2xl rounded-lg bg-gray-200 font-medium p-6 min-w-[54rem] max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 bg-transparent  text-red-600 font-extrabold text-2xl"
              onClick={onClose}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 96 960 960"
                className="w-8 h-8 fill-slate-700 hover:fill-slate-950"
              >
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </button>

            {children}
          </div>
        </div>
      ) : null}
    </>
  );
}
