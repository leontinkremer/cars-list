import React, { useState, useEffect } from "react";

import { pageSize } from "../../utils/settings";
import { paginate } from "../../utils/paginate";

import Filter from "../Filter/Filter";
import FilterItem from "../Filter/FilterItem";
import List from "../List/List";
import ListItem from "../List/ListItem";
import ListItemField from "../List/ListItemField";
import Pagination from "../Pagination/Pagination";

import { fetchAll, fetchManufacturer } from "../../api/carsApi";

import "./App.scss";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [cars, setCars] = useState([]);
  const [brand, setBrand] = useState([]);
  const [filter, setFilter] = useState();

  // Anzahl Ergebnisse
  const count = cars.length; // 20

  // Klick auf die Komponente bearbeiten
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  // Функция для получения машин
  const getCars = () => {
    fetchAll.then((response) => {
      setCars(response);
      setCurrentPage(1); // Устанавливаем страницу
      // console.log("Promise resolved", response);
    });
  };

  // Запрашиваем список машин когда меняется фильтр
  useEffect(() => {
    getCars(filter);
  }, [filter]);

  const getBrand = () => {
    fetchManufacturer.then((response) => {
      setBrand(response);
      setCurrentPage(1); // Устанавливаем страницу
      // console.log("Promise resolved", response);
    });
  };

  useEffect(() => {
    getBrand();
  }, [brand]);

  // Функция для установки фильтра
  const handleFilterChange = (filter) => {
    setFilter(filter);
    console.log("filter", filter);
  };

  const itemsCrop = paginate(cars, currentPage, pageSize);

  return (
    <div className="app">
      <aside className="app__left-sidebar">
        {cars && (
          <Filter items={cars} filter={filter}>
            {brand.map((manufacturer) => {
              return (
                <FilterItem
                  key={"manufacturer" + manufacturer}
                  id={manufacturer}
                  // doing: реализовать отображение фильра.
                  onChangeFilter={handleFilterChange}
                >
                  {manufacturer}
                </FilterItem>
              );
            })}
          </Filter>
        )}
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
