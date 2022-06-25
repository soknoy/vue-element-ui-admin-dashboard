<template>
  <div style="margin: 0.5%">
    <div style="margin: 1%">
      <b>建桌配置</b>
    </div>
    <el-row :gutter="20" style="margin: 1%">
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="建桌低消配置: ">
            <el-input v-model="startDate" style="margin-left: 5%" />
          </el-form-item>
          <el-button
            type="primary"
            size="small"
            style="margin: 0.1% 0% 0% 0.5%"
          >Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="建桌单注配置：">
            <el-input v-model="startDate" />
          </el-form-item>
          <el-button type="primary" size="small">Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="系统公庄赔付上限：">
            <el-input v-model="startDate" />
          </el-form-item>
          <el-button type="primary" size="small">Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="建桌时长配置：">
            <el-input v-model="startDate" style="margin-left: 15%" />
          </el-form-item>
          <el-button
            type="primary"
            size="small"
            style="margin-left: 1.75%"
          >Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="建桌系统抽水配置：">
            <el-input v-model="startDate" />
          </el-form-item>
          <el-button type="primary" size="small">Submit</el-button>
        </el-form>
      </el-col>
      <el-col>
        <el-form :inline="true" class="demo-form-inline" style="margin-top: 1%">
          <el-form-item label="建桌桌主抽水配置：">
            <el-input v-model="startDate" />
          </el-form-item>
          <el-button type="primary" size="small">Submit</el-button>
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
