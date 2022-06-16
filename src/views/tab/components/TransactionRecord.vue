<template>
  <div>
    <el-card shadow="never">
      <div slot="header">
        <b>Search Controll</b>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">
          <span style="margin: 0.1%">Time limit</span>
          <br>
          <el-date-picker
            v-model="datepicker"
            type="datetimerange"
            :picker-options="pickerOptions"
            range-separator="To"
            start-placeholder="Start date"
            end-placeholder="End date"
            align="right"
          />
        </el-col>
        <el-col :span="8">
          <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >Check all</el-checkbox>
          <div style="margin: 15px 0" />
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :key="city" :label="city">{{
              city
            }}</el-checkbox>
          </el-checkbox-group>
        </el-col>
        <el-col :span="8">
          <el-checkbox
            v-model="checkAll"
            :indeterminate="isIndeterminate"
            @change="handleCheckAllChange"
          >Check all</el-checkbox>
          <div style="margin: 15px 0" />
          <el-checkbox-group
            v-model="checkedCities"
            @change="handleCheckedCitiesChange"
          >
            <el-checkbox v-for="city in cities" :key="city" :label="city">{{
              city
            }}</el-checkbox>
          </el-checkbox-group>
        </el-col>
      </el-row>
      <el-button type="success" style="margin-top: 1%">Search</el-button>
      <el-button type="info" style="margin-top: 1%">Reset</el-button>
    </el-card>
    <el-table :data="tableData" style="width: 100%; margin-top: 1%" border>
      <el-table-column prop="date" label="Date" width="180" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="address" label="Address" />
    </el-table>
  </div>
</template>

<script>
const cityOptions = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['Shanghai', 'Beijing'],
      cities: cityOptions,
      isIndeterminate: true,
      datepicker: '',
      tableData: [
        {
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        },
        {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }
      ]
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
<style></style>
