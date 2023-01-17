import { toTitle } from "utilities/toTitle";

export const Button = ({name, onHandleClick}) => (
    <button
        type="button"
        name={name}
        onClick={onHandleClick}
    >
        {toTitle(name)}
    </button>
)