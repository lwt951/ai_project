<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="User Name">
      <el-col :span="5">
        <el-input v-model="form.name" />
      </el-col>
    </el-form-item>
    <el-form-item label="Leave Date">
      <el-col :span="5">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Leave Time">
      <el-col :span="4">
        <el-time-select
          start="08:30"
          step="00:30"
          end="18:00"
          v-model="form.time1"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="1" style="text-align: center">
        <span>-</span>
      </el-col>
      <el-col :span="4">
        <el-time-select
          start="08:30"
          step="00:30"
          end="18:00"
          v-model="form.time2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>
    <el-form-item label="Leave type">
      <el-radio-group v-model="form.type">
        <el-radio label="Personal Leave " name="type" />
        <el-radio label="Sick Leave" name="type" />
        <el-radio label="Official Leave" name="type" />
        <el-radio label="Annual Leave" name="type" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="Reason">
      <el-col :span="6">
        <el-input v-model="form.reason" type="textarea" />
      </el-col>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Submit</el-button>
      <el-button type="danger">Cancel</el-button>
    </el-form-item>
  </el-form>
</template>
<script setup>
import { ref } from 'vue';
const form = ref({});
</script>
