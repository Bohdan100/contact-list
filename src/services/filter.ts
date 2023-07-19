import { IContact } from "interfaces";

export const nameVerify = (
  name: string,
  contacts: IContact[] | []
): IContact | undefined => {
  return contacts.find((contact) => name === contact.name);
};

export const getFilteredContacts = (
  contacts: IContact[] | [],
  filterName: string
) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterName)
  );
};
