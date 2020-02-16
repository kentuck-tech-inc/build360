export function isLocalDev(){
    if( window.location.href.substring(7,12)==="local"){
        return true;
    } else {
        return false;
    }
}

export function isDevelopment(){
    if( window.location.href.substring(8,11) ==="dev" || window.location.href.substring(7,10)==="dev"){
        return true;
    } else {
        return false;
    }
}

export function isProduction(){
    return !isLocalDev && !isDevelopment;
}