/**
 * Return object with useful data of member discarding the unnecessary
 * 
 * memberApi is a member item of Members array obtained from https://projects.propublica.org/api-docs/congress-api/members/#lists-of-members.
 */
export default memberApi => {
    return {
        id: memberApi.id,
        FullName: `${memberApi.first_name} ${memberApi.middle_name || ''} ${memberApi.last_name}`
            .replace(/\s{2}/g, ' '),
        Party: getPartyName(memberApi.party),
        Gender: getGenderText(memberApi.gender),
        Birth: new Date(memberApi.date_of_birth),
        Facebook: memberApi.facebook_account,
        Twitter: memberApi.twitter_account,
        Youtube: memberApi.youtube_account,
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
