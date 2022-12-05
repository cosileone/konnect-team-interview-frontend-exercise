<template>
  <li class="service">
    <div class="service-content">
      <div class="service-header">
        <div style="display: flex; align-items: center">
          <div v-if="service.published" class="service-status-text">
            <Checkmark />
            Published to portal
          </div>
        </div>
        <KPill v-if="service.versions.length > 1" :style="{ justifySelf: 'flex-end'}">{{ versionsString }}</KPill>
      </div>
      <p class="service-name">
        {{ service.name }}
      </p>
      <p class="service-description">{{ service.description }}</p>
      <div class="card-footer">
        <MetricsList v-if="service.metrics" :metrics="service.metrics" />
        <template v-else>
          • Not configured with runtime yet
        </template>
        <AvatarStack v-if="service.versions.length > 0 && service.published">
          +{{ service.versions.length }}
        </AvatarStack>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { Service } from '@/utils/types'
import MetricsList from '@/components/MetricsList/MetricsList.vue'
import AvatarStack from '@/components/Avatars/AvatarStack.vue'
import KPill from '@/components/KPill/KPill.vue'
import Checkmark from '@/components/Icons/Checkmark.vue'

export default defineComponent({
  name: 'ServiceCard',
  props: {
    service: {
      type: Object as PropType<Service>,
      required: true,
    },
  },
  components: {
    Checkmark,
    KPill,
    AvatarStack,
    MetricsList,
  },
  computed: {
    versionsString() {
      const numVersions = this.service.versions.length
      return `${numVersions} version${numVersions > 1 ? 's' : ''}`
    },
  },
})
</script>

<style lang="scss" scoped>
.service {
  cursor: pointer;
  background: #FFFFFF;
  border-radius: 2px;
  width: 425px;
  padding: 20px 20px 20px 28px;

  &-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &-header {
    display: flex;
    justify-content: space-between;
    align-content: center;
  }

  &-status-text {
    font-size: 12px;
    font-weight: 400;
    color: var(--grey-0);
    opacity: 0.7;
  }

  &-name {
    font-size: 20px;
    font-weight: 600;
    color: var(--grey-0);
  }

  &-description {
    font-size: 13px;
    font-weight: 400;
    color: var(--grey-1);
  }
}

.card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  justify-self: flex-end;
}
</style>
