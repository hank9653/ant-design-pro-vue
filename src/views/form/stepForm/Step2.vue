<template>
  <div>
    <a-form style="max-width: 500px; margin: 40px auto 0;">
      <a-alert :closable="true" message="請確認以下測試資訊。" style="margin-bottom: 24px;"/>
      <a-form-item
        label="測試帳戶"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >{{ form.tester }}</a-form-item>
      <a-form-item
        label="測試範圍"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >{{ form.testRange }}</a-form-item>
      <a-form-item
        label="測試目標"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >{{ form.testTarget }}</a-form-item>
      <a-form-item
        label="測試描述"
        :labelCol="labelCol"
        :wrapperCol="wrapperCol"
        class="stepFormText"
      >{{ form.testDescription }}</a-form-item>
      <a-divider/>
      <a-form-item :wrapperCol="{span: 19, offset: 5}">
        <a-button :loading="loading" type="primary" @click="nextStep">建立</a-button>
        <a-button style="margin-left: 8px" @click="prevStep">上一步</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
export default {
  name: 'Step2',
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

      loading: false
    }
  },
  methods: {
    nextStep () {
      const that = this
      that.loading = true
      setTimeout(function () {
        that.$emit('nextStep')
      }, 1500)
    },
    prevStep () {
      this.$emit('prevStep')
    }
  }
}
</script>

<style lang="less" scoped>
.stepFormText {
  margin-bottom: 24px;

  .ant-form-item-label,
  .ant-form-item-control {
    line-height: 22px;
  }
}
</style>
