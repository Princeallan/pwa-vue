<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <v-img 
                height="300"
                width="80%"
                :src="dog.url">
                </v-img>
            </v-flex>
            <v-flex>
                <h3>{{dog.comment}}</h3>
                <p>{{dog.info}}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props: {
        dog: {
            type:Object,
            required: true
        }
    }
}
</script>

