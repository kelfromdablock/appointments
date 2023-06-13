import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = () => {
  const [month, day, year] = new Date()
    .toLocaleDateString("en-US")
    .split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={title}
        placeholder={"Title"}
        onChange={(e) => setTitle(e.target.value)}
        required
        />
      <ContactPicker
        name={contact}
        value={contacts}
        contacts={contacts}
        setContact={setContact}
        onChange={(e) => setContact(e.target.value)}
      />
      <input 
        type='date'
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <input 
        type="time"
        value={time}
        onChange={ (e) =>setTime(e.target.value)}
        required
        />
      <input  
        type='submit'
        value='Submit' />
    </form>
    </>
  );
};
