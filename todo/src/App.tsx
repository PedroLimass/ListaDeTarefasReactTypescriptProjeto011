import React, { useState } from "react";
import { Container, Area, Header } from "./App.styles";
import { Item } from "./Types/item";

//Components
import ListItem from "./Components/ListItem";
import AddArea from "./Components/AddArea";

const App = () => {
  const [list, setList] = useState<Item[]>([
    // { id: 1, name: "blabla", done: false },
    // { id: 2, name: "bloblob", done: true },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const updateChange = (id: number, done: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === id) {
        newList[i].done = done;
      }
    }

    setList(newList)
  };

  return (
    <Container>
      <Area>
        <Header>Lista de Tarefas</Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={updateChange} />
        ))}
      </Area>
    </Container>
  );
};

export default App;
