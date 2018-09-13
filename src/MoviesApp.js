import React from "react";
import HightOrderComponent from "./HightOrderComponent";
import "./style.css";

const exam = {
  id: "exam",
  title: "EXAM",
  rating: 3,
  image:
    "http://fr.web.img5.acsta.net/c_300_300/medias/nmedia/18/92/00/12/20206642.jpg",
  year: 2009
};
const tomb = {
  id: "tomb",
  title: "TOMB RAIDER",
  rating: 5,
  image:
    "data:image/jpeg;base64,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",
  year: "2001"
};
const maleficent = {
  id: "maleficent",
  title: "MALEFICENT",
  rating: 5,
  image:
    "data:image/jpeg;base64,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",
  year: 2014
};
const despicable = {
  id: "despicable",
  title: "DESPICABLE ME",
  rating: 4,
  image:
    "https://a.ltrbxd.com/resized/film-poster/3/9/0/6/7/39067-despicable-me-0-230-0-345-crop.jpg?k=9956ae6697",
  year: 2010
};
const chucky = {
  id: "chucky",
  title: "CHUCKY",
  rating: 4,
  image:
    "https://i.pinimg.com/originals/b9/3c/86/b93c86c286831cc929e2fd48c2d459a0.jpg",
  year: 1998
};
const idiots = {
  id: "3idiots",
  title: "3 IDIOTS",
  rating: 5,
  image: "https://i.skyrock.net/9377/90909377/pics/3268854612_1_2_BnaUrlCT.jpg",
  year: 2009
};

const MovieList = props => {
  return (
    <div className="App">
      <h1 className="title">MOVIES LIST</h1>
      <div className="container">
        <div className="movie-card">
          <div key={tomb.id} className="movies">
            <span className="movie-rating">★★★★☆ </span>
            <img className="movie-image" src={tomb.image} />
            <h4>
              {" "}
              {tomb.title}-{tomb.year}{" "}
            </h4>
          </div>
        </div>{" "}
        <div className="movie-card">
          <div key={exam.id} className="movies">
            <span className="movie-rating">★★★☆☆ </span>
            <img className="movie-image" src={exam.image} />
            <h4>
              {" "}
              {exam.title}-{exam.year}{" "}
            </h4>
          </div>
        </div>{" "}
        <div className="movie-card">
          <div key={maleficent.id} className="movies">
            <span className="movie-rating">★★★★☆ </span>
            <img className="movie-image" src={maleficent.image} />
            <h4>
              {" "}
              {maleficent.title}-{maleficent.year}{" "}
            </h4>
          </div>
        </div>{" "}
        <div className="movie-card">
          <div key={despicable.id} className="movies">
            <span className="movie-rating" style={{ color: "black" }}>
              ★★★★☆{" "}
            </span>
            <img className="movie-image" src={despicable.image} />
            <h4>
              {" "}
              {despicable.title}-{despicable.year}{" "}
            </h4>
          </div>
        </div>{" "}
        <div className="movie-card">
          <div key={chucky.id} className="movies">
            <span className="movie-rating">★★☆☆☆ </span>
            <img className="movie-image" src={chucky.image} />
            <h4>
              {" "}
              {chucky.title}-{chucky.year}{" "}
            </h4>
          </div>
        </div>{" "}
        <div className="movie-card">
          <div key={idiots.id} className="movies">
            <span className="movie-rating">★★★★☆ </span>
            <img className="movie-image" src={idiots.image} />
            <h4>
              {" "}
              {idiots.title}-{idiots.year}{" "}
            </h4>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default HightOrderComponent(MovieList);
