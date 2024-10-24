interface ButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  type,
  title,
  children,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      className={`flex gap-1 items-center rounded-full w-fit px-4 py-2 dark:bg-gray-900 dark:text-fusion-cyan transition-all duration-200 active:scale-95 hover:dark:bg-fusion-cyan text-fusion-cyan hover:dark:text-gray-900 outline-none focus:outline-2 focus:outline-fusion-cyan ${
        disabled && "cursor-not-allowed"
      }`}
    >
      {children}
    </button>
  );
};
