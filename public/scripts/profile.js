window.addEventListener('DOMContentLoaded', () => {

    const imageProfile = document.querySelector('#img-profile');
    const avatarProfile = document.querySelector('#avatar-profile');
    const avatarForm = document.querySelector('#avatar-form');

    imageProfile.addEventListener('click', () => {
        avatarProfile.click();
    });

    avatarProfile.addEventListener('change', () => {
       avatarForm.submit();
    });

});