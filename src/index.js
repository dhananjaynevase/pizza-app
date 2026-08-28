import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
const jonas = {
  imageUrl: "https://kristalle.com/wp-content/uploads/2020/07/dummy-profile-pic-1.jpg",
  name: "Jonas Schmedtmann",
  bio: "Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the Portuguese sun at the beach.",
  skills: [
    { 
      skill: "Teach 🎤", 
      level: "beginner",
      color: "#2563eb" 
    },
    { 
      skill: "HTML+CSS",
      level: "beginner",
      color: "#facc15" 
    },
    { 
      skill: "JavaScript",
      level: "Intermediate",
      color: "#facc15" 
    },
    { 
      skill: "Svelte",
      level: "Advanced",
      color: "#dc2626"
    },
  ],
};
const style = {
  textAlign: "center",
  padding: "15px 0 10px"
}

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <ProfileInfo />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  console.log(pizzaData)
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>we are working on our menu. please come back later :)</p>
      )}

      {/* {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
      )} */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // console.log(props);

  // if(props.pizzaObj.soldOut) return null;
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        {/* <span>{pizzaObj.price}</span> */}

        {/* {pizzaObj.soldOut ? (
          <span> SOLD OUT </span>
        ) : (
          <span>{pizzaObj.price}</span>
        )} */}

        {/* <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span> */}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  console.log(hour);

  // if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
  // else alert("Sorry we're closed");

  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          we are happy to welcome between {openHour}:00 and {closeHour}:00.
        </p>
      )}
      {/* {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )} */}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closeHour, openHour }) {
  // console.log(props);
  return (
    <div className="order">
      <p>
        we're open from {openHour}:00 to {closeHour}:00 Come visit us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  )
}

function ProfileInfo() {
  return (
    <div className="profileWapper">
      <img src={jonas.imageUrl} alt={jonas.imageUrl} />
      <h1 style={style}>{jonas.name}</h1>
      <p style={{ width: "380px" }}>{jonas.bio}</p>
      <SkillSet />
    </div>
  )
}

function SkillSet() {
  return (
    // jonas.skills.map((item) => (
    //   <span key={item.skill}
    //     style={{
    //       backgroundColor: item.color,
    //       color: "#fff",
    //       padding: "5px 10px",
    //       margin: "5px",
    //       borderRadius: "5px",
    //       display: "inline-block",
    //     }}>
    //     {item.skill}
    //   </span>
    // ))

    <div className="skill-list">
      {
        jonas.skills.map((skill) =>(
          <Skills skill={skill.skill} key ={skill.skill} color = {skill.color}  level={skill.level}/>
        ))
      }
    </div>
  )
}

function Skills(props){
  console.log(props.skill)
  return(
    <div className="Skillset" style={{backgroundColor: props.color}}>
      <span>{props.skill}</span>
      <span>
        {props.level === "beginner" && "🤓"}
        {props.level === "Intermediate" && "👍"}
        {props.level === "Advanced" && "💀"}
      </span>
    </div>
  )
}
// React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before 18
// ReactDOM.render(<App />, document.getElementById("root"));
