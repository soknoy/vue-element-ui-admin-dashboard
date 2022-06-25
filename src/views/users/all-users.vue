<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>All Users</b>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <el-row :gutter="20">
            <el-col>
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
            <el-col style="margin-top: 1%">
              <span class="demonstration" style="margin: 0.5%">End time :</span>
              <el-date-picker
                v-model="endDateValue"
                type="datetime"
                placeholder="Select date and time"
                style="margin-left: 5%"
              />
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <el-row :gutter="20">
            <el-col>
              <span>Equiment : </span>
              <el-select v-model="value" placeholder="Select">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
            <el-col style="margin-top: 1%">
              <span>Channel : </span>
              <el-select
                v-model="value"
                placeholder="Select"
                style="margin-left: 1.5%"
              >
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="8">
          <span>Type : </span>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
      </el-row>
      <el-button
        type="success"
        style="margin-bottom: 0.5%; float: right"
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
          <el-button type="primary" size="small" @click="checkRecord(row.ID)">{{
            row.RegisterRecord
          }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        label="Actions"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row }">
          <el-button type="primary" size="mini" @click="handleModifyLimit(row)">
            Red Limit
          </el-button>
          <el-button size="mini" type="danger" @click="handleBan(row)">
            Ban
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 1%">
      Cumulative query content : {{ endDateValue }}
    </div>
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
import router from '@/router'
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
      startDateValue: '',
      endDateValue: ''
    }
  },
  methods: {
    checkRecord(id) {
      const userId = id
      router.push({ name: 'LoginRecord', params: { id: userId }})
    }
  }
}
</script>
<style lang=""></style>
