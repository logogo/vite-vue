<template>
<div>{{ data.name }}</div>
</template>

<script>
import { defineComponent, onMounted, reactive } from 'vue';
export default defineComponent({
    name: 'ChangVal',
    setup() {
        const data = reactive({
            name: '1111',
            age: 12,
            sex: 'mal'
        });
        const data1 = reactive({
            name: '345345345'
        });
        onMounted(() => {
            console.log(data);
            setTimeout(() => {
                Object.assign(data, data1);
            }, 5000);
        });
        return {
            data
        };
    }
});
</script>

<style scoped>

</style>