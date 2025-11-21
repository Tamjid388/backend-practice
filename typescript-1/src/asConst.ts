


const UserROles ={
    admin:"admin",
    editor:"editor",
    viewer:"viewer"
} as const;


const canEdit=(role:keyof typeof UserROles)=>{
    if(role === UserROles.admin || role === UserROles.editor){
        return true
    }
    else return false;
}

console.log(canEdit(UserROles.admin))