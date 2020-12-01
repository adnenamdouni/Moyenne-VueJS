var total = 0;
var vm = new Vue({
  el: "#app",
  data: {
    note: 0,
    tableau: [
      { entree: 0 }

    ],
  },
  methods: {
    stockernote() {
      this.tableau.push({
        entree: this.note
      });
    },

    totalnote() {

      this.tableau.forEach(elem => {
        total += + elem.entree
      })
      alert("le total est:  " + total)
      return total
    },

    moynote() {
      var n = this.tableau.length
      let moyenne = total / (n - 1)
      alert("la moyenne est:  " + moyenne)
      return moyenne
    }

  }/*methods*/
});

