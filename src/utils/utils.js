export const filterInitialMyGroups = (allGroups, user) =>{
    const userEmailAuth = user.email;
    console.log(userEmailAuth)
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

    const sixFeaturedGroup = onGoingGroup.slice(0, 6)
    return sixFeaturedGroup;
}