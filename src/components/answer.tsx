import React from "react";
import { CardBodyProps } from "react-bootstrap";
import Card from "react-bootstrap/Card"

interface AnswerProps extends CardBodyProps{
    body: string,
    createdAt: string,
}

const Answer: React.FC<AnswerProps> =  (props: AnswerProps) =>  {
    const {
        body,
        createdAt,
    } = props;
    return (
        <Card className="answer">
            <Card.Body>
                <Card.Header className="answer-header">
                    <div>{createdAt} </div>
                </Card.Header>
                <Card.Text className="answer-body">{body}</Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Answer