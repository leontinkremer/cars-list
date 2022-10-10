import { containsWhitespace } from "../utils/containsWhitespace";
import { limit } from "../utils/limitStringByWhitespace";

export const cars = [
  {
    id: "FA1021",
    customer: "Kerbs & Kremer GbR",
    car: "VW Golf",
    active: true,
  },
  {
    id: "FA1022",
    customer: "röstaffe GmbH",
    car: "VW Polo",
    active: true,
  },
  {
    id: "FA1023",
    customer: "UX Design AG",
    car: "Audi A3",
    active: false,
  },
  {
    id: "FA2024",
    customer: "Flux GmbH & Co. KG",
    car: "Suzuki Swift",
    active: true,
  },
  {
    id: "FA2025",
    customer: "Kerbs & Kremer GbR",
    car: "VW Polo",
    active: true,
  },
  {
    id: "FA2031",
    customer: "Kerbs & Kremer GbR",
    car: "VW Golf",
    active: false,
  },
  {
    id: "FA2032",
    customer: "röstaffe GmbH",
    car: "VW Polo",
    active: true,
  },
  {
    id: "FA3033",
    customer: "UX Design AG",
    car: "Skoda Octavia",
    active: false,
  },
  {
    id: "FA3034",
    customer: "Flux GmbH & Co. KG",
    car: "VW Golf",
    active: true,
  },
  {
    id: "FA3035",
    customer: "Kerbs & Kremer GbR",
    car: "VW Polo",
    state: false,
  },
  {
    id: "FA4036",
    customer: "Kerbs & Kremer GbR",
    car: "VW Golf",
    active: true,
  },
  {
    id: "FA4041",
    customer: "röstaffe GmbH",
    car: "VW Polo",
    active: false,
  },
  {
    id: "FA4042",
    customer: "UX Design AG",
    car: "Audi A3",
    active: false,
  },
  {
    id: "FA5043",
    customer: "Flux GmbH & Co. KG",
    car: "VW Golf",
    active: true,
  },
  {
    id: "FA5051",
    customer: "Kerbs & Kremer GbR",
    car: "VW Polo",
    active: true,
  },
  {
    id: "FA5052",
    customer: "Kerbs & Kremer GbR",
    car: "VW Golf",
    active: false,
  },
  {
    id: "FA6053",
    customer: "röstaffe GmbH",
    car: "VW Polo",
    active: true,
  },
  {
    id: "FA6054",
    customer: "UX Design AG",
    car: "Audi A3",
    active: true,
  },
  {
    id: "FA6061",
    customer: "Flux GmbH & Co. KG",
    car: "VW Golf",
    active: true,
  },
  {
    id: "FA7062",
    customer: "Kerbs & Kremer GbR",
    car: "VW Polo",
    active: true,
  },
];

export const fetchAll = new Promise(function (resolve) {
  // TODO добавим фильтрацию позже
  setTimeout(() => {
    resolve(cars);
  }, 2000);
});

// Получение списка производителей
export const fetchManufacturer = new Promise(function (resolve) {
  const car = cars.map(({ car }) => car);
  // console.log({ car });

  const manufacturer = car.map((car) => {
    if (containsWhitespace(car)) {
      const indexOfWhitespace = car.indexOf(" ");
      const manufacturer = limit(car, indexOfWhitespace);
      return manufacturer;
    }
  });

  // console.log({ manufacturer });

  const uniqManufacturer = new Set(manufacturer.sort());
  // console.log({ uniqManufacturer });
  // console.log(typeof uniqManufacturer);

  const uniqManufacturerArr = Array.from(uniqManufacturer);
  // console.log(uniqManufacturerArr);

  setTimeout(() => {
    resolve(uniqManufacturerArr);
  }, 2000);
});
