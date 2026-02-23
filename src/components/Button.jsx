export default function Button({
  children,
  variant = "primary",
  size = "lg",
  className = "",
  ...props
}) {
  const baseClasses =
    "font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2";

  const variants = {
    primary:
      "bg-accent-500 hover:bg-accent-600 text-white hover:shadow-lg hover:shadow-accent-500/30",
    secondary:
      "border-2 border-primary-600 text-primary-600 hover:bg-primary-50",
    tertiary: "text-primary-600 hover:bg-primary-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base md:text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
