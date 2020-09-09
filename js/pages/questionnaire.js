import { storeResponse, getMyData } from "../shared.js";
import { transform } from 'https://episphere.github.io/quest/replace2.js';

export const questionnaire = () => {
    transform.render({
        url: 'https://jonasalmeida.github.io/privatequest/demo2.txt',
        activate: true,
        store: storeResponse,
        retrieve: getMyData
    }, 'root');
}

export const blockParticipant = () => {
    const mainContent = document.getElementById('root');
    mainContent.innerHTML = `
        <div class="row passive-participant-block-div">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                Thank you! The Connect for Cancer Prevention study will contact you by phone or email to confirm your eligibility within the next two business days.
                If you have any questions about the study, please visit the Connect website or call the Connect Help Desk at (XXX) YYY-ZZZZ or help@connect.com.
            </div>
            <div class="col-lg-2"></div>
        </div>

    `
}
