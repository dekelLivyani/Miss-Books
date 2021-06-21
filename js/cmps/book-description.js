export default {
    props: ['desc'],
    template: `<section>
      <p>{{descToDisplay}}</p>
      <a href="#" class="read-more" @click="toggleRead">{{readToShow}}</a>
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
        },
        readToShow() {
            return this.isLongText ? 'Read Less...' : 'Read More...'
        }
    }
};