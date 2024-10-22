import { useEffect, useRef, useState } from "react";
import { FaArrowDown } from "react-icons/fa";

export const RoleSelector = () => {
  let roles: string[] = [
    "Desenvolvedor Frontend",
    "Desenvolvedor Backend",
    "Desenvolvedor Full Stack",
    "Desenvolvedor Mobile",
    "Desenvolvedor de Software",
    "Engenheiro de Software",
    "Arquiteto de Software",
    "UI/UX Designer",
    "Analista de Sistemas",
    "Analista Programador",
    "DevOps Engineer",
    "Engenheiro de Dados",
    "QA Engineer",
    "Scrum Master",
    "Product Owner",
  ];

  const [role, setRole] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  /**
   * Alterna a lista de cargos entre aberta e fechada
   * @returns void
   */
  const toggleRoleSelector = () => setIsOpen(!isOpen);

  const roleSelectorRef = useRef<HTMLDivElement>(null);

  const handleClickOutSide = (e: MouseEvent) => {
    if (
      roleSelectorRef.current &&
      !roleSelectorRef.current.contains(e.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutSide);
    } else {
      document.removeEventListener("mousedown", handleClickOutSide);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutSide);
    };
  }, [isOpen]);

  /**
   * Array contendo os cargos filtrados pelo texto inserido
   * no campo de input
   */
  const filteredRoles = roles.filter((search) =>
    search.toLowerCase().includes(role.toLowerCase())
  );

  /**
   * Atualiza o cargo selecionado e fecha a lista
   * @param {string} selectedRole cargo selecionado
   */
  const handleSelectRole = (selectedRole: string) => {
    setRole(selectedRole);
    setIsOpen(false);
  };

  return (
    <>
      <div
        onClick={toggleRoleSelector}
        className="relative flex items-center p-3 border rounded-md has-[:focus]:ring-2 has-[:focus]:ring-fusion-cyan has-[:focus]:text-fusion-cyan focus:border-transparent bg-gray-900 text-gray-200 border-black focus:ring-fusiontext-fusion-cyan"
      >
        <input
          required
          id="role-input"
          type="text"
          title="Selecione um cargo"
          placeholder="Cargo"
          className="w-full bg-transparent focus:outline-none"
          value={role}
          onChange={(e) => {
            if (!isOpen) setIsOpen(true);

            setRole(e.target.value);
          }}
          onBlur={() => setIsOpen(false)}
          maxLength={40}
        />
        <span className="cursor-pointer hover:text-fusion-cyan">
          {
            <FaArrowDown
              className={`transform ${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-all duration-300`}
            />
          }
        </span>
        {isOpen && (
          <div className="absolute top-[50px] left-0 rounded-md w-full h-fit max-h-[120px] overflow-y-scroll flex flex-col gap-3 bg-gray-900">
            {filteredRoles.map((role, index) => (
              <span
                key={index}
                className="cursor-pointer rounded-md p-3 hover:bg-gray-800"
                onClick={() => handleSelectRole(role)}
              >
                {role}
              </span>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
