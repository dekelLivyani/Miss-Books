import { eventBus } from "../services/event-bus-service.js";

export default {
    template: `
   <header class="app-header">
      <div class="logo">
         <h1>Miss Books</h1>
      </div>
      <nav>
         <router-link to="/"> Home </router-link> 
         <router-link to="/book">Our Books </router-link> 
         <router-link to="/about"> About </router-link>
      </nav>
      <button class="btn-menu" @click="openMenu">☰</button>
   </header>
   `,
    methods: {
        openMenu() {
            eventBus.$emit('openMenu')
        }
    }
};