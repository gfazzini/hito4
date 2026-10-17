function Navbar() {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <div className="d-flex align-items-center gap-2">

<h6 className="text-white mb-0">Pizzería Mamma Mia  </h6>
        <button className="btn btn-outline-light">
          🍕 Home
        </button>

        {token ? (
          <>
            <button className="btn btn-outline-light">
              🔓 Profile
            </button>

            <button className="btn btn-outline-light">
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-outline-light">
              🔐 Login
            </button>

            <button className="btn btn-outline-light">
              🔐 Register
            </button>
          </>
        )}
      </div>

      <button className="btn btn-outline-info">
        🛒 Total: ${total.toLocaleString("es-CL")}
      </button>
    </nav>
  );
}

export default Navbar;