import { computeHeadingLevel } from "@testing-library/react"

const Msg = (props) => {
    const {name} = props;
    return(
        <div>
            <h3>Merhaba {name}</h3>
        </div>
    )
}

export default Msg;