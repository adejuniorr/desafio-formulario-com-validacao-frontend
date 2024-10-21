import { EmailInput } from "./form/EmailInput";
import { NameInput } from "./form/NameInput";
import { PhoneNumberInput } from "./form/PhoneNumberInput";
import { RoleSelector } from "./form/RoleSelector";
import { SocialMediaInput } from "./form/SocialMediaInput";

interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <div className="bg-fusion-dark-blue rounded-md shadow shadow-gray-700 max-w-[500px] w-full flex flex-col gap-4 px-4 py-6 mb-10">
      <h1 className="font-extrabold text-[2rem] w-[60%] mb-4">
        Preencha com seus dados
      </h1>
      <NameInput />
      <EmailInput />
      <PhoneNumberInput />
      <RoleSelector />
      <SocialMediaInput />
    </div>
  );
};
