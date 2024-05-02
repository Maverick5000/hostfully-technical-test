import { toast, ToastPosition } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const toastConfig = {
  position: "bottom-left" as ToastPosition,
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  className: "w-[320px] md:w-[450px] lg:w-[450px]",
};

/**
 * @param {string} msg
 * @returns {void}
 * @description Show toast messages
 */
const Toast = {
  success: (msg: string) => {
    toast.success(msg, toastConfig);
  },
  error: (msgs: string) => {
    toast.error(msgs, toastConfig);
  },
  info: (msg: string) => {
    toast.info(msg, toastConfig);
  },
  warn: (msg: string) => {
    toast.warn(msg, toastConfig);
  },
  dark: (msg: string) => {
    toast.dark(msg, toastConfig);
  },
};

export default Toast;
