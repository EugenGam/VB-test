import React from "react";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter/";
import ContactsPage from "./pages/ContactsPage";
import "./sass/main.scss";

const App = () => {
  return (
    <ContactsPage>
      <Filter />
      <ContactList />
    </ContactsPage>
  );
};

export default App;
