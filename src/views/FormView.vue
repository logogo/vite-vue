<template>
  <div>
    <el-form
      ref="ruleFormRef"
      :model="formData"
      :rules="rules"
      label-width="120px"
    >
      <el-form-item label="Activity name" prop="name">
        <input v-model="formData.name">
      </el-form-item>
      <el-form-item label="级联" prop="casValue">
        <el-cascader v-model="formData.casValue" :props="loadData" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
    name: 'FormView',
    setup() {
        const ruleFormRef = ref(null);
        const formData = reactive({
            name: '',
            casValue: []
        });
        const validatePass2 = (rule, value, callback)=>{
            console.log(111111);
            callback(new Error('Please input the password again'));
        };
        const rules = reactive({
            name: {
                required: true,
                message: 'Please select Activity zone',
                trigger: 'blur'
            },
            casValue: {
                required: true,
                message: '11111111111',
                trigger: 'blur'
            }
        });
        const loadData = {
            lazy: true,
            lazyLoad(node, resolve) {
                const { level } = node;
                setTimeout(() => {
                    const nodes = Array.from({ length: level + 1 }).map((item) => ({
                        value: 100,
                        label: `Option - 100`,
                        leaf: level >= 2
                    }));
                    resolve(nodes);
                }, 1000);
            }
        };
        const submitForm = ruleFormRef => {
            if (!ruleFormRef) return;
            ruleFormRef.validate((valid) => {
                if (valid) {
                    console.log('submit!');
                } else {
                    console.log('error submit!');
                    return false;
                }
            });
        };
        return {
            ruleFormRef,
            formData,
            rules,
            loadData,
            submitForm
        };
    }
});
</script>
