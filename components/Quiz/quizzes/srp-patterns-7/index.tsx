import { IQuiz } from '../IQuiz'

const quiz: IQuiz = {
  name: 'srp-patterns-7',
  question: 'В чём польза паттерна прокси?',
  variants: [
    {
      text: 'Позволяет расширить функциональность модуля, не меняя его код'
    },
    {
      text: 'Позволяет выделить логику, не относящуюся напрямую к функциональности одного модуля, в другой'
    },
    {
      text: 'Предоставляет расширенную функциональность, не меняя интерфейс взаимодействия для клиента'
    }
  ],
  meta: {
    correctAnswers: [0, 1, 2]
  }
}

export default quiz
