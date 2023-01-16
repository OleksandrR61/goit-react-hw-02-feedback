export const GradeButton = ({grade, onHandleClick}) => (
    <button
        type="button"
        name={grade}
        onClick={onHandleClick}
    >
        {grade.charAt(0).toUpperCase() + grade.slice(1)}
    </button>
)