<template>
  <div style="margin: 0.5%">
    <div style="margin: 1%">
      <b>Live Room</b>
    </div>
    <el-button
      type="primary"
      size="big"
      style="width: 110px; float: right; margin-bottom: 1.5%"
      @click="addDialog = true"
    >
      + New</el-button>
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
      <el-table-column label="Content" prop="Content" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Content }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Creation time" prop="CreatedDate" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.CreatedDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Operate" align="center">
        <template slot-scope="{ row }">
          <el-button
            type="primary"
            size="small"
            style="width: 80px"
            @click="handleEdit(row)"
          >edit</el-button>
        </template>
      </el-table-column>
      <el-table-column label="Open & Close" align="center">
        <template slot-scope="{ row }">
          <el-switch
            v-model="switchOpenClose"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @click="handleSwitch(row)"
          />
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
          Content: 'XXXXXXXXXXX',
          CreatedDate: '2000-1-1 12:00:00'
        }
      ],
      value: '',
      startDateValue: '',
      endDateValue: '',
      switchOpenClose: true,
      editDialog: false,
      addDialog: false,
      selectRow: {},

      editForm: {
        channelName: '',
        channelDescription: '',
        remainQuota: ''
      },
      addForm: {
        channelName: '',
        channelDescription: '',
        remainQuota: ''
      }
    }
  },
  methods: {
    handleSwitch(row) {
      console.log(row)
      this.switchOpenClose = !this.switchOpenClose
      this.selectRow = row
    },
    handleEdit(row) {
      this.editDialog = !this.editDialog
      this.selectRow = row
      console.log(row)
    }
  }
}
</script>
<style lang=""></style>
