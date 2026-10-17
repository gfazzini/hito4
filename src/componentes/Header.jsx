import heroImg from "../assets/pexels-amar-12032525.jpg";

function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${heroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          textShadow: "2px 2px 8px black",
        }}
      >
        ¡Pizzería Mamma Mia!
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          textShadow: "2px 2px 8px black",
        }}
      >
        ¡Tenemos las mejores pizzas que podrás encontrar!
      </p>
    </header>
  );
}

export default Header;