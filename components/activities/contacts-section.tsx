import React from "react";

const contacts = [
  {
    id: 1,
    name: "Natali Craig",
    avatar: "/avatar.png",
  },
  {
    id: 2,
    name: "Drew Cano",
    avatar: "/avatar.png",
  },
  {
    id: 3,
    name: "Orlando Diggs",
    avatar: "/avatar.png",
  },
  {
    id: 4,
    name: "Andi Lane",
    avatar: "/avatar.png",
  },
  {
    id: 5,
    name: "Kate Morrison",
    avatar: "/avatar.png",
  },
  {
    id: 6,
    name: "Koray Okumus",
    avatar: "/avatar.png",
  },
];

export default function ContactsSection() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 text-gray-900">Contacts</h2>
      <div className="space-y-4 py-4">
        {contacts.map((contact) => (
          <div key={contact.id} className="flex items-center gap-3">
            <div className="flex-shrink-0">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-normal text-gray-900 truncate">
                {contact.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
