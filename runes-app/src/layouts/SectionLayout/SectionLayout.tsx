import settings from "../../Settings"
import { useGlobalContext } from "../../GlobalContext"
import { useParams } from "react-router-dom"
import { useState } from "react"

const SectionLayout = () => {
    const { section } = useParams()
    const { config } = useGlobalContext()
    return (
        <div>
            <div>select tags</div>
            <div>{config.sections?.filter((e) => e.label === section)[0].name}</div>
        </div>
    )
}

export default SectionLayout