<script setup>
import { ref, onMounted, onBeforeUnmount, computed, nextTick } from 'vue'

// ----------------------------------------------------------
// #region - image list
// ----------------------------------------------------------
const imageContainer = ref(null); // 获取图片容器的 DOM 引用
const images = ref([]); // 动态存储图片路径的列表
const isModalVisible = ref(false); // 控制 modal 显示
const currentIndex = ref(0); // 当前预览的图片索引

const currentImage = computed(() => images.value[currentIndex.value]);

const openModal = (index) => {
  currentIndex.value = index;
  isModalVisible.value = true;
};

const closeModal = () => isModalVisible.value = false

const handleKeyDown = (event) => {
  // 仅在 modal 打开时响应键盘事件
  if (!isModalVisible.value) return;

  switch (event.key) {
    // 左箭头
    case 'ArrowLeft':
      if (currentIndex.value > 0) currentIndex.value -= 1;
      break;
    // 右箭头
    case 'ArrowRight':
      if (currentIndex.value < images.value.length - 1) currentIndex.value += 1;
      break;
    // ESC
    case 'Escape':
      closeModal();
      break;
  }
};

onMounted(() => {
  const imgElements = imageContainer.value.querySelectorAll('img');
  images.value = Array.from(imgElements).map((img) => img.src);

  window.addEventListener('keydown', handleKeyDown);
});

onBeforeUnmount(() => window.removeEventListener('keydown', handleKeyDown));
// ----------------------------------------------------------
// #endregion - image list
// ----------------------------------------------------------


// ----------------------------------------------------------
// #region - text area
// ----------------------------------------------------------
const textContainer = ref(null); // 文本容器的 DOM 引用
const isCollapsed = ref(true); // 控制文本是否折叠
const isExpandable = ref(false); // 是否需要显示“全文”按钮

// 计算文本高度并判断是否需要“全文”按钮
const checkTextHeight = () => {
  if (textContainer.value) {
    const maxHeight = parseFloat(getComputedStyle(textContainer.value).lineHeight) * 6;
    // console.log(textContainer.value.scrollHeight, maxHeight);
    isExpandable.value = textContainer.value.scrollHeight > maxHeight; // 如果内容高度超出 6rem，则可以展开
  }
};

// 切换折叠/展开状态
const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
};

onMounted(() => {
  nextTick(checkTextHeight); // 在 DOM 渲染后计算文本高度
});
// ----------------------------------------------------------
// #endregion - text area
// ----------------------------------------------------------
</script>

<template>

  <div class="__dynamic__text-container">
    <div class="__dynamic__text-content" ref="textContainer" :class="{ collapsed: isCollapsed }">
      <slot name="text-area"></slot>
    </div>
    <button v-if="isExpandable" class="__dynamic__toggle-button" @click="toggleCollapse">
      {{ isCollapsed ? '全文' : '收起' }}
    </button>
  </div>


  <div class="__dynamic__image-container" ref="imageContainer">
    <slot name="image-list" :openModal="openModal" :closeModal="closeModal" :currentImage="currentImage"
      :isModalVisible="isModalVisible"></slot>
  </div>

  <div class="__dynamic__time-container">
    <slot name="time"></slot>
  </div>

  <div class="__dynamic__modal" v-show="isModalVisible" @click.self="closeModal">
    <span class="__dynamic__close" @click="closeModal">&times;</span>
    <img class="__dynamic__modal-content" :src="currentImage" alt="Preview" />
  </div>

  <slot></slot>
</template>

<style>
.__dynamic__time-container {
  font-size: .6rem;
  color: gray;
}

.__dynamic__text-container {
  position: relative;
  margin-bottom: 1rem;
}

.__dynamic__text-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.__dynamic__text-content.collapsed {
  /* 折叠状态的最大高度 */
  max-height: 6rem;
}

.__dynamic__toggle-button {
  display: block;
  margin-top: 0.5rem;
  background-color: transparent;
  color: #007bff;
  border: none;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
}

.__dynamic__toggle-button:hover {
  text-decoration: underline;
}

.__dynamic__image-container {
  display: flex;
  /* justify-content: space-between; */
  width: 100%;
  flex-wrap: wrap;
}

.__dynamic__image-container img {
  width: calc(33.33% - 10px);
  aspect-ratio: 1; /* 设置宽高比为 1:1 */
  object-fit: cover;
  cursor: pointer;
  margin: .3rem;
}

/* .__dynamic__image-container img:nth-child(2 + 3n) {
  margin: 0 1rem;
} */

.__dynamic__modal {
  display: flex;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.8);
  align-items: center;
  justify-content: center;
}

.__dynamic__modal-content {
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 90%;
}

.__dynamic__close {
  position: absolute;
  top: 20px;
  right: 30px;
  color: white;
  font-size: 30px;
  font-weight: bold;
  cursor: pointer;
}
</style>