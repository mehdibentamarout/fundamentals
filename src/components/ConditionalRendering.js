import React from "react";
function ConditionalRendering() {
  const welcomeTest = {
    admin: "Hi admin",
    shopManager: "Hi ShopManager",
    customer: "Welcome customer",
    guest: "Welcome guest",
  };
  const user = {
    role: "customer",
    name: "Mehdi",
    isAuthenticaded: true,
  };
  const { role, isAuthenticaded } = user;
  return (
    <div>
      <h1>App</h1>
      <p className={isAuthenticaded ? "welcomeTextAuthed" : "welcomeText"}>
        {welcomeTest[role]}
      </p>
      {!isAuthenticaded && <button type="button">Log in</button>}
    </div>
  );
}
export default ConditionalRendering;
