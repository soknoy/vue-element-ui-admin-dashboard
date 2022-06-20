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
        <el-col :span="8">
          <span class="demonstration" style="margin: 0.5%">End time :</span>
          <el-date-picker
            v-model="endDateValue"
            type="datetime"
            placeholder="Select date and time"
            style="margin-left: 5%"
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
        <el-col :span="24" style="margin-top: 2%">
          <el-row :gutter="20">
            <el-col>
              <el-radio v-model="radio" label="username">Username</el-radio>
              <el-radio v-model="radio" label="id">ID</el-radio>
              <el-form
                :inline="true"
                :model="formInline"
                class="demo-form-inline"
                style="margin-top: 1%"
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
        </el-col>
        <el-button type="success" style="float: right">Search</el-button>
      </el-row>
    </el-card>
    <el-table
      :data="tableData"
      border
      fit
      highlight-current-row
      style="width: 100%; margin-top: 1%"
      stripe
    >
      <el-table-column
        label="Serial Number"
        prop="No"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.No }}</span>
        </template>
      </el-table-column>
      <el-table-column label="ID" prop="ID" align="center" width="140">
        <template slot-scope="{ row }">
          <span>{{ row.ID }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Username"
        prop="Username"
        align="center"
        width="120"
      >
        <template slot-scope="{ row }">
          <span>{{ row.Username }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Channel ID"
        prop="ChannelID"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.ChannelID }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Phone Number"
        prop="PhoneNumber"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.PhoneNumber }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Register Device"
        prop="RegisterDevice"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.RegisterDevice }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="LoginStatus"
        prop="LoginStatus"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.LoginStatus }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Registration time" width="140" align="center">
        <template slot-scope="{ row }">
          <span>{{
            row.RegistrationDate | parseTime('{y}-{m}-{d} {h}:{i}')
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Last login time" width="140" align="center">
        <template slot-scope="{ row }">
          <span>{{
            row.LastLoginTime | parseTime('{y}-{m}-{d} {h}:{i}')
          }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Registration record"
        prop="RegisterRecord"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.RegisterRecord }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button size="mini" type="danger" @click="handleBan(row)">
            Unblock
          </el-button>
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
    <el-dialog
      title="Modify user limit"
      :visible.sync="dialogLimitRed"
      center
      width="30%"
    >
      <el-form :model="form">
        <div style="text-align: center">
          Username: {{ selectRow.Username }} ID : {{ selectRow.ID }}
        </div>
        <div style="text-align: center; margin: 4%">
          Current Red limit: {{ selectRow.ChannelID }}
        </div>
        <el-form-item label="New limited bonus amount : " label-width="50%">
          <el-input-number v-model="redLimit" size="medium" />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogLimitRed = false">Cancel</el-button>
        <el-button type="primary" @click="handleModifyLimit">Submit</el-button>
      </span>
    </el-dialog>
    <el-dialog title="Ban User" :visible.sync="dialogBan" center width="30%">
      <div style="text-align: center">
        Username: {{ selectRow.Username }} ID : {{ selectRow.ID }}
      </div>
      <el-form :model="form" style="margin: 5% 5% 0% 5%">
        <el-form-item label="Please describe why :" label-width="160px">
          <el-input v-model="form.desc" type="textarea" clearable />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogBan = false">Cancel</el-button>
        <el-button type="primary" @click="dialogBan = false">Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          No: '1',
          ID: 'Tom',
          Username: 'No. 189, Grove St, Los Angeles',
          ChannelID: '1',
          PhoneNumber: '010900479',
          RegisterDevice: 'PC',
          LoginStatus: 'Yes',
          RegistrationDate: '2000-1-1 12:00:00',
          LastLoginTime: '2000-1-1 12:00:00',
          RegisterRecord: 'Check'
        },
        {
          No: '2',
          ID: 'Soknoy',
          Username: 'No. 189, Grove St, Los Angeles',
          ChannelID: '1',
          PhoneNumber: '010900479',
          RegisterDevice: 'PC',
          LoginStatus: 'Yes',
          RegistrationDate: '2000-1-1 12:00:00',
          LastLoginTime: '2000-1-1 12:00:00',
          RegisterRecord: 'Check'
        },
        {
          No: '3',
          ID: 'PovPov',
          Username: 'No. 189, Grove St, Los Angeles',
          ChannelID: '1',
          PhoneNumber: '010900479',
          RegisterDevice: 'PC',
          LoginStatus: 'Yes',
          RegistrationDate: '2000-1-1 12:00:00',
          LastLoginTime: '2000-1-1 12:00:00',
          RegisterRecord: 'Check'
        },
        {
          No: '4',
          ID: 'Gaara',
          Username: 'No. 189, Grove St, Los Angeles',
          ChannelID: '1',
          PhoneNumber: '010900479',
          RegisterDevice: 'PC',
          LoginStatus: 'Yes',
          RegistrationDate: '2000-1-1 12:00:00',
          LastLoginTime: '2000-1-1 12:00:00',
          RegisterRecord: 'Check'
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
