import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const PhoneNumberInput = () => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const number = watch("phone");

  const formatPhoneNumber = (value: string) => {
    const cleanValue = value.replace(/\D/g, "");

    if (cleanValue.length !== 0 && cleanValue.length <= 2) {
      return `(${cleanValue}`;
    } else if (cleanValue.length !== 0 && cleanValue.length <= 6) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(2)}`;
    } else if (cleanValue.length !== 0) {
      return `(${cleanValue.slice(0, 2)}) ${cleanValue.slice(
        2,
        7
      )}-${cleanValue.slice(7, 11)}`;
    }
  };

  useEffect(() => {
    setValue("phone", formatPhoneNumber(number || ""));
  }, [number, setValue]);

  const handleTypePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;

    const cleanedNumber = input.replace(/[^\d\(\)\-\s]/g, "");
    const formartedNumber = formatPhoneNumber(cleanedNumber);

    setValue("phone", formartedNumber);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      number &&
      (e.key === "Backspace" || e.key === "Delete") &&
      (number.endsWith("(") || number.endsWith(")") || number.endsWith("-"))
    ) {
      e.preventDefault();

      setValue("phone", number.slice(0, number.length - 2));
    }
  };

  return (
    <>
      <input
        {...register("phone")}
        type="tel"
        title="Digite seu número de telefone"
        placeholder="Telefone*"
        className="w-full p-3 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:bg-gray-900 dark:text-gray-200 dark:border-black dark:focus:ring-fusion-cyan"
        maxLength={15}
        onChange={handleTypePhoneNumber}
        onKeyDown={handleOnKeyDown}
      />
      {errors.phone && (
        <span className="text-red-500 text-sm">
          {errors.phone?.message === "Required"
            ? "O campo telefone é obrigatório"
            : (errors.phone?.message as string)}
        </span>
      )}
    </>
  );
};
