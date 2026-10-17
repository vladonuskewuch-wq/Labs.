'use strict';

const contactsList = [
  { name: 'Marcus Aurelius', phone: '+380974567892' },
  { name: 'Veronika', phone: '+380445554422' },
  { name: 'Marina', phone: '++380445554411' }
];

function findPhoneByName(name) {
  for (const contact of contactsList) {
    if (contact.name === name) {
      return contact.phone;
    }
  }
  return null;
}