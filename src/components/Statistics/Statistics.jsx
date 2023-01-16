export const Statistics = ({grades}) => (
    <>
        {
            grades.good || grades.bad || grades.neutral 
                ? "TRUE"
                : "FALSE"
        };
    </>
)