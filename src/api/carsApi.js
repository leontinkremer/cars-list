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
    car: "VW Golf",
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
    car: "Audi A3",
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

export const fetchAll = (manufacturer) => {
  new Promise((resolve) => {
    const filterCars = cars.filter(({ car }) =>
      manufacturer ? car.slice(0, 2) === manufacturer : true
    );
    setTimeout(() => {
      resolve(filterCars);
    }, 500);
  });
};

export const fetchManufacturer = () =>
  new Promise((resolve) => {
    const manufacturer = cars.map(({ car }) => car.slice(0, 2));

    const uniqManufacturer = [...new Set()];
  });
