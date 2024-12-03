const STORAGE_KEY = "contacts";

export function getContacts() {
  const contacts = localStorage.getItem("contacts");
  return contacts ? JSON.parse(contacts) : [];
}

export function saveContacts(contacts) {
  localStorage.setItem("contacts", JSON.stringify(contacts));
}



export const getContactById = (id) => getContacts().find((contact) => contact.id === id);
