document.addEventListener('DOMContentLoaded', function () {
    // Dummy data for water parks in each city
    const waterParksData = {
        city1: ['Wonderla', 'Escape Water park', 'Ocean Park'],
        city2: ['Hailand'],
        city3: ['kishkinta Theme Park','MGM Dizzee World'],
        city4: ['wonderla','GRS Fantasy Park','Lumbini Gardens']
        // Add more cities and parks as needed
    };

    const locationSelect = document.getElementById('location');
    const waterParkSelect = document.getElementById('waterPark');

    // Update water parks based on selected location
    locationSelect.addEventListener('change', () => {
        const selectedLocation = locationSelect.value;
        const waterParks = waterParksData[selectedLocation] || [];

        // Clear existing options
        waterParkSelect.innerHTML = '';

        // Add new options
        waterParks.forEach(park => {
            const option = document.createElement('option');
            option.value = park;
            option.textContent = park;
            waterParkSelect.appendChild(option);
        });
    });

    window.calculateTotal = function () {
        const adults = parseInt(document.getElementById('adults').value) || 0;
        const children = parseInt(document.getElementById('children').value) || 0;
        const plan = document.getElementById('plan').value;

        // Dummy prices for each plan
        const planPrices = {
            basic: 2000,
            medium: 2500,
            premium: 3000
        };

        const totalAmount = (adults + 0.5 * children) * planPrices[plan];

        document.getElementById('totalAmount').textContent = `Total Amount: $${totalAmount}`;

        window.location.href = `confirm.html?totalAmount=${totalAmount}`;
    }
});