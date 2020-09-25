<template>
  <form novalidate>
    <div class="form-group typeahead">
      <select ref="choises">
        <option value="">Select one</option>
      </select>
    </div>
  </form>
</template>

<script>
/* eslint-disable */
import Choices from '../../node_modules/choices.js/public/assets/scripts/choices'

export default {
  name: 'Typeahead',
  props: {
    options: Object
  },
  mounted: function () {
    this.choicesInstance = new Choices(this.$refs.choises)
    this.$refs.choises.addEventListener('addItem', this.handleSelectChange)
    this.setChoices()
  },
  methods: {
    handleSelectChange (e) {
      this.$emit('selected', e.detail)
    },
    setChoices () {
      this.choicesInstance.setChoices(this.options.data, 'code', 'name', true)
    }
  },
  destroyed: function () {
    this.choicesInstance.destroy()
  }
}
</script>

<style lang="scss" scoped>
</style>
