import { Button } from "../Button/Button"

export const FeedbackOptions = ({options, onLeaveFeedback}) => (
    <>
        {options.map(option =>
            <Button
                key={option}
                name={option}
                onHandleClick={onLeaveFeedback}
            />
        )}
    </>    
)