document.addEventListener('DOMContentLoaded', function() {
  const lawList = document.getElementById('law-list');
  const lawDetails = document.getElementById('law-details');

  // Sample data for German employment laws
  const employmentLaws = [
    { title: 'Minimum Wage', content: 'The minimum wage in Germany is currently €9.60 per hour.' },
    { title: 'Working Hours', content: 'The standard working hours in Germany are 8 hours per day, 40 hours per week.' },
    { title: 'Vacation Leave', content: 'Employees in Germany are entitled to at least 20 days of paid vacation leave per year.' },
    // Add more laws as needed
  ];

  // Populate the law list with the data
  employmentLaws.forEach(function(law, index) {
    const listItem = document.createElement('li');
    listItem.textContent = law.title;
    listItem.addEventListener('click', function() {
      showLawDetails(law);
    });
    lawList.appendChild(listItem);
  });

  // Function to display law details
  function showLawDetails(law) {
    lawDetails.innerHTML = `
      <h2>${law.title}</h2>
      <p>${law.content}</p>
    `;
  }
});
