//querySelectorAll puts into a nodeList as if it were an array, query selector only chooses one/first
const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

//the '+' here turns the value from a string to a number, can also use parseInt()
let ticketPrice = +movieSelect.value;

//update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');
  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice + '.00';
}

//Movie select event

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  updateSelectedCount();
});

//Seat click event
container.addEventListener('click', (e) => {
  if (
    e.target.classList.contains('seat') &&
    !e.target.classList.contains('occupied')
  ) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
