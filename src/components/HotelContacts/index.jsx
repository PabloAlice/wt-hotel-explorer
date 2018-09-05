import React from 'react';
import PropTypes from 'prop-types';

// TODO incorporate most common additional contacts
const HotelContact = ({ contact }) => {
  const additionalContacts = contact.additionalContacts && contact.additionalContacts.map(c => (
    <li key={c.title}>
      <strong>{c.title}</strong>
:
      {c.value}
    </li>
  ));
  return (
    <ul>
      {contact.email && <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>}
      {contact.phone && <li><a href={`tel:${contact.phone}`}>{contact.phone}</a></li>}
      {contact.url && <li><a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.url}</a></li>}
      {additionalContacts && <li><ul>{additionalContacts}</ul></li>}
    </ul>
  );
};

HotelContact.propTypes = {
  contact: PropTypes.instanceOf(Object).isRequired,
};

const HotelContacts = ({ contacts }) => (
  <div>
    <HotelContact contact={contacts.general} />
  </div>
);

HotelContacts.propTypes = {
  contacts: PropTypes.instanceOf(Object).isRequired,
};

export default HotelContacts;
