import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.status >= 200 && response.status <= 299) {
          return response.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      {isLoading && <h3 className="compMargin">Loading...</h3>}
      {isError ? (
        <h4 className="compMargin">There was an error</h4>
      ) : (
        <h3 className="compMargin">GitHub users</h3>
      )}
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Users;
