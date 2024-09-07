var toggleSkillsBtn = document.getElementById('toggle-skills-btn');
var skillsSection = document.getElementById('skills');
toggleSkillsBtn.addEventListener('click', function () {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    }
    else {
        skillsSection.style.display = 'none';
    }
});
