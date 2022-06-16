<template>
  <div style="margin: 0.5%">
    <el-button type="info" style="margin: 1% 0%">Back</el-button>
    <el-card shadow="never">
      <div slot="header">
        <b>Login Record</b>
      </div>
      <div style="margin: 1% 0.1%">Username : {{ value }}</div>
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
      </el-row>
      <el-button type="success" style="margin-top: 1%">Search</el-button>
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
      <el-table-column
        label="RegistrationDate"
        prop="RegistrationDate"
        align="center"
        width="500"
      >
        <template slot-scope="{ row }">
          <span>{{
            row.RegistrationDate | parseTime('{y}-{m}-{d} {h}:{i}')
          }}</span>
        </template>
      </el-table-column>
      <el-table-column label="IP" width="500" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.IP }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Carry" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Carry }}</span>
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
export default {
  data() {
    return {
      tableData: [
        {
          No: '1',
          RegistrationDate: '2000-1-1 12:00:00',
          IP: '111.111.111.111',
          Carry: '999'
        },
        {
          No: '2',
          RegistrationDate: '2000-1-1 12:00:00',
          IP: '111.111.111.111',
          Carry: '999'
        }
      ],
      value: '',
      startDateValue: '',
      endDateValue: ''
    }
  }
}
</script>
<style lang=""></style>
