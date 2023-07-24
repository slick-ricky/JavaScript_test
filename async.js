class userStorage {
	loginUser(id, password) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(
					(id === "rick" && password === "1111") ||
					(id === "dave" && password === "2222")
				) {
					resolve(id);
				} else {
					reject(new Error('not found'));
				}
			}, 2000);
		});
	}
	
	getRole(user) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if(user === "rick") {
					resolve({name: user, role: "admin"});
				} else {
					resolve({name: user, role: "crew"});
				}
			}, 1000);
		});
	}
}

async function loginProcess() {
	const userStorage2 = new userStorage();
	const id = prompt("enter your id");
	const pass = prompt("enter your password");
	const user = await userStorage2.loginUser(id, pass);
	const result = await userStorage2.getRole(user);
	
	return result;
}

loginProcess()
	.then(userInfo => alert(`hey ${userInfo.name}, you are our ${userInfo.role}...`))
	.catch(error => console.log(error));
