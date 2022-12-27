import { useEffect } from "react";
import { ImSpinner } from "react-icons/im";

function LoadingSpinner({ loading }) {
  useEffect(() => {
    if (loading) document.body.style.overflow = "hidden";

    return () => (document.body.style.overflow = "unset");
  }, [loading]);

  return (
    loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/50">
        <ImSpinner className="w-16 h-16 text-white animate-spin" />
      </div>
    )
  );
}

export default LoadingSpinner;
