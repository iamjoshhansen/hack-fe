<template>
  <div class="hello">
    <h2>Lights</h2>
    <ul class="channel-list">
      <li class="channel-list__item">
        <condition-checkbox id="extension_chord_alpha_0" label="Desk Lamp?" />
      </li>
      <li class="channel-list__item">
        <condition-checkbox id="extension_chord_alpha_1" label="Salt Lamp" />
      </li>
      <li class="channel-list__item">
        <condition-checkbox id="extension_chord_alpha_2" label="Christmas Tree" />
      </li>
      <li class="channel-list__item">
        <condition-checkbox id="extension_chord_alpha_3" label="Piano Lights" />
      </li>
    </ul>

    <h2>Blue Box</h2>
    <ul class="channel-list">
      <li class="channel-list__item">
        <condition-checkbox id="bluebox_0" label="1" />
      </li>
      <li class="channel-list__item">
        <condition-checkbox id="bluebox_1" label="2" />
      </li>
      <li class="channel-list__item">
        <condition-checkbox id="bluebox_2" label="3" />
      </li>
      <li class="channel-list__item">
        <condition-checkbox id="bluebox_3" label="4" />
      </li>
    </ul>
  </div>
</template>

<script>
import ConditionCheckbox from './condition-checkbox';

export default {
  name: 'hello',
  components: {
    ConditionCheckbox,
  },
  data() {
    return {
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul.channel-list {
  list-style-type: none;
  padding: 0;
  margin: 0 -20px;
  border-top: solid 1px #ccc;
}

li.channel-list__item {
  padding: 0;
  margin: 0;
  border-bottom: solid 1px #ccc;
}

a {
  color: #35495E;
}
</style>
