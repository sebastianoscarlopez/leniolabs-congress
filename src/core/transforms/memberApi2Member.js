/**
 * Return object with useful data of member discarding the unnecessary
 * 
 * memberApi is a member item of Members array obtained from https://projects.propublica.org/api-docs/congress-api/members/#lists-of-members.
 */
export default memberApi => {
    return {
        ...memberApi,
        full_name: `${memberApi.first_name} ${memberApi.middle_name || ''} ${memberApi.last_name}`
            .replace(/\s{2}/g, ' '),
        party: getPartyName(memberApi.party),
        gender: getGenderText(memberApi.gender),
        birth: new Date(memberApi.date_of_birth).toLocaleDateString('es-AR', { day: '2-digit', month: '2-digit', year: 'numeric' }),
        Web: memberApi.url,

        api_uri: memberApi.api_uri,
        inOffice: memberApi.in_office
    }
}


/**
 * Return full party name
 * @param {*} codGender F or M
 */
const getGenderText = codGender => {
    return codGender === 'F'
        ? 'Female'
        : 'Male'
}

/**
 * Return full party name
 * @param {*} codParty It can be R, D or I
 */
const getPartyName = codParty => {
    switch(codParty){
        case 'R':
            return 'Republican';
        case 'D':
            return 'Democratic';
        case 'I':
            return 'Independents';
        default:
            return codParty;
    }
}
