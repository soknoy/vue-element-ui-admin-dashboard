<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>Channel Quota Statistics Record</b>
      </div>
      <el-row :gutter="20">
        <el-col :span="5">
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
        <el-col :span="5">
          <span class="demonstration" style="margin: 0.5%">End time :</span>
          <el-date-picker
            v-model="endDateValue"
            type="datetime"
            placeholder="Select date and time"
            style="margin-left: 5%"
          />
        </el-col>
        <el-col :span="5">
          <span>Choose Channel : </span>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="5">
          <span>Choose Room : </span>
          <el-select v-model="value" placeholder="Select">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="5" style="margin-top: 1.5%">
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Search for : ">
              <el-input
                v-model="input"
                placeholder="Please input"
                clearable
                prefix-icon="el-icon-search"
              />
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-button
        type="success"
        style="float: right; margin: 0% 0% 1.5% 0%"
      >Search</el-button>
    </el-card>
    <el-button type="primary" size="big" style="margin: 1% 1.5%; float: right" @click="handleCreateTable()">+ Create Table</el-button>
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
      <el-table-column label="Room" prop="Room" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Room }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Channel" prop="ChannelID" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.ChannelID }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Table Owner" prop="TableOwner" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.TableOwner }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Starting Time" prop="DateStart" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.DateStart }}</span>
        </template>
      </el-table-column>
      <el-table-column label="End Time" prop="DateEnd" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.DateEnd }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Cumulative Time" prop="CumulativeTime" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.CumulativeTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Type" prop="Type" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Type }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Total" prop="Total" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Total }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Details" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" size="small" @click="handleCheckDetails(row)">Check the detials</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Video" align="center">
        <template slot-scope="{ row }">
          <el-button type="primary" size="small" @click="handleCheckVideo(row)">Check</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Delete" align="center">
        <template slot-scope="{ row }">
          <el-button type="danger" size="small" @click="handleDelete(row)">Delete</el-button>
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
import router from '@/router'
export default {
  data() {
    return {
      tableData: [
        {
          No: '1',
          Room: 'XXX',
          ChannelID: 'XXX',
          TableOwner: 'Soknoy',
          DateStart: '2000-1-1 12:00:00',
          DateEnd: '2000-1-1 12:00:00',
          CumulativeTime: 'X days X hours X minutes',
          Total: 'XXXX',
          Type: 'Cash'
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
    handleCheckDetails(row) {
      console.log(row)
      router.push({ name: 'DetailsTableRecord', params: { id: row.No }})
    },
    handleDelete(row) {
      console.log(row)
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
