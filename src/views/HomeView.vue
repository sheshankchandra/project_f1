<template>
  <div id = "welcome-content-wrapper">
    <div id = "welcome-div-wrapper">
      <span>Till date, there have been</span>
      <span class = "typed">{{ driverCount }}</span>
      <span>in the</span>
      <span>F1 World Championships</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: 'Home',
  setup() {
    const driverCount = ref<number>(0); // To hold the driver count as a string for the typing effect

    // Typing logic
    const typeText = (text: string) => {
      let textLength = 0; // Tracks the current character index
      const typeChar = () => {
        const element = document.getElementById('typed'); // Fetch element dynamically

        if (element && textLength < text.length) {
          const char = text.charAt(textLength++);
          const charNode = document.createTextNode(char);
          element.appendChild(charNode); // Append each character
          setTimeout(typeChar, 1000); // Delay for typing effect
        }
      };

      typeChar(); // Start typing
    };

    // Fetch the driver count and start the typing effect
    onMounted(async () => {
      try {
        const response = await axios.get('https://localhost:7251/api/drivers/count'); // API endpoint
        driverCount.value = response.data; // Store the response count

        // Wait for DOM updates before triggering typing effect
        await nextTick();
        let string = driverCount.value.toString() + ' Drivers';
        typeText(string); // Trigger typing effect with the count
      } catch (error) {
        console.error('There was an error fetching the driver count:', error);
      }
    });

    return {
      driverCount,
    };
  },
});
</script>