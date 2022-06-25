<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>Income Record</b>
      </div>
      <el-row :gutter="20">
        <el-col :span="8">今日游戏总抽水：XXXX</el-col>
        <el-col :span="8">今日公庄总输赢：XXXX</el-col>
        <el-col :span="8">合计总收入：XXXX</el-col>
        <el-col style="margin-top: 1%">
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Starting time: ">
              <el-date-picker v-model="startDate" />
            </el-form-item>
            <el-form-item label="Channel: " style="margin-left: 2%">
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
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-button
        type="success"
        style="float: right; margin: 0% 0% 1% 0%"
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
        label="Pumping"
        prop="totalLoggedInUser"
        align="center"
      >
        <template slot-scope="{ row }">
          <span>{{ row.totalLoggedInUser }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Gongzhuang" prop="nextDate" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.nextDate }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Total" prop="nextWeek" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.nextWeek }}</span>
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 1%">Cumulative query content : {{ startDate }}</div>
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
          ChannelID: '1',
          totalLoggedInUser: '10000',
          nextDate: 'XXX',
          nextWeek: 'XXX',
          nextMonth: 'XXX',
          Date: '2000-01-01'
        },
        {
          No: '2',
          ChannelID: '1',
          totalLoggedInUser: '10000',
          nextDate: 'XXX',
          nextWeek: 'XXX',
          nextMonth: 'XXX',
          Date: '2000-01-01'
        },
        {
          No: '3',
          ChannelID: '1',
          totalLoggedInUser: '10000',
          nextDate: 'XXX',
          nextWeek: 'XXX',
          nextMonth: 'XXX',
          Date: '2000-01-01'
        },
        {
          No: '4',
          ChannelID: '1',
          totalLoggedInUser: '10000',
          nextDate: 'XXX',
          nextWeek: 'XXX',
          nextMonth: 'XXX',
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
      startDate: '',
      endDate: '',
      value: ''
    }
  },
  methods: {
    onSearch() {
      console.log('done')
    }
  }
}
</script>
<style lang=""></style>
