import { EmailInput } from "./form/EmailInput";
import { NameInput } from "./form/NameInput";
import { PhoneNumberInput } from "./form/PhoneNumberInput";
import { RoleSelector } from "./form/RoleSelector";
import { SocialMediaInput } from "./form/SocialMediaInput";

interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <div className="bg-gray-100 rounded-md shadow shadow-gray-700 max-w-[500px] w-full mx-4 flex flex-col gap-2 px-2 py-6">
      <NameInput />
      <EmailInput />
      <PhoneNumberInput />
      <RoleSelector />
      <SocialMediaInput />
    </div>
  );
};
