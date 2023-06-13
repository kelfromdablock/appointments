import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({addContact, contacts}) => {
    /*
    Define state variables for 
    contact info and duplicate check
    */
   const [name, setName] = useState('');
   const [phone, setPhone] = useState('');
   const [email, setEmail] = useState('');
   const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
   if (!duplicate && addContact(name, phone, email)) {
      setName('');
      setPhone('');
      setEmail(''); 
   } else {
    alert('That is a duplicate contact')
   }
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect( () => {
    const checkContact = contacts.find((contact) => contact.name === name);
    checkContact ? setDuplicate("true") : setDuplicate("false");
  }, [name, contacts]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          onSumbit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList elements={contacts} />
      </section>
    </div>
  );
};
