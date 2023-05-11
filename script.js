// Global variables
let coinCount = 0;
let clickIncrement = 1;
let upgradeCost = 10;
let upgradeIncrement = 1;

// DOM elements
const coinButton = document.getElementById('coinButton');
const coinCountDisplay = document.getElementById('coinCount');
const upgrades = document.getElementById('upgrades');

// Event listener for clicking the coin button
coinButton.addEventListener('click', () => {
  coinCount += clickIncrement;
  coinCountDisplay.textContent = `${coinCount} coins.`;
});

// Event listener for clicking an upgrade button
upgrades.addEventListener('click', (event) => {
  const upgradeButton = event.target;
  
  // Check if button is an upgrade button
  if (upgradeButton.classList.contains('upgrade-btn')) {
    const cost = Number(upgradeButton.dataset.cost);
    const increment = Number(upgradeButton.dataset.increment);

    // Check if user can afford upgrade
    if (coinCount >= cost) {
      coinCount -= cost;
      clickIncrement += increment;
      coinCountDisplay.textContent = `${coinCount} coins.`;

      // Increase upgrade cost and increment
      upgradeCost *= 2;
      upgradeIncrement++;

      // Disable button and update cost
      upgradeButton.disabled = true;
      upgradeButton.textContent = `Upgraded (+${increment} per click)`;
      upgradeButton.dataset.cost = upgradeCost;
      upgradeButton.dataset.increment = upgradeIncrement;

      // Add new upgrade button
      const newUpgradeButton = document.createElement('button');
      newUpgradeButton.classList.add('upgrade-btn');
      newUpgradeButton.textContent = `Upgrade (+${upgradeIncrement} per click)`;
      newUpgradeButton.dataset.cost = upgradeCost;
      newUpgradeButton.dataset.increment = upgradeIncrement;
      upgrades.appendChild(newUpgradeButton);
    }
  }
});
