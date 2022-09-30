import { useState } from "react";

import { paginate } from "../../utils/paginate";

import Filter from "../Filter/Filter";
import FilterItem from "../Filter/FilterItem";
import List from "../List/List";
import ListItem from "../List/ListItem";
import ListItemField from "../List/ListItemField";
import Pagination from "../Pagination/Pagination";

import { cars, fetchAll, fetchManufacturer } from "../../api/carsApi";

import "./App.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  // Anzahl Ergebnisse
  const count = cars.length; // 20

  // Anzahl Ergebnisse auf einer Seite
  const pageSize = 10;

  // Klick auf die Komponente bearbeiten
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const itemsCrop = paginate(cars, currentPage, pageSize);

  return (
    <div className="app">
      <aside className="app__left-sidebar">
        <Filter>
          <FilterItem>VW</FilterItem>
          <FilterItem>Audi</FilterItem>
        </Filter>
      </aside>
      <main className="app__main-area">
        <List>
          {itemsCrop.map((car) => {
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
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </main>
      <aside className="app__right-sidebar"></aside>
    </div>
  );
}

export default App;
