import React, { useEffect, useState } from "react";
import g1 from "./assets/g1.jpg";
import g2 from "./assets/g2.png";
import g3 from "./assets/g3.jpg";
import g4 from "./assets/g4.png";
import g5 from "./assets/g5.jpg";
import g6 from "./assets/g6.png";
import g7 from "./assets/g7.jpg";
import g8 from "./assets/g8.jpg";
import g9 from "./assets/g9.jpg";
import g10 from "./assets/g10.jpg";
import g11 from "./assets/g11.jpg";
import g12 from "./assets/g12.jpg";
import g13 from "./assets/g13.jpg";
import g14 from "./assets/g14.jpg";
import g15 from "./assets/g15.jpg";
import g16 from "./assets/g16.jpg";
import g17 from "./assets/g17.jpg";
import g18 from "./assets/g18.jpg";
import g19 from "./assets/g19.jpg";
import g20 from "./assets/g20.jpg";
import g21 from "./assets/g21.jpg";
import g22 from "./assets/g22.jpg";
import g23 from "./assets/g23.jpg";
import g24 from "./assets/g24.jpg";
import g25 from "./assets/g25.jpg";
import g26 from "./assets/g26.jpg";
import g27 from "./assets/g27.jpg";
import g28 from "./assets/g28.jpg";
import g29 from "./assets/g29.jpg";
import g30 from "./assets/g30.jpg";
import g31 from "./assets/g31.jpg";
import g32 from "./assets/g32.jpg";
import g33 from "./assets/g33.jpg";
import searchIcon from "./assets/search-icon.png";
import saveIcon from "./assets/save-icon.png";
const images = [
  {
    id: 1,
    img: g1,
    name: "Mona Lisa",
    likes: 53,
    shares: 10,
    filter: "person",
  },
  {
    id: 2,
    img: g2,
    name: "Starry Night",
    likes: 78,
    shares: 25,
    filter: "nature",
  },
  {
    id: 3,
    img: g3,
    name: "Wakanda Forever",
    likes: 105,
    shares: 32,
    filter: "person",
  },
  {
    id: 4,
    img: g4,
    name: "The Persistence of Memory",
    likes: 42,
    shares: 8,
    filter: "nature",
  },
  {
    id: 5,
    img: g5,
    name: "Girl with a Pearl Earring",
    likes: 91,
    shares: 15,
    filter: "person",
  },
  {
    id: 6,
    img: g6,
    name: "The Scream",
    likes: 67,
    shares: 20,
    filter: "nature",
  },
  {
    id: 7,
    img: g7,
    name: "The Birth of Venus",
    likes: 88,
    shares: 12,
    filter: "person",
  },
  {
    id: 8,
    img: g8,
    name: "American Gothic",
    likes: 72,
    shares: 18,
    filter: "nature",
  },
  {
    id: 9,
    img: g9,
    name: "The Great Wave off Kanagawa",
    likes: 63,
    shares: 14,
    filter: "person",
  },
  {
    id: 10,
    img: g10,
    name: "The Starry Night",
    likes: 55,
    shares: 11,
    filter: "nature",
  },
  // 10 images with filter set to "person"
  {
    id: 11,
    img: g11,
    name: "Sunflowers",
    likes: 82,
    shares: 16,
    filter: "person",
  },
  {
    id: 12,
    img: g12,
    name: "The Night Watch",
    likes: 79,
    shares: 13,
    filter: "person",
  },
  {
    id: 13,
    img: g13,
    name: "Guernica",
    likes: 47,
    shares: 9,
    filter: "person",
  },
  {
    id: 14,
    img: g14,
    name: "The Last Supper",
    likes: 99,
    shares: 17,
    filter: "person",
  },
  {
    id: 15,
    img: g15,
    name: "The Kiss",
    likes: 60,
    shares: 22,
    filter: "person",
  },
  {
    id: 16,
    img: g16,
    name: "The Thinker",
    likes: 37,
    shares: 6,
    filter: "person",
  },
  {
    id: 17,
    img: g17,
    name: "Nighthawks",
    likes: 71,
    shares: 19,
    filter: "person",
  },
  {
    id: 18,
    img: g18,
    name: "Water Lilies",
    likes: 45,
    shares: 7,
    filter: "person",
  },
  {
    id: 19,
    img: g19,
    name: "Les Demoiselles d'Avignon",
    likes: 83,
    shares: 21,
    filter: "person",
  },
  {
    id: 20,
    img: g20,
    name: "The Creation of Adam",
    likes: 94,
    shares: 23,
    filter: "person",
  },
  // 10 images with filter set to "nature"
  {
    id: 21,
    img: g21,
    name: "Whistler's Mother",
    likes: 65,
    shares: 24,
    filter: "nature",
  },
  {
    id: 22,
    img: g22,
    name: "The Garden of Earthly Delights",
    likes: 58,
    shares: 27,
    filter: "nature",
  },
  {
    id: 23,
    img: g23,
    name: "The Persistence of Memory",
    likes: 61,
    shares: 28,
    filter: "nature",
  },
  {
    id: 24,
    img: g24,
    name: "The Birth of Venus",
    likes: 77,
    shares: 30,
    filter: "nature",
  },
  {
    id: 25,
    img: g25,
    name: "The Night Watch",
    likes: 89,
    shares: 31,
    filter: "nature",
  },
  {
    id: 26,
    img: g26,
    name: "American Gothic",
    likes: 48,
    shares: 33,
    filter: "nature",
  },
  {
    id: 27,
    img: g27,
    name: "The Great Wave off Kanagawa",
    likes: 70,
    shares: 34,
    filter: "nature",
  },
  {
    id: 28,
    img: g28,
    name: "The Scream",
    likes: 56,
    shares: 35,
    filter: "nature",
  },
  {
    id: 29,
    img: g29,
    name: "Girl with a Pearl Earring",
    likes: 93,
    shares: 36,
    filter: "nature",
  },
  {
    id: 30,
    img: g30,
    name: "Wakanda Forever",
    likes: 68,
    shares: 37,
    filter: "nature",
  },
  // 3 images with filter set to "animals" (remaining)
  {
    id: 31,
    img: g31,
    name: "Starry Night",
    likes: 64,
    shares: 38,
    filter: "animals",
  },
  {
    id: 32,
    img: g32,
    name: "Mona Lisa",
    likes: 75,
    shares: 39,
    filter: "animals",
  },
  {
    id: 33,
    img: g33,
    name: "Sunflowers",
    likes: 81,
    shares: 40,
    filter: "animals",
  },
];

const Gallery = () => {
  const [loadedImages, setLoadedImages] = useState(9);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const loadMoreImages = () => {
    setLoading(true);
    setTimeout(() => {
      setLoadedImages((prevCount) => prevCount + 9);
      setLoading(false);
    }, 1000);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      const clientHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrollPosition = scrollTop + clientHeight;

      // Load more images if the user is close to the bottom of the page
      if (scrollHeight - scrollPosition < clientHeight * 0.2) {
        loadMoreImages();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMoreImages]);

  const filteredImages = images.filter((image, _) =>
    image.filter.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="gallery-wrapper">
      <nav>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Illustations</a>
          </li>
          <li>
            <a href="#">Images</a>
          </li>
          <li>
            <a href="#">Icons</a>
          </li>
        </ul>
      </nav>
      <section className="input-wrapper">
        <div className="input-section">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            type="text"
            placeholder="Search"
          />
          <img src={searchIcon} className="search-icon"></img>
        </div>

        <button className="upload-btn">Upload</button>
      </section>
      <main className="gallery">
        {filteredImages.slice(0, loadedImages).map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img.img} alt="" />
            <div className="top-text">
              <div className="left">
                <p>{img.name}</p>
                <p className="stats">
                  likes {img.likes} | shares {img.shares}
                </p>
              </div>
              <div className="right">
                <img src={saveIcon} alt="" />
              </div>
            </div>
          </div>
        ))}
      </main>
      {loading && <div className="loader"></div>}
    </section>
  );
};

export default Gallery;
