<template>
  <div class="container">
    <div v-html="questions.results[question_index]?.question"></div>
  <el-radio-group v-model="student_answer">
    <el-radio v-for="answer in questions.results[question_index]?.true_answers" :value="answer" @change="nextQuestion"><span v-html="answer"></span></el-radio>
  </el-radio-group>

  <template v-if="question_index >= 10">
    <div>{{ final_score }}</div>
    <el-button size="small" @click="getScore">查看结果</el-button>
  </template>
  </div>

</template>
<script setup lang="ts">
import { getQuestions } from '@/api';
import { Result_Rsp } from '@/model';
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import { useResultStore } from '@/store/result'
const questions = ref<Result_Rsp>({
  response_code: 0,
  results: []
})
const router = useRouter()
const question_index = ref(0)
const final_score = ref(0)

const student_answer = ref<string>('')

getQuestions().then(res => {
  questions.value = res.data
  questions.value.results = questions.value.results.map((item, index, arr) => {
    item.true_answers = []
    item.true_answers = arr[index].incorrect_answers.slice();
    item.true_answers.push(arr[index].correct_answer);
    item.true_answers.sort((a, b) => {
      return Math.random() > 0.5 ? 1 : -1
    })
    return item
  })
  console.log(questions.value);
})

function nextQuestion() {
  questions.value.results[question_index.value].student_answer = student_answer.value
  question_index.value++
  if(question_index.value<10){
    return
  }
  let arr = questions.value.results.filter((item) => {
    return item.correct_answer === item.student_answer
  })
  final_score.value = 10 * arr.length
}

function getScore() {

  let { setResultInfo } = useResultStore()
  setResultInfo(questions.value.results)
  router.push('/check_question')
}


</script>
<style scoped>
.container{
  height: 300px;
  margin: 30px 0 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>
