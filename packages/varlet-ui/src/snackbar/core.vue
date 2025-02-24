<template>
  <div class="var-snackbar" :style="{ pointerEvents: isForbidClick ? 'auto' : 'none', zIndex }" v-show="show">
    <div :class="snackbarClass" :style="{ zIndex }">
      <div class="var-snackbar__content" :class="[contentClass]">
        <slot>{{ content }}</slot>
      </div>
      <div class="var-snackbar__action">
        <var-icon v-if="iconName" :name="iconName" />
        <var-loading v-if="type === 'loading'" :type="loadingType" :size="loadingSize" />
        <slot name="action" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, onMounted, computed } from 'vue'
import VarLoading from '../loading'
import VarIcon from '../icon'
import { useZIndex } from '../context/zIndex'
import { props } from './props'
import { useLock } from '../context/lock'
import { SNACKBAR_TYPE } from './index'
import type { Ref, ComputedRef } from 'vue'
import type { SnackbarType } from './index'

const ICON_TYPE_DICT: Record<SnackbarType, string> = {
  success: 'checkbox-marked-circle',
  warning: 'warning',
  info: 'information',
  error: 'error',
  loading: '',
}

export default defineComponent({
  name: 'VarSnackbarCore',
  components: {
    VarLoading,
    VarIcon,
  },
  props,
  setup(props) {
    const timer: Ref = ref(null)
    const { zIndex } = useZIndex(() => props.show, 1)

    useLock(props, 'show', 'lockScroll')

    const snackbarClass: ComputedRef<string> = computed(() => {
      const { position, vertical, type } = props

      const baseClass = `var-snackbar__wrapper var-snackbar__wrapper-${position} var-elevation--4`
      const verticalClass = vertical ? ' var-snackbar__vertical' : ''
      const typeClass = type && SNACKBAR_TYPE.includes(type) ? ` var-snackbar__wrapper-${type}` : ''

      return `${baseClass}${verticalClass}${typeClass}`
    })

    const isForbidClick: ComputedRef<boolean> = computed(() => props.type === 'loading' || props.forbidClick)

    const iconName: ComputedRef<string> = computed(() => {
      if (!props.type) return ''

      return ICON_TYPE_DICT[props.type]
    })

    const updateAfterDuration = () => {
      timer.value = setTimeout(() => {
        props.type !== 'loading' && props['onUpdate:show']?.(false)
      }, props.duration)
    }

    watch(
      () => props.show,
      (show) => {
        if (show) {
          props.onOpen?.()
          updateAfterDuration()
        } else if (show === false) {
          clearTimeout(timer.value)
          props.onClose?.()
        }
      }
    )

    watch(
      () => props._update,
      () => {
        clearTimeout(timer.value)
        updateAfterDuration()
      }
    )

    onMounted(() => {
      if (props.show) {
        props.onOpen?.()
        updateAfterDuration()
      }
    })

    return {
      zIndex,
      snackbarClass,
      iconName,
      isForbidClick,
    }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import '../styles/elevation';
@import '../loading/loading';
@import '../button/button';
@import '../icon/icon';
@import './snackbar';
</style>
