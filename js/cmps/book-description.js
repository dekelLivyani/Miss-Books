export default {
    props: ['desc'],
    template: `<section>
      <p>{{descToDisplay}}</p>
      <a href="#" class="read-more" v-if="!isLongText" @click="toggleRead">Read More...</a>
       <a href="#" v-else class="read-more" @click="toggleRead">Read less...</a>
</section>
  `,
    data() {
        return {
            isLongText: false
        }
    },
    methods: {
        toggleRead() {
            this.isLongText = !this.isLongText;
        }
    },
    computed: {
        descToDisplay() {
            if (!this.isLongText) return this.desc.substring(0, 100);
            else return this.desc;
        }
    }
};