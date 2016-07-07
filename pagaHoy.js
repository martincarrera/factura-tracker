
if (Meteor.isClient) {


Template.pagaHoy.events({
});


Template.pagaHoy.helpers({
  pagaHoy: function() {
          return facturas.find({fechaEscrita: moment(new Date()).format("D MMM YYYY")})

              },

  hoy: function () {
      var hoy;
      hoy =  moment(new Date()).format("D MMM YYYY");
      return hoy;
    }
});

}
