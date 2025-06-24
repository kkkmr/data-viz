import { useEffect } from "react";
import DialogContent from "./DialogContent"

type RightSlideDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RightSlideDialog = ({ isOpen, onClose }: RightSlideDialogProps) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  return (
    <div
      className={`fixed border-[#525252] border-[1px] top-0 right-0 h-full w-5/5 md:w-4/5 lg:w-2/5 bg-black z-50 shadow-lg transform transition-transform duration-500 ease-linear ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-6 pb-4">
        <h2 className="text-xl font-semibold">Edit Variables</h2>
        <button onClick={onClose} className="text-white hover:cursor-pointer">✕</button>
      </div>

      <div className="my-scrollbar p-6 pt-2 overflow-y-auto h-[calc(100%-60px)]">
        <DialogContent/>
      </div>
    </div>
  );
};

export default RightSlideDialog;