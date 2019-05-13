<template>
  <a-card :bordered="false">
    <a-steps class="steps" :current="currentTab">
      <a-step title="撰寫測試資訊"/>
      <a-step title="確認測試資訊"/>
      <a-step title="完成"/>
    </a-steps>
    <div class="content">
      <step1 v-if="currentTab === 0" @nextStep="nextStep" @updateForm="updateForm" :form="form"/>
      <step2 v-if="currentTab === 1" @nextStep="nextStep" @prevStep="prevStep" :form="form"/>
      <step3 v-if="currentTab === 2" @prevStep="prevStep" @finish="finish" :form="form"/>
    </div>
  </a-card>
</template>

<script>
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

export default {
  name: 'StepForm',
  components: {
    Step1,
    Step2,
    Step3
  },
  data () {
    return {
      description: '快速建立一個測試情境',
      currentTab: 0,
      form: {
        tester: '',
        testRange: '',
        testTarget: '',
        testDescription: ''
      }
    }
  },
  methods: {
    // handler
    nextStep () {
      if (this.currentTab < 2) {
        this.currentTab += 1
      }
    },
    prevStep () {
      if (this.currentTab > 0) {
        this.currentTab -= 1
      }
    },
    finish () {
      this.form.tester = ''
      this.form.testRange = ''
      this.form.testTarget = ''
      this.form.testDescription = ''
      this.currentTab = 0
    },
    updateForm (form) {
      this.form.tester = form.tester
      this.form.testRange = form.testRange
      this.form.testTarget = form.testTarget
      this.form.testDescription = form.testDescription
    }
  }
}
</script>

<style lang="less" scoped>
.steps {
  max-width: 750px;
  margin: 16px auto;
}
</style>
