export const filterInitialMyGroups = (allGroups, user) =>{
    const userEmailAuth = user.email;
    // console.log(userEmailAuth)
    const myGroups = allGroups.filter((group) => group.userEmail === userEmailAuth)
    return myGroups;
}


export const filterFeaturedGroups = (groups) =>{
    const onGoingGroup = groups.filter(group =>{
        const startDateStr = group.startDate;
        const startDate = new Date(startDateStr);
        const today = new Date();
        return startDate > today
    })

    const sixFeaturedGroup = onGoingGroup.slice(0, 8)
    return sixFeaturedGroup;
}


export const filterIsDateEnd = (date) =>{
    const today = new Date();
    const startDate = new Date(date);
    if(today < startDate){
        return true;
    }
}

export function sortEventsByStartDate(events) {
  return [...events].sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
}