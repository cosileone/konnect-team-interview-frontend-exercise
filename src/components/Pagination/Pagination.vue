<template>
  <div class="pagination">
    <div class="previous">
      <slot
        name="prevButton"
        :prev-page="prevPage"
      >
        <button
          class="pagination-button pagination-button-previous"
          :class="{'pagination-button-disabled': modelValue === 0}"
          @click="prevPage"
        >
          &#8592;
        </button>
      </slot>
    </div>
    <div class="pagination-description">
      <slot>
        <span>{{ startIndex }} — {{ endIndex }}</span>
        &nbsp;
        <span class="faded">of {{ totalCount }} {{ collectionName }}</span>
      </slot>
    </div>
    <div class="next">
      <slot
        name="nextButton"
        :next-page="nextPage"
      >
        <button
          class="pagination-button pagination-button-next"
          :class="{'pagination-button-disabled': modelValue === numPages - 1}"
          @click="nextPage"
        >
          &#8594;
        </button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaginationComponent',
  props: {
    modelValue: {
      type: Number,
      required: true,
    },
    pageSize: {
      type: Number,
      required: true,
    },
    totalCount: {
      type: Number,
      default: 0,
    },
    collectionName: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  computed: {
    startIndex() {
      const result = this.modelValue * this.pageSize
      return isNaN(result) ? 0 : result
    },
    endIndex() {
      return Math.min((this.startIndex + this.pageSize), this.totalCount)
    },
    numPages() {
      return Math.ceil(this.totalCount / this.pageSize)
    },
  },
  methods: {
    setPage(pageNum) {
      this.$emit('update:modelValue', pageNum)
    },
    prevPage() {
      if (this.modelValue === 0) {
        return
      }

      const newPage = Math.max(0, this.modelValue - 1)
      this.setPage(newPage)
    },
    nextPage() {
      if (this.modelValue === this.numPages - 1) {
        return
      }
      const newPage = Math.min(this.numPages - 1, this.modelValue + 1)
      this.setPage(newPage)
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: center;

  .pagination-description {
    font-size: 13px;
    font-weight: 600;
    color: var(--grey-0);
    display: flex;
    align-items: center;
    margin: 0 48px;
  }

  &-button {
    background: none;
    border: 1px solid var(--blue-300);
    border-radius: 50%;
    color: var(--blue-arrow);
    cursor: pointer;
    height: 44px;
    width: 44px;

    &-previous {
    }

    &-next {
    }

    &-disabled {
      border: 1px solid #e5e5e5;
      color: rgba(0, 0, 0, 0.25);
      cursor: initial;
    }
  }
}

.faded {
  opacity: 0.7;
}
</style>
