<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h3>Typeahead</h3>
      </div>
      <div class="col-12">Selected option {{ selected }}</div>
      <div class="col-12 pt-4">
        <typeahead :options="countries" @selected="onSelectedItem"></typeahead>
      </div>
    </div>
  </div>
</template>

<script>
import TypeaheadVue from '@/components/Typeahead.vue'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      selected: ''
    }
  },
  computed: {
    ...mapState(['countries'])
  },
  created () {
    this.$store.dispatch('loadCountries')
  },
  methods: {
    onSelectedItem (item) {
      this.selected = item.value + ' - ' + item.label
    }
  },
  components: { typeahead: TypeaheadVue }
}
</script>

<style lang="scss" scoped></style>
