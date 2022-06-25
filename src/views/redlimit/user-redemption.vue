<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>User Rentention</b>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <span
            class="demonstration"
            style="margin: 0.5%"
          >Starting time :</span>
          <el-date-picker
            v-model="startDateValue"
            type="datetime"
            placeholder="Select date and time"
          />
        </el-col>
        <el-col
          :span="8"
        ><span>Choose Channel : </span>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            /> </el-select></el-col>
        <el-col :span="8">
          <el-radio v-model="radio" label="username">Username</el-radio>
          <el-radio v-model="radio" label="id">ID</el-radio>
          <el-form
            :inline="true"
            :model="formInline"
            class="demo-form-inline"
            style="margin-top: 2%"
          >
            <el-form-item label="Query Keyword">
              <el-input
                v-model="formInline.user"
                placeholder="Input here to search"
                clearable
              />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-button
        type="success"
        style="float: right; margin-bottom: 1.5%"
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
      <el-table-column label="ID" prop="ID" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.ID }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Username" prop="Username" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Username }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Channel ID" prop="ChannelID" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.ChannelID }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Personal Withdrawals"
        prop="PersonalWithdrawals"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.PersonalWithdrawals }}</span>
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
          ID: '1',
          ChannelID: '1',
          Username: 'Soknoy',
          PersonalWithdrawals: 'XXXX',
          Date: '2000-01-01'
        },
        {
          No: '2',
          ID: '1',
          ChannelID: '1',
          Username: 'Soknoy',
          PersonalWithdrawals: 'XXXX',
          Date: '2000-01-01'
        },
        {
          No: '3',
          ID: '1',
          ChannelID: '1',
          Username: 'Soknoy',
          PersonalWithdrawals: 'XXXX',
          Date: '2000-01-01'
        },
        {
          No: '4',
          ID: '1',
          ChannelID: '1',
          Username: 'Soknoy',
          PersonalWithdrawals: 'XXXX',
          Date: '2000-01-01'
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
