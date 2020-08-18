import { showAnimation, hideAnimation, getMyData, allStates, storeResponse, toggleDarkMode } from "../shared.js";

export const renderSettingsPage = async () => {
    showAnimation();
    const myData = await getMyData();
    let template = '<h3>Settings</h3>'
    if(myData.code === 200 && myData.data['699625233'] !== undefined && myData.data['699625233'] === 353358909){
        const userData = myData.data;
        template += `
            <div class="row settings-header">
                <div class="col"><h4>User profile</h4></div>
                <div class="ml-auto"><i title="Edit user profile" id="editUserProfile" class="fas fa-edit"></i></div>
            </div>
            <div class="row">
                <div class="col data">First name</div>
                <div class="col"><input class="form-control" readonly value="${userData['399159511']}"></div>
            </div>
            <div class="row">
                <div class="col data">Middle name</div>
                <div class="col"><input class="form-control" readonly value="${userData['231676651'] ? ` ${userData['231676651']}` :''}"></div>
            </div>
            <div class="row">
                <div class="col data">Last name</div>
                <div class="col"><input class="form-control" readonly value="${userData['996038075']}"></div>
            </div>
            <div class="row">
                <div class="col data">Suffix</div>
                <div class="col"><input class="form-control" readonly value="${userData['506826178'] ? `${userData['506826178']}` :  ``}"></div>
            </div>
            <div class="row"><div class="col"><strong>Date of birth</strong></div></div>
            <div class="row">
                <div class="col data">Month</div>
                <div class="col">
                    <select class="form-control" disabled required id="UPMonth">
                        <option class="option-dark-mode" value="">-- Select Month --</option>
                        <option class="option-dark-mode" value="01" ${userData['564964481'] === '01' ? 'selected' : ''}>1 - January</option>
                        <option class="option-dark-mode" value="02" ${userData['564964481'] === '02' ? 'selected' : ''}>2 - February</option>
                        <option class="option-dark-mode" value="03" ${userData['564964481'] === '03' ? 'selected' : ''}>3 - March</option>
                        <option class="option-dark-mode" value="04" ${userData['564964481'] === '04' ? 'selected' : ''}>4 - April</option>
                        <option class="option-dark-mode" value="05" ${userData['564964481'] === '05' ? 'selected' : ''}>5 - May</option>
                        <option class="option-dark-mode" value="06" ${userData['564964481'] === '06' ? 'selected' : ''}>6 - June</option>
                        <option class="option-dark-mode" value="07" ${userData['564964481'] === '07' ? 'selected' : ''}>7 - July</option>
                        <option class="option-dark-mode" value="08" ${userData['564964481'] === '08' ? 'selected' : ''}>8 - August</option>
                        <option class="option-dark-mode" value="09" ${userData['564964481'] === '09' ? 'selected' : ''}>9 - September</option>
                        <option class="option-dark-mode" value="10" ${userData['564964481'] === '10' ? 'selected' : ''}>10 - October</option>
                        <option class="option-dark-mode" value="11" ${userData['564964481'] === '11' ? 'selected' : ''}>11 - November</option>
                        <option class="option-dark-mode" value="12" ${userData['564964481'] === '12' ? 'selected' : ''}>12 - December</option>
                    </select>
                </div>
            </div>
            <div class="row">
                <div class="col data">Day</div>
                <div class="col"><input class="form-control" readonly value="${userData['795827569']}"></div>
            </div>
            <div class="row">
                <div class="col data">Year</div>
                <div class="col"><input class="form-control" readonly value="${userData['544150384']}"></div>
            </div>
            </br>
            <div class="row">
                <div class="col data">Biological sex assigned at birth</div>
                <div class="col"><input class="form-control" readonly value="${userData['383945929'] === 654207589 ? 'Male': `${userData['383945929'] === 536341288 ? 'Female' : 'Intersex or other'}`}"></div>
            </div>
            </br>
            <div class="row">
                <div class="col data">Mobile phone</div>
                <div class="col"><input class="form-control" readonly value="${userData['388711124']? `${userData['388711124'].substr(0,3)} - ${userData['388711124'].substr(3,3)} - ${userData['388711124'].substr(6,4)}` : ''}"></div>
            </div>

            <div class="row">
                <div class="col data">Can we leave a voicemail at this number?</div>
                <div class="col"><input class="form-control" readonly value="${userData['271757434'] === 353358909 ? 'Yes': 'No'}"></div>
            </div>
            <div class="row">
                <div class="col data">Can we text this number?</div>
                <div class="col"><input class="form-control" readonly value="${userData['646873644'] === 353358909 ? 'Yes': 'No'}"></div>
            </div>


            <div class="row">
                <div class="col data">Home phone</div>
                <div class="col"><input class="form-control" readonly value="${userData['438643922'] ? `${userData['438643922'].substr(0,3)} - ${userData['438643922'].substr(3,3)} - ${userData['438643922'].substr(6,4)}` : ''}"></div>
            </div>
            <div class="row">
                <div class="col data">Can we leave a voicemail at this number?</div>
                <div class="col"><input class="form-control" readonly value="${userData['187894482'] === 353358909 ? 'Yes': 'No'}"></div>
            </div>
            <div class="row">
                <div class="col data">Preferred email</div>
                <div class="col"><input class="form-control" readonly value="${userData['869588347'] ? `${userData['869588347']}` : ''}"></div>
            </div>
            <div class="row">
                <div class="col data">Additional email</div>
                <div class="col"><input class="form-control" readonly value="${userData['849786503'] ? `${userData['849786503']}` : ''}"></div>
            </div>
            <div class="row">
                <div class="col data">Additional email 2</div>
                <div class="col"><input class="form-control" readonly value="${userData['635101039'] ? `${userData['635101039']}` : ''}"></div>
            </div>
            <div class="row">
                <div class="col data">Additional email 3</div>
                <div class="col"><input class="form-control" readonly value="${userData['714419972'] ? `${userData['714419972']}` : ''}"></div>
            </div>
            <div class="row">
                <div class="col data">Mailing address</div>
                <div class="col">
                    ${userData['521824358']} ${userData['442166669'] ? userData['442166669'] : ''}</br>
                    ${userData['703385619']} ${Object.keys(allStates)[Object.values(allStates).indexOf(parseInt(userData['634434746']))]} ${userData['892050548']}
                </div>
            </div>
            <div class="row settings-header">
                <div class="col"><h4>Theme preference</h4></div>
            </div>
            <div class="row">
                <div class="col">Dark Mode</div>
                <div class="col">
                    <label class="switch form-group">
                        <input type="checkbox" id="darkMode" ${userData.darkMode ? 'checked' : ''}>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        `;
    }
    else if(myData.code === 200){
        template += `
            <div class="row settings-header">
                <div class="col"><h4>Theme preference</h4></div>
            </div>
            <div class="row">
                <div class="col">Dark Mode</div>
                <div class="col">
                    <label class="switch form-group">
                        <input type="checkbox" id="darkMode" ${myData.data.darkMode ? 'checked' : ''}>
                        <span class="slider round"></span>
                    </label>
                </div>
            </div>
        `;
    }
    else {
        template += 'Settings not available';
    }

    document.getElementById('root').innerHTML = template;
    hideAnimation();
    const element = document.getElementById('darkMode');
    element.addEventListener('click', () => {
        if(element.checked){
            toggleDarkMode(true);
            localStorage.connect = JSON.stringify({darkMode: true});
            storeResponse ({darkMode: true});
        }
        else {
            toggleDarkMode(false);
            localStorage.connect = JSON.stringify({darkMode: false});
            storeResponse ({darkMode: false});
        }
    });
    addEventEditUP(userData);
}

const addEventEditUP = (data) => {
    const editUserProfile = document.getElementById('editUserProfile');
    if(editUserProfile){
        editUserProfile.addEventListener('click', () => {

        });
    }
}