import { AddSurveyModel, AddSurveyRepository } from './add-survey-protocols'
import { DbAddSurvey } from './db-add-survey'

const makeSurveyFakeData = (): AddSurveyModel => ({
  question: 'any_question',
  answers: [{
    image: 'any_image',
    answer: 'any_answer'
  }]
})

describe('DbAddSurvey UseCase', () => {
  test('should call AddSurveyRepository with corrext values', async () => {
    class AddSurveyRepositoryStub implements AddSurveyRepository {
      async add (surveyData: AddSurveyModel): Promise<void> {
        return new Promise(resolve => resolve())
      }
    }
    const addSurveyRepositoryStub = new AddSurveyRepositoryStub()
    const addSpy = jest.spyOn(addSurveyRepositoryStub, 'add')
    const sut = new DbAddSurvey(addSurveyRepositoryStub)
    const surveyData = makeSurveyFakeData()
    await sut.add(surveyData)
    expect(addSpy).toHaveBeenCalledWith(surveyData)
  })
})
