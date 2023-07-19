import { FC, useState } from "react";
import { IContactFormProps } from "interfaces";

import { nameVerify } from "services";
import { Notification } from "../Notification";
import { Box } from "@mui/material";

import { Formik, FormikHelpers, ErrorMessage } from "formik";
import { ContactFormType, validContactSchema } from "schemas";

import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import {
  FormWrap,
  InputWrap,
  LabelWrap,
  Input,
  Label,
  ErrorMessageWrap,
  Button,
} from "./ContactForm.styled";

export const ContactForm: FC<IContactFormProps> = ({ onSubmit, contacts }) => {
  const [alert, setAlert] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const initialValues: ContactFormType = {
    name: "",
    number: "",
  };

  const handleSubmit = (
    values: ContactFormType,
    { resetForm }: FormikHelpers<ContactFormType>
  ) => {
    if (nameVerify(values.name, contacts)) {
      setAlert(true);
      setMessage(`${values.name} is already in contacts!`);
      return;
    }

    onSubmit(values.name, values.number);
    resetForm();
  };

  const closeNotice = () => {
    setAlert(false);
    setMessage("");
  };

  return (
    <Box>
      {alert && (
        <Notification
          alert={alert}
          message={message}
          closeNotice={closeNotice}
        />
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validContactSchema}
        validateOnBlur
      >
        <FormWrap>
          <InputWrap>
            <LabelWrap>
              <Input type="text" name="name" placeholder=" " required></Input>
              <Label htmlFor="name">Name</Label>
              <ErrorMessage component={ErrorMessageWrap} name="name" />
            </LabelWrap>

            <LabelWrap>
              <Input type="tel" name="number" placeholder=" " required></Input>
              <Label>Number</Label>
              <ErrorMessage component={ErrorMessageWrap} name="number" />
            </LabelWrap>
          </InputWrap>
          <Button type="submit">
            <PersonAddAltIcon
              sx={{ fontSize: 20, color: "#ffffff" }}
              role="icon"
              aria-labelledby="add contact icon"
              aria-describedby="add contact icon without actions"
            />
            Add contact
          </Button>
        </FormWrap>
      </Formik>
    </Box>
  );
};
