import {db, dbRef} from '../config/firebase'

let dbMembers = dbRef.child("members");
let membersRef = db.ref('members');

export function createMember(data, next, error){
	dbMembers.push(data)
			.then( response => {
				next(response);
			}, errorResponse => {
				error(errorResponse);
			});
}

export function listMembers(next) {
	membersRef.on('value', function(snapshot) {
		let members = [];
		snapshot.forEach(function(childSnapshot) {
			let childData = childSnapshot.val();
			members.push({
				data: childData,
				ref: childSnapshot.ref,
				key: childSnapshot.key
			});
		});
		next(members);
	});
}

export function listenMembers(onAdd, onRemove) {
	membersRef.on('child_added', function(snapshot) {
		onAdd(snapshot);
	});
	membersRef.on('child_removed', function(snapshot) {
		onRemove(snapshot);
	});
}
