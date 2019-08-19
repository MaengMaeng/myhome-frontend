export default {
  getFullDate() {
      var date = new Date();
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + (date.getHours() + "").padStart(2, '0') + ":" + (date.getMinutes() + "").padStart(2, '0') + ":" + (date.getSeconds() + "").padStart(2, '0');
  },
  getDate() {
      var date = new Date();
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  },

}
