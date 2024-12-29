<template>
    <Layout>
        <template #doc-top>
            <!-- <button @click="copyRawFile" title="Copy raw file">raw</button> -->
            <!-- <pre>{{ notesData[vpData.page.value.title] }}</pre> -->
        </template>
        <!-- <template #doc-bottom>doc-bottom</template> -->
        <template #doc-footer-before>
            <div class="footer-update-time" v-show="!notesmeta.repos_vitepress.includes(vpData.page.value.title)">
                更新于：{{ formatDate(vpData.page.value.lastUpdated) }}
            </div>
        </template>
        <template #doc-before>
            <div class="doc-before-container" v-show="notesmeta.repos_vitepress.includes(vpData.page.value.title)">
                <div class="left-area">
                    <div class="copy-box">
                        <span class="tip" v-show="isCopied">Copied!</span>
                        <button class="copy-raw-file" @click="copyRawFile" title="Copy raw file">
                            <img class="icon" src="./icon__clipboard.svg" alt="icon__clipboard">
                        </button>
                    </div>
                    <div class="github-box">
                        <!-- <a :href="`https://github.com/Tdahuyou/${vpData.page.value.title.toLowerCase()}/blob/main/README.md`"
                            title="to github repo">🔗 github</a> -->
                        <a :href="`https://github.com/Tdahuyou/${vpData.page.value.title.toLowerCase()}/blob/main/README.md`"
                            :aria-label="`Tdahuyou github - ${vpData.page.value.title.toLowerCase()} 笔记仓库链接`"
                            :title="`Tdahuyou github - ${vpData.page.value.title.toLowerCase()} 笔记仓库链接`" target="_blank"
                            rel="noopener">
                            <img src="./icon__github.svg" alt="github icon">
                        </a>
                    </div>
                </div>
                <div class="right-area">
                    <div class="notes-length" title="笔记数量">
                        {{ notesLength }}｜
                    </div>
                    <div class="update-time">
                        更新于：{{ formatDate(vpData.page.value.lastUpdated) }}
                    </div>
                </div>
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
import { data as notesData } from '../../src/notes/notes.data'
import { ref, computed } from 'vue'
import notesmeta from '../../../scripts/.notesmeta.json'

const { Layout } = DefaultTheme
const vpData = useData()
// console.log('notesData:', notesData)
// console.log('vpData:', vpData)

const notesLength = computed(() => notesData[vpData.page.value.title.toLowerCase()]?.notesLength);
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
    const data = notesData[vpData.page.value.title.toLowerCase()].fileContent
    navigator.clipboard.writeText(data.replace('<MyGlobalComponent />', ''))
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 1000);
}
</script>

<style>
.doc-before-container {
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
    justify-content: space-between;
}

.doc-before-container .left-area {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.copy-box {
    width: 1em;
    height: 1em;
    position: relative;
}

.copy-box .tip {
    position: absolute;
    top: -1.5rem;
    left: -1rem;
}

.copy-box .copy-raw-file {
    vertical-align: top;
}

.right-area {
    display: flex;
    align-items: center;

    font-style: italic;
    font-size: .7rem;
}

.update-time {
    vertical-align: middle;
}

.footer-update-time {
    text-align: right;
    font-style: italic;
    font-size: .7rem;
}
</style>