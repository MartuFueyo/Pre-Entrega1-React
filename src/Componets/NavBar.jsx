const NavBar = () =>{
    return (
            <ul className="nav justify-content-end ">
                <li className="nav-item">
                    <a className="nav-link active text-light mx-3" aria-current="page" href="/">Inicio</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link text-light" href="/">Botellas</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link text-light" href="/">Box</a>
                </li>
                <li className="nav-item mx-3">
                    <a className="nav-link text-light"href="/">Botanicos</a>
                </li>
            </ul>
    )
}

export default NavBar;