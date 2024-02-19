<template>
  <div class="preview">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">Project</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/preview' }"
        >Preview</el-breadcrumb-item
      >
    </el-breadcrumb>
    <el-button class="go-btn" type="success" @click="goToTheWeb"
      >Go to the web</el-button
    >
    <el-row class="preview-container">
      <el-container>
        <PageSidebar :data="menuData" />
        <el-container class="preview-content">
          <PageHeader :data="headData" />
          <el-main id="root"> </el-main>
        </el-container>
      </el-container>
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import PageHeader from '@/components/PageHeader';
import PageSidebar from '@/components/PageSidebar';
const menuConfig = [
  {
    name: 'Time Sheet',
    icon: 'Clock',
    pageConfig: {
      header: {
        name: 'Time Sheet',
        class: ['aa', 'bb', 'cc'],
        buttons: [
          {
            name: 'Search',
            class: ['el-button', 'el-button--primary']
          }
        ]
      },
      panel: [
        {
          name: 'Normal',
          content: {
            list: {
              columns: ['User Name', 'Date', 'Time', 'Type'],
              type: ['name', 'date', 'number', 'string'],
              height: 30
            }
          }
        },
        {
          name: 'Abnormal',
          content: {
            list: {
              columns: ['User Name', 'Date', 'Time', 'Type'],
              type: ['name', 'date', 'number', 'string'],
              height: 30
            }
          }
        },
        {
          name: 'Other',
          content: {
            list: {
              columns: ['User Name', 'Date', 'Time', 'Type'],
              type: ['name', 'date', 'number', 'string'],
              height: 30
            }
          }
        }
      ]
    }
  },
  {
    name: 'Leave Apply',
    icon: 'Edit',
    pageConfig: {
      header: {
        name: 'Leave Apply',
        class: ['aa', 'bb', 'cc'],
        buttons: [
          {
            name: 'Record',
            class: ['el-button', 'el-button--primary'],
            event: function () {
              document
                .querySelectorAll('.preview-container .el-menu-item')[2]
                .click();
            }
          }
        ]
      },
      form: {
        columns: [
          ['User Name', 'input', '50%'],
          ['Leave Data', 'date', '50%'],
          [
            'Leave Time',
            'select',
            '50%',
            [
              { text: '08:30', value: '08:30' },
              { text: '09:00', value: '09:00' },
              { text: '09:30', value: '09:30' },
              { text: '10:00', value: '10:00' },
              { text: '10:30', value: '10:30' },
              { text: '11:00', value: '11:00' },
              { text: '11:30', value: '11:30' },
              { text: '12:00', value: '12:00' },
              { text: '12:30', value: '12:30' },
              { text: '13:00', value: '13:00' },
              { text: '13:30', value: '13:30' },
              { text: '14:00', value: '14:00' },
              { text: '14:30', value: '14:30' },
              { text: '15:00', value: '15:00' },
              { text: '15:30', value: '15:30' },
              { text: '16:00', value: '16:00' },
              { text: '16:30', value: '16:30' },
              { text: '17:00', value: '17:00' },
              { text: '17:30', value: '17:30' },
              { text: '18:00', value: '18:00' }
            ]
          ],
          [
            'To',
            'select',
            '50%',
            [
              { text: '08:30', value: '08:30' },
              { text: '09:00', value: '09:00' },
              { text: '09:30', value: '09:30' },
              { text: '10:00', value: '10:00' },
              { text: '10:30', value: '10:30' },
              { text: '11:00', value: '11:00' },
              { text: '11:30', value: '11:30' },
              { text: '12:00', value: '12:00' },
              { text: '12:30', value: '12:30' },
              { text: '13:00', value: '13:00' },
              { text: '13:30', value: '13:30' },
              { text: '14:00', value: '14:00' },
              { text: '14:30', value: '14:30' },
              { text: '15:00', value: '15:00' },
              { text: '15:30', value: '15:30' },
              { text: '16:00', value: '16:00' },
              { text: '16:30', value: '16:30' },
              { text: '17:00', value: '17:00' },
              { text: '17:30', value: '17:30' },
              { text: '18:00', value: '18:00' }
            ]
          ],
          [
            'Levave Type',
            'radio',
            '100%',
            [
              { text: 'Personal Leave', value: 'Personal Leave' },
              { text: 'Sick Leave', value: 'Sick Leave' },
              { text: 'Official Leave', value: 'Official Leave' },
              { text: 'Annual Leave', value: 'Annual Leave' }
            ]
          ],
          ['Reason', 'textarea', '50%']
        ]
      }
    }
  },
  {
    name: 'Leave Record',
    icon: 'ZoomIn',
    pageConfig: {
      header: {
        name: 'Leave Record',
        class: ['aa', 'bb', 'cc'],
        buttons: [
          {
            name: 'Apply',
            class: ['el-button', 'el-button--primary'],
            event: function () {
              document
                .querySelectorAll('.preview-container .el-menu-item')[1]
                .click();
            }
          }
        ]
      },
      list: {
        columns: ['User Name', 'Date', 'Time', 'Type'],
        type: ['name', 'date', 'number', 'string']
      }
    }
  },
  {
    name: 'Account',
    icon: 'User'
  }
];
const headConfig = { title: 'Leave System' };
const menuData = ref(menuConfig);
const headData = ref(headConfig);
function goToTheWeb() {
  document
    .querySelector('.preview-container')
    .querySelector('.el-container')
    .classList.add('site-mode');
  window.DataTable.tables({ visible: true, api: true }).columns.adjust();
}
</script>
<style scoped>
.el-breadcrumb,
.el-row {
  margin-bottom: 1rem;
}
.preview-container {
  min-height: 83vh;
  padding: 1rem;
  background: #fff;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
}
.preview-content {
  display: block;
  background-color: #f0f2f5;
}
.el-container {
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;
  border-bottom-right-radius: 0.25rem;
}
.site-mode {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
}

.go-btn {
  position: absolute;
  right: 20px;
  top: 80px;
}
</style>
