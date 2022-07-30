(() => {
	const f1 = async (s) => s;
	f1(`success1`).then((s) => console.log(s));
	console.log(`end1`);
})();

(() => {
	const f1 = new Promise((resolve) => resolve(`success2`));
	f1.then((s) => console.log(s));
	console.log(`end2`);
})();


(() => {
	const f1 = async (s) => {try{throw s; return `success3`}catch(e){throw e}};
	f1(`failed3`).then((s) => console.log(s)).catch((s) => console.log(s));
	console.log(`end3`);
})();

(() => {
	const f1 = new Promise((rs, rj) => rj(`failed4`));
	f1.then((s) => console.log(s)).catch((s) => console.log(s));
	console.log(`end4`);
})();


(async () => {
	const f1 = async (s) => {try{return `success5`}catch(e){throw `failed5`}};
	const s = await f1(`any`);
	console.log(s);
	console.log(`end5`);
})();


(async () => {
	const f1 = async (s) => {try{throw s; return `success6`}catch(e){throw `failed6`}};
	try {
		const s = await f1(`any`);
	} catch(e) {
		console.log(e);
	}
	console.log(`end6`);
})();

