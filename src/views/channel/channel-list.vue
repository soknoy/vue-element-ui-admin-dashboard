<template>
  <div style="margin: 0.5%">
    <div style="margin: 1%">
      <b>Login Record</b>
    </div>
    <el-button
      type="primary"
      size="big"
      style="width: 110px"
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
        label="Channel Name"
        prop="ChannelName"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.ChannelName }}</span>
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
        label="Channel Description"
        prop="ChannelDescription"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.ChannelDescription }}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="Date Created"
        prop="CreatedDate"
        align="center"
        width="140"
      >
        <template slot-scope="{ row }">
          <span>{{ row.CreatedDate | parseTime('{y}-{m}-{d} {h}:{i}') }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Founder" prop="Founder" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.Founder }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Total Amount" prop="TotalAmout" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.TotalAmout }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Remaining Quota" align="center">
        <template slot-scope="{ row }">
          <span>{{ row.RemainingQuota }}</span>
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
    <el-dialog title="Add channel" :visible.sync="addDialog" center width="40%">
      <el-form :model="addForm">
        <el-form-item label="Channel name: " label-width="30%">
          <el-input v-model="addForm.channelName" size="medium" />
        </el-form-item>
        <el-form-item label="Channel description: " label-width="30%">
          <el-input
            v-model="addForm.ChannelDescription"
            type="textarea"
            size="medium"
          />
        </el-form-item>
        <el-form-item label="Channel agency quota: " label-width="30%">
          <el-input v-model="addForm.RemainingQuota" size="medium" />
        </el-form-item>
        <div style="padding-left: 11%">
          <b>Background login: {{ selectRow.BackgroundLogin }}</b>
        </div>
        <div style="padding-left: 11%; margin-top: 4%">
          <b>Background login:
            <el-button type="primary" size="small">reset password</el-button></b>
        </div>
        <div style="padding-left: 11%; margin-top: 3%">
          <b>On:
            <el-switch
              v-model="switchOpenClose"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="margin: 0% 2%"
              @click="handleSwitch(row)"
            /></b>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">Cancel</el-button>
        <el-button type="primary" @click="handleModifyLimit">Create</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="Edit channel"
      :visible.sync="editDialog"
      center
      width="30%"
    >
      <el-form :model="editForm">
        <el-form-item label="Channel name: " label-width="30%">
          <el-input v-model="editForm.channelName" size="medium" />
        </el-form-item>
        <el-form-item label="Channel description: " label-width="30%">
          <el-input
            v-model="editForm.ChannelDescription"
            type="textarea"
            size="medium"
          />
        </el-form-item>
        <el-form-item
          label="Remaining quota of a channel agents: "
          label-width="30%"
        >
          <el-input
            v-model="editForm.RemainingQuota"
            size="medium"
            style="padding-top: 20px"
          />
        </el-form-item>
        <div style="padding-left: 30px">
          <b>Background login: {{ selectRow.BackgroundLogin }}</b>
        </div>
        <div style="padding-left: 30px; margin-top: 2%">
          <b>Background login:
            <el-button type="primary" size="small">reset password</el-button></b>
        </div>
        <div style="padding-left: 130px; margin-top: 3%">
          <b>On:
            <el-switch
              v-model="switchOpenClose"
              active-color="#13ce66"
              inactive-color="#ff4949"
              style="margin: 0% 2%"
              @click="handleSwitch(row)"
            /></b>
        </div>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">Cancel</el-button>
        <el-button type="primary" @click="handleModifyLimit">Submit</el-button>
      </span>
    </el-dialog>
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
          ChannelName: 'XXXX',
          ChannelID: '100001',
          ChannelDescription: 'XXXX',
          CreatedDate: '2000-1-1 12:00:00',
          Founder: 'Zhang San',
          TotalAmout: 'XXXX',
          RemainingQuota: 'XXXX',
          BackgroundLogin: 'XXX'
        },
        {
          No: '2',
          ChannelName: 'XXXX',
          ChannelID: '100002',
          ChannelDescription: 'XXXX',
          CreatedDate: '2000-1-1 12:00:00',
          Founder: 'Li Si',
          TotalAmout: 'XXXX',
          RemainingQuota: 'XXXX',
          BackgroundLogin: 'XXX'
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
