//import logo from "./logo.svg";
import "./App.css";
import "./components/TravelBlog.css";
import Hero from "./components/Hero";
import TravelBlog from "./components/TravelBlog";
import data from "./TravelData";

function App() {
  const cards = data.map((item) => {
    return (
      <TravelBlog
        key={item.id}
        title={item.title}
        img1={item.img1}
        img2={item.img2}
        img3={item.img3}
        description={item.description}
      />
    );
  });

  return (
    <div>
      <Hero />
      <div className="parent-container">{cards}</div>
    </div>
  );
}

export default App;
