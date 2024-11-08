<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

enum BUTTON_TYPE {
  SAVE = 'SAVE',
  DELETE = 'DELETE'
}

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  buttonType: {
    type: String as () => BUTTON_TYPE,
    default: BUTTON_TYPE.SAVE 
  }
})

const emit = defineEmits(['save', 'delete'])

const onClick = () => {
  if (props.buttonType === BUTTON_TYPE.SAVE) {
    emit('save')
  }
  if (props.buttonType === BUTTON_TYPE.DELETE) {
    emit('delete')
  } 
}

</script>

<template>
  <button 
    :class="[props.buttonType === BUTTON_TYPE.SAVE ? 'bg-red-500 text-white font-bold' : '']"
    @click=onClick
    >
    {{ props.text }}
  </button>
</template>
