export default {
  getFullDate() {
      var date = new Date();
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
  },
  getDate() {
      var date = new Date();
      return date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
  },

}
