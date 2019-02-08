<template>
    <v-container>
        <v-layout column>
            <v-flex>
                <v-img 
                height="300"
                width="80%"
                :src="dogProp.url">
                </v-img>
            </v-flex>
            <v-flex>
                <h3>{{dogProp.comment}}</h3>
                <p>{{dogProp.info}}</p>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import firebase from '../configFirebase.js'

export default {
    props: {
        dogProp: {
            type: Object,
        }
    },
    data() {
        return {
            dog: undefined
        }
    },
    mounted() {
        if(!!this.dogProp) {
            this.dog = this.dogProp
        } else {
            const id = this.$route.params.id
            firebase.db.doc(`dogs/${id}`).get().then((doc) => {
                if (dog.exists) {
                    this.dog = doc.data();
                }else{
                    console.log("No such Document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error)
            });
        }
    }
}
</script>

