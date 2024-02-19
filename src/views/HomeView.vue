<template>
  <div class="project">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Project</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          ><el-icon :size="50" style="background: #4cd099"
            ><DocumentAdd
          /></el-icon>
          <div style="margin-right: 1rem">New Project</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          ><el-icon :size="50" style="background: #409eff"
            ><DocumentCopy
          /></el-icon>
          <div style="margin-right: 1rem">Import Project</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          ><el-icon :size="50" style="background: #626aef"
            ><Collection
          /></el-icon>
          <div style="margin-right: 1rem">Project Overview</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          ><el-icon :size="50" style="background: #909399"><Setting /></el-icon>
          <div style="margin-right: 1rem">Settings</div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="project-table">
      <el-table
        :data="tableData"
        style="width: 100%"
        height="100%"
        size="large"
      >
        <el-table-column type="expand">
          <template #default="props">
            <div class="expand-box">
              <p>Project Name: {{ props.row.name }}</p>
              <p>Project Code: {{ props.row.code }}</p>
              <p>Description: {{ props.row.description }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column
          label="Project Name"
          sortable
          width="360"
          sort-by="name"
        >
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon><Document /></el-icon>
              <el-link
                href="javascript:void(0);"
                style="margin-left: 10px"
                type="primary"
                :underline="false"
                >{{ scope.row.name }}</el-link
              >
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="code" label="Project Code" width="180" />
        <el-table-column prop="description" label="Description" />
        <el-table-column label="Database" width="180">
          <template #default="scope">
            <el-popover
              effect="light"
              trigger="hover"
              placement="top"
              width="auto"
            >
              <template #default>
                <div>account: {{ scope.row.dbAccount }}</div>
                <div>password: {{ scope.row.dbPassword }}</div>
              </template>
              <template #reference>
                <el-tag>{{ scope.row.database }}</el-tag>
              </template>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="Operations" fixed="right" width="180">
          <template #header>
            <el-input
              v-model="search"
              size="small"
              placeholder="Type to search"
            />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
              >Edit</el-button
            >
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >Delete</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script setup>
import {
  Document,
  DocumentAdd,
  DocumentCopy,
  Collection,
  Setting
} from '@element-plus/icons-vue';
const tableData = [
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo'
  }
];
</script>
<style scoped>
.el-breadcrumb,
.el-row {
  margin-bottom: 1rem;
}
.project {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.project-table {
  height: 500px;
  flex-grow: 1;
}
.expand-box {
  margin-left: 2rem;
}
.expand-box p {
  margin: 1rem 0.5rem;
}
.el-card .el-icon {
  width: 80px;
  height: 100px;
  color: #fff;
}
</style>
