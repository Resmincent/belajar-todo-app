import { forwardRef } from "react";

const Input = forwardRef(function Input({ textarea, label, ...props }, ref) {
  const styling =
    "border-gray-600 border p-1 focus:outline-none focus:border-gray-900 w-full";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold text-gray-600">{label}</label>
      {textarea ? (
        <textarea
          ref={ref}
          className={styling}
          {...props}
          style={{
            height: "76px",
            borderRadius: "8px",
          }}
        />
      ) : (
        <input
          {...props}
          ref={ref}
          className={styling}
          style={{
            height: "38px",
            borderRadius: "8px",
          }}
        />
      )}
    </p>
  );
});

export default Input;
