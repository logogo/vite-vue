
<template>
  <div class="title">
    {{ title }}
    {{ json?.login?.user?.name }}
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
        console.log(json);
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
        return {
            json
        };
    }
});
</script>
