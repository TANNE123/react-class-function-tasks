import { toast } from "react-toastify";

export const successToasts = (message, position) => {
  toast.success(message, {
    position: position,
  });
};

export const errorToasts = (message, position) => {
  toast.error(message, {
    position: position,
  });
};