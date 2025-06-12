export default function Button({ children, href }) {
  const classes =
    "bg-black dark:bg-green-400 text-white dark:text-black font-semibold py-3 px-6 rounded-full shadow-md hover:brightness-110 hover:scale-105 transform transition-all duration-200";

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button disabled className={classes}>
      {children}
    </button>
  );
}