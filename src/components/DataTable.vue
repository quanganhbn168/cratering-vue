<template>
  <div>
    <div class="row mb-3">
      <div class="col-md-6">
        <input v-model="searchTerm" class="form-control" placeholder="Tìm kiếm..." />
      </div>
      <div class="col-md-6 text-end">
        <slot name="toolbar" />
      </div>
    </div>

    <table class="table table-bordered table-hover">
      <thead class="table-light">
        <tr>
          <th v-for="col in columns" :key="col">{{ col }}</th>
          <th v-if="$slots.actions">Hành động</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="filteredRows.length === 0">
          <td :colspan="columns.length + 1" class="text-center text-muted">Không có dữ liệu</td>
        </tr>
        <tr v-for="row in paginatedRows" :key="row.id">
          <td v-for="col in columns" :key="col">{{ row[col] }}</td>
          <td v-if="$slots.actions">
            <slot name="actions" :row="row" />
          </td>
        </tr>
      </tbody>
    </table>

    <div class="d-flex justify-content-between align-items-center mt-3">
      <div>
        Hiển thị {{ startRow + 1 }} – {{ endRow }} / {{ filteredRows.length }}
      </div>
      <div>
        <button class="btn btn-sm btn-outline-secondary me-2" :disabled="page === 1" @click="page--">‹</button>
        <button class="btn btn-sm btn-outline-secondary" :disabled="endRow >= filteredRows.length" @click="page++">›</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  columns: Array,
  rows: Array,
  perPage: { type: Number, default: 5 },
})

const searchTerm = ref('')
const page = ref(1)

const filteredRows = computed(() =>
  props.rows.filter(row =>
    Object.values(row).some(val =>
      String(val).toLowerCase().includes(searchTerm.value.toLowerCase())
    )
  )
)

const startRow = computed(() => (page.value - 1) * props.perPage)
const endRow = computed(() => Math.min(startRow.value + props.perPage, filteredRows.value.length))
const paginatedRows = computed(() => filteredRows.value.slice(startRow.value, endRow.value))

watch(searchTerm, () => {
  page.value = 1
})
</script>