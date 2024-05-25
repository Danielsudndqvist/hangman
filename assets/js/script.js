const europeanCountries = [
    "AUSTRIA", "BELGIUM", "BULGARIA", "CROATIA", "DENMARK", "ESTONIA", "FINLAND",
    "FRANCE", "GERMANY", "GREECE", "HUNGARY", "ICELAND", "IRELAND", "ITALY",
    "NORWAY", "POLAND", "PORTUGAL", "RUSSIA", "SPAIN", "SWEDEN", "TURKEY", "UKRAINE",
  ];



  /**
 * Selects a random word from the europeanCountries array and assigns it to the answer variable.
 */
function randomWord() {
    answer = europeanCountries[Math.floor(Math.random() * europeanCountries.length)];
  }
  
  /**
   * Generates the buttons for each letter of the alphabet and adds them to the DOM.
   * Adds event listeners to each button to handle guesses.
   */
  function generateButtons() {
    const buttonsHTML = 'ABCDEFGHIJKLMNOPQRSUVWXYZ'.split('').map(letter => `
      <button
        class="btn btn-lg btn-primary m-2"
        id="${letter}"
        data-letter="${letter}"
      >
        ${letter}
      </button>
    `).join('');
  
    document.getElementById('keyboard').innerHTML = buttonsHTML;
  
    document.querySelectorAll('button[data-letter]').forEach(button => {
      button.addEventListener('click', () => handleGuess(button.getAttribute('data-letter')));
    });
  }