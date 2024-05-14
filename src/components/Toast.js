import {
    IconAlertCircleFilled,
    IconCircleCheckFilled,
    IconCircleXFilled,
    IconInfoCircleFilled,
    IconX,
  } from "@tabler/icons-react";
  import { useToast } from "../hooks/useToast";
  const toastTypes = {
    success: {
      icon: <IconCircleCheckFilled />,
      iconClass: "success-icon",
      progressBarClass: "success",
    },
    warning: {
      icon: <IconAlertCircleFilled />,
      iconClass: "warning-icon",
      progressBarClass: "warning",
    },
    info: {
      icon: <IconInfoCircleFilled />,
      iconClass: "info-icon",
      progressBarClass: "info",
    },
    error: {
      icon: <IconCircleXFilled />,
      iconClass: "error-icon",
      progressBarClass: "error",
    },
  };
  
 // Toast.js

const Toast = ({ message, type, id }) => {
  const { toastClass, icon, iconClass } = toastTypes[type];
  const toast = useToast() // call useToast

  const handleDismiss = () => {
    toast.remove(id);
   };

  return (
    <div className={`toast ${toastClass}`}>
      <span className={iconClass}>{icon}</span>
      <p className="toast-message">{message}</p>
      <button className="dismiss-btn" onClick={handleDismiss}>
        <IconX size={18} color="#aeb0d7" />
      </button>
    </div>
  );
};

  
  export default Toast;
  