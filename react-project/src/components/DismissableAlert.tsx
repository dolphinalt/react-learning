import type { ReactNode } from "react";

interface DismissableAlertProps {
  onClose: () => void;
}

const DismissableAlert = ({ onClose }: DismissableAlertProps) => {
  return (
    <div className={"alert alert-danger alert-dismissible"}>
      This is an <b>ALERT!!!</b>
      <button
        type="button"
        className="close"
        data-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default DismissableAlert;
