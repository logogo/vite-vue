
<template>
  <div>{{ plusOne }}</div>
  <button v-copy @click="count++">
    {{ count }}
  </button>
  <div v-for="(item,key) in list" :key="key">
    {{ item }}
  </div>
  <Child ref="childRef" :title="count" :list="list" :name="name" :pic-list="picList" @send="getNum" />
</template>

<script>
import { defineComponent, ref, reactive, computed, toRefs } from 'vue';

export default defineComponent({
    setup() {
        const count = ref(0);
        const childRef = ref(null);
        const list = reactive([1, 2, 3]);
        const json = reactive({
            name: 'gao',
            picList: [3, 4, 5]
        });
        const getNum = (num) => {
            console.log(num);
        };
        setTimeout(() => {
            count.value = count.value + 1;
            list.push(5);
            json.name = 'li';
            json.picList.push(888888);
        }, 5000);
        const plusOne = computed(() => count.value + 1);
        return {
            childRef,
            count,
            getNum,
            plusOne,
            list,
            ...toRefs(json)
        };
    }
});
</script>
