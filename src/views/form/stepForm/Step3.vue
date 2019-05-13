<template>
  <div>
    <a-form style="margin: 40px auto 0;">
      <result title="操作成功" :is-success="true" description="開始執行測試" style="max-width: 560px;">
        <div class="information">
          <a-row>
            <a-col :sm="8" :xs="24">測試帳戶：</a-col>
            <a-col :sm="16" :xs="24">{{ form.tester }}</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">測試範圍：</a-col>
            <a-col :sm="16" :xs="24">{{ form.testRange }}</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">測試目標：</a-col>
            <a-col :sm="16" :xs="24">{{ form.testTarget }}</a-col>
          </a-row>
          <a-row>
            <a-col :sm="8" :xs="24">測試描述：</a-col>
            <a-col :sm="16" :xs="24">{{ form.testDescription }}</a-col>
          </a-row>
        </div>
        <div slot="action">
          <a-button type="primary" @click="finish">再次建立</a-button>
          <a-button style="margin-left: 8px" @click="toOrderList">查看測試</a-button>
        </div>
      </result>
    </a-form>
  </div>
</template>

<script>
import { Result } from '@/components'

export default {
  name: 'Step3',
  components: {
    Result
  },
  props: {
    form: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    finish () {
      this.$emit('finish')
    },
    toOrderList () {
      this.$router.push('/list/table-list')
    }
  }
}
</script>
<style lang="less" scoped>
.information {
  line-height: 22px;

  .ant-row:not(:last-child) {
    margin-bottom: 24px;
  }
}
.money {
  font-family: 'Helvetica Neue', sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 14px;
}
</style>
