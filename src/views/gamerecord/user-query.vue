<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>User Query</b>
      </div>
      <el-row :gutter="20">
        <el-col>
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Starting time: ">
              <el-time-picker v-model="startDate" />
            </el-form-item>
            <el-form-item label="Ending time: " style="margin-left: 2%">
              <el-time-picker v-model="endDate" />
            </el-form-item>
            <el-form-item label="Search for: " style="margin-left: 2%">
              <el-input
                v-model="input"
                placeholder="Please input"
                clearable
              />
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
      <el-table-column label="Village" prop="Date" align="center">
        <template slot-scope="{ row }">
          <div>XXXXX</div>
          <el-image
            style="width: 100px; height: 100px"
            :src="row.Cover"
            :fit="contain"
          />
          <br>
          <el-button type="primary" size="small">View Win or Lose</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Village" prop="Date" align="center" width="500px">
        <template slot-scope="{ row }">
          <el-row>
            <el-col :span="8"><div>XXXXX</div>
              <el-image
                style="width: 100px; height: 100px"
                :src="row.Cover"
                :fit="contain"
              />
              <br>
              <el-button type="primary" size="small">View Win or Lose</el-button></el-col>
            <el-col :span="8"><div>XXXXX</div>
              <el-image
                style="width: 100px; height: 100px"
                :src="row.Cover"
                :fit="contain"
              />
              <br>
              <el-button type="primary" size="small">View Win or Lose</el-button></el-col>
            <el-col :span="8"><div>XXXXX</div>
              <el-image
                style="width: 100px; height: 100px"
                :src="row.Cover"
                :fit="contain"
              />
              <br>
              <el-button type="primary" size="small">View Win or Lose</el-button></el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column label="Type" prop="Type" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Win or Lose" prop="withdrawalAmount" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.withdrawalAmount }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Table" prop="Table" align="center">
        <template slot-scope="{ row }">
          <div>Table owner: {{ row.Table.tableOwner }}</div>
          <div>Table number: {{ row.Table.tableNumber }}</div>
        </template>
      </el-table-column>
      <el-table-column label="Video" prop="Table" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" size="small" @click="handleCheck(row)">Check</el-button>
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
          Date: '2000-01-01',
          withdrawalAmount: 'XXXXX',
          Table: {
            tableOwner: 'Soknoy',
            tableNumber: 'XX'
          },
          Type: 'Dangzhuang / Bangzhuang / Gongzhuang / Buy leisure',
          Cover: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
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
      value: '',
      input: ''
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
