import { FC } from "react";
import { IContactListlProps } from "interfaces";

import { Table, TableHead, TableBody, TableRow } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";

import {
  HeadCell,
  BodyRow,
  BodyCell,
  BodyCellIcon,
  IconWrap,
  Btn,
} from "./ContactList.styled";

export const ContactList: FC<IContactListlProps> = ({ contacts, onRemove }) => {
  return (
    <Table
      aria-label="contacts table"
      sx={{ width: "100%", borderCollapse: "collapse" }}
    >
      <TableHead>
        <TableRow>
          <HeadCell>Name</HeadCell>
          <HeadCell>Phone number</HeadCell>
          <HeadCell>Contacts ({contacts.length})</HeadCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {contacts.map(({ id, name, number }) => {
          return (
            <BodyRow key={id}>
              <BodyCellIcon>
                <IconWrap>
                  <PersonIcon
                    sx={{ fontSize: 28, color: "#ffffff" }}
                    role="icon"
                    aria-labelledby="contact icon"
                    aria-describedby="default contact icon without actions"
                  />
                </IconWrap>
                {name}
              </BodyCellIcon>

              <BodyCell>{number}</BodyCell>

              <BodyCell>
                <Btn
                  type="button"
                  onClick={() => {
                    onRemove(id);
                  }}
                >
                  <DeleteSweepIcon
                    sx={{ fontSize: 28 }}
                    role="icon"
                    aria-labelledby="shopping cart icon for delete contact"
                    aria-describedby="default contact icon for delete contact"
                  />
                </Btn>
              </BodyCell>
            </BodyRow>
          );
        })}
      </TableBody>
    </Table>
  );
};
