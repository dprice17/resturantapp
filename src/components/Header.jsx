import react from "react"

export default function Header(props){
    const { headerImage } = props
    return (
        <header>
            <img className="header-img" src={headerImage} />
        </header>
    )
}