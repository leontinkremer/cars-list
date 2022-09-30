import List from "../List/List";
import ListItem from "../List/ListItem";
import ListItemField from "../List/ListItemField";

import { cars, fetchAll, fetchManufacturer } from "../../api/carsApi";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <List>
        {cars.map((car) => {
          {
            console.log(car.id);
          }
          return (
            <ListItem key={car.id}>
              <ListItemField>{car.id}</ListItemField>
              <ListItemField>{car.customer}</ListItemField>
              <ListItemField>{car.car}</ListItemField>
              <ListItemField>
                {car.active === true ? "in Betrieb" : "ausgesteuert"}
              </ListItemField>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}

export default App;
