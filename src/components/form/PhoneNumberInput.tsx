interface PhoneNumberInputProps {}

export const PhoneNumberInput = ({}: PhoneNumberInputProps) => {
  return (
    <input
      type="number"
      title="Digite seu número de telefone"
      placeholder="Telefone"
      className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusion-cyan"
    />
  );
};
