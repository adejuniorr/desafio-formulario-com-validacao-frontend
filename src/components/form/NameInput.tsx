import { useFormContext } from "react-hook-form";

export const NameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <input
        {...register("name")}
        type="text"
        title="Digite seu nome"
        placeholder="Nome completo"
        className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusion-cyan"
      />
      {errors.name && (
        <span className="text-red-500 text-sm">{errors.name?.message as string}</span>
      )}
    </>
  );
};
