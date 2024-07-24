const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./logo.png" alt="logo" />
        <p className="text-light">Global Health Impact</p>
      </div>
      <div className="navbar-links">
        {["HOME", "INDEX", "INFO"].map((el) => (
          <a key={el} href={"#"}>
            {el}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
