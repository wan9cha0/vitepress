---
layout: page
---

<div class="calendar-container">
    <Card>
        <Calendar v-model:value="value" @panelChange="onPanelChange" />
    </Card>
</div>

<script lang="ts" setup>
import { ref } from 'vue'
import Dayjs  from 'dayjs';
import 'dayjs/locale/zh-cn';
Dayjs.locale('zh-cn');
import { Button, Calendar  , Card} from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const value = ref<Dayjs>();
const onPanelChange = (date) => {
  console.log(date);
};
</script>
<style scoped>
.calendar-container {
    width: 100%;
    height: 100%;
    padding: 20px;
}
</style>
