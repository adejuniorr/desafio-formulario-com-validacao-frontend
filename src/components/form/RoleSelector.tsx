interface RoleSelectorProps {}

export const RoleSelector = ({}: RoleSelectorProps) => {
  return (
    <select
      title="Selecione um cargo"
      name="role-select"
      className="w-full p-3 border rounded-md outline-none cursor-pointer border-gray-300 text-gray-900 focus:outline-cyan-500 dark:bg-gray-900 dark:text-gray-200 dark:border-black"
    >
      <option value="frontend-developer">Desenvolvedor Frontend</option>
      <option value="backend-developer">Desenvolvedor Backend</option>
      <option value="fullstack-developer">Desenvolvedor Full Stack</option>
      <option value="mobile-developer">Desenvolvedor Mobile</option>
      <option value="software-developer">Desenvolvedor de Software</option>
      <option value="software-engineer">Engenheiro de Software</option>
      <option value="software-architect">Arquiteto de Software</option>
      <option value="ui-ux-designer">UI/UX Designer</option>
      <option value="system-analyst">Analista de Sistemas</option>
      <option value="programmer-analyst">Analista Programador</option>
      <option value="devops-engineer">DevOps Engineer</option>
      <option value="data-engineer">Engenheiro de Dados</option>
      <option value="qa-engineer">QA Engineer</option>
      <option value="scrum-master">Scrum Master</option>
      <option value="product-owner">Product Owner</option>
    </select>
  );
};
