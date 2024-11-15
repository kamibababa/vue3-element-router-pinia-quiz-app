import instance from "@/utils/request"; 
import { Result_Rsp } from "@/model/"

export function getQuestions(): Promise<{data: Result_Rsp}>{
  return instance({
    method: 'get',
    url: '?amount=10&category=18&difficulty=easy&type=multiple'
  })
}