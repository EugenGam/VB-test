import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setFilters } from "../../Redux/filtersReducer";
import "./style.scss";

export default function Filter() {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [male, setMale] = useState(true);
  const [female, setFemale] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setFilters({
        name: name.toLowerCase(),
        lastname: lastname.toLowerCase(),
        age,
        sex: getSex(),
      })
    );
  }, [dispatch, name, lastname, age, male, female]);
  const inputHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        break;
      case "age":
        setAge(e.target.value);
        break;
      default:
    }
  };

  const handleCheckbox = (e) => {
    switch (e.target.name) {
      case "male":
        setMale(!male);
        break;
      case "female":
        setFemale(!female);
        break;
      default:
    }
  };

  const getSex = () => {
    let sex = "";
    if ((!female && !male) || (female && male)) {
      sex = "fm";
    } else if (!male) {
      sex = "f";
    } else if (!female) {
      sex = "m";
    }
    return sex;
  };

  return (
    <form className="form">
      <span className="field__name">Name:</span>
      <input
        className="input"
        type="text"
        value={name}
        name="name"
        onChange={inputHandler}
      ></input>
      <span className="field__name">Lastname:</span>
      <input
        className="input"
        type="text"
        value={lastname}
        name="lastname"
        onChange={inputHandler}
      ></input>
      <span className="field__name">Age:</span>
      <input
        className="input"
        type="number"
        name="age"
        value={age}
        onChange={inputHandler}
      ></input>
      <div className="checkboxes__container">
        <span className="field__name field__sex">Sex:</span>
        <label className="field__gender">
          {"M"}
          <input
            className="checkbox"
            type="checkbox"
            name="male"
            checked={male}
            onChange={handleCheckbox}
          ></input>
        </label>
        <label className="field__gender">
          {"F"}
          <input
            className="checkbox"
            type="checkbox"
            name="female"
            checked={female}
            onChange={handleCheckbox}
          ></input>
        </label>
      </div>
    </form>
  );
}
