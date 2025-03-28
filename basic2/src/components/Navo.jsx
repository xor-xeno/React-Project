import Logo from "../assets/onex.svg"


const Navo = () => {
  return (
    <nav>
        <div className="logo">
            <img src={Logo} alt="logo" />
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navo;