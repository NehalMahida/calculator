<template>
  <div class="fill-height d-flex align-center justify-center">
    <v-container
      class="grey darken-4 col-12 col-sm-8 col-md-6 col-lg-4"
      :fill-height="$vuetify.breakpoint.mobile"
      cols="12"
    >
      <v-row class="text-h4" align="end" style="height:35vh; overflow-y: auto;">
        <v-container>
          <v-row
            class="text-right"
            v-for="(item, index) in getHistory"
            :key="index"
          >
            <v-col class="grey--text text--lighen-2 text-h6">
              {{ item }}
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-row class="text-h4">
        <v-container>
          <v-row class="text-right white--text">
            <v-col>
              {{ getExpression || 0 }}
            </v-col>
          </v-row>
          <v-row class="text-right grey--text text--lighen-2 text-h5">
            <v-col>
              {{ "=" + (EvalExpression || "0") }}
            </v-col>
          </v-row>
        </v-container>
      </v-row>
      <v-row>
        <v-divider dark class="my-3 mx-4"></v-divider>
      </v-row>
      <v-row>
        <v-container>
          <v-row class="text-center">
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('C')"
                text
                >C</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('BACK')"
                text
                >⌫</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('%')"
                text
                >%</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('/')"
                text
                >÷</v-btn
              ></v-col
            >
          </v-row>
          <v-row class="text-center ">
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(7)"
                text
                >7</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(8)"
                text
                >8</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(9)"
                text
                >9
              </v-btn></v-col
            >
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('*')"
                text
                >x
              </v-btn></v-col
            >
          </v-row>
          <v-row class="text-center">
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(4)"
                text
                >4</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(5)"
                text
                >5</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(6)"
                text
                >6
              </v-btn></v-col
            >
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('-')"
                text
                >—</v-btn
              ></v-col
            >
          </v-row>
          <v-row class="text-center">
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(1)"
                text
                >1</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(2)"
                text
                >2</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(3)"
                text
                >3
              </v-btn></v-col
            >
            <v-col
              ><v-btn
                class="orange--text text--darken-4 text-h5"
                @click="appendExpression('+')"
                text
                >+
              </v-btn></v-col
            >
          </v-row>
          <v-row class="text-center">
            <v-col cols="6"
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression(0)"
                text
                >0</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                class="white--text text-h5"
                @click="appendExpression('.')"
                text
                >.</v-btn
              ></v-col
            >
            <v-col
              ><v-btn
                rounded
                class="orange darken-4 white--text  text-h5"
                @click="getResult"
                >=</v-btn
              ></v-col
            >
          </v-row>
        </v-container>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["appendExpression", "getResult"]),
  },
  computed: {
    ...mapGetters(["getExpression", "getHistory", "EvalExpression"]),
  },
};
</script>

<style></style>
