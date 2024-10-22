import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { IconButton } from "../buttons/IconButton";

export const SocialMediaInput = () => {
  // const [links, setLinks] = useState<string[]>([]);
  const {
    register,
    setValue,
    getValues,
    watch,
    formState: { errors },
  } = useFormContext();
  const links = watch("socialMediaLinks") || [];

  /**
   * Adiciona uma instância de input para receber o link de uma rede social.
   *
   * Ordena o array de "inputs" mantenho o LinkedIn sempre no topo.
   * @param link string contendo o nome da rede social
   */
  const handleAddNewLink = (link: string) => {
    /* setLinks(
      [...links, link].sort((link) => {
        if (link === "linkedin") return -1;
        return 1;
      })
    ); */
    const updatedLinks = [...links, link].sort((link) =>
      link === "linkedin" ? -1 : 1
    );
    setValue("socialMediaLinks", updatedLinks);
  };

  /**
   * Remove um "input" de link de uma rede social.
   * @param link string contendo o nome da rede social
   */
  const removeLink = (link: string) => {
    // setLinks(links.filter((l) => l !== link));
    const updatedLinks = links.filter((l: string) => l !== link);
    setValue("socialMediaLinks", updatedLinks);
  };

  return (
    <>
      {links.map((link: string, index: number) =>
        link === "linkedin" ? (
          <div key={index}>
            <span className="flex items-center p-3 border rounded-md has-[:focus]:ring-2 has-[:focus]:ring-fusion-cyan has-[:focus]:text-fusion-cyan focus:border-transparent bg-gray-900 text-gray-200 border-black focus:ring-fusion-cyan text-fusion-cyan">
              <FaLinkedin className="mr-2" />
              <input
                {...register(`socialMediaLinksValues.${index}`, {
                  required: "Insira o link do seu perfil no LinkedIn",
                })}
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
            {Array.isArray(errors.socialMediaLinksValues) &&
              errors.socialMediaLinksValues &&
              errors.socialMediaLinksValues[index] && (
                <span className="text-red-500 text-sm">
                  {errors.socialMediaLinksValues[index].message}
                </span>
              )}
          </div>
        ) : (
          <div key={index}>
            <span className="flex items-center p-3 border rounded-md has-[:focus]:ring-2 has-[:focus]:ring-fusion-cyan has-[:focus]:text-fusion-cyan focus:border-transparent bg-gray-900 text-gray-200 border-black focus:ring-fusion-cyan text-wrap-fusion-cyan">
              <FaGithub className="mr-2" />
              <input
                {...register(`socialMediaLinksValues.${index}`, {
                  required: "Insira o link do seu perfil no GitHub",
                })}
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
            {Array.isArray(errors.socialMediaLinksValues) &&
              errors.socialMediaLinksValues &&
              errors.socialMediaLinksValues[index] && (
                <span className="text-red-500 text-sm">
                  {errors.socialMediaLinksValues[index].message}
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
