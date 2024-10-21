import { useState } from "react";

interface PhoneNumberInputProps {}

export const PhoneNumberInput = ({}: PhoneNumberInputProps) => {
  const [number, setNumber] = useState<string>("");

  const formatPhoneNumber = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");

    if (cleanValue.length <= 2) {
      return `(${cleanValue}`;
    } else if (cleanValue.length <= 6) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
    } else {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(
        2,
        7
      )}-${cleanValue.slice(7, 11)}`;
    }
  };

  const handleTypePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const cleanedNumber = input.replace(/[^\d\(\)\-\s]/g, "");
    const formartedNumber = formatPhoneNumber(cleanedNumber);

    setNumber(formartedNumber);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      (e.key === "Backspace" || e.key === "Delete") &&
      (number.endsWith("(") || number.endsWith(")") || number.endsWith("-"))
    ) {
      e.preventDefault();
      setNumber(number.slice(0, -1));
    }
  };

  return (
    <input
      required
      type="tel"
      title="Digite seu número de telefone"
      placeholder="Telefone"
      className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusion-cyan"
      value={number}
      maxLength={15}
      onChange={handleTypePhoneNumber}
      onKeyDown={handleOnKeyDown}
    />
  );
};
