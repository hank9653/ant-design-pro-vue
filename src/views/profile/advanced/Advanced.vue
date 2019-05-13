
<template>
  <page-view
    title="任務編號：1234"
    logo="https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png"
  >
    <detail-list slot="headerContent" size="small" :col="2" class="detail-layout">
      <detail-list-item term="擁有者">Ice</detail-list-item>
      <detail-list-item term="測試目標">VIP3.0 API</detail-list-item>
      <detail-list-item term="建立時間">2019-05-14</detail-list-item>
      <detail-list-item term="關聯 Issue 單號">
        <a>12421</a>
      </detail-list-item>
    </detail-list>
    <a-row slot="extra" class="status-list">
      <a-col :xs="12" :sm="12">
        <div class="text">狀態</div>
        <div class="heading">執行中</div>
      </a-col>
    </a-row>
    <!-- actions -->
    <template slot="action">
      <a-button type="primary">停止測試</a-button>
    </template>

    <a-card :bordered="false" title="測試進度">
      <a-steps :direction="isMobile() && 'vertical' || 'horizontal'" :current="1" progressDot>
        <a-step title="測試環境"></a-step>
        <a-step title="執行測試"></a-step>
        <a-step title="測試報告"></a-step>
        <a-step title="完成"></a-step>
      </a-steps>
    </a-card>

    <!-- 操作 -->
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      :tabList="tabList"
      :activeTabKey="activeTabKey"
      @tabChange="(key) => {this.activeTabKey = key}"
    >
      <a-table
        v-if="activeTabKey === '1'"
        :columns="operationColumns"
        :dataSource="operation1"
        :pagination="false"
      >
        <template slot="status" slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
      </a-table>
      <a-table
        v-if="activeTabKey === '2'"
        :columns="operationColumns"
        :dataSource="operation2"
        :pagination="false"
      >
        <template slot="status" slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
      </a-table>
      <a-table
        v-if="activeTabKey === '3'"
        :columns="operationColumns"
        :dataSource="operation3"
        :pagination="false"
      >
        <template slot="status" slot-scope="status">
          <a-badge :status="status | statusTypeFilter" :text="status | statusFilter"/>
        </template>
      </a-table>
    </a-card>
  </page-view>
</template>

<script>
import { mixinDevice } from '@/utils/mixin'
import { PageView } from '@/layouts'
import DetailList from '@/components/tools/DetailList'

const DetailListItem = DetailList.Item

export default {
  name: 'Advanced',
  components: {
    PageView,
    DetailList,
    DetailListItem
  },
  mixins: [mixinDevice],
  data () {
    return {
      tabList: [
        {
          key: '1',
          tab: '測試案例'
        },
        {
          key: '2',
          tab: '測試環境'
        }
      ],
      activeTabKey: '1',

      operationColumns: [
        {
          title: '事件',
          dataIndex: 'type',
          key: 'type'
        },
        {
          title: '操作者',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: '執行結果',
          dataIndex: 'status',
          key: 'status',
          scopedSlots: { customRender: 'status' }
        },
        {
          title: '執行时间',
          dataIndex: 'updatedAt',
          key: 'updatedAt'
        },
        {
          title: '備註',
          dataIndex: 'remark',
          key: 'remark'
        }
      ],
      operation1: [
        {
          key: 'op1',
          type: 'Company API 測試',
          name: 'Ice',
          status: 'agree',
          updatedAt: '2019-05-14 12:30:00',
          remark: '-'
        },
        {
          key: 'op2',
          type: 'Job API 測試',
          name: 'Ice',
          status: 'agree',
          updatedAt: '2019-05-14 12:30:00',
          remark: '-'
        },
        {
          key: 'op3',
          type: 'Resume API 測試',
          name: 'Ice',
          status: 'agree',
          updatedAt: '2019-05-14 12:30:00',
          remark: '-'
        },
        {
          key: 'op4',
          type: 'User API 測試',
          name: 'Ice',
          status: 'reject',
          updatedAt: '2019-05-14 12:30:00',
          remark: '使用者登入 API 無回應'
        }
      ],
      operation2: [
        {
          key: 'op1',
          type: '測試排程',
          name: 'Ice',
          status: 'agree',
          updatedAt: '2019-05-14 12:30:00',
          remark: '-'
        },
        {
          key: 'op2',
          type: '產出測試報告',
          name: 'Ice',
          status: 'agree',
          updatedAt: '2019-05-14 12:30:00',
          remark:
            'https://s3-ap-northeast-1.amazonaws.com/vip3-bs-e2e-test-reports-bsreportbucket-1n0knoi90gi0q/e1963b1/report.html'
        }
      ]
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        agree: '成功',
        reject: '失敗'
      }
      return statusMap[status]
    },
    statusTypeFilter (type) {
      const statusTypeMap = {
        agree: 'success',
        reject: 'error'
      }
      return statusTypeMap[type]
    }
  }
}
</script>

<style lang="less" scoped>
.detail-layout {
  margin-left: 44px;
}
.text {
  color: rgba(0, 0, 0, 0.45);
}

.heading {
  color: rgba(0, 0, 0, 0.85);
  font-size: 20px;
}

.no-data {
  color: rgba(0, 0, 0, 0.25);
  text-align: center;
  line-height: 64px;
  font-size: 16px;

  i {
    font-size: 24px;
    margin-right: 16px;
    position: relative;
    top: 3px;
  }
}

.mobile {
  .detail-layout {
    margin-left: unset;
  }
  .text {
  }
  .status-list {
    text-align: left;
  }
}
</style>
