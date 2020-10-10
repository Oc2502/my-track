import axios from 'axios'
import App from '../App'


export default axios.create({
    baseURL: 'https://api.spotify.com/v1',
    headers: {
        Authorization: `Bearer BQApHz-1tkUoOZHsgWtSm6U04kkcAGA5-F9RWUKpXccwLWWj7tj-oyRkYk3S8Kg912f9RUIE2eQQYXXi_os_fvs_Zrkkp87WSUnHILSr4dF6ZZiWDGvMNSItFYJAQyzvfq-kFtnjzGrZztT6dRCTEWhs8-lGRgwm_lPWQ4lFkEIDqb1CjiPcQSfSz0lSpwG6paP7m9C1yY7pekK58iEbMqkcztMVUYMHU_flD-eVOZ_s-2_C36owElHvXZoZ_ktRh6-1PscE9qPZBv_ht2NHY5QPDCy3ztDkRssPmH0`,

    },
});


// sdk access token : BQCjbJckp54JDmyEL9iETbq5Be5J2LSlpTgPfpYmbAAvoIghvW4uk861EdrB1pg_HgN91fGXSxh3hqiPNVyJShU6snZWDpqbuigpFSOSu2lSOuea6ZgsHqEEuPctT1-sS4kBFUe58SKYLqR32CwHx0aeclgn_33yvju6Oto4FnUdVMx2UUw


