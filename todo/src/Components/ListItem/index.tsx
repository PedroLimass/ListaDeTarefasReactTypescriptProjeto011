import React, { useState } from "react";
import { Item } from "../../Types/item";
import * as C from "./styles";

type Props = {
  item: Item;
  onChange: (id: number, done: boolean) => void
};

const ListItem = ({ item, onChange }: Props) => {
  const [isChecked, setIsChecked] = useState(item.done);

  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};

export default ListItem;
