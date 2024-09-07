var toggleSkills = document.getElementById('toggleSkills');
var skills = document.getElementById('skills');
// Initialize the visibility (optional: use CSS to set 'display: none' initially)
skillsSection.style.display = 'none';
toggleSkillsButton.addEventListener('click', function () {
    // Use getComputedStyle to check current display state
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block'; // Show the section
    }
    else {
        skillsSection.style.display = 'none'; // Hide the section
    }
});
