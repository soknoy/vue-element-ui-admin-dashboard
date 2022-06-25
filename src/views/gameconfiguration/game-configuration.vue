<template>
  <div style="margin: 0.5%">
    <div style="margin: 1%">
      <b>游戏基本配置</b>
    </div>
    <el-row :gutter="20" style="margin: 1%">
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="游戏桌下注选项: ">
            <el-input v-model="startDate" />
          </el-form-item>
          <span>倍</span>
          <el-button
            type="primary"
            size="small"
            style="margin: 0.1% 0% 0% 0.5%"
          >Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="牌头选项：">
            <el-input v-model="startDate" />
          </el-form-item>
          <el-button type="primary" size="small">Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 5%">
          <el-form-item label="游戏倒计时：" />
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="下注倒计时：">
            <el-input v-model="startDate" />
          </el-form-item>
          <span>S</span>
          <el-button
            type="primary"
            size="small"
            style="margin-left: 1%"
          >Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="选择牌头时间：">
            <el-input v-model="startDate" />
          </el-form-item>
          <span>S</span>
          <el-button
            type="primary"
            size="small"
            style="margin-left: 1%"
          >Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="选择打骰时间：">
            <el-input v-model="startDate" />
          </el-form-item>
          <span>S</span>
          <el-button
            type="primary"
            size="small"
            style="margin-left: 1%"
          >Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="选择开牌时间：">
            <el-input v-model="startDate" />
          </el-form-item>
          <span>S</span>
          <el-button
            type="primary"
            size="small"
            style="margin-left: 1%"
          >Submit</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {}
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
<style>
.demo-input-label {
  display: inline-block;
  width: 130px;
}
</style>
