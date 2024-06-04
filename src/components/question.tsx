import "./question.css"

import React from "react";
import Answer from "./answer";
import Card from "react-bootstrap/Card";
import { Answer as answer } from "@/types"

interface QuestionProps {
    id: string,
    body: string,
    createdAt: string,
    answers: answer[],
}

interface QuestionState extends React.ComponentState{
    id: string, 
    body: string, 
    answers: answer[],
    createdAt: string, 
    showAnswers: boolean, 
}

class Question extends React.Component<QuestionProps, QuestionState> {
    constructor(props: QuestionProps) {
        super(props);

        this.state = {
            id: props.id,
            body: props.body,
            createdAt: props.createdAt,
            answers: props.answers,
            showAnswers: false,
        };
    }

    toggleShowAnswers = () => {
        this.setState((state) => { return { showAnswers: !state.showAnswers } });
    }

    render() {
        const {
            id,
            body,
            createdAt,
            answers,
            showAnswers,
        } = this.state;
        return (
            <Card className="question">
                <Card.Body>
                    <Card.Header className="question-header">
                        <div>{createdAt} </div>
                    </Card.Header>
                    <Card.Text>{body}</Card.Text>
                    {!!answers &&
                        <Card.Link className="show-answer-link" onClick={this.toggleShowAnswers}>{showAnswers ? "hide answers" : "show answers"}</Card.Link>
                    }
                </Card.Body>
                {showAnswers &&
                    <Card.Footer>
                        {!!answers &&
                            answers.map((answer) => <Answer body={answer.body} key={answer.id} createdAt={answer.createdAt} />)
                        }
                    </Card.Footer>
                }
            </Card>
        )
    }
}

export default Question