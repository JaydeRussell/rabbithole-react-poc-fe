import Answer from './answer.d'

export default interface Question {
    id: string,
    body: string,
    answers: Answer[],
    createdAt: string,
}