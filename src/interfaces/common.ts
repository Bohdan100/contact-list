import { ReactNode } from "react";

export interface IContact {
  id: string;
  name: string;
  number: string;
  email?: string;
}

export interface ISectionProps {
  title: string;
  children: ReactNode;
  headerContent: JSX.Element;
}

export interface IContactListlProps {
  contacts: IContact[] | [];
  onRemove: (id: string) => void;
}

export interface IFilterProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IContactFormProps {
  onSubmit: (name: string, number: string) => void;
  contacts: IContact[];
}

export interface INotificationProps {
  alert: boolean;
  message: string;
  closeNotice: () => void;
}
