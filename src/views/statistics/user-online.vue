<template>
  <div style="margin: 0.5%">
    <el-card shadow="never">
      <div slot="header">
        <b>User Online</b>
      </div>
      <el-row :gutter="20">
        <el-col>
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="Select date: ">
              <el-date-picker
                v-model="date"
                type="dates"
                placeholder="Pick one or more dates"
              />
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
      <el-table-column
        label="Serial Number"
        prop="No"
        align="center"
        width="120px"
      >
        <template slot-scope="{ row }">
          <span>{{ row.No }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Channel ID"
        prop="ChannelID"
        align="center"
        width="120px"
      >
        <template slot-scope="{ row }">
          <span>{{ row.ChannelID }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" prop="date" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="00:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="01:00" prop="one" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.one }}</span>
        </template>
      </el-table-column>
      <el-table-column label="02:00" prop="two" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.two }}</span>
        </template>
      </el-table-column>
      <el-table-column label="03:00" prop="three" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.three }}</span>
        </template>
      </el-table-column>
      <el-table-column label="04:00" prop="four" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.four }}</span>
        </template>
      </el-table-column>
      <el-table-column label="05:00" prop="five" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.five }}</span>
        </template>
      </el-table-column>
      <el-table-column label="06:00" prop="six" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.six }}</span>
        </template>
      </el-table-column>
      <el-table-column label="07:00" prop="seven" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.seven }}</span>
        </template>
      </el-table-column>
      <el-table-column label="08:00" prop="eight" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.eight }}</span>
        </template>
      </el-table-column>
      <el-table-column label="09:00" prop="nine" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.nine }}</span>
        </template>
      </el-table-column>
      <el-table-column label="10:00" prop="ten" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.ten }}</span>
        </template>
      </el-table-column>
      <el-table-column label="11:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="12:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="13:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="14:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="15:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="16:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="17:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="18:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="19:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="20:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="21:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="22:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>
      <el-table-column label="23:00" prop="zero" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.zero }}</span>
        </template>
      </el-table-column>

      <!-- <template slot-scope="{ row }">
        <el-table-column
          v-for="item in row.items"
          :key="item.time"
          label="time"
          align="center"
        >
          <template slot-scope="{}">
            <span>{{ row.items[0].time }}</span>
          </template>
        </el-table-column>
      </template> -->
    </el-table>
    <div style="margin-top: 1%">Cumulative query content : {{ date }}</div>
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
          date: '2000-1-1',
          zero: 'xxx',
          one: 'xxx',
          two: 'xxx',
          three: 'xxx',
          four: 'xxx',
          five: 'xxx',
          six: 'xxx',
          seven: 'xxx',
          eight: 'xxx',
          nine: 'xxx',
          ten: 'xxx',
          eleven: 'xxx',
          twelve: 'xxx',
          thirdteen: 'xxx',
          forthteen: 'xxx',
          fitteen: 'xxx',
          sixteen: 'xxx',
          seventeen: 'xxx',
          eighteen: 'xxx',
          nineteen: 'xxx',
          twenty: 'xxx',
          twentyone: 'xxx',
          twentytwo: 'xxx',
          twentythree: 'xxx',
          items: [
            {
              time: '00:00',
              userOnline: 'XX'
            },
            {
              time: '01:00',
              userOnline: 'XX'
            },
            {
              time: '02:00',
              userOnline: 'XX'
            },
            {
              time: '03:00',
              userOnline: 'XX'
            },
            {
              time: '04:00',
              userOnline: 'XX'
            },
            {
              time: '05:00',
              userOnline: 'XX'
            },
            {
              time: '06:00',
              userOnline: 'XX'
            },
            {
              time: '07:00',
              userOnline: 'XX'
            },
            {
              time: '08:00',
              userOnline: 'XX'
            },
            {
              time: '09:00',
              userOnline: 'XX'
            },
            {
              time: '10:00',
              userOnline: 'XX'
            },
            {
              time: '11:00',
              userOnline: 'XX'
            },
            {
              time: '12:00',
              userOnline: 'XX'
            },
            {
              time: '13:00',
              userOnline: 'XX'
            },
            {
              time: '14:00',
              userOnline: 'XX'
            },
            {
              time: '15:00',
              userOnline: 'XX'
            },
            {
              time: '16:00',
              userOnline: 'XX'
            },
            {
              time: '17:00',
              userOnline: 'XX'
            },
            {
              time: '18:00',
              userOnline: 'XX'
            },
            {
              time: '19:00',
              userOnline: 'XX'
            },
            {
              time: '20:00',
              userOnline: 'XX'
            },
            {
              time: '21:00',
              userOnline: 'XX'
            },
            {
              time: '22:00',
              userOnline: 'XX'
            },
            {
              time: '23:00',
              userOnline: 'XX'
            }
          ]
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
      date: '',
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
