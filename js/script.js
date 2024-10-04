document.addEventListener('DOMContentLoaded', function(){
    const faqContainer = document.querySelector('.faq-content');
    faqContainer.addEventListener('click', (e)=>{
        const groupHeader = e.target.closest('.faq-group-header')
        if(!groupHeader) return;
        const group = groupHeader.parentElement;
        const grouBody = group.querySelector('.faq-group-body')
        const icon = groupHeader.querySelector('i')

        //Toggle Icon
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus')

        //Toggle visibility of body
        grouBody.classList.toggle('open')

        //close all other faq bodies when another faq is open
        const otherGroups = faqContainer.querySelectorAll('.faq-group')
        otherGroups.forEach((otherGroup)=>{
            if(otherGroup != group){
                const otherGroupBody = otherGroup.querySelector('.faq-group-body');
                const otherGroupIcon = otherGroup.querySelector('.faq-group-header i');
                otherGroupBody.classList.remove('open')

                otherGroupIcon.classList.add('fa-plus')
            }
        })
    })
})