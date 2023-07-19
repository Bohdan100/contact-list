import { FC, useState, useEffect } from "react";
import { IContact } from "interfaces";

import {
  getContactStorage,
  changeContactStorage,
  getFilteredContacts,
} from "services";

import { nanoid } from "nanoid";
import { Box } from "@mui/material";
import data from "data/contacts.json";

import { Section } from "../Section";
import { ContactForm } from "../ContactForm";
import { ContactList } from "../ContactList";
import { Filter } from "../Filter";
import { Network } from "../Network";

export const App: FC = () => {
  const storageContacts: IContact[] | [] = getContactStorage("contacts");
  const initialContacts: IContact[] = data.map((contact) => {
    return { ...contact, id: nanoid() };
  });

  const [contacts, setContacts] = useState<IContact[] | []>(
    () => storageContacts ?? initialContacts
  );
  const [filter, setFilter] = useState<string>("");

  useEffect(() => {
    changeContactStorage("contacts", contacts);
  }, [contacts]);

  const addContact = (name: string, number: string) => {
    setContacts((prevState) => [{ name, number, id: nanoid() }, ...prevState]);
  };

  const removeContact = (id: string) => {
    setContacts((prevState) =>
      prevState.filter((contact) => contact.id !== id)
    );
  };

  const changeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter((e.target as HTMLInputElement).value.toLowerCase());
  };

  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: "30px",
      }}
    >
      <Section title="Add contact" headerContent={<Network />}>
        <ContactForm onSubmit={addContact} contacts={contacts} />
      </Section>
      {contacts.length > 0 && (
        <Section
          title="Contacts"
          headerContent={<Filter value={filter} onChange={changeFilter} />}
        >
          <ContactList contacts={filteredContacts} onRemove={removeContact} />
        </Section>
      )}
    </Box>
  );
};
