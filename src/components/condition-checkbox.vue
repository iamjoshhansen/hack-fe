<template>
  <div class="condition-checkbox">
    <div class="label">{{ label }}</div>
    <div class="indicator" :class="val | indicatorClass"></div>
    <div>
      <button class="activation -active" v-if="val" @click="requestChange(false)">Deactivate</button>
      <button class="activation" v-else="val" @click="requestChange(true)">Activate</button>
    </div>
  </div>
</template>

<script>
import socket from '../socket';

export default {
  name: 'condition-checkbox',
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      val: false,
    };
  },
  methods: {
    requestChange(newVal) {
      console.log(`${this.id}: `, newVal);
      socket.emit(`set-condition-${this.id}`, newVal, (success) => {
        if (success) {
          this.val = newVal;
        }
      });
    },
  },
  filters: {
    indicatorClass(isActive) {
      return isActive ? '-active' : '';
    },
  },
  mounted() {
    socket.emit(`get-condition-${this.id}`, (isChecked) => {
      this.val = isChecked;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.condition-checkbox {
  display: flex;
  align-items: center;
  padding: 10px 20px;
}

.label {
  flex-grow: 1;
}

.indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: solid 1px #eee;
  margin: 0 10px;
}

.indicator.-active {
  background-color: #090;
}

.activation {
  width: 32px;
  height: 32px;
  text-indent: -9999px;
  background: #eee;
  border: solid 1px #ccc;
  border-radius: 50%;
}

.activation.-active {
  border-color: #090;
}
</style>
