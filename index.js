function makeObjectDeepCopy(obj) {
	let startValue;
	
	if (Array.isArray(obj)) {
		startValue = [];
	} else {
		startValue = {};
	}
	
	for (let key in obj) {
		if (typeof(obj[key]) !== 'object' || obj[key] === null) {
			startValue[key] = obj[key];
		} else {
			startValue[key] = makeObjectDeepCopy(obj[key]);
		}
	}

	return startValue;
}

function selectFromInterval(arr, from, to) {
	const newArray = [];

	if (!Array.isArray(arr) || typeof(from) !== 'number' || typeof(to) !== 'number' || arr.find((value) => typeof(value) === 'string')) {
		throw new Error('ERROR!');
	} else {
		for (let item of arr) {
			if (to > from && from <= item && item <= to) {
				newArray.push(item);
			} else if (to < from && to <= item && item <= from) {
				newArray.push(item);
			}
		}
	}

	return newArray;
}

const myIterable = {
	from: 1,
	to: 9
};

myIterable[Symbol.iterator] = function()  {
	if (this.to < this.from || typeof(this.from) !== 'number' || typeof(this.to) !== 'number') {
		throw new Error('ERROR!');
	}

	return {
		from: this.from,
		to: this.to,
		next() {
			if (this.to >= this.from) {
				return { done: false, value: this.from++};
			} else {
				return { done: true};
			} 
		}
	}
}