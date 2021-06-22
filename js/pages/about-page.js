export default {
    template: `
       <section class="about">
          <h1>Learn About...</h1>
          <div class="links">
             <router-link class="link" to="/about/me"> About Me </router-link> | 
             <router-link class="link" to="/about/us"> About Us </router-link>
             </div>
             
             <router-view></router-view> 
       </section>
   `,
}