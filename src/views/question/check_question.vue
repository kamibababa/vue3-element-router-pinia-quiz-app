
<template>
    <div class="container">
      <div v-html="resultInfo[question_index]?.question"></div>
  <el-radio-group >
    <el-radio v-for="answer in resultInfo[question_index]?.true_answers" :value="answer">
     <span v-if="answer===resultInfo[question_index].correct_answer" style="color: blue;" v-html="answer"></span> 
     <span v-else-if="answer===resultInfo[question_index].student_answer&&answer!==resultInfo[question_index].correct_answer" style="color: red;" v-html="answer"></span> 
     <span v-else v-html="answer"></span> 
    </el-radio>
  </el-radio-group>
  <el-button style="max-width: 100px;" v-if="question_index < 10" @click="nextQuestion">下一题</el-button>
  <template v-else>
    <el-button style="max-width: 100px;" @click="startQuestion">重新答题</el-button>
  </template>
    </div>
</template>

<script setup lang="ts">
import { useResultStore } from '@/store/result'
import { storeToRefs } from 'pinia'
import { ref } from 'vue';
import { useRouter } from 'vue-router'

const router = useRouter()
const store = useResultStore()
let { resultInfo } = storeToRefs(store)
const question_index = ref(0)

function nextQuestion() {
  question_index.value++
}
function startQuestion() {
  router.push('/all_question')
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
