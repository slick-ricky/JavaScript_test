class userStorage {
	loginUser(id, password, onSuccess, onError) {
		setTimeout(() => {
			if(
				(id === "rick" && password === "1111") ||
				(id === "dave" && password === "2222")
			) {
				onSuccess(id);
			} else {
				onError(new Error('not found'));
			}
		}, 2000);
		
	}
	
	getRole(user, checkIn) {
		setTimeout(() => {
			if(user === "rick") {
				checkIn({name: user, role: "admin"});
			} else {
				checkIn({name: user, role: "crew"});
			}
		}, 1000);
	}
}

const userStorage2 = new userStorage();
const id = prompt("enter your id");
const pass = prompt("enter your password");

userStorage2.loginUser(
	id,
	pass,
	user => {
		userStorage2.getRole(
			user,
			userInfo => {
				alert(`Welcome, ${userInfo.name}! You are our ${userInfo.role}.`);
			}
		);
	},
	error => {
		console.log(error);
	}
);