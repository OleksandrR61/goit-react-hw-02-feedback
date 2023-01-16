import { GradeButton } from "./GradeButton/GradeButton"

export const Rate = ({grades, onHandleCounter}) => (
    <>
        <h2>Please leave feedback</h2>
        {grades.map(grade => <GradeButton grade={grade} onHandleClick={onHandleCounter}/>)}
    </>    
)