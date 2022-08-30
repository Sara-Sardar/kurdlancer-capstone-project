import ContactDetails from "../pages/ContactDetails";

const contacts = [
  {
    name: "Sara Sardar",
    avatar: "https://source.unsplash.com/ZHvM3XIOHoE/400x400",
  },
  {
    name: "Ara Salam",
    avatar: "https://source.unsplash.com/mjRwhvqEC0U/400x400",
  },
  {
    name: "Tara Ali",
    avatar: "https://source.unsplash.com/rDEOVtE7vOs/400x400",
  },
  {
    name: "Shara Mhamad",
    avatar: "https://source.unsplash.com/mEZ3PoFGs_k/400x400",
  },
  {
    name: "Rasha Sarwa",
    avatar: "https://source.unsplash.com/JN0SUcTOig0/400x400",
  },
  {
    name: "Hardi Salah",
    avatar: "https://source.unsplash.com/hh3ViD0r0Rc/400x400",
  },
];

export default function ContactList() {
  return (
    <ul className="ml-2 mt-4">
      {contacts.map((contact) => {
        return <ContactDetails name={contact.name} avatar={contact.avatar} />;
      })}
    </ul>
  );
}
