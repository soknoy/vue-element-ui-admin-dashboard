<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>Channel Quota Statistics Record</b>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Date:">
              <el-date-picker
                v-model="value1"
                type="datetimerange"
                range-separator="To"
                start-placeholder="Start date"
                end-placeholder="End date"
              />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="6">
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Operation Module:">
              <el-select v-model="value" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="5">
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Operator: ">
              <el-input v-model="input" placeholder="Please input" />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-button
        type="success"
        style="float: right; margin: 0% 0% 1.5% 0%"
      >Search</el-button>
    </el-card>
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%; margin-top: 1%"
      stripe
    >
      <el-table-column label="Serial Number" prop="No" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.No }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" prop="Date" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Channel ID" prop="ChannelID" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.ChannelID }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Withdrawal Limit"
        prop="WithdrawalLimit"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.WithdrawalLimit }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Remaining Quota"
        prop="RemainingQuota"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.RemainingQuota }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Total Amount" prop="TotalAmount" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.TotalAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Saturation" prop="Saturation" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Saturation }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 1%">Cumulative query content : {{ redLimit }}</div>
    <!-- <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="listQuery.page"
      :limit.sync="listQuery.limit"
      @pagination="getList"
    /> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          No: '1',
          ChannelID: 'XXX',
          Date: '2000-1-1 12:00:00',
          WithdrawalLimit: 'XXXX',
          RemainingQuota: 'XXXX',
          TotalAmount: 'XXXX',
          Saturation: 'XXXX'
        },
        {
          No: '2',
          ChannelID: 'XXX',
          Date: '2000-1-1 12:00:00',
          WithdrawalLimit: 'XXXX',
          RemainingQuota: 'XXXX',
          TotalAmount: 'XXXX',
          Saturation: 'XXXX'
        },
        {
          No: '3',
          ChannelID: 'XX',
          Date: '2000-1-1 12:00:00',
          WithdrawalLimit: 'XXXX',
          RemainingQuota: 'XXXX',
          TotalAmount: 'XXXX',
          Saturation: 'XXXX'
        },
        {
          No: '4',
          ChannelID: 'XXX',
          Date: '2000-1-1 12:00:00',
          WithdrawalLimit: 'XXXX',
          RemainingQuota: 'XXXX',
          TotalAmount: 'XXXX',
          Saturation: 'XXXX'
        }
      ],
      options: [
        {
          value: 'Option1',
          label: 'Option1'
        },
        {
          value: 'Option2',
          label: 'Option2'
        },
        {
          value: 'Option3',
          label: 'Option3'
        },
        {
          value: 'Option4',
          label: 'Option4'
        },
        {
          value: 'Option5',
          label: 'Option5'
        }
      ],
      value: '',
      value1: [],
      radio: 'username',
      input: '',
      dialogLimitRed: false,
      dialogBan: false,
      formInline: {
        user: '',
        region: ''
      },
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      selectRow: {},
      redLimit: 0,
      startDateValue: '',
      endDateValue: ''
    }
  },
  methods: {
    onSearch() {
      console.log('done')
    },
    handleModifyLimit(row) {
      console.log(row)
      this.dialogLimitRed = !this.dialogLimitRed
      this.selectRow = row
    },
    handleBan(row) {
      console.log(row)
      this.dialogBan = !this.dialogBan
      this.selectRow = row
    }
  }
}
</script>
<style lang=""></style>
