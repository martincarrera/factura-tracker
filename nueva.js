
if (Meteor.isClient) {

  Template.nueva.events({
       'click #guardar, submit': function (event, template) {

                      moment.locale('es');
                      var nombre = template.$("#deudor").val();
                      var fecha = template.$("#fecha").val();
                      var fechaEscrita = moment(fecha).format("D MMM YYYY");
                      var usuario = Meteor.user().username;
                      var motivo = template.$("#motivo").val();
                      event.preventDefault();
                      facturas.insert({deudor: nombre,
                                        fechaPago:'',//fecha en la que se pago efectivament
                                        pagado: false,
                                        fecha:fecha,//fecha en la que se debe pagar
                                        fechaEscrita:fechaEscrita,//fecha en la que se debe pagar en texto
                                        motivo:motivo,
                                        usuariocarga:usuario,
                                        userverif:''  });
                      template.find("form").reset();

                    },


        "change #ocultaPagadas": function (event) {
          Session.set("ocultaPagadas", event.target.checked);

            }


                  })


}
