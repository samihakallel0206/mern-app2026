import { toast, ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { clearError } from "../JS/actions/auth.actions";
const ErrorToast = ({ errors }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (Array.isArray(errors)) {
      errors.map((error, i) =>
        toast(error.msg, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,

          theme: "light",
          toastId: `${error.msg}-${Date.now()}`,
        }),
      );
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [dispatch, errors]);

  return (
    <div>
      <ToastContainer limit={3} />
    </div>
  );
};

export default ErrorToast;
