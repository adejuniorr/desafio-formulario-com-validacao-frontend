import { useState } from "react";
import { FaGithub, FaLink, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Button } from "../buttons/Button";

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
          <span className="flex items-center p-3 border rounded-md border-gray-300 has-[:focus]:ring-2 has-[:focus]:ring-blue-500 has-[:focus]:dark:text-fusion-cyan focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusiontext-fusion-cyan">
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
          <span className="flex items-center p-3 border rounded-md border-gray-300 has-[:focus]:ring-2 has-[:focus]:ring-blue-500 has-[:focus]:dark:text-fusion-cyan focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusiontext-fusion-cyan">
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
        <Button
          type="button"
          title="Clique para adicionar o link do seu perfil no LinkedIn"
          onClick={() => handleAddNewLink("linkedin")}
        >
          Adicionar Linkedin
        </Button>
      )}
      {!links.includes("github") && (
        <Button
          type="button"
          title="Clique para adicionar o link do seu perfil no GitHub"
          onClick={() => handleAddNewLink("github")}
        >
          Adicionar GitHub
        </Button>
      )}
    </>
  );
};
