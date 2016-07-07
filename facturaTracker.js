facturasList = function (document){
  _.extend(this, document);
};

facturasList.prototype ={
  constructor: facturasList,
  deudaVencida: function (){
      var vencida= true;
      var hoy = new Date();
    if ( moment(this.fecha).isAfter(hoy)) {
      vencida = false;
    }
        return vencida
      }
};

facturas = new Mongo.Collection("facturas", {
  transform: function (doc) {
 return new facturasList(doc);
   }
});

reglas = new Mongo.Collection("reglas");

Router.route('/reglas',{
  name:'reglas',
  template:'reglas'}
);

Router.route('/', {
    name:'main',
    template: 'main'
});
Router.route('/editar/:_id',{
  name:'editar/:_id',
    template:'editar',
    data:function(){
      return {_id:this.params._id}
    }
  });





if (Meteor.isClient) {
Accounts.ui.config({
passwordSignupFields: "USERNAME_ONLY"
});

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
