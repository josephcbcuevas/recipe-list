import logo from "../assets/logo.png"

export default function Header(){
    return(
        <header>
            <img className="logo" src={logo} alt="logo" />
            <h1>Joe's Kitchen &lt;3</h1>
        </header>
    )
}