const questions = [`You can invite up to 2 additional users on the Free plan. There is no limit on 
team members for the Premium plan.`,`No more than 2GB. All files in your account must fit your allotted storage space.`,`Click “Forgot password” from the login page or “Change password” from your profile page.
A reset link will be emailed to you.`,
`Yes! Send us a message and we’ll process your request no questions asked.
`,`Chat and email support is available 24/7. Phone lines are open during normal business hours.`];


function showHideQuestion(answer){
    if(document.querySelector(`.arrow-${answer}-js`).classList.contains('rotate-arrow')){
        document.querySelector(`.arrow-${answer}-js`).classList.remove('rotate-arrow');
        document.querySelector(`.question-${answer}-js`).classList.remove('bold-p')
        document.querySelector(`.answer-${answer}-js`).innerHTML = '';
    }else{
        let index = answer-1;
        document.querySelector(`.answer-${answer}-js`).innerHTML = questions[index];
        document.querySelector(`.arrow-${answer}-js`).classList.add('rotate-arrow');
        document.querySelector(`.question-${answer}-js`).classList.add('bold-p')
    }
}
