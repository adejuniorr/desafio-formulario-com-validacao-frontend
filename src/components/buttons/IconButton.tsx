interface IconButtonProps {
  type: "button" | "submit" | "reset";
  title: string;
  onClick: () => void;
  icon: React.ReactNode;
}

export const IconButton = ({ type, title, onClick, icon }: IconButtonProps) => {
  return (
    <button
      type={type}
      title={title}
      onClick={onClick}
      className="w-fit border border-fusion-cyan rounded-full p-4 text-[1.4rem] hover:bg-fusion-cyan hover:text-gray-900 transition-all duration-200"
    >
      {icon}
    </button>
  );
};
