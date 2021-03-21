import "./style.scss";

export default function Contact({ props }) {
  const { name, lastname, age, sex } = props;
  return (
    <li className="contacts__item">
      <p className="contact__name">
        {name} {lastname}
      </p>
      <p className="contact__age">Возраст: {age}</p>
      <p className="contact__sex">Пол: {sex}</p>
    </li>
  );
}
