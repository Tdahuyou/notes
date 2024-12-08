<template>
    <Layout>
        <template #doc-top>
            <!-- <button @click="copyRawFile" title="Copy raw file">raw</button> -->
            <!-- <pre>{{ notesData[vpData.page.value.title] }}</pre> -->
        </template>
        <!-- <template #doc-bottom>doc-bottom</template> -->
        <template #doc-footer-before>
            更新于：{{ formatDate(vpData.page.value.lastUpdated) }}
        </template>
        <template #doc-before>
            <div class="copy-box">
                <span class="tip" v-show="isCopied">Copied!</span>
                <button class="copy-raw-file" @click="copyRawFile" title="Copy raw file">raw</button>
            </div>
        </template>
        <!-- <template #doc-after>doc-after</template> -->

        <template #aside-top>
            <!-- aside-top -->
            <!-- {{ vpData.page.value.title }} -->
        </template>
        <template #aside-outline-before>
            <span @click="toTop" style="cursor: pointer;" title="回到顶部">{{ vpData.page.value.title }}</span>
        </template>

        <!-- <template #sidebar-nav-before>sidebar-nav-before</template> -->
        <!-- <template #sidebar-nav-after>sidebar-nav-after</template> -->

        <!-- <template #aside-outline-after>aside-outline-after</template> -->
        <!-- <template #aside-bottom>aside-bottom</template> -->
        <!-- <template #aside-ads-before>aside-ads-before</template> -->
        <!-- <template #aside-ads-after>aside-ads-after</template> -->
        <!-- <template #layout-top>layout-top</template> -->
        <!-- <template #layout-bottom>layout-bottom</template> -->
        <!-- <template #nav-bar-title-before>nav-bar-title-before</template> -->
        <!-- <template #nav-bar-title-after>nav-bar-title-after</template> -->
        <!-- <template #nav-bar-content-before>nav-bar-content-before</template> -->
        <!-- <template #nav-bar-content-after>nav-bar-content-after</template> -->

        <!-- !NOTE 不清楚下面的插槽所对应的位置 -->
        <!-- <template #nav-screen-content-before>nav-screen-content-before</template> -->
        <!-- <template #nav-screen-content-after>nav-screen-content-after</template> -->
    </Layout>
</template>

<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { data as notesData } from '../../src/notes.data'
import { ref } from 'vue'

const { Layout } = DefaultTheme
const vpData = useData()
// console.log('notesData:', notesData)
// console.log('vpData:', vpData)

const isCopied = ref(false)

const formatDate = (timestamp) => {
    const date = new Date(timestamp)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const weekDays = ['日', '一', '二', '三', '四', '五', '六']
    const weekDay = weekDays[date.getDay()]
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')
    const seconds = String(date.getSeconds()).padStart(2, '0')

    const period = hours < 12 ? '上午' : '下午'
    const formattedHours = hours % 12 || 12

    return `${year}-${month}-${day} 周${weekDay} ${period} ${formattedHours}:${minutes}:${seconds}`
}

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const copyRawFile = () => {
    const data = notesData[vpData.page.value.title.toLowerCase()]
    navigator.clipboard.writeText(data.replace('<MyGlobalComponent />', ''))
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 1000);
}


</script>

<style>
.copy-box {
    position: relative;
}

.copy-box .tip {
    position: absolute;
    top: -1.5rem;
    left: 0;
}
</style>