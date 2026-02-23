export default function SectionTitle({ children, subtitle, className = "" }) {
  return (
    <div className={`mb-16 md:mb-20 ${className}`}>
      <h2 className="section-title mb-4">{children}</h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-surface-600 max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
