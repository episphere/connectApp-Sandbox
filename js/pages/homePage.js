export const homePage = async () => {
    const mainContent = document.getElementById('root');
    const isIE = /*@cc_on!@*/false || !!document.documentMode;
    mainContent.innerHTML = `
        ${isIE ? `<span class="not-compatible">Connect web application is not compatible with Internet Explorer, please use Chrome, Safari, Firefox or Edge</span>` : ``}
        <div class="row homepage-slider">
            <div class="col">
                <img src="./images/newImages/4.PNG" height="400px" width="100%">
            </div>
        </div>
        <div class="row what-study-row">
            <div class="col"><img src="./images/newImages/2.PNG" height="380px" width="440px"></div>
            <div class="align-left d-flex justify-content-center align-items-center">
                <div>
                    <span class="what-study-heading"><strong>What the study is</strong></span></br>
                    <span class="what-study-content">
                        Connect for Cancer Prevention is one of the largest</br>
                        and most important cancer studies in the United States.</br>
                        By joining Connect, you will be a part of a community of researchers </br>
                        and 200,000 people from around the country, who, like you, </br>
                        want to contribute to cancer research.
                    </span>
                </div>
            </div>
        </div>
        <div class="how-study-row">
            <div class="row">
                <div class="align-left d-flex justify-content-center align-items-center">
                    <div>
                        <span class="how-study-heading"><strong>How you can help</strong></span></br>
                        <span class="how-study-content">
                            While researchers have made important advances,</br>
                            there is more to learn to ease the burden of cancer</br>
                            on our families and our communities. Your </br>
                            participation in this study will give scientist the </br>
                            ability to look at how the way we live, our genes, </br>
                            and our medical history are connected to cancer.
                        </span>
                    </div>
                </div>
                <div class="col align-right"><img src="./images/newImages/3.PNG" height="380px" width="440px"></div>
            </div>
        </div>
        <div class="row who-can-join-heading" style="margin-top:30px">
            <div class="col align-center">Who can join</div>
        </div>
        <div class="row" style="margin:30px 0px">
            <div class="col-md-2"></div>
            <div class="col-md-1"><img src="./images/newImages/5.PNG" height="80px" width="100px"></div>
            <div class="col-md-3">40-65 years old and </br> have <strong>never been diagnosed with </br> most kinds of invasive cancers</strong></div>
            <div class="col-md-1"><img src="./images/newImages/6.PNG" height="80px" width="100px"></div>
            <div class="col-md-3">Member or patient od </br> have <strong>participanting health care systems</strong></div>
            <div class="col-md-2"></div>
        </div>
        <div class="learning-from-everyone">
            <div class="row">
                <div class="col"><img src="./images/newImages/7.PNG" height="380px" width="440px"></div>
                <div class="align-left d-flex justify-content-center align-items-center">
                    <div>
                        <span class="what-study-heading"><strong>Learning from everyone</strong></span></br>
                        <span class="what-study-content">
                            Connect for Cancer Prevention will be most</br>
                            successful if a diverse group of participants from</br>
                            different environments and backgrounds join. This </br>
                            allows all people to benefit from our discoveries.
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div class="participating-health-care-systems">
            <div class="row who-can-join-heading" style="margin-top:30px">
                <div class="col align-center">Participanting Healt Care Systems</div>
            </div>
            <div class="row who-can-join-heading" style="margin-top:30px">
                <div class="col-md-1"></div>
                <div class="col-md-10"><img src="./images/newImages/8.PNG" height="200px" width="100%"></div>
                <div class="col-md-1"></div>
            </div>
        </div>

        
    `;
}

export const joinNowBtn = (bool) => {
    if(bool){
        return `<span class="join-now-heading">What causes and prevents cancer? Help researchers answer this question for future generations</span>
        </br><a class="btn join-now-btn" href="#sign_in">Join Now</a>`
    }
    else {
        return `<span class="join-now-heading">Thanks for joining Connect Cohort Study!</span>`
    }
}