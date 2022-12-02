import { Link } from "react-router-dom"
import settings from "../Settings"
import { useFetch } from "usehooks-ts"

const url = settings.rlApiUrl + "/api/sections?navbarPinned=true"

interface SectionNavItem {
    label: string,
    name: string
}

const Navbar = () => {
    const { data, error } = useFetch<SectionNavItem[]>(url)

    if (error) return <nav>There is an error.</nav>
    if (!data) return <nav>Loading...</nav>

    return <nav>
        <ul>
            {data?.map((e: SectionNavItem, i) => {
                return (<li key={i}><Link to={e.label}>{e.name}</Link></li>)
            })}
        </ul>
    </nav>
}
export default Navbar