import { defineStore } from 'pinia';

export const usePreviewStore = defineStore('preview', {
  state: () => {
    return { previewCollapse: false };
  },
  actions: {
    toggleCollapse() {
      this.previewCollapse = !this.previewCollapse;
    }
  }
});
