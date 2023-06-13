import React, { useState } from "react";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate, NavLink, Routes } from "react-router-dom"
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    const newContact = {
      name,
      phone,
      email
    }
    setContacts((contacts) => {
      return [...contacts, newContact]
   });
  };

  const addAppointment = (name, contact, date, time) => {
    const newAppointment = {
      name,
      contact,
      date,
      time
    }
    setAppointments((appointments) => {
        return [...appointments, newAppointment]
    });
  };
  
  
  return (
    <>
    <nav>
        <NavLink to={ROUTES.CONTACTS}>Contacts</NavLink>
        <NavLink to={ROUTES.APPOINTMENTS}>Appointments</NavLink>
      </nav>
      <main>
        <Routes>
          <Route
            path='/'
            element=<Navigate
              replace
              to={ROUTES.CONTACTS}
            />
          />
          {/* <Redirect to={ROUTES.CONTACTS} /> */}
          <Route
            path='/contacts'
            element=<ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          />
          {/* Add props to ContactsPage */}
          <Route
            path='/appointments'
            element=<AppointmentsPage
              appointments={appointments}
              contacts={contacts}
              addAppointment={addAppointment}
            />
          />
          {/* Add props to AppointmentsPage */}
        </Routes>
      </main>
    </>
  );
}

export default App;
