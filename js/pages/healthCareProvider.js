import { sites } from "../shared.js";

export const requestPINTemplate = () => {
    return `
        <div class="row request-pin-div">
            <div class="col-lg-2"></div>
            <div class="col-lg-8 eligibility-form">
                <form method="POST" id="requestPINForm">
                    <div class="form-all-content">
                        <div class="form-group">
                            <label><strong>If you received a PIN as part of study invitation, please enter it here</strong></label>
                            <label><input type="text" id="participantPIN" class="form-control" placeholder="Enter PIN"></label>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col">
                            <button type="submit" class="btn btn-primary save-data">I do not have a pin</button>&nbsp;&nbsp;
                        </div>
                        <div class="ml-auto">
                            <button type="submit" class="btn btn-primary save-data">Submit</button>
                        </div>
                    </div>                    
                </form>
            </div>
            <div class="col-lg-2"></div>
        </div>
    `
}

export const healthCareProvider = (siteId) => {
    let template = '';
    template += `
    <div class="row health-care-div">
        <div class="col-lg-2"></div>
        <div class="col-lg-8 eligibility-form">
            <form method="POST" id="eligibilityForm">
                <div class="health-care-form-all-content">
                <div class="form-group">
                    <label for="827220437"><strong>Who is your healthcare provider?<span class="required"> *</span></strong>
                        <select ${siteId ? `disabled` : ``} style="margin: 0px;" class="form-control" id="827220437" required>
                            <option class="option-dark-mode" value="">-- Select healthcare provider --</option>
    `;

    for (let siteCode in sites()){
        template += `<option class="option-dark-mode" ${siteId && siteId === parseInt(siteCode) ? `selected`: `` } value=${siteCode}>${sites()[siteCode]}</option>`;
    }

    template += `
                        </select>
                    </label>
                </div>
                </div>
                <div class="row">
                    <div class="ml-auto">
                        <button type="submit" class="btn btn-primary save-data">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <div class="col-lg-2"></div>
    </div>
    `;
    return template;
}

export const heardAboutStudy = () => {
    return `
        <div class="row heard-about-study-div">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <form method="POST" id="heardAboutStudyForm">
                    <label><strong>How did you hear about this study? (Select all that apply)</strong></label>
                    <div class="form-group">
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox1"> Physician or other medical staff</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox2"> Email or text from my healthcare provider</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox3"> Postcard or mail</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox4"> News article or website</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox5"> Social media</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox6"> MyChart invitation</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox7"> Family or friend</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox8"> Another Connect participant</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox9"> Poster, brochure, or flyer</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox" id="checkbox10"> Study table at public event</label>
                        </div>
                        <div class="checkbox">
                            <label><input type="checkbox"  id="checkbox11"> Other</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="ml-auto">
                            <button type="submit" class="btn btn-primary save-data">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
            <div class="col-lg-2"></div>
        </div>
        
    `
}