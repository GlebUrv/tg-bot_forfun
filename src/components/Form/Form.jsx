import React, { useEffect, useState } from "react";
import "./Form.css";
import { useTelegram } from "../../hooks/useTelegram";

const Form = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });
  }, [tg]);

  useEffect(() => {
    if (!name || !address || !phone) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
    }
  }, [name, address, phone, tg.MainButton]);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeAddress = (e) => {
    setAddress(e.target.value);
  };

  const onChangePhone = (e) => {
    // const newPhone = e.target.value;
    // const isValid =
    //   /^(\+7|8|7)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(
    //     newPhone
    //   );

    // if (!isValid) {
    //   alert("Некорректный номер телефона");
    //   return;
    // }

    setPhone(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите свои данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder={"Ваше имя"}
        value={name}
        onChange={onChangeName}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Адрес"}
        value={address}
        onChange={onChangeAddress}
      />
      <input
        className={"input"}
        type="text"
        placeholder={"Телефон для связи"}
        value={phone}
        onChange={onChangePhone}
      />
      {/* <select>
        <option value={"legal"}></option>
      </select> */}
    </div>
  );
};

export default Form;
