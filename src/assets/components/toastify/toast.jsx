import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ErrorToast, SuccessToast } from "./toastify-help";

export const Toast = () => {
  const notify = () => {
    SuccessToast(`t am clicked`,'top-center')

  };

  return (
    <div>
      <button onClick={notify}>Click me</button>
      <ToastContainer />
    </div>
  );
};
