<template>
    <section class="hero is-success">
        <div class="hero-head">
            <header class="nav">
                <div class="container">
                    <div class="nav-left">
                        <div class="nav-item">
                            <strong>Platzi Music</strong>
                        </div>
                    </div>
                    <div class="nav-right nav-menu">

                    </div>
                </div>
            </header>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1>Platzi Music</h1>
                <h2>Canciones que estan buenisimas</h2>
                <Player></Player>
            </div>
        </div>
    </section>
</template>

<script>
import Player from '../Player';

export default {
    components: {
        Player
    }
}
</script>