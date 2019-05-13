<template>
  <div>
    <a-form style="max-width: 500px; margin: 40px auto 0;">
      <a-form-item label="測試帳戶" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-select placeholder="ice.lin@104.com.tw" v-model="tester">
          <a-select-option value="1">ice.lin@104.com.tw</a-select-option>
          <a-select-option value="2">tod.shen@104.com.tw</a-select-option>
          <a-select-option value="3">hank.chang@104.com.tw</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="測試範圍" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input-group :compact="true" style="display: inline-block; vertical-align: middle">
          <a-select style="width: 100px" v-model="testRange">
            <a-select-option value="all">全部測試</a-select-option>
            <a-select-option value="testsuites">testsuites</a-select-option>
            <a-select-option value="testcases">testcases</a-select-option>
            <a-select-option value="api">api</a-select-option>
          </a-select>
          <a-input :style="{width: 'calc(100% - 100px)'}" v-model="testTarget"/>
        </a-input-group>
      </a-form-item>
      <a-form-item label="測試描述" :labelCol="labelCol" :wrapperCol="wrapperCol">
        <a-input v-model="testDescription"/>
      </a-form-item>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button type="primary" @click="nextStep">下一步</a-button>
      </a-form-item>
    </a-form>
    <a-divider/>
    <div class="step-form-style-desc">
      <h3>說明</h3>
      <h4>測試帳戶</h4>
      <p>選擇一個帳戶當作此測試的聯絡人。</p>
      <h4>測試範圍</h4>
      <p>挑選要測試的範圍。</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Step1',
  props: {
    form: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      labelCol: { lg: { span: 5 }, sm: { span: 5 } },
      wrapperCol: { lg: { span: 19 }, sm: { span: 19 } },
      tester: this.form.tester,
      testRange: this.form.testRange,
      testTarget: this.form.testTarget,
      testDescription: this.form.testDescription
    }
  },
  methods: {
    nextStep () {
      this.$emit('updateForm', {
        tester: this.tester,
        testRange: this.testRange,
        testTarget: this.testTarget,
        testDescription: this.testDescription
      })
      this.$emit('nextStep')
    }
  }
}
</script>

<style lang="less" scoped>
.step-form-style-desc {
  padding: 0 56px;
  color: rgba(0, 0, 0, 0.45);

  h3 {
    margin: 0 0 12px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 16px;
    line-height: 32px;
  }

  h4 {
    margin: 0 0 4px;
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
    line-height: 22px;
  }

  p {
    margin-top: 0;
    margin-bottom: 12px;
    line-height: 22px;
  }
}
</style>
