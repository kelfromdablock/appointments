import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        value={name}
        placeholder={"Name"}
        onChange={(e) => setName(e.target.value)}
        required
        />
      <input 
        type='tel'
        value={phone}
        placeholder={"Phone"}
        onChange={(e) => setPhone(e.target.value)}
        minLength={9}
        maxLength={13}
        pattern="[0-9+]*"
        required
      />
      <input 
        type="email"
        value={email}
        onChange={ (e) => setEmail(e.target.value)}
        required
        />
      <input  
        type='submit'
        value='Submit' />
    </form>
    </>
  );
};

