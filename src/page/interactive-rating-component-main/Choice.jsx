import { useScore } from "./Index"

export function Choice({ children }) {

    const score = useScore()
    let choiceClass = score.score == children ? "choice select" : "choice"

    return (
        <div className={choiceClass}
        onClick={() => {
            score.setScore(children)
        }}
        >
            {children}
        </div>
    )
}