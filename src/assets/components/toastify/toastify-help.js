import { toast } from "react-toastify";

export const SuccessToast = (message, position) => {
  toast.success(message, {
    position: position,
  });
};

export const ErrorToast = (message, position) => {
  toast.error(message, {
    position: position,
  });
};
