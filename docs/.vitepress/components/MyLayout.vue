<template>
    <Layout>
        <template #doc-top>
            <!-- <pre>{{ vscodeNoteDir }}</pre> -->
            <!-- <pre>{{ vpData.page.value.relativePath }}</pre> -->
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
            <div class="doc-before-container">
                <div class="left-area">
                    <div class="vscode-box" v-show="vscodeNoteDir">
                        <a :href="vscodeNoteDir"
                            aria-label="open in vscode" title="open in vscode" target="_blank">
                            <img src="./icon__vscode.svg" alt="open in vscode">
                        </a>
                    </div>
                    <div class="copy-box" v-show="notesmeta.repos_vitepress.includes(vpData.page.value.title)">
                        <span class="tip" v-show="isCopied">Copied!</span>
                        <button class="copy-raw-file" @click="copyRawFile" title="Copy raw file">
                            <!-- <img class="icon" src="./icon__clipboard.svg" alt="icon__clipboard"> -->
                            <img class="icon" src="./m2mm.png" alt="icon__clipboard">
                        </button>
                    </div>
                    <div class="github-box" v-show="notesmeta.repos_vitepress.includes(vpData.page.value.title)">
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
                <div class="right-area" v-show="notesmeta.repos_vitepress.includes(vpData.page.value.title)">
                    <div class="notes-length" title="已完成笔记数量/所有笔记数量">
                        {{ doneNotesLen }}/{{ allNotesLen }}｜
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
            <span @click="toTop" style="cursor: pointer; height: 1em; width: 1em;" title="回到顶部"><img
                    src="./icon__totop.svg" alt="to top"></span>
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
import { useData, useRoute } from 'vitepress'
import { data as notesData } from '../../src/notes/notes.data'
import { ref, computed, onMounted, onBeforeUnmount, watch, nextTick } from 'vue'
import notesmeta from '../../../scripts/.notesmeta.json'

const route = useRoute()

// --------------------------------------------------------------
// #region - swiper
// --------------------------------------------------------------
// doc: https://swiperjs.com/demos

import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const swiperInstance = ref(null)
// window.swiperInstance = swiperInstance

const initSwiper = () => {
    // destroySwiper();
    console.log('initSwiper')
    swiperInstance.value = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        // Keyboard control !无效
        // keyboard: {
        //     enabled: true,
        // },
        // Mousewheel control !无效
        // mousewheel: true,
        loop: true,
        modules: [Navigation, Pagination],
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            // Pagination custom
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + "</span>";
            },
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
}
window.initSwiper = initSwiper

function destroySwiper() {
    // ! unknow error
    if (swiperInstance.value && swiperInstance.value.destroy) {
        try {
            swiperInstance.value.destroy(true, true)
        } catch (error) {
            console.log(error)
        }
    }

    // document.querySelectorAll('.swiper-container').forEach(el => el.remove())
    // swiperInstance.value = null
}

onMounted(() => {
    nextTick(() => {
        initSwiper()
    })
})

onBeforeUnmount(destroySwiper)

watch(
    () => route.path,
    (newPath, oldPath) => {
        if (newPath !== oldPath) {
            nextTick(() => {
                initSwiper()
            })
        }
    }
)

// <!-- Slider main container -->
// <div class="swiper">
//   <!-- Additional required wrapper -->
//   <div class="swiper-wrapper">
//     <!-- Slides -->
//     <div class="swiper-slide">Slide 1</div>
//     <div class="swiper-slide">Slide 2</div>
//     <div class="swiper-slide">Slide 3</div>
//     ...
//   </div>
//   <!-- If we need pagination -->
//   <div class="swiper-pagination"></div>

//   <!-- If we need navigation buttons -->
//   <div class="swiper-button-prev"></div>
//   <div class="swiper-button-next"></div>

//   <!-- If we need scrollbar -->
//   <div class="swiper-scrollbar"></div>
// </div>
// --------------------------------------------------------------
// #endregion - swiper
// --------------------------------------------------------------

const { Layout } = DefaultTheme
const vpData = useData()
// console.log('notesData:', notesData)
// console.log('vpData:', vpData)

const vscodeNoteDir = computed(() => {
    if (!(vpData.page.value.relativePath.startsWith('notes/'))) return ''
    const TNotesDir = localStorage.getItem('TNotesDir')
    const relativePath = vpData.page.value.relativePath.replaceAll('notes/', '').replaceAll('README.md', '')
    const result = TNotesDir ? `vscode://file/${TNotesDir}/${relativePath}` : ''
    return result
});
const allNotesLen = computed(() => notesData[vpData.page.value.title.toLowerCase()]?.allNotesLen);
const doneNotesLen = computed(() => notesData[vpData.page.value.title.toLowerCase()]?.doneNotesLen);
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

    // const period = hours < 12 ? '上午' : '下午'
    // const formattedHours = hours % 12 || 12

    return `${year}年${month}月${day}日 周${weekDay} ${hours}:${minutes}:${seconds}`
    // return `${year}-${month}-${day} 周${weekDay} ${period} ${formattedHours}:${minutes}:${seconds}`
}

const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })
const copyRawFile = () => {
    const noteData = notesData[vpData.page.value.title.toLowerCase()]
    // console.log(notesData, vpData.page.value.title.toLowerCase())
    if (!noteData) return
    let data = notesData[vpData.page.value.title.toLowerCase()].fileContent
    data = data.replace('<MyGlobalComponent />', '')
    navigator.clipboard.writeText(data)
    isCopied.value = true
    setTimeout(() => isCopied.value = false, 1000)

    const targetWindow = window.open('https://tdahuyou.github.io/m2mm/', '_blank')
    setTimeout(() => {
        targetWindow.postMessage({
            senderID: "__TNotes__",
            message: data
        }, '*')
    }, 1000)
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

.vscode-box {
    width: 1em;
    height: 1em;
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

    height: 100%;
    line-height: 100%;
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

/* add some custom styles to set Swiper size */
.swiper-container {
    width: 100%;
    aspect-ratio: 16/9;
    position: relative;
    overflow: hidden;
    margin: 1rem 0;
}

.swiper-container img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.swiper-container .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    text-align: center;
    line-height: 20px;
    font-size: 12px;
    color: #fff;
    opacity: .2;
    background: rgba(0, 0, 0, 0.2);
}

.swiper-container .swiper-pagination-bullet:hover {
    opacity: .8;
}

.swiper-container .swiper-pagination-bullet-active {
    color: #fff;
    background: var(--vp-c-brand-1);
    opacity: .8;
}

.swiper-container .swiper-button-prev:after,
.swiper-container .swiper-button-next:after {
    font-size: 1.5rem;
}

.swiper-container .swiper-button-prev,
.swiper-container .swiper-button-next {
    transition: all .3s;
    opacity: .5;
}

.swiper-container .swiper-button-prev:hover,
.swiper-container .swiper-button-next:hover {
    transform: scale(1.5);
    opacity: 1;
}
</style>