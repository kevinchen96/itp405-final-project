import Ember from 'ember';

export default Ember.Controller.extend({
	isAdmin: Ember.computed(function(){
		var mod = this;
		$.ajax({
		      type: 'GET',
		      url: '/api/admin/user'
		 }).then(function(response){
		 	console.log(response);
	 		mod.set('isAdmin', true);
		 }, function(response){
		 		mod.set('message', response.responseJSON.message);
		 		mod.set('isAdmin', false);
		 });
	}),
	actions: {
	 	deleteUser(id){
	 		let confirmation = confirm('Are you sure?');

	     	if (confirmation) {
	     		$.ajax({
				      type: 'DELETE',
				      url: '/api/admin/users/' + id
				 }).then(function(response){
				 	console.log(response);
				 	window.location.reload();
				 });
	     	}
	 	}
	 }
});
