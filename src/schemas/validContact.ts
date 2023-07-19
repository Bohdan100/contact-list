import * as Yup from "yup";

const regExp = {
  name: /^([0-9a-zA-Zа-яёА-ЯЁЇїЄєҐґ]\s?)*$/,
  phone: /^([0-9-+]\s?){3,}$/,
};

const contactSchema = Yup.object({
  name: Yup.string()
    .trim()
    .max(18, "Name may contain only 18 characters")
    .matches(
      regExp.name,
      "Invalid name characters. The name can contain letters, numbers and and spaces between the words. Not contain dashes, apostrophe, signs * & etc. For example: Hermion Vue, Liza Grace, etc."
    )
    .required("Name is required field"),
  number: Yup.string()
    .trim()
    .min(3, "Phone number must contain at least 3 characters")
    .max(20, "Phone number may contain only 20 characters")
    .matches(
      regExp.phone,
      "Invalid phone characters. The phone number may contain numbers and sign + (plus). Not contain letters spaces, dashes, parentheses, and sign *"
    )
    .required("Number is a required field."),
});

export type ContactFormType = Yup.InferType<typeof contactSchema>;

export const validContactSchema = contactSchema as Yup.Schema<ContactFormType>;
