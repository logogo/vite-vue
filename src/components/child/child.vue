
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
import { ref, onMounted, defineComponent, watch } from 'vue';
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
        },
        jsonStore: {
            type: Object,
            default: () => {}
        }
    },
    emits: ['send'],
    setup(props, { emit }) {
        onMounted(() => {
            emit('send', 222);
        });
        // watch(() => props.title, (val) => {
        //     console.log(val);
        // }, {
        //     immediate: true
        // });
        // watch(props.list, (val) => {
        //     console.log(val);
        // }, {
        //     immediate: true,
        //     deep: true
        // });
        // watch(() => props.name, (val) => {
        //     console.log(val);
        // }, {
        //     immediate: true,
        //     deep: true
        // });
        // watch(props.picList, (val) => {
        //     console.log(val);
        // }, {
        //     immediate: true,
        //     deep: true
        // });
        // watch(()=>props.jsonStore.value, (val)=>{
        //   console.log(val)
        // })
        const state = ref({
            name: '张三',
            address: {
                city: {
                    cityName: '上海'
                }
            }
        });

        watch(state, (newValue, oldValue) => {
            console.log(newValue, oldValue);
        }, {
            deep: true
        });

        setTimeout(() => {
            state.value = {
                name: '李四',
                address: {
                    city: {
                        cityName: '上海'
                    }
                }
            };
        }, 2000);

        setTimeout(() => {
            state.value.address.city.cityName = '北京';
        }, 1000);

        const change = () => {
            alert('a');
        };
        return {
            change
        };
    }
});
</script>
