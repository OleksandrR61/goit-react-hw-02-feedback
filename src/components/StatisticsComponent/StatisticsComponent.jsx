import { toTitle } from "utilities/toTitle";

export const StatisticsComponent = ({title, value}) => (
    <p>{toTitle(title)}: {value}</p>
)