<template>
  <div>
    <section>
      <user-profile :info="fetchedItem">
        <template v-slot:username>
          <router-link :to="`/user/${fetchedItem.user}`">
            {{ fetchedItem.user }}
          </router-link>
        </template>
        <template v-slot:time>{{ 'Posted ' + fetchedItem.time_ago }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchedItem.title }}</h2>
    </section>
    <section>
      <div v-html="fetchedItem.content"></div>
    </section>
  </div>
</template>

<script>
import UserProfile from "../components/UserProfile";
import { mapGetters } from 'vuex';

export default {
  components: {
    UserProfile,
  },

  computed: {
    ...mapGetters([
      'fetchedItem'
    ])
  },
  created() {
    const itemId  = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);   
  }
}
</script>
