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
  </div>
</template>
<script>
export default {
}
</script>
<style lang="">

</style>
