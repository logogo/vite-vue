
<template>
  <div class="title" @click="change">
    {{ title }}
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">
        Primary
      </el-button>
      <el-button type="success">
        Success
      </el-button>
      <el-button type="info">
        Info
      </el-button>
      <el-button type="warning">
        Warning
      </el-button>
      <el-button type="danger">
        Danger
      </el-button>
    </el-row>
  </div>
</template>
<script>
import { reactive, onMounted, defineComponent } from 'vue';
import api from '@/api/index';
export default defineComponent({
    name: 'Child',
    props: {
        title: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            default: () => []
        },
        name: {
            type: String,
            default: ''
        },
        picList: {
            type: Array,
            default: () => []
        }
    },
    emits: ['send'],
    setup(props, { emit }) {
        const state = reactive({
            name: '张三',
            address: {
                city: {
                    cityName: '上海'
                }
            }
        });
        onMounted(() => {
            emit('send', 222);
            api.user.getUser({
                address: state
            }).then(res => {
                console.log(res);
            });
        });
        const change = () => {
            alert('a');
        };
        return {
            change
        };
    }
});
</script>
