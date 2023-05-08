import React from "react";
import ReactDOM from "react-dom";
import Cards from "./Cards";
import './index.css';

ReactDOM.render(
  <>
    <h1>List of my favourite Netflix Series</h1>
    <Cards 
      imgsrc="https://i.cbc.ca/1.4094475.1493675267!/cpImage/httpImage/image.jpg_gen/derivatives/original_1180/tv-anne-netflix-20170501.jpg"
      link="https://www.imdb.com/video/vi748206361/?playlistId=tt5421602&ref_=tt_ov_vi"
      title="A Netflix Original Series"
      sname="Anne"
    />
    <Cards 
      imgsrc="https://cdn.bollywoodmdb.com/fit-in/post/CLASSWRR_1675587492295.jpg"
      link="https://www.netflix.com/np/title/81229406"
      title="A Netflix Original Series"
      sname="Class"
    />
    <Cards 
      imgsrc="https://resize.indiatvnews.com/en/resize/oldbucket/730_-/entertainmenthollywood/robert-downey-jr-quit-iron-man.jpg"
      link="https://www.netflix.com/np/title/70177689"
      title="A Netflix Original Series"
      sname="Iron Man"
    />
    <Cards 
      imgsrc="https://pbs.twimg.com/media/EtkE_6LXAAIIJfI.jpg"
      link="https://www.whats-on-netflix.com/news/the-selection-netflix-movie-what-we-know-so-far-2021/"
      title="A Netflix Original Series"
      sname="The Selection"
    />
    <Cards 
      imgsrc="https://m.media-amazon.com/images/M/MV5BNWY2OTRkNjQtZDYwNi00NTMwLWE4OTAtZWFiYmRiYWZhMjc0XkEyXkFqcGdeQXVyNjU0NTI0Nw@@._V1_.jpg"
      link="https://www.netflix.com/np/title/81046216"
      title="A Netflix Original Series"
      sname="Red Rose"
    />
    <Cards 
      imgsrc="https://www.whats-on-netflix.com/wp-content/uploads/2020/10/dc-titans-season-3-netflix-december-2021.jpg"
      link="https://www.netflix.com/np/title/80218200"
      title="A Netflix Original Series"
      sname="Titans"/>
  </>,
   document.getElementById("root")
)