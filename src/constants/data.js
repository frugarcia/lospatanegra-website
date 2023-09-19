// Dependencies
import { goToBlankLink } from "../../lib/utils";

const data = [
  {
    title: "6º Open Pata Negra",
    text: "Durante los próximos días 23,24 y 25 de septiembre se celebra el 6º Open Pata Negra, puede consultar el cartel y los cuadros en el botón más abajo",
    image: "/cartel_6_torneo.jpg",
    imageAlt: "VI Torneo Los Pata Negra",
    actions: [
      {
        onClick: ({ location }) =>
          goToBlankLink(`${location}/cartel_6_torneo.jpg`),
        label: "Consultar cartel",
        color: "danger",
      },
      {
        onClick: () =>
          goToBlankLink(
            "https://docs.google.com/spreadsheets/d/1tLXYfBDdVjAFoijf7rQeiPC_gBjmmAmo"
          ),
        label: "Consultar cuadros",
        color: "primary",
        disabled: true,
      },
    ],
  },
  {
    title: "5º Open Pata Negra",
    text: "Durante los próximos días 24,25 y 26 de septiembre se celebra el 5º Open Pata Negra, puede consultar el cartel y los cuadros en el botón más abajo",
    image: "/cartel_5_torneo.jpg",
    imageAlt: "V Torneo Los Pata Negra",
    actions: [
      {
        onClick: ({ location }) =>
          goToBlankLink(`${location}/cartel_5_torneo.jpg`),
        label: "Consultar cartel",
        color: "danger",
      },
      {
        onClick: () =>
          goToBlankLink(
            "https://docs.google.com/spreadsheets/d/1tLXYfBDdVjAFoijf7rQeiPC_gBjmmAmo"
          ),
        label: "Consultar cuadros",
        color: "primary",
        // disabled: true,
      },
    ],
  },
  {
    title: "4º Open Pata Negra",
    text: "Durante los próximos días 2,3 y 4 de octubre se celebra el 4º Open Pata Negra, puede consultar los cuadros en el botón más abajo",
    image: "/cartel_4_torneo.jpg",
    imageAlt: "IV Torneo Los Pata Negra",
    actions: [
      {
        onClick: () =>
          goToBlankLink(
            "https://docs.google.com/spreadsheets/d/1Vwzv64vl-DVAlIrksuMC-bhjNUid9PImwMmZv1E6kZQ"
          ),
        label: "Consultar cuadros",
        color: "primary",
      },
    ],
  },
];

export default data;
