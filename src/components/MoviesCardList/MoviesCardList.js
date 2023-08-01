import "./MoviesCardList.css";
import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";

const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1566582775858-351d02becf1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    nameRU: "33 слова о дизайне",
    duration: 235,
  },
  {
    image:
      "https://images.unsplash.com/photo-1593672755342-741a7f868732?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    nameRU: "Киноальманах «100 лет дизайна»",
    duration: 18,
  },
  // {
  //     image: 'https://images.unsplash.com/photo-1675670961440-ef138f382bcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80',
  //     nameRU: 'В погоне за Бенкси',
  //     duration: 112,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1690409085912-d37ac23205a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1176&q=80',
  //     nameRU: 'Баския: Взрыв реальности',
  //     duration: 444,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1687253944822-d32afa90419d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
  //     nameRU: 'Бег это свобода',
  //     duration: 46,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1603423697290-11714c67b79e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
  //     nameRU: 'Книготорговцы',
  //     duration: 245,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1597315234538-d06240e90487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  //     nameRU: 'Когда я думаю о Германии ночью',
  //     duration: 785,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1620739482082-17c6c0a2fe2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=948&q=80',
  //     nameRU: 'Gimme Danger: История Игги и The Stooges aaaaaaaaaaaaaaaaaa',
  //     duration: 234,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1561373780-f4f9b808e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1175&q=80',
  //     nameRU: 'Дженис: Маленькая девочка грустит',
  //     duration: 15,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1625910639003-0a589846dab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=389&q=80',
  //     nameRU: 'Соберись перед прыжком',
  //     duration: 24,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1570197140053-0454b88d6520?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1160&q=80',
  //     nameRU: 'Пи Джей Харви: A dog called money',
  //     duration: 345,
  // },
  // {
  //     image: 'https://images.unsplash.com/photo-1568307198431-3b301d8bf507?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80',
  //     nameRU: 'По волнам: Искусство звука в кино',
  //     duration: 118,
  // },
];

export default function MoviesCardList(props) {
  const { savedMovies } = props;
  return (
    <section className="cards">
      {cards.map((card) => (
        <div key={card.duration}>
          <MoviesCard card={card} savedMovies={savedMovies} />
        </div>
      ))}
    </section>
  );
}
