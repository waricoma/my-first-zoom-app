<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-card>
        <v-card-title class="headline">
          My first zoom app
        </v-card-title>
        <v-card-text>
          <p>
            This system will create the room for next week from now. Using
            TypeScript, Express, Nuxt, Jest ...etc
          </p>
        </v-card-text>
        <v-progress-linear
          :indeterminate="indeterminateOfProgressLinearForAskingZoomApi"
        ></v-progress-linear>
        <v-snackbar v-model="snackbarValForZoomApiProgress">{{
          snackbarMsgForZoomApiProgress
        }}</v-snackbar>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" @click="createNextWeekRoom()" :disabled="disabledBtnOfCreateNextWeekRoom">
            Create Room
          </v-btn>
        </v-card-actions>
      </v-card>
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a href="https://vuetifyjs.com" target="_blank"> documentation </a>.
          </p>
          <p>
            If you have questions, please join the official
            <a href="https://chat.vuetifyjs.com/" target="_blank" title="chat">
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a href="https://nuxtjs.org/" target="_blank">
            Nuxt Documentation
          </a>
          <br />
          <a href="https://github.com/nuxt/nuxt.js" target="_blank">
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire">
            Continue
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import axios from 'axios';
import Logo from '~/components/Logo.vue';
import VuetifyLogo from '~/components/VuetifyLogo.vue';

export default {
  components: {
    Logo,
    VuetifyLogo,
  },
  computed: {
    indeterminateOfProgressLinearForAskingZoomApi() {
      return this.$store.state.index.indeterminateOfProgressLinear;
    },
    snackbarValForZoomApiProgress() {
      return this.$store.state.index.snackbarValForZoomApiProgress;
    },
    snackbarMsgForZoomApiProgress() {
      return this.$store.state.index.snackbarMsgForZoomApiProgress;
    },
    disabledBtnOfCreateNextWeekRoom() {
      return this.$store.state.index.disabledBtnOfCreateNextWeekRoom;
    }
  },
  methods: {
    async createNextWeekRoom() {
      this.$store.commit('disableBtnOfCreateNextWeekRoom');
      this.$store.commit('makeTrueSnackbarValForZoomApiProgress');

      const res = await axios
        .get(`${location.origin}/api/zoom/create`)
        .catch(err => {
          // this.$nuxt.error({
          //   statusCode: err.response.status,
          //   message: err.response.message,
          // });

          this.$store.commit(
            'changeSnackbarMsgForZoomApiProgress',
            'Error😢 [zoom next week room creating]'
          );
          this.$store.commit('enableBtnOfCreateNextWeekRoom');
          this.$store.commit('makeTrueSnackbarValForZoomApiProgress');

          throw new Error(err);
        });

      this.$store.commit('enableBtnOfCreateNextWeekRoom');
      this.$store.commit('makeFalseIndeterminateOfProgressLinear');

      this.$dialog
        .confirm(
          {
            title: 'Created Room🎉',
            body: `Do you want to open this room? URL(${res.data.join_url}) PW(${res.data.password})`,
          },
          {
            okText: '🎮 Yes!',
            cancelText: 'Cancel',
          }
        )
        .then(() => {
          window.open(res.data.join_url);
        })
        .catch(() => {
          this.$store.commit('changeSnackbarMsgForZoomApiProgress', 'Bye 👋');
          this.$store.commit('makeTrueSnackbarValForZoomApiProgress');
        });
    },
  },
};
</script>
