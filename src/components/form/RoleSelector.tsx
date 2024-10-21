import { useState } from "react";
import { FaArrowDown } from "react-icons/fa";

interface RoleSelectorProps {}

export const RoleSelector = ({}: RoleSelectorProps) => {
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
  // const [currentRolesList, setCurrentRolesList] = useState<string[]>(roles);
  const [isOpen, setIsOpen] = useState(false);

  const toggleRoleSelector = () => setIsOpen(!isOpen);

  const filteredRoles = roles.filter((search) =>
    search.toLowerCase().includes(role.toLowerCase())
  );

  const handleSelectRole = (selectedRole: string) => {
    setRole(selectedRole);
    setIsOpen(false);
  };

  /* const handleSearchRoleInput = (e: any) => {
    const roleSelector = document.querySelector("#role-selector");

    if (roleSelector?.classList.contains("h-0")) {
      roleSelector?.classList.toggle("h-0");
      roleSelector?.classList.toggle("overflow-y-scroll");
    }

    const input = e.target.value;

    const filteredRoles = roles.filter((role) =>
      role.toLowerCase().includes(input.toLowerCase())
    );

    setCurrentRolesList(filteredRoles);
    setRole(input);
  }; */

  return (
    <>
      <div
        onClick={toggleRoleSelector}
        className="relative flex items-center p-3 border rounded-md border-gray-300 has-[:focus]:ring-2 has-[:focus]:ring-blue-500 has-[:focus]:dark:text-fusion-cyan focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusiontext-fusion-cyan"
      >
        <input
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
        />
        <span>
          <FaArrowDown className="cursor-pointer hover:text-fusion-cyan" />
        </span>
        {isOpen && (
          <div className="absolute top-[50px] left-0 rounded-md w-full h-fit max-h-[120px] overflow-hidden flex flex-col gap-3 bg-gray-900">
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
