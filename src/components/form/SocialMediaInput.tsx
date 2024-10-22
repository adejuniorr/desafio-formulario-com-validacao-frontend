import { useFormContext } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IconButton } from "../buttons/IconButton";
import { useState } from "react";

export const SocialMediaInput = () => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const [links, setLinks] = useState<string[]>([]);

  /**
   * Atualiza o array de links com um novo valor inserido no input.
   * @param link string contendo o nome da rede social do novo link
   */
  const handleAddNewLink = (link: string) => {
    const updatedLinks = [...links, link].sort((link) =>
      link === "linkedin" ? -1 : 1
    );

    if (link === "linkedin") {
      setValue("linkedin", undefined);
    } else {
      setValue("github", undefined);
    }

    setLinks(updatedLinks);
  };

  /**
   * Remove um link do array de links.
   * @param link string contendo o nome da rede social
   */
  const removeLink = (link: string) => {
    const updatedLinks = links.filter((l: string) => l !== link);
    setLinks(updatedLinks);

    if (link === "linkedin") {
      setValue("linkedin", undefined);
    } else {
      setValue("github", undefined);
    }
  };

  return (
    <>
      {links.map((link: string, index: number) =>
        link === "linkedin" ? (
          <div key={index}>
            <span className="flex items-center p-3 border rounded-md has-[:focus]:ring-2 has-[:focus]:ring-fusion-cyan has-[:focus]:text-fusion-cyan focus:border-transparent bg-gray-900 text-gray-200 border-black focus:ring-fusion-cyan text-fusion-cyan">
              <FaLinkedin className="mr-2" />
              <input
                {...register("linkedin")}
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
            {errors.linkedin && (
              <span className="text-red-500 text-sm">
                {errors.linkedin.message as string}
              </span>
            )}
          </div>
        ) : (
          <div key={index}>
            <span className="flex items-center p-3 border rounded-md has-[:focus]:ring-2 has-[:focus]:ring-fusion-cyan has-[:focus]:text-fusion-cyan focus:border-transparent bg-gray-900 text-gray-200 border-black focus:ring-fusion-cyan text-wrap-fusion-cyan">
              <FaGithub className="mr-2" />
              <input
                {...register("github")}
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
            {errors.github && (
              <span className="text-red-500 text-sm">
                {errors.github.message as string}
              </span>
            )}
          </div>
        )
      )}
      <div className="flex gap-4">
        {!links.includes("linkedin") && (
          <IconButton
            type="button"
            title="Clique para adicionar o link do seu perfil no LinkedIn"
            onClick={() => handleAddNewLink("linkedin")}
            icon={<FaLinkedin />}
          />
        )}
        {!links.includes("github") && (
          <IconButton
            type="button"
            title="Clique para adicionar o link do seu perfil no GitHub"
            onClick={() => handleAddNewLink("github")}
            icon={<FaGithub />}
          />
        )}
      </div>
    </>
  );
};
