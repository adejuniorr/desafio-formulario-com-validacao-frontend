import { Button } from "./buttons/Button";
import { EmailInput } from "./form/EmailInput";
import { NameInput } from "./form/NameInput";
import { PhoneNumberInput } from "./form/PhoneNumberInput";
import { RoleSelector } from "./form/RoleSelector";
import { SocialMediaInput } from "./form/SocialMediaInput";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(1, "Você deve informar o seu nome completo"),
  email: z
    .string()
    .min(1, "O campo de e-mail é obrigatório")
    .email("E-mail inválido"),
  phone: z.string().min(14, "Número de telefone inválido"),
  role: z.string().min(1, "Você deve escolher um cargo de preferência"),
  socialMediaLinks: z.array(z.string()).optional(),
  socialMediaLinksValues: z.array(z.string().url("Link inválido")).optional(),
});

export const Form = () => {
  const methods = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      role: "",
      socialMediaLinks: [],
      socialMediaLinksValues: [],
    },
  });

  const { handleSubmit } = methods;

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-fusion-dark-blue rounded-md shadow shadow-gray-700 max-w-[500px] w-full flex flex-col gap-4 px-4 py-6 mb-10"
      >
        <div className="flex gap-2 items-center mb-6">
          <img
            src="/fusion-logo.svg"
            alt="Logotipo do Projeto Frontend Fusion"
            className="mx-auto max-w-[300px] w-10 min-w-[130px]"
          />
          <h1 className="font-extrabold text-[2rem]">
            Preencha com seus dados
          </h1>
        </div>
        <NameInput />
        <EmailInput />
        <PhoneNumberInput />
        <RoleSelector />
        <hr className="my-6" />
        <p>Gostaria de adicionar alguma rede?</p>
        <SocialMediaInput />
        <span className="flex justify-end">
          <Button
            children="Enviar"
            type="submit"
            title="Clique para enviar os dados"
          />
        </span>
      </form>
    </FormProvider>
  );
};
