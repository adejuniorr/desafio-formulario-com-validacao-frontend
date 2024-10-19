import { EmailInput } from "./form/EmailInput"
import { NameInput } from "./form/NameInput"
import { PhoneNumberInput } from "./form/PhoneNumberInput"
import { RoleSelector } from "./form/RoleSelector"
import { SocialMediaInput } from "./form/SocialMediaInput"

interface FormProps {}

export const Form = ({}: FormProps) => {
  return (
    <div>
        <NameInput />
        <EmailInput />
        <PhoneNumberInput />
        <RoleSelector />
        <SocialMediaInput />
    </div>
  )
}
