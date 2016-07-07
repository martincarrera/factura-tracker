
if (Meteor.isClient) {

Template.reglas.helpers({
  todasReglas: function(){
       return reglas.find();
  },

  destroyed: function(){

  },
});

Template.reglas.events({
  "click #guardarRegla": function(event, template){
      var regla = template.$("#regla").val();
      var pago = template.$("#pago").val();
      var usuario = Meteor.user().username;
      event.preventDefault();
      reglas.insert({regla: regla,
                      pago:pago,
                        usuariocarga:usuario,
                               });

      template.find("form").reset();
  },

  'click #borraRegla': function (event, template) {

                 reglas.remove({ _id : this._id });


               },
});


}
