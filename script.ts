const toggleSkillsBtn = document.getElementById('toggle-skills-btn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills') as HTMLElement;

toggleSkillsBtn.addEventListener('click', () => {
    if (skillsSection.style.display === 'none') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
