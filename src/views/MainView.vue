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
            background: '#4cd099',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          class="new-project"
          ><el-tooltip effect="dark" content="New Project" placement="top">
            <el-icon :size="50"><FolderAdd /></el-icon>
          </el-tooltip>
          <div class="card-right hidden-xs-only">
            <p>New Project</p>
            <small>Start a new empty project.</small>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            background: '#409eff',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          class="import-project"
          ><el-tooltip effect="dark" content="Import Project" placement="top">
            <el-icon :size="50"><DocumentCopy /></el-icon>
          </el-tooltip>
          <div class="card-right hidden-xs-only">
            <p>Import Project</p>
            <small
              >Import all the files from another version control system.</small
            >
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            background: '#626aef',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          class="project-overview"
        >
          <el-tooltip effect="dark" content="Project Overview" placement="top">
            <el-icon :size="50"><Files /></el-icon>
          </el-tooltip>
          <div class="card-right hidden-xs-only">
            <p>Project Overview</p>
            <small>See the summary of projects.</small><br />
            <div class="project-count">
              All Project
              <el-tag effect="dark" round type="warning" color="#f89822">{{
                tableData.length
              }}</el-tag>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card
          shadow="hover"
          :body-style="{
            display: 'flex',
            background: '#909399',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 0
          }"
          class="setting"
          ><el-tooltip effect="dark" content="Other Setting" placement="top">
            <el-icon :size="50"><Setting /></el-icon>
          </el-tooltip>
          <div class="card-right hidden-xs-only">
            <p>Other Setting</p>
            <small>The other setting about this web.</small>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="project-table">
      <el-table :data="filterTableData" width="100%" height="100%" size="large" stripe :flexible="true">
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
              <el-icon><Folder /></el-icon>
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
        <el-table-column
          prop="code"
          label="Project Code"
          width="180"
          sortable
          sort-by="code"
        />
        <el-table-column prop="description" label="Description" />
        <el-table-column
          label="Database"
          width="180"
          sortable
          sort-by="database"
        >
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
              v-model="searchKey"
              size="small"
              placeholder="Type to search"
            />
          </template>
          <template #default="scope">
            <el-tooltip effect="dark" content="Setting" placement="top">
              <el-button @click="handleEdit(scope.$index, scope.row)"
                ><el-icon><Operation /></el-icon
              ></el-button>
            </el-tooltip>
            <el-tooltip effect="dark" content="Source Setting" placement="top">
              <el-button @click="handleSourceEdit(scope.$index, scope.row)"
                ><el-icon><Link /></el-icon
              ></el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';

const tableData = [
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: false
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: true
  },
  {
    date: '2016-05-03',
    name: 'CRM',
    code: 'PJ_180',
    database: 'PJ_180',
    description: 'Customer Relationship Management',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: true
  },
  {
    date: '2016-05-02',
    name: 'Test-01',
    code: 'PJ_200',
    database: 'PJ_200',
    description: 'for test',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: true
  },
  {
    date: '2016-05-04',
    name: 'Sale System',
    code: 'PJ_230',
    database: 'PJ_235',
    description: "in use, don't remove",
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: true
  },
  {
    date: '2016-05-01',
    name: 'Accounting System',
    code: 'PJ_231',
    database: 'PJ_250',
    description: 'for accounting',
    dbAccount: 'admin',
    dbPassword: 'speedooo',
    isImport: true
  }
];
const searchKey = ref('');
const filterTableData = computed(() =>
  tableData.filter((data) => {
    const searchKeyWord = searchKey.value && searchKey.value.toLowerCase();
    if (searchKeyWord) {
      for (let key in data) {
        const dataContent =
          typeof data[key] === 'string' && data[key].toLowerCase();
        if (dataContent && dataContent.includes(searchKeyWord)) return true;
      }
    } else {
      return true;
    }
  })
);
function handleEdit(a, b) {
  console.log(a, b);
}
function handleSourceEdit(a, b) {
  console.log(a, b);
}
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
.el-card {
  min-width: 60px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  cursor: pointer;
}
.el-card .el-icon {
  flex: 1;
  height: 100px;
  min-width: 80px;
  color: #fff;
}
.card-right {
  background: #fff;
  padding: 1rem;
  width: 70%;
  height: 100px;
  max-height: 100px;
  overflow-y: auto;
  overflow-x: hidden;
}
.card-right p {
  word-break: break-all;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.project-count {
  margin-top: 0.25rem;
  color: #7c7c7c;
}
.card-right small {
  font-size: 0.8rem;
  color: #7c7c7c;
}
.new-project .el-icon {
  background: #4cd099;
}
.import-project .el-icon {
  background: #409eff;
}
.project-overview .el-icon {
  background: #626aef;
}
.setting .el-icon {
  background: #909399;
}
.el-table {
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
</style>
