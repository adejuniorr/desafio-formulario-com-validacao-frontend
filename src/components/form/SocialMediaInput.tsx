interface SocialMediaInputProps {}

export const SocialMediaInput = ({}: SocialMediaInputProps) => {
  return (
    <>
      <button className="rounded-full w-fit px-4 py-2 dark:bg-gray-900 dark:text-cyan-500 transition-all duration-200 active:scale-95 active:dark:bg-cyan-500 active:dark:text-gray-900">
        Adicionar link
      </button>
      <input
        type="text"
        title="Linkedin"
        placeholder="Linkedin"
        className="w-full p-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-cyan-300"
      />
    </>
  );
};
