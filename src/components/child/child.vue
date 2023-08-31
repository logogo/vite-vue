
<template>
  <div class="title" @click="change">
    {{ title }}
    {{ json?.login?.user?.name }}
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
import { onMounted, defineComponent, watch } from 'vue';
import { useStore } from 'vuex';
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
        const store = useStore();
        store.dispatch('login/setUserInfo', { name: 'li' });
        const json = store.state;
        onMounted(() => {
            emit('send', 222);
            api.user.getUser().then(res => {
                console.log(res);
            });
        });
        setTimeout(() => {
            store.commit('login/SET_USER', { name: 'gao' });
        }, 4000);
        watch(() => props.title, (val) => {
            console.log(val);
        }, {
            immediate: true
        });
        watch(props.list, (val) => {
            console.log(val);
        }, {
            immediate: true,
            deep: true
        });
        watch(() => props.name, (val) => {
            console.log(val);
        }, {
            immediate: true,
            deep: true
        });
        watch(props.picList, (val) => {
            console.log(val);
        }, {
            immediate: true,
            deep: true
        });
        const change = () => {
            alert('a');
        };
        return {
            change,
            json
        };
    }
});
</script>
