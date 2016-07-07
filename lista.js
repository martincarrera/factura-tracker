if (Meteor.isClient) {


Template.lista.helpers({
      facturas: function () {
          if (!Session.get("ocultaPagadas")) {
                return facturas.find({pagado:false}, {sort: { fecha: 1 }});
                                          }
                 else {
                return facturas.find({}, {sort: { fecha: 1 }});
                 }
               },

        ocultaPagadas: function () {
                return Session.get("ocultaPagadas")
              },


                          });



Template.lista.events({

      "click #pago": function () {
                             facturas.update(this._id, {$set:{pagado:!this.pagado, userverif: Meteor.user().username, fechaPago:new Date().toJSON().slice(0,10)     }});
                          },
      "click #editar":  function(event, template){
      //  $('.ui.modal').modal('show');
      },
      "click #ocultaPagadas": function (){
        Session.set("ocultaPagadas",!Session.get("ocultaPagadas"))
      },
                      });




}
