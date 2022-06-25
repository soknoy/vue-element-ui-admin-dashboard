<template>
  <div style="margin: 0.5%">
    <div style="margin: 1%">
      <b>维护通知</b>
    </div>
    <el-row :gutter="20" style="margin: 1%">
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="标题: ">
            <el-input v-model="title" readonly />
          </el-form-item>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="牌头选项：">
            <el-input v-model="input" type="textarea" readonly />
          </el-form-item>
        </el-form>
        <el-button
          type="primary"
          size="small"
          @click="handleEdit"
        >edit</el-button>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="是否开启：">
            <el-checkbox v-model="checked" disabled border>开启</el-checkbox>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose"
    >
      <el-row :gutter="20" style="margin: 1%">
        <el-col>
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="标题: ">
              <el-input v-model="title" />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col>
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="牌头选项：">
              <el-input v-model="input" type="textarea" />
            </el-form-item>
          </el-form>
          <el-button type="primary" size="small">edit</el-button>
        </el-col>
        <el-col>
          <el-form
            :inline="true"
            class="demo-form-inline"
            style="margin-top: 1%"
          >
            <el-form-item label="是否开启：">
              <el-checkbox v-model="checked">开启</el-checkbox>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button
          type="primary"
          @click="dialogVisible = false"
        >Confirm</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: 'qwertyui',
      checked: true,
      title: 'qwertyuiop',
      dialogVisible: false
    }
  },
  methods: {
    handleSwitch(row) {
      console.log(row)
      this.switchOpenClose = !this.switchOpenClose
      this.selectRow = row
    },
    handleEdit() {
      this.dialogVisible = !this.dialogVisible
    }
  }
}
</script>
<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}
</style>
