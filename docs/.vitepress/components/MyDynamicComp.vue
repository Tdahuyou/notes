<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';

const imageContainer = ref(null); // 获取图片容器的 DOM 引用
const images = ref([]); // 动态存储图片路径的列表
const isModalVisible = ref(false); // 控制 modal 显示
const currentIndex = ref(0); // 当前预览的图片索引

// 获取当前图片路径
const currentImage = computed(() => images.value[currentIndex.value]);

// 打开 modal 的方法
const openModal = (index) => {
  currentIndex.value = index; // 设置当前图片索引
  isModalVisible.value = true; // 显示 modal
};

// 关闭 modal 的方法
const closeModal = () => {
  isModalVisible.value = false; // 隐藏 modal
};

// 键盘事件处理函数
const handleKeyDown = (event) => {
  if (!isModalVisible.value) return; // 仅在 modal 打开时响应键盘事件

  switch (event.key) {
    case 'ArrowLeft': // 左箭头
      if (currentIndex.value > 0) currentIndex.value -= 1;
      break;
    case 'ArrowRight': // 右箭头
      if (currentIndex.value < images.value.length - 1) currentIndex.value += 1;
      break;
    case 'Escape': // ESC
      closeModal();
      break;
  }
};

// 在组件挂载时动态读取模板中的图片路径
onMounted(() => {
  const imgElements = imageContainer.value.querySelectorAll('img');
  images.value = Array.from(imgElements).map((img) => img.src);

  // 添加键盘事件监听
  window.addEventListener('keydown', handleKeyDown);

  // 动态注入 giscus 评论脚本
  const giscusScript = document.createElement('script');
  giscusScript.src = "https://giscus.app/client.js";
  giscusScript.setAttribute('data-repo', 'Tdahuyou/notes');
  giscusScript.setAttribute('data-repo-id', 'R_kgDONayFGQ');
  giscusScript.setAttribute('data-category', 'Announcements');
  giscusScript.setAttribute('data-category-id', 'DIC_kwDONayFGc4Cl8dM');
  giscusScript.setAttribute('data-mapping', 'pathname');
  giscusScript.setAttribute('data-strict', '0');
  giscusScript.setAttribute('data-reactions-enabled', '1');
  giscusScript.setAttribute('data-emit-metadata', '0');
  giscusScript.setAttribute('data-input-position', 'bottom');
  giscusScript.setAttribute('data-theme', 'preferred_color_scheme');
  giscusScript.setAttribute('data-lang', 'zh-CN');
  giscusScript.setAttribute('data-loading', 'lazy');
  giscusScript.setAttribute('crossorigin', 'anonymous');
  giscusScript.async = true;

  // 确保脚本仅注入一次
  if (!document.getElementById('giscus-script')) {
    giscusScript.id = 'giscus-script';
    document.getElementById('giscus-comments').appendChild(giscusScript);
  }
});

onBeforeUnmount(() => {
  window.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <!-- 插槽绑定状态和方法 -->
  <div class="__dynamic__image-container" ref="imageContainer">
    <slot
      name="image-list"
      :openModal="openModal"
      :closeModal="closeModal"
      :currentImage="currentImage"
      :isModalVisible="isModalVisible"
    >
    </slot>
  </div>

  <!-- 模态框 -->
  <div class="__dynamic__modal" v-show="isModalVisible" @click.self="closeModal">
    <span class="__dynamic__close" @click="closeModal">&times;</span>
    <img class="__dynamic__modal-content" :src="currentImage" alt="Preview" />
  </div>
</template>

<style>
/* 图片容器样式 */
.__dynamic__image-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.__dynamic__image-container img {
  width: calc(33.33% - 10px);
  object-fit: cover;
  margin: 0 5px;
  cursor: pointer;
  /* 鼠标指针改为点击样式 */
}

.__dynamic__image-container img:first-child {
  margin-left: 0;
}

.__dynamic__image-container img:last-child {
  margin-right: 0;
}

/* Modal 样式 */
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
  /* 图片最大宽度 */
  max-height: 90%;
  /* 图片最大高度 */
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