import PropTypes from "prop-types";

export default function Logo({
  size = "md",
  showText = true,
  variant = "light",
  className = "",
}) {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
    xl: "text-2xl",
  };

  const textColors = {
    light: "text-surface-900",
    dark: "text-white",
  };

  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <img
        src="/logo.svg"
        alt="RP Holding Logo"
        className={`${sizes[size]}`}
        loading="lazy"
      />
      {showText && (
        <span
          className={`font-bold ${textSizes[size]} ${textColors[variant]} whitespace-nowrap`}
        >
          RP HOLDING
        </span>
      )}
    </div>
  );
}

Logo.propTypes = {
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
  showText: PropTypes.bool,
  variant: PropTypes.oneOf(["light", "dark"]),
  className: PropTypes.string,
};
