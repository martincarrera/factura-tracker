
if (Meteor.isClient) {

  Template.editar.helpers({
    editando: function (event, template) {
        return facturas.findOne({_id:this._id});
    }
  });

  Template.editar.events({
       'click #guardar, submit': function (event, template) {

                      moment.locale('es');
                      var nombre = template.$("#deudor").val();
                      var fecha = template.$("#fecha").val();
                      var fechaEscrita = moment(fecha).format("D MMM YYYY");
                      var usuario = Meteor.user().username;
                      var motivo = template.$("#motivo").val();
                      event.preventDefault();
                      facturas.update(this._id,{$set:{
                                        deudor:nombre,
                                        fecha:fecha,//fecha en la que se debe pagar
                                        fechaEscrita:fechaEscrita,//fecha en la que se debe pagar en texto
                                        motivo:motivo,
                                        usuariocarga:usuario}});
                      template.find("form").reset();
                      Router.go('/');
                    }
                  });

}
