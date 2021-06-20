export default {
    props: ['desc'],
    template: `<section>
      <p>{{descToDisplay}}</p>
      <a href="#" class="read-more" v-if="!reedMore" @click="toggleRead">Reed More...</a>
       <a href="#" v-else class="read-more" @click="toggleRead">Reed less...</a>
</section>
  `,
    data() {
        return {
            reedMore: false
        }
    },
    methods: {
        toggleRead() {
            this.reedMore = !this.reedMore;
        }
    },
    computed: {
        descToDisplay() {
            if (!this.reedMore) return this.desc.substring(0, 100);
            else return this.desc;
        }
    }
};