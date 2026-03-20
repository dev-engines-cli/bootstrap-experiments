<template>
  <h1>{{ message }}</h1>

  <div class="card">
    <button
      type="button"
      @click="count++"
    >
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    message: {
      type: String,
      default: undefined
    }
  },
  data: function () {
    return {
      count: 0
    };
  }
};
</script>
