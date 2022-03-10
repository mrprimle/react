import React, { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const buildEmail = (email, firstName) => {
    const text = `Hi ${firstName} \n\nThank you for your enthusiasm and for filling in all the fields correctly.\n I know it's hard, but you made it\n\nHave a nice day!\nMike\n\n\nCEO of https://mdpoz.netlify.app`;
    const finalEmail = `mailto:${email}?bcc=mishadanchik@gmail.com&subject=React%20user&body=${text.replace(
      / /g,
      "%20"
    )}`;
    return finalEmail;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (firstName && validateEmail(email)) {
      console.log(`submitted: ${firstName}, with an email: ${email}`);
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else if (!validateEmail(email)) {
      alert("Please, enter your email correctly");
    } else {
      alert("You must fill in all the fields!");
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <button className="btn" type="submit">
          Add user
        </button>
      </form>

      {people.map((person) => {
        const { id, firstName, email } = person;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <a href={buildEmail(email, firstName)}>{email}</a>
          </div>
        );
      })}
    </>
  );
};

export default Form;
