<template>
    <div class="container">
        <div class="columns">
            <div class="column is-3 has-text-centered">
                <figure class="media-left">
                    <p class="image">
                        <img :src="track.album.images[0].url">
                    </p>
                    <p>
                        <a class="button is-primary is-large">
                            <span class="icon" @click="selectTrack"></span>
                        </a>
                    </p>
                </figure>
            </div>
            <div class="column is-8">
                <div class="panel">
                    <div class="panel-heading">
                        <h1 class="title">{{ track.name }}</h1>
                    </div>
                    <div class="panel-block">
                        <article class="media">
                            <div class="media-content">
                                <div class="content">
                                    <ul v-for="(v, k) in track" :key="v.key">
                                        <li>
                                            <strong>{{ k }}:&nbsp;</strong>
                                            <strong>{{ v }}</strong>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <nav class="level">
                                <div class="level-left">
                                    <a class="level-item"></a>
                                </div>
                            </nav>
                        </article>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import trackService from '../services/platzi-music';

// mixins
import trackMixin from '../mixins/track';

export default {
    data() {
        return {
            track: {}
        }
    },
    created() {
        const id = this.$route.params.id
        trackService.getById(id)
            .then(track => {
                this.track = track
            })
    },
    mixins: [
        trackMixin
    ]
}
</script>

<style scoped>
    .columns {
        margin: 20px 0;
    }
</style>