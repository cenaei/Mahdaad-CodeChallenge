import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const usePrefrencesStore = defineStore('prefrences', () => {
  const theme = ref(localStorage.getItem('theme') || 'light')
  const fontSize = ref(localStorage.getItem('fontSize') || 'meduim')

  // const doubleCount = computed(() => count.value * 2)

  function setTheme(newTheme) {
    theme.value = newTheme
    localStorage.setItem('theme', newTheme)
  }

  function setFontSize(newFontSize) {
    theme.value = newFontSize
    localStorage.setItem('fontSize', newFontSize)
  }

  return { theme, fontSize, setTheme, setFontSize }
})
