

// type UserROles="admin" | "editor" | "viewer"


enum UserROles{
    admin="admin",
    editor="editor",
    viewer="viewer"
}

const canEdit=(role:UserROles)=>{
    if(role === UserROles.admin || role === UserROles.editor){
        return true
    }
    else return false;
}

console.log(canEdit(UserROles.admin))