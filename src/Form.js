import React, { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ firstName: "", email: "", age: "" });
  const [people, setPeople] = useState([]);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const buildEmail = (email, firstName) => {
    const text = `Hi ${firstName}\n\nThank you for your enthusiasm and for filling in all the fields correctly.\n I know it's hard, but you made it\n\nHave a nice day!\nMike\n\n\nCEO of https://mdpoz.netlify.app`;
    const finalEmail = `mailto:${email}?bcc=mishadanchik@gmail.com&subject=React%20user&body=${text.replace(
      / /g,
      "%20"
    )}`;
    return finalEmail;
  };

  const handleFormChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, age } = person;
    if (firstName && age && validateEmail(email)) {
      console.log(
        `submitted: ${firstName}, ${age} y.o, with an email: ${email}`
      );
      const newPerson = {
        ...person,
        id: new Date().getTime().toString(),
      };
      setPeople([...people, newPerson]);
      setPerson({ firstName: "", email: "", age: "" });
    } else if (!validateEmail(email)) {
      alert("Please, enter your email correctly");
    } else {
      alert("You must fill in all the fields!");
    }
  };

  return (
    <>
      <form className="form form-user" onSubmit={handleFormSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={person.firstName}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={person.email}
            onChange={handleFormChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            id="age"
            name="age"
            value={person.age}
            onChange={handleFormChange}
          />
        </div>
        <button className="btn center tinyMarginTop" type="submit">
          Add user
        </button>
      </form>

      {people.map((person) => {
        const { id, firstName, email, age } = person;
        return (
          <div className="item" key={id}>
            <h4>
              {firstName}, {age}
            </h4>
            <a href={buildEmail(email, firstName)}>{email}</a>
          </div>
        );
      })}
    </>
  );
};

export default Form;
