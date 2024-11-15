import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Result } from '@/model'

export const useResultStore = defineStore('result', () => {
  const resultInfo = ref<Result[]>([])

  function setResultInfo(value: Result[]) {
    resultInfo.value = value.slice();
  }

  return {
    resultInfo,
    setResultInfo
  }
}, {

  persist: {
    storage: sessionStorage
  }
})