const trackMixin = {
    methods: {
        selectTrack() {
            if(!this.track.preview_url) return
            this.$store.commit('setTrack', this.track) // Mutation
        }
    }
}

export default trackMixin;