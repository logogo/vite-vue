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
        onMounted(()=>{
            console.log(data);
            setTimeout(()=>{
                Object.assign(data, {
                    name: '444444444',
                    sex: 'femal'
                });
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