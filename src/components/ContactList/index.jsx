import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../../Redux/contactsReducer";
import Contact from "../Contact";
import "./style.scss";

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts);
  const filters = useSelector((state) => state.filters);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    if (contacts.length === 0) {
      dispatch(getContacts());
    }
  }, []);
  const lisOfContacts = () => {
    let list = [];
    let i = 0;
    const preList = contacts.filter(
      (el) =>
        el.name.toLowerCase().indexOf(filters.name) + 1 &&
        el.lastname.toLowerCase().indexOf(filters.lastname) + 1 &&
        (Number(el.age) === Number(filters.age) || filters.age === "") &&
        filters.sex.indexOf(el.sex) + 1
    );
    preList.forEach((el) => {
      i += 1;
      list.push(<Contact props={el} key={i} />);
    });
    return list;
  };
  return isLoading ? (
    <p className="loading"> Loading.... </p>
  ) : (
    <ul className="contacts__list">{lisOfContacts()}</ul>
  );
}
