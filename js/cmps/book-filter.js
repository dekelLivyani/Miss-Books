export default {
    template: `<section class="book-filter">
       <label for="search-name" >Search By Name:</label> 
       <input id="search-name" v-model="filterBy.name" @input="filter" type="text" placeholder="search...">  |
       <label for="search-from" >Search By Price:</label> 
       <input id="search-from" v-model.number="filterBy.from" @input="filter" type="number" placeholder="from...">
       <input id="search-until" v-model.number="filterBy.until" @input="filter" type="number" placeholder="until...">
      </section>
   `,
    data() {
        return {
            filterBy: {
                name: null,
                from: null,
                until: null,
            }
        };
    },
    methods: {
        filter() {
            this.$emit('filtered', this.filterBy);
        }
    }
};