function toggleDropdown() {
    var dropdownOptions = document.getElementById("dropdownOptions");
    dropdownOptions.style.display = dropdownOptions.style.display === "none" ? "block" : "none";
  }
  function changeCards(option) {
    document.getElementById("dropdown").getElementsByClassName("dropdown-select")[0].textContent = option;

    var cardsContainer = document.getElementById("cards");
    cardsContainer.innerHTML = ""; // Clear existing cards

    // Add cards based on the selected option
    for (var i = 1; i <= 5; i++) {
      var card = document.createElement("div");
      card.className = "card";
      card.textContent = option + " - Card " + i;
      cardsContainer.appendChild(card);
    }

    // Hide the dropdown options after selection
    document.getElementById("dropdownOptions").style.display = "none";
  }