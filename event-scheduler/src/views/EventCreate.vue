<template>
    <div>
        <h1>Create an Event</h1>
        <form @submit.prevent="createEvent">
            <label>Select a category</label>
            <select v-model="event.category">
                <option v-for="cat in categories"
                        :key="cat">{{ cat }}</option>
            </select>
            <h3>Name & describe your event</h3>
            <div class="field">
                <label>Title</label>
                <input v-model="event.title"
                       type="text"
                       placeholder="Add an event title" />
            </div>
            <div class="field">
                <label>Description</label>
                <input v-model="event.description"
                       type="text"
                       placeholder="Add a description" />
            </div>
            <h3>Where is your event?</h3>
            <div class="field">
                <label>Location</label>
                <input v-model="event.location"
                       type="text"
                       placeholder="Add a location" />
            </div>
            <h3>When is your event?</h3>
            <div class="field">
                <label>Date</label>
                <datepicker v-model="event.date"
                            placeholder="Select a date" />
            </div>
            <div class="field">
                <label>Select a time</label>
                <select v-model="event.time">
                    <option v-for="time in times"
                            :key="time">{{ time }}</option>
                </select>
            </div>
            <input type="submit"
                   class="button -fill-gradient"
                   value="Submit" />
        </form>
        <!-- <p>This was created by {{ user.name }} with id: {{ user.id }}</p>
        <p>There are {{ catLength }} categories</p>
        <p>{{ getEventById(1)}}</p>
        <p>{{ getEventById(2)}}</p>
        <p>{{ getEventById(3)}}</p>
        <ul>
            <li v-for="cat in categories"
                :key="cat">{{ cat }}</li>
        </ul>
        <p>Thing that are done: </p>
        <ul>
            <li v-for="todo in doneTodos"
                :key="todo.id">{{ todo.text }}</li>
        </ul> -->
    </div>
</template>

<script>
    import Datepicker from 'vuejs-datepicker'
    // import { mapState, mapGetters } from 'vuex'

    export default {
        components: {
            Datepicker
        },
        data() {
            const times = []
            for (let i = 1; i <= 24; i++) {
                times.push(i + ':00')
            }
            return {
                event: this.createFreshEventObject(),
                times,
                categories: this.$store.state.categories,
            }
        },
        methods: {
            createEvent() {
                this.$store.dispatch('createEvent', this.event).then(() => {
                    this.$router.push({
                        name: 'event-show',
                        params: { 'id': this.event.id }
                    })
                    this.event = this.createFreshEventObject();
                }).catch(() => {
                    
                })
            },
            createFreshEventObject() {
                const user = this.$store.state.user.user
                const id = Math.floor(Math.random() * 10000000)
                return {
                    id: id,
                    category: '',
                    user: user,
                    organizer: user.name,
                    title: '',
                    description: '',
                    location: '',
                    date: '',
                    time: '',
                    attendees: []
                }
            }
        }
        // // computed: {
        // //     username() {
        // //         return this.$store.state.user.name;
        // //     },
        // //     userID() {
        // //         return this.$store.state.user.id;
        // //     }
        // // },
        // // computed: mapState({
        // //     userName: state => state.user.name,
        // //     userID: state => state.user.id,
        // //     categories: state => state.categories
        // // // })
        // computed: {
        //     catLength() { //can use spead operator when want to add other computed properties
        //         return this.$store.getters.catLength;
        //     },
        //     // getEvent() {
        //     //     return this.$store.getters.getEventById;
        //     // },
        //     // ...mapState({
        //     //     user: 'user',
        //     //     categories: 'categories'
        //     // })
        //     doneTodos() {
        //         return this.$store.getters.doneTodos;
        //     },
        //     ...mapState(['user', 'categories']),
        //     ...mapGetters(['getEventById'])
        // }
    }
</script>

<style scoped>
    .field {
      margin-bottom: 24px;
    }
</style>