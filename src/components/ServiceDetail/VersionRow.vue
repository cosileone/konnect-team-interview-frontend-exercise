<template>
  <tr class="version-row">
    <td class="version-name">
      v{{ version.name }}
    </td>
    <td class="grey-text">
      v{{ version.description }}
    </td>
    <td>HTTP REST</td>
    <td style="display: flex">
      <template v-if="version.developer">
        <AvatarCircle
          :image-source="version.developer.avatar"
          :size="20"
          style="margin-right: 6px;"
        />
        <div>
          <span style="font-weight: 600">{{ version.developer.name }}</span>
          <br>
          <span class="grey-text" style="flex-wrap: nowrap">{{ updatedTimeFormattedString }}</span>
        </div>
      </template>
    </td>
  </tr>
</template>

<script setup lang="ts">
import { Version } from '@/utils/types'
import { ref } from 'vue'
import AvatarCircle from '@/components/Avatars/AvatarCircle.vue'

const props = defineProps<{
  version: Version,
}>()

const version = ref(props.version)

// In place of using package 'date-fns' we can do the simple math ourselves this time
const updatedDate = new Date(version.value.updated_at)
const now = new Date()
const msPerDay = 1000 * 60 * 60 * 24
const timeDeltaInDays = Math.ceil((updatedDate.getTime() - now.getTime()) / msPerDay)

const locale = Intl.NumberFormat().resolvedOptions().locale
const relativeTimeFormat = new Intl.RelativeTimeFormat(locale, {
  style: 'long',
  numeric: 'auto',
})
const updatedTimeFormattedString = relativeTimeFormat.format(timeDeltaInDays, 'day')
</script>

<style scoped lang="scss">
.version-row {
  font-weight: 400;
  font-size: 12px;

  & td {
    padding: 6px 8px 12px 8px;
    border-bottom: 1px solid var(--grey-4);
  }

  &:last-child td {
    border-bottom: none;
  }
}

.version-name {
  font-size: 13px;
  font-weight: 600;
}

.grey-text {
  color: var(--grey-version-row-text);
}
</style>
