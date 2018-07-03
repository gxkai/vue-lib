import Vue from 'vue';
import {Component} from 'vue-property-decorator';

@Component
export default class Example extends Vue {

  /** ------------ Getter / Setter ------------ */

  public get text() {
    return 'Example Text';
  }
}
