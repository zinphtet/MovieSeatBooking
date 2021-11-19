const mySeats = document.querySelector('.seats');
let price = parseInt(select.firstElementChild.value);
let priceArr = [];
let numOfSeat = 0;
let sumOfTotalPrice = 0;
//Seats Display
function allSeats() {
	let seatArr = [];
	for (let i = 0; i < 5; i++) {
		let seatRow = document.createElement('div');
		seatRow.classList.add('row');
		for (let j = 0; j < 10; j++) {
			let seatDiv = document.createElement('div');
			j == 2 || j == 7
				? (seatDiv.className = 'seat transparent_seat')
				: (seatDiv.className = 'seat available_seat');
			seatRow.append(seatDiv);
		}
		seatArr.push(seatRow);
	}
	return seatArr;
}
mySeats.append(...allSeats());

//Seat DOM
const seats = document.querySelectorAll('.seats .seat');
const allSeat = Array.from(seats);

// Random Occupy
let OccupyArr = [
	Math.floor(Math.random() * 40),
	Math.floor(Math.random() * 40),
	Math.floor(Math.random() * 40),
	Math.floor(Math.random() * 40),
	Math.floor(Math.random() * 40),
	Math.floor(Math.random() * 40),
	Math.floor(Math.random() * 40),
];
// console.log(OccupyArr);
for (let i = 0; i < OccupyArr.length; i++) {
	allSeat[OccupyArr[i]].classList.contains('transparent_seat')
		? (allSeat[OccupyArr[i]].className = 'seat transparent_seat')
		: (allSeat[OccupyArr[i]].className = 'seat occupy_seat');
}

//Buy Seats

select.addEventListener('change', (e) => {
	price = parseInt(e.target.value);
});

allSeat.forEach((seat) => {
	seat.addEventListener('click', function () {
		if (this.classList.contains('available_seat')) {
			numOfSeat++;
			this.className = 'seat taken_seat';
			priceArr.push(price);
			sumOfTotalPrice = priceArr.reduce((a, b) => a + b);
			takenSeat.textContent = numOfSeat;
			totalPrice.textContent = sumOfTotalPrice + ' $';
			console.log(numOfSeat, sumOfTotalPrice);
		}
	});
});

// else {
// 	numOfSeat++;
// 	this.className = 'seat taken_seat';
// 	priceArr.push(price);
// 	sumOfTotalPrice = priceArr.reduce((a, b) => a + b);
// 	takenSeat.textContent = numOfSeat;
// 	totalPrice.textContent = sumOfTotalPrice + ' $';
// 	console.log(numOfSeat, sumOfTotalPrice);
// }
