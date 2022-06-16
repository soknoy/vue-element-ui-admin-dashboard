<template>
  <div class="tab-container">
    <!-- <el-tag>mounted times ：{{ createdTimes }}</el-tag>
    <el-alert
      :closable="false"
      style="
        width: 200px;
        display: inline-block;
        vertical-align: middle;
        margin-left: 30px;
      "
      title="Tab with keep-alive"
      type="success"
    /> -->
    <div>
      <el-button type="info">Back</el-button>
      <el-badge class="item" style="float: right">
        <el-button
          size="small"
          icon="el-icon-user-solid"
          style="color: blue"
        >Username here</el-button>
      </el-badge>
    </div>
    <el-tabs
      v-model="activeName"
      style="margin-top: 15px"
      type="border-card"
      tab-position="top"
    >
      <el-tab-pane
        v-for="item in tabMapOptions"
        :key="item.key"
        :label="item.label"
        :name="item.key"
      >
        <user-detail v-if="activeName === 'account_details'" />
        <reset-password v-if="activeName === 'reset_password'" />
        <transaction-record v-if="activeName === 'transaction_record'" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import UserDetail from './components/UserDetail'
import ResetPassword from './components/ResetPassword'
import TransactionRecord from './components/TransactionRecord'

export default {
  name: 'Tab',
  components: { UserDetail, ResetPassword, TransactionRecord },
  data() {
    return {
      tabMapOptions: [
        { label: 'Account Details', key: 'account_details' },
        { label: 'Platform Quota', key: 'platform_quota' },
        { label: 'Reset Password', key: 'reset_password' },
        { label: 'Transaction Record', key: 'transaction_record' }
      ],
      activeName: 'account_details',
      createdTimes: 0
    }
  },
  watch: {
    activeName(val) {
      this.$router.push(`${this.$route.path}?tab=${val}`)
    }
  },
  created() {
    // init the default selected tab
    const tab = this.$route.query.tab
    if (tab) {
      this.activeName = tab
    }
  },
  methods: {
    showCreatedTimes() {
      this.createdTimes = this.createdTimes + 1
    }
  }
}
</script>

<style scoped>
.tab-container {
  margin: 30px;
}
</style>
