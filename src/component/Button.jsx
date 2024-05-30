export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-stone-100 px-4 py-2 md:text-base sm:text-sm hover:bg-gray-400 hover:text-stone-100 outline"
      style={{
        borderRadius: "8px",
        fontSize: "14px",
        lineHeight: "18px",
        width: "125px",
      }}
      {...props}
    >
      {children}
    </button>
  );
}
