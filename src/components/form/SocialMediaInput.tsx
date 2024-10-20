import { useState } from "react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

interface SocialMediaInputProps {}

export const SocialMediaInput = ({}: SocialMediaInputProps) => {
  const [links, setLinks] = useState<string[]>([]);

  /**
   * Adiciona uma instância de input para receber o link de uma rede social.
   *
   * Ordena o array de "inputs" mantenho o LinkedIn sempre no topo.
   * @param link string contendo o nome da rede social
   */
  const handleAddNewLink = (link: string) => {
    setLinks(
      [...links, link].sort((link) => {
        if (link === "linkedin") return -1;
        return 1;
      })
    );
  };

  /**
   * Remove um "input" de link de uma rede social.
   * @param link string contendo o nome da rede social
   */
  const removeLink = (link: string) => {
    setLinks(links.filter((l) => l !== link));
  };

  return (
    <>
      {links.map((link, index) =>
        link === "linkedin" ? (
          <span className="flex items-center p-2 border rounded-md border-gray-300 has-[:focus]:ring-2 has-[:focus]:ring-blue-500 has-[:focus]:dark:text-cyan-300 : focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-cyan-300">
            <FaLinkedin className="mr-2" />
            <input
              key={index}
              type="text"
              title="Linkedin"
              placeholder="Linkedin"
              className="w-full bg-transparent focus:outline-none"
            />
            <FaXmark
              className="hover:text-red-500 cursor-pointer"
              onClick={() => removeLink("linkedin")}
            />
          </span>
        ) : (
          <span className="flex items-center p-2 border rounded-md border-gray-300 has-[:focus]:ring-2 has-[:focus]:ring-blue-500 has-[:focus]:dark:text-cyan-300 focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-cyan-300">
            <FaGithub className="mr-2" />
            <input
              key={index}
              type="text"
              title="GitHub"
              placeholder="GitHub"
              className="w-full bg-transparent focus:outline-none"
            />
            <FaXmark
              className="hover:text-red-500 cursor-pointer"
              onClick={() => removeLink("github")}
            />
          </span>
        )
      )}
      {!links.includes("linkedin") && (
        <button
          type="button"
          onClick={() => handleAddNewLink("linkedin")}
          className="flex gap-1 items-center rounded-full w-fit px-4 py-2 dark:bg-gray-900 dark:text-cyan-500 transition-all duration-200 active:scale-95 active:dark:bg-cyan-500 active:dark:text-gray-900 outline-cyan-500"
        >
          Adicionar LinkedIn
        </button>
      )}
      {!links.includes("github") && (
        <button
          type="button"
          onClick={() => handleAddNewLink("github")}
          className="flex gap-1 items-center rounded-full w-fit px-4 py-2 dark:bg-gray-900 dark:text-cyan-500 transition-all duration-200 active:scale-95 active:dark:bg-cyan-500 active:dark:text-gray-900 outline-cyan-500"
        >
          Adicionar GitHub
        </button>
      )}
    </>
  );
};
